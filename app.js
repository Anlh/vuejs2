var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue app one'
    },
    methods: {},
    computed: {
        /* Computed properties are cached based on their dependencies, it's only fired when at least one of this internal dependencies change */
        greet: function () {
            return 'Hello from app one';
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue app two'
    },
    methods: {
        changeTheTitle: function () {
            one.title = 'Title has changed';
        }
    },
    computed: {
        /* Computed properties are cached based on their dependencies, it's only fired when at least one of this internal dependencies change */
        greet: function () {
            return 'Hello from app two';
        }
    }
});