//cards-against-boolean - 08/05/21
// Author: lorenzobernini
/*$(document).ready(function () {

});*/
var app = new Vue({
	el: '#root',
	data: {
		init: true,
		nuovaPartita: false,
		joinPartita: false,
		username: '',
		codPartita: '',
		gameStarted: false,
		listaUtenti: []
	},
	mounted () {
		//controllo ogni tot secondi se arriva un nuovo utente
		//fetch axios
		if (this.gameStarted){

		}
	},
	computed: {},
	methods: {
		newGame: function () {
			if (this.username !== '') {
				this.codPartita = this.genCodPartita();
				//post axios
				this.gameStarted = true;
			} else {
				alert('Nessun utente specificato!')
			}
		},
		genCodPartita: function () {
			var result           = [];
			var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
			var charactersLength = characters.length;
			for ( var i = 0; i < 4; i++ ) {
				result.push(characters.charAt(Math.floor(Math.random() *
					charactersLength)));
			}
			return result.join('');
		},
		joinGame: function () {
			//chiamata axios
			if (this.codPartita) {
				//controllo esiste
			} else {
				alert('Partita non trovata')
			}
		}
	}
});