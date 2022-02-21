class Scene {
    /*Scene Properties */
    #background;
    #blocks;
    #player;

    constructor(map) {
        this.#blocks = [];
        this.setScene( map );
    }

    setScene(worldData){
        //using const is read only. secure programming practice
        const cols = worldData[0].length;
        const rows = worldData.length;
        this.setBackground(rows, cols);

        for (let y=0; y < rows; y++){
            for(let x=0; x< cols; x++){
                const tile = worldData[y][x];
                this.setTile(x, y, tile);
            }
        }        
    }

    setBackground( rows, cols, img="Assets/background.png", tileSize=32 ){
        const width = cols * tileSize;
        const height = rows * tileSize;
        this.#background = new GameObject(0, 0, width, height, img);
    }

    setTile(x, y, tile) {
        switch(tile){
            case "#": this.#blocks.push( new Block(x, y) ); break;
            case "@": this.#player = new Player(x, y); break;
        }
    }

    update() {
        this.#player.update();
    }

    draw() {
        this.#background.draw();
        this.#blocks.forEach( (block) => block.draw() );
        this.#player.draw();
    }
}