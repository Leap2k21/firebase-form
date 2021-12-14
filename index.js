const $button = document.querySelector('button');

function onClick(){
    console.log('hha')
    $name = document.querySelector('.name');
    let Name = $name.value;
    
    $age = document.querySelector('.age');
    let Age = $age.value;

        const db = firebase.firestore();
    db.collection('Nest').doc('1').set({
        name: Name , 
        age : Age
    }).then(() => {
        console.log("successfully written!");
    })  

    $name.value = "";
    $age.value = "";
}