// controle do menu

var x = 350;
var y = 160;
var tela = 0;
var opcao = 1;
//pinos
var pinoset = 0;
var pino_disktop = [0, -1, -1]
//discos
var disk = 0;
var disk_quant = 2;
var disk_up = [];
var disk_pos = [];
var cont_disk = [disk_quant, 0, 0]
for (i = 0; i < disk_quant; i++) {
    disk_up[i] = false;
    disk_pos[i] = 0;
}


function selec_disk()
{
    for(i=0;i<disk_quant;i++)
    {
        if(disk_up[i])
            return true;
    }
    return false;
}

function win() {
    for (i = 0; i < disk_quant; i++) {
        if (disk_pos[i] != 2 || disk_up[i] == true) {
            return false;
        }
    }
    return true;
}




function setup() {
    createCanvas(900, 800);


}

function draw() {
    background(150, 0, 150);
    if (tela == 0)
        menu()
    if (tela == 1)
        Fase1()
    if (tela == 2)
        Ins()
    if (tela == 3)
        cred()
    if (tela == 4)
        winscreen()

}

function keyPressed() {
    draw()
    switch (tela) {
        case 0:
            if (key == "ArrowUp" && y > 230) {
                y = y - 200;
                opcao = opcao - 1;
            }

            if (key == "ArrowDown" && y < 500) {
                y = y + 200;
                opcao = opcao + 1;

            }
            if (key == "Enter")
                tela = opcao
            if (key == "Escape")
                tela = 0
            break;
        case 1:
            if (key == "a") {
                if (pinoset <= 0) {
                    pinoset = 0;
                }
                else {
                    pinoset = pinoset - 1;
                }
                if (disk_up[disk] == true) {
                    
                }
            }
            if (key == "d") {
                if (pinoset >= 2) {
                    pinoset = 2;
                }
                else {
                    pinoset = pinoset + 1;
                }
                if (disk_up[disk] == true) {
                    
                }
            }//se apertar pra cima duas vezes vai selecionar mais de um disco pra mover
            if (key == "w" && !selec_disk()) {
                if (pino_disktop[pinoset] != -1) {
                    disk = pino_disktop[pinoset]
                    disk_pos[disk] = -1;
                    disk_up[disk] = true;
                    cont_disk[pinoset]--;
                    console.log(disk_pos[disk])
                    for (i = 0; i < disk_quant; i++) {
                        if (disk_pos[i] == pinoset) {
                            console.log(disk_pos[i])
                            console.log(i)
                            pino_disktop[pinoset] = i;
                            break;
                        }
                    }
                    if (i == disk_quant) { pino_disktop[pinoset] = -1; }

                }
            }
            if (key == "s" && selec_disk()) {
                if (disk <= pino_disktop[pinoset] || pino_disktop[pinoset] == -1) {
                    disk_up[disk] = false;
                    disk_pos[disk] = pinoset;
                    cont_disk[pinoset]++;
                    for (i = 0; i < disk_quant; i++) {
                        if (disk_pos[i] == pinoset) {
                            pino_disktop[pinoset] = i;
                            break;
                        }
                    }
                    if (i == disk_quant) { pino_disktop[pinoset] = -1; }
                }
            }
            break;
        case 2:
            if (key == "Escape")
                tela = 0
            break;
        case 3:
            if (key == "Escape")
                tela = 0
            break;

    }
    return false;
}
function menu() {
    rectMode(CORNER)
    fill(250)
    rect(x, y, 200, 60, 100, 100, 100, 100)
    fill(0)
    textSize(40);
    text('O incrível jogo', 320, 100)
    textSize(32);
    text('play', 420, 200)
    text('intructions', 380, 400)


    text('credits', 400, 600)

}
function Fase1() {
    //cabecalho
    fill(0, 0, 0)
    textSize(40)
    
        text('Fase ' +  (disk_quant-1), 380, 150)
        text("mova a torre para a coluna da direita",130,200)
   
   
    //info
/*
    textSize(12)
    text('disk', 10, 30)
    text(disk, 10, 50)
    text('disk_up[disk]', 50, 30)
    text(disk_up[disk], 50, 50)
    text('disk_pos[disk]', 200, 30)
    text(disk_pos[disk], 200, 50)
    text('pino_disktop[pinoset]', 300, 30)
    text(pino_disktop[pinoset], 300, 50)
*/


    //pino1
    rectMode(CORNER)
    if (pinoset == 0) {
        fill(255)
    } else {
        fill(0)
    }
    rect(170, 360, 20, 300, 100, 100, 100)
    rect(60, 640, 240, 20, 100, 100, 100)


    //pino2
    if (pinoset == 1) {
        fill(255)
    } else {
        fill(0)
    }
    rect(430, 360, 20, 300, 100, 100, 100)
    rect(320, 640, 240, 20, 100, 100, 100)


    //pino3
    if (pinoset == 2) {
        fill(255)
    } else {
        fill(0)
    }

    rect(690, 360, 20, 300, 100, 100, 100)
    rect(580, 640, 240, 20, 100, 100, 100)

    /*
   fill(0,0,100)
   rect(x3,y3,200,40,100,100,100)
   fill(100,0,0)
   rect(x2,y2,150,40,100,100,100)
   */
    //disks

    var d = [];
    var h_disk = 40;
    var b_disk = 50;

    for (i = 0; i < disk_quant; i++) {
        d[i] = []
        if (disk_up[i]) {
            d[i][0] = 180 + pinoset * 260;
        } else {
            d[i][0] = 180 + disk_pos[i] * 260;
        }
        d[i][1] = -1;
        d[i][2] = 100 + i * 50;
        d[i][3] = h_disk;
        d[i][4] = b_disk;
    }
    var aux_cont = []
    for (i = 0; i < 3; i++) 
    {
            aux_cont[i] = cont_disk[i];
    }
    for (i = 0; i < disk_quant; i++) {
        if (disk_up[i]) {
            d[i][1] = 320
        }
        else {
            d[i][1] = 620 - 40 * (aux_cont[disk_pos[i]] -1);
            aux_cont[disk_pos[i]]--;
        }
        console.log(aux_cont[disk_pos[i]])
        console.log(cont_disk[disk_pos[i]])
    }


    console.log()   
    cor = ['red', 'green', 'blue', 'yellow', 'purple']


    for (i = 0; i < disk_quant; i++) {
        rectMode(CENTER);
        fill(cor[i]);
        rect(d[i][0], d[i][1], d[i][2], d[i][3], d[i][4])
    }


    /*
    if (disk_up[disk] == true) {
        d1[1] = 300;
    }else{
        d1[1] = 600;
    }
    */
    if (win()) {
        if(disk_quant < 5)
        {
            disk_quant++;
        }else
        {
            tela=4;
            disk_quant=2;
        }
        pinoset = 0
        pino_disktop = [0, -1, -1]
        disk = 0;
        disk_up = [];
        disk_pos = [];
        cont_disk = [disk_quant, 0, 0]
        for (i = 0; i < disk_quant; i++) {
            disk_up[i] = false;
            disk_pos[i] = 0;
        }

    }
}

function Ins() {
    textSize(32)
    text("Instruções:\n\n\nuse as teclas A,S,D e W para jogar \n\n o jogo possui apenas 3 regras\n\n1º você só pode mover uma peça por vez\n\n2º você não pode colocar um disco\nmaior sobre um disco menor\n\n3ºCada movimento consiste em remover\no disco superior e coloca-lo\n no topo de outra coluna", 150 , 150)
}
function cred() {
    textSize(32)
    text('Natanael Rodrigues\n\nturma 4C\n\nmatricula: 20180037096', 250  , 250)
}
function winscreen() {
    textSize(45)
    fill('yellow')
    text('você venceu!!!\nparabéns!!\npressione Esc para retorar ao menu', 100  , 250)
    if (key == "Escape")
                tela = 0
}