const btn = () => {
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let gender = document.getElementById('gender').value;

    db.collection('students').get().then((col) => {  
        let id = col.size;

        db.collection("students").doc(`${id+1}`).set({
            name: `${name}`,
            age: `${age}`,
            MaleHa: `${!gender}`
        }, { merge: true })
        let container = document.querySelector('.container')
        container.innerHTML = ''

        draw()
    });

}

function draw() {
    
    db.collection('students').get().then((col) => {  
        let count = col.size;
        for (let i = 0; i < count; i++) {

            let h1 = document.createElement('h1')
            let h3 = document.createElement('h3')
            let h4 = document.createElement('h4')
        
            db.collection('students').doc(`${i + 1}`).get().then(
        
                function (doc) {
                    let container = document.querySelector('.container')
        
                    h1.innerText = `Name : ${doc.data().name}`
                    h3.innerText = `Age : ${doc.data().age}`
                    h4.innerText = `Gender Male: ${doc.data().MaleHa}`
                    container.append(h1, h3, h4)
                }
            );
        }

    });  
}