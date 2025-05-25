/**
 * SCOPE:
 *  1. Global Scope ----> En genis ve en erisilebilir alandir.
 * 
 * 
 *  2. Function Scope ----> Bir method icerisinde tanimlanan, disariya kapali olan alandir. 
 * 
 * 
 *  3. Block Scope ---->  Bir fonksiyon icerisinde tanimlanan if, while, for döngüsü gibi block icerisinde tanimlanirsa burasi block scopetur.
 * 
 

var num1 = 10;  // global scope. Bu objecte her yerden erisebilebilir.

console.log(num1);


function method1(){
    var num2 = 20;
    console.log(num2);
    
}


// console.log("Global olarak cagiralim: ", num2); // Hata aliriz. Cünkü bu object method1 icerisinde tanimlanmistir.

method1();

*/



// Var - Let - Const

/**
 * var: function scope ---ram bellekte fazla yer kaplar.
 * let/ const: block scope ozelligine sahiptir.
 *  let & const arasindaki fark: let objectine degisken degerler atanabilir.
 *                               const objecti sabittir ve o objecte yeni bir deger atanamaz.... 
 */

// Degisken Tanimlama: JAvadaki gibi özel bir tiple degisken tanimlanmiyor. 
// Degisken tanimlama var, const ve let le yapiliyor.

function topla(){

var greet = "Hello All !";  //function scopeta kullanip, function icerisinden ve function icinde bulunan block icerisinden de ulasilabilir.
console.log(greet); 
    if (true){
        var b = 10;

    }
    console.log(b);
    console.log(greet);
}

topla();


// Example let const

    let a = 5;
    a = 32; 
    console.log("let a degeri: ",a);

    const con1 = 55;
   // con1 = 70;
    console.log("const con1 degeri: ",con1);


    /**
     * const ile olusturulan objeler icerisine atanan degerler update edilebilir.
     * Ama const ile olusturulmus object tamamen yeniden tanimlanamaz.
     */


    const user = {
        username : "Alaettin",
        age : "39"
    }
 //   user = user.age="40"; // Bu sekilde const objekti yeniden tanimlandigi icin hata verir.

    user.age= "40"; // Bu sekilde sadece age kismindaki veri update edildigi icin constta hata vermez!!!!
    console.log("user: ",user);
     