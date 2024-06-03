let name = prompt("Please Enter Your Name");
console.log(name);

let gender =prompt("please enter gender");
let s ;
if(gender === "male"){
    console.log(gender)
    s= "mr." ;
} else if(gender === "female")
    {console.log(gender)
        s ="ms.";
    }
else {
    alert("Gender should be either male or female")
    s="";
}
alert("Hey "+ s +" "+ name  );

let order = prompt("do you want donuts, ice cream or coffe");
console.log(order)
alert ("hey "+s+" " + name +", Your order is being prepared!" )

// console.log(5*3);         
// console.log("JavaScript" + 50  ); 
//console.log (17 % 5) ;        
// console.log (5 % 17 )  ;     
// console.log (5/10 )  ;      
// console.log (4 === ‘4’) ;      
// console.log (4 != 5)  ;
// console.log (7 <= 8) ;
//console.log ("Hello" + 5);
//  console.log (Math.ceil(x) ‐ Math.floor(x) )
// console.log (Math.pow(x,2))

// let q1 =prompt("enter a num");
// alert("your num is "+q1) ;

// let n1 =prompt("enter num 1");
// let n2 =prompt("enter num 2");
// if (n1>n2){
//     alert(n2+" , "+n1)
// }
// else{  alert(n1+" , "+n2)}

// let n3 =prompt("enter num 1");
// let n4 =prompt("enter num 2");
// if (n3>n4){
//     alert("the larger number is "+n3);
// }
// else if (n4>n3){
//     alert("the larger number is "+n4);
// }
// else { alert("the numbers are equal");}

// let n5 =prompt("enter num 1");
// let n6 =prompt("enter num 2");
// let sum =parseFloat(n5)+ parseFloat(n6);
// alert("the total is "+ sum);
// console.log(typeof n5);

// let y = prompt("enter a num");
// switch(parseInt(y)){
// case 1 :
//     alert("ONE");
//   break;
//   case 2 :
//     alert("TWO");
//   break;
//   case 3 :
//     alert("THREE");
//   break;
//   case 4 :
//     alert("FOUR");
//   break;
//   case 5 :
//     alert("FIVE");
//   break;
//   case 6 :
//     alert("SIX");
//   break;
//   case 7 :
//     alert("SEVEN");
//   break;
//   case 8 :
//     alert("EIGHT");
//   break;
//   case 9 :
//     alert("NINE");
//   break;
//   case 0 :
//     alert("ZERO");
//   break;

//   default:
//   alert("TRY AGAIN");
// }