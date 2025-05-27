/**
 * DIYALOG KUTULARI
 * 
 * - Alert
 * - Prompt
 * - Confirm
 * 
 * Bu 3 fonksiyon window icerisinde bulunur.
 * 
 */

    // function
    alert("Bubün konulardan ALERT!")
    if(window.alert.apply){
        console.log("APPLIED");
    }else{
        console.log("NOT APPLIED");
    }


    //Prompt(): Kullanicidan deger girdi alinabilir....

    let variable = prompt("Your name:");
    if (variable==="Alaettin"){
        console.log("Variable is correct")
    }else{
        console.log("Variable is not correct")
    }
    console.log(typeof variable);
    


    //CONFIRM

   let variable2 = confirm("Are you sure?");
    console.log("variable2: "+variable2);



    

