let num1=600
let num2=100
let num3=500

if(num1 > num2 && num1 > num3) {
    console.log(num1)
}else if(num2 > num1 && num2 > num3){
      console.log(num2)
}else if(num3 > num2 && num3 > num1){
    console.log(num3)
}

// task 2
let number= -5
if(number > 0){
    console.log("this number is positive")
}else if(number < 0){
    console.log("this number is negative")
}else{
    console.log("this number is zero")


}

// task 3

let correctname="admin";
let correctpassword="1234";

userentername="admin";
userenterpassword="1234";

if(correctname === userentername && correctpassword === userenterpassword){
    console.log("login sucessfull")
}else{
    console.log("login failed")
}

// task4
let unitconsume=350
let billamount=0

if(unitconsume <=100){
    billamount=unitconsume*10
    
    

}else if(unitconsume > 100 && unitconsume <= 200){
    billamount=(100*10) + ((unitconsume-100)*15)
}else {
    
    billamount=(100*10)+(100*15)+((unitconsume-200)*20)
}
 console.log(billamount)
 
// even number print

 for(let i=1; i<=150; i++){
    if(i % 2 ===0){
        console.log(i)
    }
 }


  for(let i=20; i>=1; i--)
    {
        console.log(i)
 }

//  factorial

let num=5;
let factorial=1;

for(let i=1; i<=num;i++){
    factorial=factorial*i
    

}
 console.log(factorial)


// count digit

let countnumber=0;
let number2 =506786;

 
while(number2 > 0){
     number2=Math.floor(number2 / 10)
     countnumber++
}

console.log(countnumber)




// even number print
let sum =0
 for(let i=1; i<=100; i++){      
    if(i % 2 ===0){
        sum = sum +i
    }
 }
 console.log(sum)


    
 let balance=5000;
let requestedbalance=6000;

if(balance >= requestedbalance ){
    balance=balance-requestedbalance
    console.log(balance)
}else{
    console.log("insufficient balance")
}