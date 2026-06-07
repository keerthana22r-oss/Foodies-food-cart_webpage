let myform=document.querySelector('form')
console.log(myform)

myform.onsubmit=(e)=>{
    e.preventDefault();
    console.log("form targetted")

    let email = document.querySelectorAll('input')[0].value
    let password = document.querySelectorAll('input')[1].value

    console.log(email)
    console.log(password)

    let storedData = JSON.parse(localStorage.getItem('userData'))
    console.log(storedData)

    if (storedData){
        if(email === storedData.email && password === storedData.password){
            alert("login successfully")
            window.location.href='./homepage.html'
        } else{
            alert("invalid user")
        }
    }

}
