 const $container = document.querySelector('.container')
 const $input1 = document.createElement('input');
 const $input2 = document.createElement('input');
 const $input3 = document.createElement('input');
 const $button = document.createElement('button')
 $input1.setAttribute('placeholder' , 'name');
 $input2.setAttribute('placeholder' , 'phone number');
 $input3.setAttribute('placeholder' , 'age');
 $button.innerHTML = 'submit';
 $button.setAttribute('onclick' , 'click()');
 $container.append($input1 , $input2 , $input3)
 const clickButton = () => {
       console.log('hi');
       const input1 = $input1.value;
       const input2 = $input2.value;
       const input3 = $input3.value;

       db.collection('students').get().then((collection))
       
 }
//  function click() {
//      const input1 = $input1.value;
//      const input2 = $input2.value;
//      const input3 = $input3.value;
//      db.collection('students').get().then((collection) => {
//          let length = collection.size
//          db.collection('students').get().doc(`${id + 1}`).set({          
//          })
//      })
//      draw();
//      console.log('hi');
 


// function clickButton() {
    
//     console.log('hdj');
// }















const draw = () => {
    db.collection('students').get().then((collection) => {
        for (let i = 1; i <= length; i++) {
            let length = collection.size;
            let p1 = document.createElement('p'); 
            let p2 = document.createElement('p'); 
            let p3 = document.createElement('p');
            $container.append(p1 , p2 , p3);


            db.collection('students').doc(`${i}`).get().then((document) => {
                p1.innerText = `name --> ${document.data().name}`;
                p2.innerText =  `phone number --> ${document.data().phone_number}`;
            })
        }
    })
} 
