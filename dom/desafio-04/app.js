new Vue({
	el: '#desafio',
	data: {
		efeito: true,
		efeito_c: false,
		classeUser: 'classe1',
		classeUser2: 'classe2',
		classeUserBool: false,
		style: 'classe1',
		largura: 0
	},
	methods: {
		iniciarEfeito() {
			this.efeito = !this.efeito
			this.efeito_c = !this.efeito_c
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 1
				this.largura = valor
				if (valor == 100) clearInterval(temporizador)
			}, 100);
		},
		trueOrFalse(e){
			if(e.target.value == "true"){
				this.classeUserBool = true
			} else if(e.target.value == "false"){
				this.classeUserBool = false
			}
		}
	}
})
