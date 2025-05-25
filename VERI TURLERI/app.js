

/**
 * ?VERI TIPLERI:
 * 1. String 
 * 2. Number
 * 3. boolean ---> true false veri tiplerini icerir.
 * 4. Undefined
 * 5. Object
 * 6. Function
 * 
 * 
 * 
 */
// String
let isim = "Alaettin" ; 
console.log(isim);
console.log(typeof isim);


//Number ---> Bütün sayi türleri double, float,etc... number altinda yer alir.

let sayi1 = 40;
console.log(sayi1);
console.log(typeof sayi1);

sayi1 = 10.7;
console.log(sayi1);
console.log(typeof sayi1);

// Sayilar tirnak icerisinde tanimlanirsa, o artik bir string elementi olmustur.

let a = 5;
let b = 2;
console.log("tirnaksiz : ", a+b);
console.log(typeof a+b);

a = "5";
b = "2";
console.log("Tirnak icinde_: ",a+b);
console.log(typeof a+b);


//BOOLEAN ÖRNEK

let num1 = 5; 
let num2= 10;
let num3= num1 + num2; 

let boo1 = (num3 > 20);

console.log("boo1 degeri: ",boo1);
console.log(typeof boo1);

// Undefined
    let und1;
    console.log("und1 veritipi",und1);


// Object veri tipi:

    let user = {
        isim : "Alaettin",
        soyisim: "Karadayi",
        yas: 40
    }

    console.log(user);
    console.log("Nesnenin topi: ",typeof user);


    //Function veri tipi:bit methodu veya funct. bir deger olarak atayabilriz.


    let func1 = function(){
        console.log("Hello Javascript");
    }

   func1();
    console.log("type of func1: ",typeof func1);
