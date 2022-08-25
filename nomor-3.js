/*
    Buatlah sebuah function yang berfungsi untuk 
    melakukan pengecekan apakah alamat email yang 
    diberikan sebagai parameter, adalah alamat email yang 
    formatnya benar atau tidak. 
*/

function checkEmail(email){      
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(regex.test(email) == true){
        console.log('Valid');
    }else{
        console.log('Invalid');
    }
}

checkEmail('apranata@binar.co.id');
checkEmail('apranata@binar.com');
checkEmail('apranata@binar');
checkEmail('apranatabinar');
checkTypeNumber(checkEmail(3322)); // paramter dianggap tidak ada
checkEmail(); // error parameter tidak ada

//function checktypenumber
function checkTypeNumber(givenNumber){
    if(givenNumber == null) {
        console.log('Bro, Parameternya mana?')
    }else if (typeof givenNumber === 'string' || givenNumber instanceof String){
        console.log('Invalid type data');
    }else if (Array.isArray(givenNumber)) { 
        console. log("Invalid type data") 
    }else if (typeof givenNumber === 'object' && givenNumber !== null) {
        console. log("Invalid type data")
    }
    else if (givenNumber % 2 == 0){
        console.log('GENAP');
    } else if (givenNumber % 2 != 0) {
        console.log('GANJIL');
    }else {
        console.log('Invalid type data');
    }
}
