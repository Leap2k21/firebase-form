db.collection('students').doc('1').get().then(function(doc) {
    console.log(doc.id);
    console.log(doc.data());
});