/*
    Buatlah sebuah function yang berfungsi untuk melakukan pengecekan apakah password yang diberikan 
    sebagai parameter memenuhi kreteria yang telah ditentukan atau tidak. 
*/ 

function isValidPassword(password){
    //Regex for password validation
    const validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if(validation.test(password)) {
        console.log('True');
    }else{
        console.log('False');
    }
}

isValidPassword('Meong2021');
isValidPassword('meong2021');
isValidPassword('@eong');
isValidPassword('Meong2');
isValidPassword(0); // parameter hanya berisi satu angka
isValidPassword(); //parameter kosong