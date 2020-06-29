var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    state: true
  },
   methods: {
    hideMsg: function () {
      if (this.message == "hide"){
        this.state = false;
      }
    },
    reverseMsg: function () {
      if (this.message == "reverse"){
        this.message = this.message.split('').reverse().join('')
      }
    }
  }
})
