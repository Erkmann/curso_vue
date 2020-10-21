new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertar(){
            alert("ISSO EH UM ALERTA!")
        },

        mudaValor(e){
            this.valor = e.target.value
        }
    }
})