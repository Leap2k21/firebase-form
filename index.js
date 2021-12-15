for (let i = 0; i < 3; i++) {

    let h1 = document.createElement('h1')
    let h3 = document.createElement('h3')
    let h4 = document.createElement('h4')



    db.collection('students').doc(`${i + 1}`).get().then(

        function (doc) {
            let container = document.querySelector('.container')

            h1.innerText = `name : ${doc.data().name}`;
            h3.innerText = `gender : ${doc.data().gender}`;
            h4.innerText = `hobby : ${doc.data().hobby}`;
            container.append(h1)
            container.append(h3)
            container.append(h4)
        }
    );
}
