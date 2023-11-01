class GameManager {
	constructor(oScene) {
		this.oBulletsPrice = [
			{ isOpen: true, nPrice: 0 }, // 1
			{ isOpen: false, nPrice: 300 }, // 2
			{ isOpen: false, nPrice: 500 }, // 3
			{ isOpen: false, nPrice: 700 }, // 4
		]
		this.nCoinArrival = 10;
		this.oLevels = {
			1: {
				sPlayer: "player",
				nTarget: 50,
				nDamage: 1,
				nAdd: 1,
				nRow: 2,
				nColumn: 4,
				nTotalBullets: 1,
				sBoss: "boss_1", sBossParticles: "particle_3", nBossPower: 30,
				sInsect: "insects_2", sInsectParticle: "particle_4", nInsectHealth: 5, nInsectArrival: 15,
			},
			2: {
				sPlayer: "player2",
				nTarget: 130,
				nDamage: 1,
				nAdd: 1,
				nRow: 3,
				nColumn: 6,
				nTotalBullets: 2,
				sBoss: "boss_2", sBossParticles: "particle_6", nBossPower: 50,
				sInsect: "insects_1", sInsectParticle: "particle_5", nInsectHealth: 8, nInsectArrival: 13,
			},
			3: {
				sPlayer: "player",
				nTarget: 180,
				nDamage: 1,
				nAdd: 1,
				nRow: 3,
				nColumn: 7,
				nTotalBullets: 2,
				sBoss: "boss_1", sBossParticles: "particle_3", nBossPower: 70,
				sInsect: "insects_2", sInsectParticle: "particle_4", nInsectHealth: 12, nInsectArrival: 11,
			},
			4: {
				sPlayer: "player2",
				nTarget: 230,
				nDamage: 1,
				nAdd: 1,
				nRow: 4,
				nColumn: 7,
				nTotalBullets: 3,
				sBoss: "boss_2", sBossParticles: "particle_6", nBossPower: 90,
				sInsect: "insects_1", sInsectParticle: "particle_5", nInsectHealth: 17, nInsectArrival: 9,
			},
			5: {
				sPlayer: "player",
				nTarget: 280,
				nDamage: 1,
				nAdd: 1,
				nRow: 4,
				nColumn: 7,
				nTotalBullets: 3,
				sBoss: "boss_1", sBossParticles: "particle_3", nBossPower: 110,
				sInsect: "insects_2", sInsectParticle: "particle_4", nInsectHealth: 22, nInsectArrival: 7,
			},
			6: {
				sPlayer: "player2",
				nTarget: 330,
				nDamage: 1,
				nAdd: 1,
				nRow: 4,
				nColumn: 7,
				nTotalBullets: 4,
				sBoss: "boss_2", sBossParticles: "particle_6", nBossPower: 130,
				sInsect: "insects_1", sInsectParticle: "particle_5", nInsectHealth: 27, nInsectArrival: 7,
			},
			7: {
				sPlayer: "player",
				nTarget: 380,
				nDamage: 1,
				nAdd: 1,
				nRow: 4,
				nColumn: 7,
				nTotalBullets: 4,
				sBoss: "boss_1", sBossParticles: "particle_3", nBossPower: 150,
				sInsect: "insects_2", sInsectParticle: "particle_4", nInsectHealth: 32, nInsectArrival: 7,
			},
			8: {
				sPlayer: "player2",
				nTarget: 430,
				nDamage: 1,
				nAdd: 1,
				nRow: 4,
				nColumn: 7,
				nTotalBullets: 4,
				sBoss: "boss_2", sBossParticles: "particle_6", nBossPower: 170,
				sInsect: "insects_1", sInsectParticle: "particle_5", nInsectHealth: 37, nInsectArrival: 7,
			},
		}
	}
}