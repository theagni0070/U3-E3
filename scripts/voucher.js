
function Wallet_Balance(User_data){
    
    document.getElementById("wallet_balance").innerText = User_data

}

let User_data = JSON.parse(localStorage.getItem("user"))

Wallet_Balance(User_data[0].wallet)

async function GetData() {
    let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`
    try{
        let re = await fetch (url)

        let result = await re.json()
        
        Display_data(result[0].vouchers)
    
    }catch(error){
        
        console.log(error)
    
    }
}

GetData()

function Display_data(data) {
    data.forEach( (elem) =>{
         let img = document.createElement("img")
         img.src = elem.image

         let name = document.createElement("p")
         name.innerText = elem.name

         let price = document.createElement("p")
         price.innerText = elem.price

         let btn = document.createElement("button")
         btn.innerText = "Buy"
         btn.addEventListener("click", ()=>{
            Buy_products(elem)
         })

         let div = document.createElement("div")
         div.append(img,name,price,btn)
         document.getElementById("voucher_list").append(div)
    })
}

function Buy_products(elem){
    let Purchase_data = JSON.parse(localStorage.getItem("purchase")) || []
    
    Purchase_data.push(elem)
    
    localStorage.setItem("purchase", JSON.stringify(Purchase_data))



    if((User_data[0].wallet)>=elem.price)
    {
    
    User_data[0].wallet = (User_data[0].wallet)-(elem.price)
    
    localStorage.setItem("user",JSON.stringify(User_data))
    
    Wallet_Balance(User_data[0].wallet)
    
    alert("Hurray! purchase successful")
    }
    
    else if((User_data[0].wallet)<elem.price)
    {
    alert("Sorry! insufficient balance")
    }

}