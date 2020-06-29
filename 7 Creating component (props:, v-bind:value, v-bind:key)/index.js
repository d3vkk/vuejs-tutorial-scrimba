Vue.component('todo-item', {
    props: ['do'],// Pass data to the template, then from the template to the HTML
    template: '<li>{{ do.text }}</li>'
})

// Data moves from here to up there, then to the HTML
var app = new Vue({
    el: '#app',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
})
