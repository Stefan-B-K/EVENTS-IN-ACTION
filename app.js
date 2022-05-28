const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(number) { this.counter += number},
    remove(number) { this.counter -= number }
  }
});

app.mount('#events');
