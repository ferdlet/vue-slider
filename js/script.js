const app = new Vue({
    el: '#root',
    data: {
        items: [
            {
                title: 'Svezia',
                image: 'img/01.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                title: 'Svizzera',
                image: 'img/02.jpg',
                text: 'Lorem ipsum'
            },
            {
                title: 'Gran Bretagna',
                image: 'img/03.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                title: 'Germania',
                image: 'img/04.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            },
            {
                title: 'Paradise',
                image: 'img/05.jpg',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            }
        ],
        currentItems: 0,
        autolplay: 0
    },
    methods: {
        nextItems: function () {
            if (this.currentItems == this.items.length - 1) {
                this.currentItems = 0;
            } else {
                this.currentItems++;
            }
        },
        prevItems: function () {
            if (this.currentItems == 0) {
                this.currentItems = this.items.length - 1;
            } else {
                this.currentItems--;
            }
        },
        selectItems: function (index) {
            this.currentItems = index;
        },
        play: function () {
            this.autoplay = setInterval(function () {
                app.nextItems();
            }, 3000);
        },
        stop: function () {
            clearInterval(this.autoplay);
        },
    }
})

