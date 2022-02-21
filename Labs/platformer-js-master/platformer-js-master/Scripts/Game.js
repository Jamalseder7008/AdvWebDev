class Game {
    /* Properties */
    #world;
    #isOver;
    #level;
    #scene;

    constructor(){
        this.#isOver = false;
        this.#world = new World();
        this.#level = 0;
        const levelData = this.#world.getLevel( this.#level );
        this.#scene = new Scene(levelData);
        
    }

    update(){
        this.#scene.update();
    }

    render(){
        this.#scene.draw();
    }

    static main() {
        if (game.#isOver === false){
            game.update();
            game.render();
            window.requestAnimationFrame(Game.main);
        } else {
            console.log("Game Over!");
        }
    }
}

const game = new Game();