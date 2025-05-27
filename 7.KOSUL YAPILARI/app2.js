//DERS ORTALAMASI ALMA

    /**
     * dERS GECME HESAPLAMASI:
     * Vize1 30%
     * Vize2 30%
     * Final 40%
     */
     
    let v1 = (prompt("VIZE-1: "));
    let v2 = (prompt("VIZE-2: "));
    let f = (prompt("FINAL: "));

    let ortalama = (parseFloat(v1*0.3) + parseFloat(v2*0.3) + parseFloat(f*0.4));
    //let ortalama = (v1*0.3) + (v2*0.3) + (f*0.4);
    console.log("vize1: ", v1);
    console.log("vize2: ", v2);
    console.log("final: ", f);
    console.log("ortalama: ", ortalama);

    if(ortalama>=50){
        alert("YOU PASSED")
    }else{
        alert("YOU FAILED")
    }

    //Konu 19
    


