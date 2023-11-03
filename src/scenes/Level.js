
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg
		const bg = this.add.tileSprite(540, 1800, 1080, 4000, "bg");
		bg.setOrigin(0.5, 1);

		// container_particles
		const container_particles = this.add.container(0, 0);

		// container_blocks
		const container_blocks = this.add.container(0, 0);

		// container_insects
		const container_insects = this.add.container(0, 0);

		// container_body
		const container_body = this.add.container(0, 0);

		// container_header
		const container_header = this.add.container(0, 0);

		// container_coin
		const container_coin = this.add.container(0, 0);
		container_header.add(container_coin);

		// coin_base
		const coin_base = this.add.image(1067.5, 86, "coin-base");
		coin_base.setOrigin(1, 0.5);
		container_coin.add(coin_base);

		// coinImage
		const coinImage = this.add.image(1038, 86, "coin");
		coinImage.scaleX = 0.5;
		coinImage.scaleY = 0.5;
		container_coin.add(coinImage);

		// txt_coins
		const txt_coins = this.add.text(1006, 87, "", {});
		txt_coins.setOrigin(1, 0.5);
		txt_coins.text = "0";
		txt_coins.setStyle({ "align": "right", "fontFamily": "LilitaOne", "fontSize": "54px" });
		container_coin.add(txt_coins);

		// container_score
		const container_score = this.add.container(0, 0);
		container_header.add(container_score);

		// fill_base
		const fill_base = this.add.image(540, 86, "fill-base");
		container_score.add(fill_base);

		// txt_score
		const txt_score = this.add.text(657, 122, "", {});
		txt_score.setOrigin(0.5, 0.5);
		txt_score.visible = false;
		txt_score.text = "Score";
		txt_score.setStyle({ "align": "center", "fontFamily": "LilitaOne", "fontSize": "26px", "fontStyle": "bold" });
		container_score.add(txt_score);

		// outerBar
		const outerBar = this.add.image(535, 86, "outerBar");
		container_score.add(outerBar);

		// innerBar
		const innerBar = this.add.image(361, 86, "innerBar");
		innerBar.setOrigin(0, 0.5);
		container_score.add(innerBar);

		// insects_1
		const insects_1 = this.add.image(364, 86, "insects_1");
		insects_1.scaleX = 0.6;
		insects_1.scaleY = 0.6;
		container_score.add(insects_1);

		// fill_line
		const fill_line = this.add.image(471, 83, "fill-line");
		container_score.add(fill_line);

		// fill_line_1
		const fill_line_1 = this.add.image(597, 83, "fill-line");
		container_score.add(fill_line_1);

		// container_stars
		const container_stars = this.add.container(0, 0);
		container_score.add(container_stars);

		// star_0
		const star_0 = this.add.image(471, 60, "star");
		star_0.scaleX = 0.8;
		star_0.scaleY = 0.8;
		container_stars.add(star_0);

		// star_1
		const star_1 = this.add.image(597, 60, "star");
		star_1.scaleX = 0.8;
		star_1.scaleY = 0.8;
		container_stars.add(star_1);

		// star_2
		const star_2 = this.add.image(743, 79, "star");
		star_2.scaleX = 1.5;
		star_2.scaleY = 1.5;
		container_stars.add(star_2);

		// container_boss_progress
		const container_boss_progress = this.add.container(0, 0);
		container_boss_progress.visible = false;
		container_header.add(container_boss_progress);

		// bossOuterbar
		const bossOuterbar = this.add.image(597, 125, "bossOuterbar");
		container_boss_progress.add(bossOuterbar);

		// bossInnerBar
		const bossInnerBar = this.add.image(493, 125, "bossinnerBar");
		bossInnerBar.setOrigin(0, 0.5);
		container_boss_progress.add(bossInnerBar);

		// fill_base_1
		const fill_base_1 = this.add.image(162, 86, "coin-base");
		container_header.add(fill_base_1);

		// txt_level
		const txt_level = this.add.text(160, 86, "", {});
		txt_level.setOrigin(0.5, 0.5);
		txt_level.text = "LEVEL : 1";
		txt_level.setStyle({ "fontFamily": "LilitaOne", "fontSize": "34px", "shadow.color": "#fff" });
		container_header.add(txt_level);

		// txt_boss
		const txt_boss = this.add.text(540, 900, "", {});
		txt_boss.setOrigin(0.5, 0.5);
		txt_boss.visible = false;
		txt_boss.text = "BOSS APPROCHING";
		txt_boss.setStyle({ "fontFamily": "LilitaOne", "fontSize": "66px", "stroke": "#000000ff", "strokeThickness":5,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#000000ff", "shadow.blur":3,"shadow.stroke":true});

		// txt_level_up
		const txt_level_up = this.add.text(540, 900, "", {});
		txt_level_up.setOrigin(0.5, 0.5);
		txt_level_up.visible = false;
		txt_level_up.text = "LEVEL UP!";
		txt_level_up.setStyle({ "fontFamily": "LilitaOne", "fontSize": "66px", "stroke": "#000000ff", "strokeThickness":5,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#000000ff", "shadow.blur":3,"shadow.stroke":true});

		this.bg = bg;
		this.container_particles = container_particles;
		this.container_blocks = container_blocks;
		this.container_insects = container_insects;
		this.container_body = container_body;
		this.container_header = container_header;
		this.coin_base = coin_base;
		this.coinImage = coinImage;
		this.txt_coins = txt_coins;
		this.txt_score = txt_score;
		this.outerBar = outerBar;
		this.innerBar = innerBar;
		this.container_stars = container_stars;
		this.container_boss_progress = container_boss_progress;
		this.bossOuterbar = bossOuterbar;
		this.bossInnerBar = bossInnerBar;
		this.txt_level = txt_level;
		this.txt_boss = txt_boss;
		this.txt_level_up = txt_level_up;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	bg;
	/** @type {Phaser.GameObjects.Container} */
	container_particles;
	/** @type {Phaser.GameObjects.Container} */
	container_blocks;
	/** @type {Phaser.GameObjects.Container} */
	container_insects;
	/** @type {Phaser.GameObjects.Container} */
	container_body;
	/** @type {Phaser.GameObjects.Container} */
	container_header;
	/** @type {Phaser.GameObjects.Image} */
	coin_base;
	/** @type {Phaser.GameObjects.Image} */
	coinImage;
	/** @type {Phaser.GameObjects.Text} */
	txt_coins;
	/** @type {Phaser.GameObjects.Text} */
	txt_score;
	/** @type {Phaser.GameObjects.Image} */
	outerBar;
	/** @type {Phaser.GameObjects.Image} */
	innerBar;
	/** @type {Phaser.GameObjects.Container} */
	container_stars;
	/** @type {Phaser.GameObjects.Container} */
	container_boss_progress;
	/** @type {Phaser.GameObjects.Image} */
	bossOuterbar;
	/** @type {Phaser.GameObjects.Image} */
	bossInnerBar;
	/** @type {Phaser.GameObjects.Text} */
	txt_level;
	/** @type {Phaser.GameObjects.Text} */
	txt_boss;
	/** @type {Phaser.GameObjects.Text} */
	txt_level_up;

	/* START-USER-CODE */

	// Write more your code here
	fireParticles = (bullet) => this.oParticlesManager.fireParticles(bullet);
	bossParticles = (bullet, boss, texture) => this.oParticlesManager.bossParticles(bullet, boss, texture);
	blockParticles = (block, nX, nY) => this.oParticlesManager.blockParticles(block, nX, nY);
	insectParticles = (insect, nX, nY, texture) => this.oParticlesManager.insectParticles(insect, nX, nY, texture);
	ringParticle = (block, nX, nY) => this.oParticlesManager.ringParticle(block, nX, nY);
	flashEffect = (x, y) => this.oParticlesManager.flashEffect(x, y);
	setPlayer = () => {
		const texture = this.oGameManager.oLevels[this.nLevel].sPlayer;
		const player = this.physics.add.image(540, 1500, texture);
		player.setScale(0.7, 0.7);
		if (texture == "player") {
			player.setOrigin(0.43, 0.5)
			player.setSize(player.width / 2, player.height / 1.5);
			player.setOffset(95, 70);
		} else {
			player.setSize(player.width / 2.5, player.height / 1.5);
			player.setOffset(230, 80);
		}
		player.setInteractive();
		player.name = "player";
		return player;
	}
	singleBulllet = (velocityX, angle = 0) => {
		const bullet = this.fireGroup.create(this.player.x, this.player.y - (this.player.height / 2.9), 'bullet');
		bullet.setVelocityX(velocityX);
		// bullet.setAngle(angle);
		bullet.setVelocityY(-3000);
		bullet.setVisible(true);
		bullet.setCircle(25);
		this.fireParticles(bullet);
	}
	shootBullet = () => {
		switch (this.nTotalBullets) {
			case 1:
				this.singleBulllet(0, 0);
				break;
			case 2:
				this.singleBulllet(-400, -8);
				this.singleBulllet(400, 8);
				break;
			case 3:
				this.singleBulllet(-400, -8);
				this.singleBulllet(0, 0);
				this.singleBulllet(400, 8);
				break;
			case 4:
				this.singleBulllet(-600, -10);
				this.singleBulllet(-200, -5);
				this.singleBulllet(200, 5);
				this.singleBulllet(600, 10);
				break;

			default:
				this.singleBulllet(0, 0);
				break;
		}
	}
	startFire = () => {
		this.shootBullet();
		if (!this.fireTimer) {
			this.fireTimer = this.time.addEvent({
				delay: 200,
				callback: () => {
					this.shootBullet();
				},
				callbackScope: this,
				loop: true
			});
		}
	}
	stopFire = () => {
		if (this.fireTimer) {
			this.fireTimer.remove(false);
			this.fireTimer = false;
		}
	}
	createBlocks = () => {
		const maxScore = this.oGameManager.oLevels[this.nLevel].nTarget;
		const maxRows = this.oGameManager.oLevels[this.nLevel].nRow;
		const maxColumns = this.oGameManager.oLevels[this.nLevel].nColumn;
		let scoreFactor = Math.min(this.nScore / maxScore, 1);
		const numRows = Math.max(1, Math.ceil(scoreFactor * maxRows));
		const numColumns = Math.max(5, Math.ceil(scoreFactor * maxColumns));

		const blockWidth = 100;
		const blockHeight = 100;
		const blockPadding = 20;
		const startX = (this.sys.game.config.width - (numColumns * (blockWidth + blockPadding))) / 2 + 55;
		const startY = -50;
		for (let row = 0; row < numRows; row++) {
			for (let col = 0; col < numColumns; col++) {
				const blockX = startX + col * (blockWidth + blockPadding);
				const blockY = startY + row * (blockHeight + blockPadding);
				const block = this.physics.add.sprite(blockX, blockY, 'block_1');
				block.setCircle(block.width / 4.1);
				block.setOffset(48, 3.5);
				block.setData('number', 1);
				this.container_blocks.add(block);
				this.blocksGroup.add(block);
			}
		}
	}
	updateScore = (x, y) => {
		this.nScore += this.oGameManager.oLevels[this.nLevel].nAdd;
		this.updateScoreBar();
		if (this.nScore % this.oGameManager.nCoinArrival === 0) {
			this.addCoin(x, y);
		}
		if (this.nScore % this.oGameManager.oLevels[this.nLevel].nInsectArrival == 0 &&
			this.insectGroup.getLength() <= this.oGameManager.oLevels[this.nLevel].nMaxInsects &&
			!this.isBossApproching) {
			this.addInsects();
		}
		if (this.nScore >= this.oGameManager.oLevels[this.nLevel].nTarget && !this.isBossApproching) {
			this.bossApproch();
		}
	}
	levelUpTextAnimation = () => {
		this.txt_level_up.setVisible(true);
		this.tweens.add({
			targets: this.txt_level_up,
			alpha: 0,
			yoyo: true,
			repeat: 2,
			duration: 500,
			onUpdate: () => {
				this.blocksCamera.shake(17, 0.015);
			},
			onComplete: () => {
				this.txt_level_up.setVisible(false);
				this.levelUp();
			}
		})
	}
	updateBossScore = (boss) => {
		if (this.nBossScore == this.oGameManager.oLevels[this.nLevel].nBossPower) {
			this.container_boss_progress.setVisible(true);
		}
		this.nBossScore -= this.oGameManager.oLevels[this.nLevel].nDamage;
		this.updateBossBar();
		if (this.nBossScore == 0) {
			this.ringParticle(boss, boss.x, boss.y);
			boss.destroy();
			this.levelUpTextAnimation();
		}
	}
	setScoreBar = () => {
		this.innerBar.setVisible(false);
		this.innerBarWidth = this.innerBar.displayWidth;
		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.innerBar.x,
			this.innerBar.y - this.innerBar.displayHeight / 2,
			this.innerBar.displayWidth,
			this.innerBar.displayHeight
		);
		this.innerBar.setMask(this.maskGraphics.createGeometryMask());
	}
	setBossBar = () => {
		this.bossMaskGraphics = this.make.graphics();
		this.bossMaskGraphics.fillStyle(0xffffff);
		this.bossMaskGraphics.fillRect(
			this.bossInnerBar.x,
			this.bossInnerBar.y - this.bossInnerBar.displayHeight / 2,
			this.bossInnerBar.displayWidth * this.oGameManager.oLevels[this.nLevel].nBossPower,
			this.bossInnerBar.displayHeight
		);
		this.bossInnerBar.setMask(this.bossMaskGraphics.createGeometryMask());
	}
	updateScoreBar = () => {
		const innerBarWidth = this.innerBar.displayWidth;
		this.innerBar.setVisible(true);
		const currentProgress = this.nScore / this.oGameManager.oLevels[this.nLevel].nTarget;
		this.maskGraphics.clear();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.innerBar.x,
			this.innerBar.y - this.innerBar.displayHeight / 2,
			innerBarWidth * currentProgress,
			this.innerBar.displayHeight
		);
	}
	updateBossBar = () => {
		const innerBarWidth = this.bossInnerBar.displayWidth;
		// this.bossInnerBar.setVisible(true);
		const currentProgress = this.nBossScore / this.oGameManager.oLevels[this.nLevel].nBossPower;
		this.bossMaskGraphics.clear();
		this.bossMaskGraphics.fillStyle(0xffffff);
		this.bossMaskGraphics.fillRect(
			this.bossInnerBar.x,
			this.bossInnerBar.y - this.bossInnerBar.displayHeight / 2,
			innerBarWidth * currentProgress,
			this.bossInnerBar.displayHeight
		);
	}
	addCoin = (x, y) => {
		const coin = this.coinsGroup.create(x, y, 'coin').setScale(0.5);
		coin.setVelocityY(Phaser.Math.Between(1000, 1100));
		this.tweens.add({
			targets: coin,
			angle: 360,
			duration: 1000,
			repeat: -1,
			yoyo: false
		});
	}
	updateCoin = () => {
		this.nCoins++;
		this.txt_coins.setText(this.nCoins);
		this.coin_base.displayWidth = this.txt_coins.width + 70;
	}
	levelUp = () => {
		this.nLevel++;
		if (this.nLevel == 9) this.nLevel = 1;
		this.nScore = 0;
		this.nBossScore = 0;
		this.isBossApproching = false;
		this.setScoreBar();
		this.setBossBar();
		this.player.destroy();
		this.txt_level.setText("LEVEL : " + this.nLevel);
		this.nTotalBullets = this.oGameManager.oLevels[this.nLevel].nTotalBullets
		this.player = this.setPlayer();
		this.physics.add.overlap(this.player, this.coinsGroup, this.handleCoinCollect, null, this);
		this.physics.add.overlap(this.player, this.blocksGroup, () => this.gameOver(), null, this);
		this.physics.add.overlap(this.player, this.bossGroup, () => this.gameOver(), null, this);
		this.physics.add.overlap(this.player, this.insectGroup, () => this.gameOver(), null, this);
		this.container_boss_progress.setVisible(false);
		this.createBlocks();
	}
	gameOver = () => {
		localStorage.setItem('dragon_coins', this.nCoins);
		this.scene.restart("Level");
		// this.scene.start("Home");
	}
	create() {
		this.editorCreate();
		this.oGameManager = new GameManager(this);
		this.oParticlesManager = new ParticlesManager(this);
		this.fireTimer = false;
		this.isBossApproching = false;
		this.nScore = 0;
		this.nBossScore = 0;
		this.nLevel = 1;
		this.txt_level.setText("LEVEL : " + this.nLevel);
		this.nCoins = localStorage.getItem('dragon_coins') || 0;
		this.nTotalBullets = this.oGameManager.oLevels[this.nLevel].nTotalBullets
		this.txt_coins.setText(this.nCoins);
		this.coin_base.displayWidth = this.txt_coins.width + 70;
		this.ringEmitter = this.add.particles("ring");
		this.coinsGroup = this.physics.add.group();
		this.fireGroup = this.physics.add.group();
		this.blocksGroup = this.physics.add.group();
		this.bossGroup = this.physics.add.group();
		this.insectGroup = this.physics.add.group();

		this.setScoreBar();
		this.setBossBar();
		this.player = this.setPlayer();

		this.blocksCamera = this.cameras.add(0, 0, this.sys.game.config.width, this.sys.game.config.height);
		this.blocksCamera.ignore([this.player, this.fireGroup, this.container_header, this.container_body, this.bg]);

		this.createBlocks();

		this.input.on('pointermove', (pointer) => {
			if (pointer.isDown) {
				this.input.mouse.requestPointerLock();
				const targetX = this.player.x + pointer.event.movementX * 2;
				const targetY = this.player.y + pointer.event.movementY * 2;
				this.player.x = Phaser.Math.Clamp(targetX, (this.player.height / 4.5), 1080 - (this.player.height / 4.5));
				this.player.y = Phaser.Math.Clamp(targetY, 1000, 1920 - this.player.height / 2.8);
			} else {
				this.input.mouse.releasePointerLock();
			}
			if (window.innerWidth < 1080) {
				const targetX = pointer.x;
				const targetY = pointer.y;
				this.player.x = Phaser.Math.Clamp(targetX, (this.player.height / 4.5), 1080 - (this.player.height / 4.5));
				this.player.y = Phaser.Math.Clamp(targetY, 800, 1910 - this.player.height / 2);
			}
		})
		this.input.on('pointerdown', () => {
			this.startFire();
		})
		this.input.on('pointerup', () => {
			this.stopFire();
		})
		this.physics.add.overlap(this.fireGroup, this.blocksGroup, this.handleBulletBlockCollision, null, this);
		this.physics.add.overlap(this.fireGroup, this.bossGroup, this.handleBulletBossCollision, null, this);
		this.physics.add.overlap(this.fireGroup, this.insectGroup, this.handleBulletInsectsCollision, null, this);
		this.physics.add.overlap(this.player, this.coinsGroup, this.handleCoinCollect, null, this);
		this.physics.add.overlap(this.player, this.blocksGroup, () => this.gameOver(), null, this);
		this.physics.add.overlap(this.player, this.bossGroup, () => this.gameOver(), null, this);
		this.physics.add.overlap(this.player, this.insectGroup, () => this.gameOver(), null, this);
	}
	handleCoinCollect = (player, coin) => {
		const newCoin = this.add.image(coin.x, coin.y, "coin").setScale(0.5);
		coin.destroy();
		this.tweens.add({
			targets: newCoin,
			x: this.coinImage.x,
			y: this.coinImage.y,
			scaleX: 1,
			scaleY: 1,
			duration: 800,
			onComplete: () => {
				newCoin.destroy();
			}
		})
		this.updateCoin();
	}
	handleBulletBlockCollision = (bullet, block) => {
		this.blockParticles(block, block.x, block.y + 10);
		this.ringParticle(block, block.x, block.y + 10);
		this.flashEffect(block.x, block.y);
		this.updateScore(block.x, block.y);

		bullet.emitter.remove();
		bullet.destroy();

		this.blocksCamera.shake(50, 0.01);
		block.destroy();
	}
	handleBulletBossCollision = (bullet, boss) => {
		this.bossParticles(bullet, boss, this.oGameManager.oLevels[this.nLevel].sBossParticles);
		bullet.emitter.remove();
		bullet.destroy();
		this.blocksCamera.shake(50, 0.01);
		this.updateBossScore(boss);
	}
	handleBulletInsectsCollision = (bullet, insect) => {
		bullet.emitter.remove();
		bullet.destroy();
		this.updateScore(insect.x, insect.y);
		this.ringParticle(insect, insect.x, insect.y);
		this.insectParticles(insect, insect.x, insect.y, this.oGameManager.oLevels[this.nLevel].sInsectParticle);

		let health = insect.getData('health');
		health -= this.oGameManager.oLevels[this.nLevel].nDamage;

		if (health <= 0) {
			insect.moveInsectsEvent.remove();
			insect.destroy();
		} else {
			insect.setData('health', health);
		}

		this.blocksCamera.shake(50, 0.01);
	}
	bossTextAnimation = () => {
		this.txt_boss.setVisible(true);
		this.tweens.add({
			targets: this.txt_boss,
			alpha: 0,
			yoyo: true,
			repeat: 2,
			duration: 500,
			onUpdate: () => {
				this.blocksCamera.shake(17, 0.015);
			},
			onComplete: () => {
				this.txt_boss.setVisible(false);
			}
		})
	}
	enterBoss = () => {
		const texture = this.oGameManager.oLevels[this.nLevel].sBoss;
		const boss = this.physics.add.sprite(540, -100, texture);
		this.bossGroup.add(boss);
		if (texture == "boss_1") {
			boss.setScale(0.8);
			boss.setOrigin(0.46, 0.45);
			boss.setCircle(boss.width / 2.2);
		} else {
			boss.setScale(0.8);
			boss.setOrigin(0.45, 0.47);
			boss.setCircle(boss.width / 3);
			boss.setOffset(80, 50);
		}
		boss.setBounce(1);
		this.container_blocks.add(boss);
		this.tweens.add({
			targets: boss,
			y: 450 * 2,
			duration: 800,
			onComplete: () => {
				this.tweens.add({
					targets: boss,
					y: 450,
					duration: 800,
					onComplete: () => {
						boss.setCollideWorldBounds(true, 1);
						boss.setVelocityX(Phaser.Math.Between(400, 600));
					}
				})
			}
		})
		this.nBossScore = this.oGameManager.oLevels[this.nLevel].nBossPower;

		const moveBossDownAndUp = () => {
			if (boss) {
				const initialY = boss.y;
				this.tweens.timeline({
					targets: boss,
					tweens: [
						{ y: Phaser.Math.Between(1350, 1500), duration: Phaser.Math.Between(1350, 1500), ease: 'Power1' },
						{ y: initialY, duration: Phaser.Math.Between(1350, 1500), ease: 'Power1' }
					],
					onComplete: () => {
					}
				});
			}
		};
		this.time.addEvent({
			delay: Phaser.Math.Between(3500, 5500),
			callback: moveBossDownAndUp,
			callbackScope: this,
			loop: true
		});
	}
	clearGroups = () => {
		this.insectGroup.getChildren().forEach(insect => {
			this.ringParticle(insect, insect.x, insect.y);
			this.insectParticles(insect, insect.x, insect.y, this.oGameManager.oLevels[this.nLevel].sInsectParticle);
			insect.moveInsectsEvent.remove();
			insect.destroy();
		});
		this.blocksGroup.getChildren().forEach(block => {
			this.blockParticles(block, block.x, block.y + 10);
			this.ringParticle(block, block.x, block.y + 10);
			this.flashEffect(block.x, block.y);
		});
		this.blocksGroup.clear(true, true);
	}
	bossApproch = () => {
		this.isBossApproching = true;
		this.bossTextAnimation();
		this.clearGroups();
		setTimeout(() => {
			this.enterBoss();
		}, 3000);
	}
	addInsects = () => {
		const texture = this.oGameManager.oLevels[this.nLevel].sInsect
		const insect = this.physics.add.sprite(Phaser.Math.Between(-50, 1900), 0, texture);
		this.insectGroup.add(insect);
		this.container_insects.add(insect);
		if (texture == "insects_2") {
			insect.setScale(0.5, 0.5);
			insect.setCircle(insect.width / 2.6);
			insect.setOffset(30, 130);
		} else {
			insect.setCircle(insect.width / 2);
			insect.setOffset(0, 20);
		}
		insect.setBounce(1);
		insect.setCollideWorldBounds(true, 1);
		insect.setData('health', this.oGameManager.oLevels[this.nLevel].nInsectHealth);

		const moveInsectsDownAndUp = () => {
			if (insect) {
				insect.setVelocity(Phaser.Math.Between(-240, 340), Phaser.Math.Between(40, 60));
				this.tweens.timeline({
					targets: insect,
					tweens: [
						{ y: Phaser.Math.Between(1400, 1750), duration: Phaser.Math.Between(1150, 1250), ease: 'Power1' },
						{ y: Phaser.Math.Between(300, 500), duration: Phaser.Math.Between(1150, 1250), ease: 'Power1' },
					],
				});
			}
		};
		moveInsectsDownAndUp();
		const moveInsectsEvent = this.time.addEvent({
			delay: Phaser.Math.Between(2500, 3500),
			callback: moveInsectsDownAndUp,
			callbackScope: this,
			loop: true
		});
		insect.moveInsectsEvent = moveInsectsEvent;
	}
	update() {
		this.bg.tilePositionY -= 10;
		this.fireGroup.children.each((bullet) => {
			if (bullet.y < 0) {
				bullet.emitter.remove();
				bullet.destroy();
			}
		});
		if (this.blocksGroup.getLength() == 0 && !this.isBossApproching) this.createBlocks();
		this.blocksGroup.children.iterate((block) => {
			if (block) {
				block.setVelocityY(100);
				if (block.y > this.sys.game.config.height + block.height) {
					block.destroy();
				}
			}
		});
		this.coinsGroup.children.iterate((coin) => {
			if (coin) {
				if (coin.y > this.sys.game.config.height + coin.height) {
					coin.destroy();
				}
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
