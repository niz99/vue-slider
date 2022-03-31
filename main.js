var app = new Vue(
    {
        el: '#root',
        data: {
            array: [
                'https://source.unsplash.com/random/?shoes',
                'https://source.unsplash.com/random/?fruits',
                'https://source.unsplash.com/random/?city',
                'https://source.unsplash.com/random'
            ],
            index: 0
        },
        methods: {
            avanti: function() {
                this.index = (this.index+1)%this.array.length
            },
            indietro: function() {
                if(this.index == 0){
                    this.index = (this.array.length - 1)
                } else {
                    this.index--
                }
            }
        },
        mounted: function() {
            setInterval(() => {
                this.index = (this.index+1)%this.array.length
                //console.log(this.index)
            }, 3000)
        }
    }
)