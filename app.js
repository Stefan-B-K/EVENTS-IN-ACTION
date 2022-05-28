const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add(number) { this.counter += number},
    remove(number) { this.counter -= number },
    setName(event) {
      this.name = event.target.value
    }
  }
});

app.mount('#events');
