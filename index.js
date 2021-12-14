let screen = document.getElementsByClassName('screen');
const subBtn = () => {
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        let sex = document.getElementById('sex').value;
        db.collection('humans').get().then((col) => {
            let id = col.size;

            db.collection('humans').doc(`${id + 1}`).set({
                name: `${name}`,
                age: `${age}`,
                isMale: `${!sex}`,
            }, { merge: true })
        });
        screen.innerHTML = '';
        draw();
    }
    //draw
function draw() {

    db.collection('humans').get().then((col) => {
        let count = col.size;
        for (let i = 0; i < count; i++) {

            let h1 = document.createElement('h1')
            let h3 = document.createElement('h3')
            let h4 = document.createElement('h4')

            db.collection('humans').doc(`${i + 1}`).get().then(

                function(doc) {
                    let screen = document.querySelector('.screen')

                    h1.innerText = `Name : ${doc.data().name}`
                    h3.innerText = `Age : ${doc.data().age}`
                    h4.innerText = `Gender Male: ${doc.data().MaleHa}`
                    screen.append(h1, h3, h4)
                }
            );
        }

    });
}