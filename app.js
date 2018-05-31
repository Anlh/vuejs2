new Vue({
  el: '#vue-app',
  data: {
    name: 'Helder',
    job: 'Ninja!',
    website: 'http://www.google.pt',
    htmlWebsiteTag: '<a href="">Google website2'
  },
  methods: {
    greet: function (str) {
      return 'Good ' + str + ' ' + this.name;
    }
  }
});