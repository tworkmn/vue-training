window.onload = function(){ 
	new Vue({
		el: "#app",
		data: {
			playerHealth: 100,
			monsterHealth: 100,
			gameStarted: false,
			showDamage: false,
			specAttackNum: 3
		},
		computed: {
			
		},
		watch: {
			monsterHealth: function() {

			}
		},
		methods: {
			gameStart: function() {
				this.gameStarted = true;
			},
			attack: function() {
				this.calculateDmg();
				this.showDamage = true;
			},
			specAttack: function() {
				if(this.specAttackNum > 0) {
					// multiply regular attack damage
					this.calculateDmg(8);
					this.specAttackNum--;
				}
				this.showDamage = true;
			},
			heal: function() {
				var healAmount = Math.floor(Math.random() * 15) + 5;
				this.calculateDmg(null, true, healAmount);
			},
			giveUp: function() {
				this.gameStarted = false;
				this.showDamage = false;
				this.playerHealth = 100;
				this.monsterHealth = 100;
				this.specAttackNum = 3;
			},
			calculateDmg: function(mod, heal, healAmt) {
				if(heal) {
					this.playerHealth += healAmt;
				}else{
					var playerDamage = null;
					if(mod) {
						// determine and deal player damage
						playerDamage = Math.floor(Math.random() * 6) + 1 * mod;
						this.dealDamageMonster(playerDamage);
					}else{
						// determine and deal player special damage
						playerDamage = Math.floor(Math.random() * 5) + 1;
						this.dealDamageMonster(playerDamage);
					}
				}
				// determine and deal monster damage
				var monsterDamage = Math.floor(Math.random() * 10) + 1;
				this.dealDamagePlayer(monsterDamage);
				// draw health changes
				this.drawDamage(playerDamage, monsterDamage);
			},
			dealDamageMonster: function(dmg) {
				this.monsterHealth -= dmg;
			},
			dealDamagePlayer: function(dmg) {
				this.playerHealth -= dmg;
			},
			drawDamage: function(playerDmg, monsterDmg) {
				if(typeof playerDmg != null && typeof playerDmg != 'undefined') {

				}else{

				}
			}
		}
	});
}
