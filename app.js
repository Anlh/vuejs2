new Vue({
    el: '#vue-app',
    data: {
        characters: ['Mario', 'Luigi', 'Dinosaur', 'Naruto'],
        persons: [
            {name: 'Helder', age: 27},
            {name: 'Miguel', age: 20},
            {name: 'Luis', age: 12}
        ]
    },
    methods: {

    },
    computed: {
        /* Computed properties are cached based on their dependencies, it's only fired when at least one of this internal dependencies change */

    }
});