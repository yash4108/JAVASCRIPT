
// alert("Hello from JavaScript!!!!")

// document.getElementById("message").innerHTML="This is from JavaScript"

//  function greet(){
//     document.getElementById("message").innerHTML="Happy Ganesh Chaturthi..!!"
//  }

//  a=10;
//  b=20;
//  c=a+b;
// document.getElementById("message").innerHTML="Addition of "+a+ "and"+b+"is"+c;

//  x=10;
// let y=10;
// console.log(" Value of x =" + x);
// console.log(" Value of y =" + y);
// {
//     var x=20;
//     let y=20;
//     console.log(" Value of x =" + x);
//     console.log(" Value of y =" + y);
// }
// console.log(" Value of x =" + x);
// console.log(" Value of y =" + y);

// function greetuser4(){

//     let num1=document.getElementById("username").value;
// document.getElementById("message").innerHTML="Hello"+username;
// }

// function greetuser1(){

//     let num1=parseInt(document.getElementById("firstnum").value);
//     let num2=parseInt(document.getElementById("secondnum").value);
// let addition=num1+num2;
// document.getElementById("message").innerHTML="Addtion is:"+addition;
// }

// function greetuser2(){

//     let num1=document.getElementById("firstnum").value;
//     let num2=document.getElementById("secondnum").value;
// let subtraction=num1-num2;
// document.getElementById("message").innerHTML="subtraction is:"+subtraction;
// }

// function greetuser3(){
//     let num1=document.getElementById("firstnum").value;
//     let num2=document.getElementById("secondnum").value;
// let multiply=num1*num2;
// document.getElementById("message").innerHTML="multiplication is:"+multiply;
// }
// function greetuser4(){
//     let num1=document.getElementById("firstnum").value;
//     let num2=document.getElementById("secondnum").value;
// let division=num1/num2;
// document.getElementById("message").innerHTML="division is:"+division;
// }

// ******ARRAY :

// const cars = ['Getz Prime','Honda Amaze','i20','Breeza'];
// document.getElementById('message').innerHTML= cars;

// var date= new Date();
// document.getElementById('fulldate').innerHTML=date;

// for date 
// document.getElementById('day').innerHTML=date.getDate();

// for only day form week like 2nd tue  of week
// document.getElementById('day').innerHTML=date.getDay();

// for exact day from month means date i.e today's date is 30
// document.getElementById('day').innerHTML=date.getDate();

// -- for printing day in string format
// switch (date.getDay()) {
//     case 1:
//          document.getElementById('day').innerHTML='MON';
        
//         break;
//    case 2:
//             document.getElementById('day').innerHTML='TUE';
//            break;
//    case 3:
//             document.getElementById('day').innerHTML='WED';  
//            break;

//     default:
//         break;
// }

// -- for printing month in string format

// switch (date.getMonth()+1) {
//     case 6:
//          document.getElementById('month').innerHTML='JUN';

        
//         break;
//    case 7:
//             document.getElementById('month').innerHTML='JULY';
   
           
//            break;
//    case 8:
//             document.getElementById('month').innerHTML='AUG';
   
           
//            break;

//     default:
//         break;
// }

// document.getElementById('month').innerHTML=date.getMonth()+1;
// document.getElementById('years').innerHTML=date.getFullYear();
// document.getElementById('hours').innerHTML=date.getHours();
// document.getElementById('minutes').innerHTML=date.getMinutes();
// document.getElementById('seconds').innerHTML=date.getSeconds();

// LOOPS

// @ 1.simple FOR LOOP @
// const cars = ['Getz Prime','Honda Amaze','i20','Breeza'];

// let text="";
// let length=cars.length
// for (let i = 0; i < length; i++) {
//     text=text+"car is "+" " +cars[i]+"<br>";
    
// }
// document.getElementById("message").innerHTML=text;

// @ 2.FOR IN LOOP@
// const cars = ['Getz Prime','Honda Amaze','i20','Breeza'];
// let text="";
// for(let i in cars){
//     text=text+"car is"+" "+cars[i]+"<br>";
// }
// document.getElementById("message").innerHTML=text;-----for printing

// @ 3.FOR OF LOOP@
// const cars = ['Getz Prime','Honda Amaze','i20','Breeza'];
// let text="";
// for (let car of cars) {
//     text=text+"car is"+" "+car+"<br>";
// }
// document.getElementById("message").innerHTML=text;

function validate(){
    alert("validate()  is called");
    if(document.userdetails.username.value==""){
        alert("please provide user name!");
        document.userdetails.username.focus();//focus() is set to cursor
        return false;
    }


if(document.userdetails.email.value=="")
    {
    alert("please provide user email!");
        document.userdetails.email.focus();
    return false;
}

if(document.userdetails.zipcode.value=="")
{
    alert("please provide zipcode");
    document.userdetails.zipcode.focus();
return false;
}

if(document.userdetails.country.value=="-1")
{
    alert("please provide country");
    document.userdetails.country.focus();
return false;
}

return true;
}