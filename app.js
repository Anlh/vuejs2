new Vue({
  el: '#vue-app',
  data: {
    name: 'Helder',
    job: 'Ninja!',
    google: 'http://www.google.pt'
  },
  methods: {
    greet: function (str) {
      return 'Good ' + str + ' ' + this.name;
    }
  }
});