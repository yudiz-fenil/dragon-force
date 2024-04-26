
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg
		this.add.image(540, 958, "home-bg");

		// container_fire_particles
		const container_fire_particles = this.add.container(0, 0);

		// btn_play
		const btn_play = this.add.image(532, 1518, "btn_play");
		btn_play.setOrigin(0.46, 0.42);

		// container_header
		const container_header = this.add.container(0, 0);

		// coinImage
		const coinImage = this.add.image(64, 64, "coin");
		coinImage.scaleX = 0.6;
		coinImage.scaleY = 0.6;
		coinImage.visible = false;
		container_header.add(coinImage);

		// txt_coins
		const txt_coins = this.add.text(107, 64, "", {});
		txt_coins.setOrigin(0, 0.5);
		txt_coins.visible = false;
		txt_coins.text = "0";
		txt_coins.setStyle({ "fontFamily": "LilitaOne", "fontSize": "66px" });
		container_header.add(txt_coins);

		// logo
		const logo = this.add.image(540, 800, "logo");
		container_header.add(logo);

		// container_fire
		const container_fire = this.add.container(0, 0);
		container_fire.visible = false;

		// fire2
		const fire2 = this.add.image(196, 877, "fire2");
		container_fire.add(fire2);

		// fire
		const fire = this.add.image(288, 835, "fire2");
		container_fire.add(fire);

		// fire_1
		const fire_1 = this.add.image(413, 810, "fire2");
		container_fire.add(fire_1);

		// fire_2
		const fire_2 = this.add.image(545, 700, "fire2");
		container_fire.add(fire_2);

		// fire_3
		const fire_3 = this.add.image(666, 820, "fire2");
		container_fire.add(fire_3);

		// fire_4
		const fire_4 = this.add.image(790, 838, "fire2");
		container_fire.add(fire_4);

		// fire_5
		const fire_5 = this.add.image(882, 907, "fire2");
		container_fire.add(fire_5);

		this.container_fire_particles = container_fire_particles;
		this.btn_play = btn_play;
		this.container_header = container_header;
		this.coinImage = coinImage;
		this.txt_coins = txt_coins;
		this.container_fire = container_fire;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_fire_particles;
	/** @type {Phaser.GameObjects.Image} */
	btn_play;
	/** @type {Phaser.GameObjects.Container} */
	container_header;
	/** @type {Phaser.GameObjects.Image} */
	coinImage;
	/** @type {Phaser.GameObjects.Text} */
	txt_coins;
	/** @type {Phaser.GameObjects.Container} */
	container_fire;

	/* START-USER-CODE */
	toggleFullScreen(element) {
		if (!document.fullscreenElement &&    // standard
			!document.mozFullScreenElement && // Firefox
			!document.webkitFullscreenElement &&  // Chrome, Safari, and Opera
			!document.msFullscreenElement) {  // IE/Edge
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.webkitRequestFullScreen) {
				element.webkitRequestFullscreen();
			} else if (element.msRequestFullscreen) {
				element.msRequestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	}
	logoFire = () => {
		const fireParticle = this.add.particles("fire2");
		this.container_fire_particles.add(fireParticle);
		this.container_fire.each(fire => {
			const fireEmitter = fireParticle.createEmitter({
				x: fire.x,
				y: fire.y,
				speed: { min: -90, max: 90 },
				angle: { min: 0, max: 360 },
				scale: { start: 0.8, end: 0 },
				blendMode: "ADD",
				lifespan: { min: 1200, max: 1600 },
				tint: 0x152345,
				gravityY: -280,
				frequency: 20,
			});
		})
	}
	btnParticles = () => {
		const fireParticle1 = this.add.particles("red");
		const fireParticle2 = this.add.particles("red-fire");
		this.container_fire_particles.add(fireParticle1);
		this.container_fire_particles.add(fireParticle2);
		this.fireEmitter1 = fireParticle1.createEmitter({
			x: { min: this.btn_play.x - 50, max: this.btn_play.x + 50 },
			y: { min: this.btn_play.y, max: this.btn_play.y - 50 },
			speed: 150,
			scale: { start: 1, end: 0 },
			angle: { min: 0, max: 360 },
			speed: { min: -150, max: 150 },
			lifespan: { min: 1000, max: 1500 },
			gravityY: -380,
			frequency: 50,
			quantity: 5,
			on: false,
		})
		this.fireEmitter2 = fireParticle2.createEmitter({
			x: { min: this.btn_play.x - 50, max: this.btn_play.x + 50 },
			y: { min: this.btn_play.y, max: this.btn_play.y - 50 },
			speed: 150,
			scale: { start: 1, end: 0 },
			angle: { min: 0, max: 360 },
			speed: { min: -150, max: 150 },
			lifespan: { min: 1000, max: 1500 },
			gravityY: -380,
			frequency: 50,
			quantity: 5,
			on: false,
		})
	}
	pointerOver = (btn, scale) => {
		this.input.setDefaultCursor('pointer');
		this.fireEmitter1.start();
		this.fireEmitter2.start();
		this.tweens.add({
			targets: btn,
			scaleX: scale + 0.08,
			scaleY: scale + 0.08,
			duration: 100
		})
	}
	pointerOut = (btn, scale) => {
		this.input.setDefaultCursor('default');
		this.fireEmitter1.stop();
		this.fireEmitter2.stop();
		this.tweens.add({
			targets: btn,
			scaleX: scale,
			scaleY: scale,
			duration: 100,
			onComplete: () => {
				btn.setScale(scale);
			}
		})
	}
	create() {
		this.editorCreate();
		this.logoFire();
		this.btnParticles();
		this.oGameManager = new GameManager(this);
		this.input.mouse.releasePointerLock();
		this.nCoins = parseInt(localStorage.getItem('dragon_coins')) || 0;
		this.txt_coins.setText(this.nCoins);
		this.btn_play.setInteractive().on('pointerover', () => this.pointerOver(this.btn_play, 1));
		this.btn_play.setInteractive().on('pointerout', () => this.pointerOut(this.btn_play, 1));
		this.btn_play.setInteractive().on('pointerup', () => {
			const gameContainer = document.getElementById('game-division');
			// this.toggleFullScreen(gameContainer);
			this.scene.stop("Home");
			this.scene.start("Level");
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
