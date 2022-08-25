/*
    Buatlah sebuah function dengan nama changeWord 
    yang berfungsi untuk menggantikan sebuah kata 
    didalam sebuah kalimat.
*/

function changeWord (selectedText, changedText, text) {
    const changedWord = text.replace(selectedText,changedText);
    
    console.log(changedWord);
};

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

changeWord('mencintai', 'membenci', kalimat1);
changeWord('bromo', 'semeru', kalimat2);