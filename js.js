 var x=document.getElementById("login"); 
       var y=document.getElementById("register"); 
       var z=document.getElementById("btn");
       function validateForm() {
  var v = document.forms["form"]["username"].value;
  if(v !==""){
  document.getElementById("user").innerText="HELLO"+ " " +v;
    closeForm();
    return false;
  }
    return false;
}
function Form() {
 var p= document.forms["myform"]["password"].value;
  var np = document.forms["myform"]["npassword"].value;
  var u = document.forms["myform"]["newid"].value;
  var e = document.forms["myform"]["email"].value;
  if(p!==np){
  alert("does not match");
  return false;
  }
  if(u==""||e=="")
  {
  alert("enter valid details");
  return false;
  }
    if(u!==""){
  document.getElementById("user").innerText="HELLO"+ " " +u;
    closeForm();
    return false;
  }
    return false;
}

 
        function register(){
   x.style.left="-400px";      
   y.style.left="50px";
   z.style.left="110px";
            }
        function login(){
            x.style.left="50px";      
            y.style.left="450px";
            z.style.left="0px";
      }
      
function openForm() {
  document.getElementById("hero").style.display = "block";
  document.getElementById("from").style.display = "none";
document.getElementById("to").style.display = "none";

}
function need(){
var from=document.getElementById("from").value;
var to=document.getElementById("to").value;
var to=document.getElementById("date").value;
if(from==""||to==""||from==to||date==""){
window.alert(" ENTER VALID DETAILS")
return false;
}
else
{window.location="flights 1.html";
document.getElementById("h").innerText=from +" "+ to +""+date;
return false;
}
return false;
}
function closeForm() {
  document.getElementById("hero").style.display = "none";
   document.getElementById("from").style.display = "inline";
document.getElementById("to").style.display = "inline";
}

