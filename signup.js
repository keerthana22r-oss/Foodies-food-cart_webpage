let myform=document.querySelector('form')
console.log(myform)
myform.onsubmit=(e)=>{
    e.preventDefault()
    let inputBox=document.querySelectorAll('input')
    console.log(inputBox)
    let formData={}

    inputBox.forEach((input)=>{
        formData[input.name]=input.value
    })

    console.log(formData)

    let jsonData=JSON.stringify(formData)
    console.log(jsonData)

    localStorage.setItem('userData',jsonData)
    alert("user Registered Successfully")
    window.location.href='../login.html'

}