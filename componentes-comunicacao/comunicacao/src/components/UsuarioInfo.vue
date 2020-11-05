<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Reinciar Nome</button>
        <button @click="reiniciarFn">Reinicar Nome CALLBACK</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            required: true
        },
        reiniciarFn: Function
    },
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = 'Pedro'
            this.$emit('mudouNome', this.nome)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
