/*
    Buatlah sebuah function yang berfungsi untuk 
    membagikan sebuah nama menjadi 
    Nama Depan, Nama Tengah, Nama Belakang. 
*/

function getSplitName(personName){
    const splitName = personName.split(" ");

    if(splitName.length == 3) {
        firstName = splitName[0];
        MiddleName = splitName[1];
        lastName = splitName[2];

        console.log('firstName: ' + firstName + ', middleName: ' + MiddleName + ', lastName: ' + lastName);

    }else if(splitName.length == 2) {
        firstName = splitName[0];
        MiddleName = null;
        lastName = splitName[1];

        console.log('firstName: ' + firstName + ', middleName: ' + MiddleName + ', lastName: ' + lastName);

    }else if(splitName.length == 1) {
        const firstName = splitName[0];
        const MiddleName = null;
        const lastName = null;

        console.log('firstName: ' + firstName + ', middleName: ' + MiddleName + ', lastName: ' + lastName);

    }else if(splitName.length > 3) {
        console.log('This function is only for 3 character');

    }else{
        console.log('Tidak Valid')
    }

}

getSplitName("Aldi Daniela Pranata");
getSplitName("Dwi Kuncoro");
getSplitName("Aurora");
getSplitName("Aurora Aureliya Sukma Darma");
getSplitName(0); // Error function hanya menerima parameter string