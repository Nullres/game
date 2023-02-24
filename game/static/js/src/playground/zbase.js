class AcGamePlayground {
    constructor(root){
        this.root = root;
        this.$playground = $(`<div class="ac_game_playground"></div>`);

        //this.hide();
        this.root.$ac_game.append(this.$playground);
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        this.game_map = new GameMap(this);
        this.players = [];
        this.players.push(new Player(this,  this.width / 2, this.height / 2, this.height * 0.05, this.get_random_color(), this.height * 0.15, true));

        for (let i = 0; i < 5; i++) {
            this.players.push(new Player(this,  this.width / 2, this.height / 2, this.height * 0.05, this.get_random_color(), this.height * 0.15, false));
        }

        this.start();
    }
    
    get_random_color() {
        let color = ["red", "pink", "orange", "yellow", "green", "blue", "purple", "gray", "white"];
        return color[Math.floor(Math.random() * 9)];
    }

    start(){
    }

    show(){
        //打开playground界面
        //this.$playground.show();
        this.$playground.show();
    }
    
    hide(){
        //关闭playground界面
        this.$playground.hide();
    }
    

}
