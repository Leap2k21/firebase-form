let isEditing = false;
let editingId = null;

const toggleAddOrEditButton = () => {
    if (isEditing) {
        document.getElementById('add-todo').innerText = 'Edit';
    } else {
        document.getElementById('add-todo').innerText = 'Add';
    }
}

// 1. onAdd
//      get input.value and add new doc to firestore
//      {
//          isDone: false,
//          created: new Date(),
//          text: input.value
//      }
document.getElementById('add-todo').onclick = () => {
    const $input = document.getElementById('my-input');
    if (isEditing) {
        db.collection('todos').doc(editingId).update({
            text: $input.value,
        });

        isEditing = false;
        editingId = null;
        toggleAddOrEditButton();
    } else {
        db.collection('todos').add({
            isDone: false,
            created: new Date(),
            text: $input.value,
        });
    }
    $input.value = '';
};
// 2. listenTodos - listen changed of `todos` collection.
//      db.collection('todos').noSnapshot();
db.collection('todos').onSnapshot((snapshot) => {
    draw(snapshot.docs);
});

// 3. draw to html
//      draw(todos -> array)
const draw = (todos) => { // firestore.Document array
    const $doneContainer = document.querySelector('.done-todos');
    const $notDoneContainer = document.querySelector('.todos')

    $doneContainer.innerHTML = '';
    $notDoneContainer.innerHTML = '';
    for (const todoDoc of todos) {
        const $li = document.createElement('li');

        const $checkbox = document.createElement('input');
        $checkbox.type = 'checkbox'
        $checkbox.checked = todoDoc.data().isDone;

        // 7. onCheck()
        //      db.collection('todos').doc(id).update({
        //          isDone: true / false
        //      })
        const onCheck = () => {
            db.collection('todos').doc(todoDoc.id).update({
                isDone: !todoDoc.data().isDone,
            });
        }
        $checkbox.onchange = onCheck;

        const $text = document.createElement('span');
        $text.innerText = todoDoc.data().text;

        const $edit = document.createElement('button');
        $edit.innerText = 'Edit';

        // 4. onClickEdit
        //      change input value by doc.text
        //      isEditing = true
        //      editingId = doc.id
        const onClickEdit = () => {
            document.getElementById('my-input').value = todoDoc.data().text;

            isEditing = true;
            editingId = todoDoc.id;
            toggleAddOrEditButton();
        }
        $edit.onclick = onClickEdit;

        const $delete = document.createElement('button');
        $delete.innerText = 'Delete';
        // 6. onDelete()
        //      delete from firestore by doc id
        const onClickDelete = () => {
            db.collection('todos').doc(todoDoc.id).delete();
        }
        $delete.onclick = onClickDelete;

        $li.append($checkbox, $text, $edit, $delete);

        if (todoDoc.data().isDone) {
            $doneContainer.append($li);
        } else {
            $notDoneContainer.append($li);
        }
    }
}