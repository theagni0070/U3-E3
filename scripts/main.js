
function Save_data() {
    event.preventDefault()
    let user = JSON.parse(localStorage.getItem("user")) || []
    var obj = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        address:document.getElementById("address").value,
        wallet:document.getElementById("amount").value
    }

    user.push(obj)
    localStorage.setItem("user", JSON.stringify(user))

    window.location.reload()
}