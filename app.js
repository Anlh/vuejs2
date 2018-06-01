new Vue({
    el: '#vue-app',
    data: {

    },
    methods: {
        click: function () {
            alert('The default action from this a link is prevented!');
        },
        helloWorld: function () {
            alert('Hello World!');
        }
    }
});