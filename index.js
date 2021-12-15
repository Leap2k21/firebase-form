 const $container = document.querySelector('.container');
 const $container2 = document.querySelector('.container2');
 const $input1 = document.createElement('input');
 const $input2 = document.createElement('input');
 const $input3 = document.createElement('input');
 const $button = document.createElement('button');


 $input1.setAttribute('placeholder' , 'name');
 $input2.setAttribute('placeholder' , 'phone number');
 $input3.setAttribute('placeholder' , 'age');
 $button.innerHTML = 'submit';
 $button.setAttribute('onclick' , 'clickButton()');
 $container.append($input1 , $input2 , $input3 , $button);


 const clickButton = () => {
       const input1 = $input1.value;
       const input2 = $input2.value;
       const input3 = $input3.value;
       console.log(input1.value);

       db.collection('students').get().then((col) => {
           let length = col.size;
           db.collection('students').doc(`${length + 1}`).set({
               name: `${input1}`,
               phone_number: `${input2}`,
               age: `${input3}`
        })
            $container2.innerHTML = '';
            draw();
    }) 
}


const draw = () => {
    db.collection('students').get().then((collection) => {
        let length = collection.size;
        for (let i = 1; i <= length; i++) {
            $container2.classList.add('container')


            let p1 = document.createElement('p'); 
            let p2 = document.createElement('p'); 
            let p3 = document.createElement('p');
            $container2.append(p1 , p2 , p3);


            db.collection('students').doc(`${i}`).get().then((document) => {
                p1.innerText = `name --> ${document.data().name}`;
                p2.innerText =  `phone number --> ${document.data().phone_number}`;
                p3.innerText =  `age --> ${document.data().age}`;
            })
        }
    })
} 



