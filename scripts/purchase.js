function Wallet_Balance(User_data){
    
    document.getElementById("wallet_balance").innerText = User_data

}

let User_data = JSON.parse(localStorage.getItem("user"))

Wallet_Balance(User_data[0].wallet)

let data = JSON.parse(localStorage.getItem("purchase"))
Display_data(data)

function Display_data(data) {
    data.forEach( (elem) =>{
         let img = document.createElement("img")
         img.src = elem.image

         let name = document.createElement("p")
         name.innerText = elem.name

         let price = document.createElement("p")
         price.innerText = elem.price

         let div = document.createElement("div")
         div.append(img,name,price)
         document.getElementById("purchased_vouchers").append(div)

    })
}

Remain_balance(data)

function Remain_balance(data){
    let total = 0
    data.forEach( (elem) =>{
        total += elem.price
   })

   document.getElementById("balance").innerText = total
}