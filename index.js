const $button = document.querySelector('button');
const collectionName = 'Nest';
const db = firebase.firestore();



function onClick() {
    $name = document.querySelector('.name');
    let Name = $name.value;
    $age = document.querySelector('.age');
    let Age = $age.value;
    $id = document.querySelector('.id');
    let id = $id.value;

    db.collection(collectionName).doc(`${id}`).set({
        name: Name,
        age: Age,
    }).then(doc => {
        console.log("successfully written!");
    })
    $name.value = "";
    $age.value = "";
    $id.value = "";
    renderDocs();
}

function renderDocs(){
    db.collection(collectionName).get().then(data => {
        data.forEach(doc => {
            console.log(doc.data());
            $span1 = document.createElement('span');
            $span2 = document.createElement('span');
            $div = document.createElement("div");
            $body = document.querySelector("body");
            $div.append($span1 , $span2);
            $body.append($div);

            $span1.innerText = doc.data().name;
            $span2.innerText = doc.data().age;
        }); 
    })


}


