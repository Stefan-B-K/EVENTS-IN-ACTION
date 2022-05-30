const app = Vue.createApp({
  data () {
    return {
      counter: 0,
      firstName: '',
      lastName: ''
    }
  },
  watch: {
    counter (value) {
      if (value > 10)  this.counter = 0
    }
  },
  computed: {
    fullName () {
      return this.firstName ? this.firstName + ' ' + this.lastName : ''
    }
  },
  methods: {
    add (number) {
      this.counter += number
    },
    subtract (number) {
      this.counter -= number
    },
    resetInput () {
      this.firstName = ''
      this.lastName = ''
    }
  }
})

app.mount('#events')

