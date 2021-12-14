 const $container = document.querySelector('.container');
// const p1 = document.createElement('p'); 
// const p2 = document.createElement('p'); 
// const p3 = document.createElement('p');
// $container.append(p1 , p2 , p3);



const $input1 = document.createElement('input');
const $input2 = document.createElement('input');
const $input3 = document.createElement('input');
const $button = document.createElement('button');

$input1.setAttribute('placeholder' , 'name');
$input2.setAttribute('placeholder' , 'phone number');
$input3.setAttribute('placeholder' , 'age');
$button.innerHTML = 'submit';
$button.setAttribute('onclick' , 'clickButton');
$container.append($input1 , $input2 , $input3 , $button);


// const clickButton = () => {
//       console.log('hi')
// }
function clickButton() {
    console.log('hi');
}
















const draw = () => {
    db.collection('students').get().then((collection) => {
        let length = collection.size;
        for (let i = 1; i <= length; i++) {
            db.collection('students').doc(`${i}`).get().then((document) => {
                p1.innerText = `name --> ${document.data().name}`;
                p2.innerText =  `phone number --> ${document.data().phone_number}`;
            })
        }
    })
} 
