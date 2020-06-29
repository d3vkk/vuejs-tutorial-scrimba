var app = new Vue({
  el: '#app',
  data: {
    todolist: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

app.todolist.push({ text: 'New item' })
app.todolist.push({ text: 'New item' })
app.todolist.push({ text: 'New item' })
app.todolist.push({ text: 'New item' })
app.todolist.push({ text: 'New item' })
app.todolist.push({ text: 'New item' })
