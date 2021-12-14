let a = 1;

const renderDoc = (doc) => {
    const $div = document.createElement('div');
    const $span1 = document.createElement('span');
    const $span2 = document.createElement('span');
    const $span3 = document.createElement('span');

    $div.append($span1, $span2, $span3);

    console.log(doc)
    $span1.innerText = doc.id;
    $span2.innerText = doc.data().Firstname;
    $span3.innerText = doc.data().Lastname;

    document.querySelector('body').prepend($div);

}
db.collection('students').get().then((coll) => {
    a = coll.size;

    for (const doc of coll.docs) {
        renderDoc(doc);
    }
});

function submit() {
    console.log(a);
    let $firstName = document.querySelector('.name');
    let $lastName = document.querySelector('.lastName');

    let $pushdatabase = db.collection("students").doc(a + "").set({
            Firstname: $firstName.value + "",
            Lastname: $lastName.value + "",
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    a = a + 1;
    console.log($firstName.value)

}