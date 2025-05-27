
// = ---> atama anlamina gelir.

//! % : mod alma operatörü , bölmede kalani bulma anlasilabilir...

// ++ ---> degeri bir arttirmak demek
// ** : Kuvveti anlamina geliyor... 


let a= 10;
a++;
console.log(a);

let b = 2
console.log("Kuvvet alma islemi: ",b**a);

// MANTIKSAL OPERATÖRLER

/**
 * 
 * && : ve  ---> sartlarin hepsinin uygun olmali ki boolean true degeri versin
 * || : veya ---> en az birinin saglanmasi boolean true vermesi icin yeterli
 * !: degil ---
 * 
 */

let age1 =20;
let age2 = 10;

let value =  age1 > 20 && age2 > 10;
console.log("VALUE DEGERI: ",value);

if(!age1 > 20){
    console.log("Satir 34: ",!age1 > 20)
}else{
    console.log("Satir 34: ",!age1 > 20);
}

