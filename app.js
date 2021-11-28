const app = Vue.createApp({
    data(){
        return {
            name: 'Ajuka David',
            age: 20,
            inputData: 'lookin',
            image: 'https://assets.audiomack.com/1soakingchannel/5417b4f7456dd2bf263225bc08ec026139d197aa62d857d3672a0a873ba161c9.jpeg?width=165&height=165&max=true'
        }
    },
    
    methods: {
        ageInFiveYears(){
            return this.age + 5
        },
        favNumber(){
           let fav =  Math.random()
           return fav
        }
    }
})


app.mount("#assignment")