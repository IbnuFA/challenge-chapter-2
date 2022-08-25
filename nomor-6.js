/*
    Buatlah sebuah function yang berfungsi untuk 
    mendapatkan angka terbesar kedua dari sebuah array.
*/

function getAngkaTerbesarKedua(input) {
    input.sort(function(a, b){return a - b});
    
    const secondToLast = input[input.length - 2];
    
    console.log(secondToLast);
}

getAngkaTerbesarKedua([9,4,7,7,4,3,2,2,8]);
getAngkaTerbesarKedua(0) // Error Parameter bukan array
getAngkaTerbesarKedua() // Error Parameter kosong