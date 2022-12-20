const From = document.getElementById('form');
const Input = document.getElementById('input');


From.addEventListener("submit", (e)=>{
e.preventDefault();
console.log(Input.value)
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(Input.value.match(mailformat))
{
alert("Valid email address!");

return true;
}
else
{
alert("You have entered an invalid email address!");

return false;
}

});


// Input.addEventListener('input', (e)=>{
//     console.log(e.target.value)
// })


function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
