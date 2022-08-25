/*
    Buatlah sebuah function yang berfungsi mendeteksi 
    apakah sebuah angka termasuk angka genap atau 
    ganjil.
*/

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

checkTypeNumber(10);
checkTypeNumber(1);
checkTypeNumber("1");
checkTypeNumber([1]);
checkTypeNumber({});
checkTypeNumber();