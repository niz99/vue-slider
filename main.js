var app = new Vue(
    {
        el: '#root',
        data: {
            array: [
                'https://source.unsplash.com/random',
                'https://source.unsplash.com/random',
                'https://source.unsplash.com/random',
                'https://source.unsplash.com/random'
            ],
            index: 0
        },
        methods: {
            avanti: function() {
                this.index = (this.index+1)%this.array.length
            }
        }
    }
)