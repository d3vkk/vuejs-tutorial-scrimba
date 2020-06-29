var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
    // message: 'RacecaR'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
