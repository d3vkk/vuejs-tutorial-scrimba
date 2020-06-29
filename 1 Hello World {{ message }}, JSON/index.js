var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        msg2: 'New Vue!',
        msg3: '<b><kbd>HTML Vue!</kbd><br/>',
        msg4: 'More HTML Vue!</b>'

    }
});

app.message = 'I have changed the data!';
