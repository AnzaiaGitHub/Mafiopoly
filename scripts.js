// alert("Hi im scripting");
const OPx = 50,
    OPy = 505,
    SPn = 45,
    SPe = 60;
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");

var dado = document.getElementById("dado");
var player = 1;
var resultado = document.getElementById("resultado");
var Pos1 = 0,
    Pos2 = 0,
    Pos3 = 0,
    Pos4 = 0;
function lanzardado() {
    let number = parseInt(Math.random()*6);
    number++;
    this.dado.src = "img/dado" + number + ".png";
    alert("Sacaste " + number);
    this.resultado.value = number;
}
function selectplayer(p) {
    this.player = p;
    document.getElementById("selected").innerText = p;
}
function mover() {
    moverjugador(this.player, parseInt(this.resultado.value));
}
function moverjugador(p, r) {
    // alert("moviendo al jugador " + p + " la cantidad de " + r + " casillas.");
    if (p < 2) {
        //es p1
        this.Pos1+=r;
        if (this.Pos1 >= 40) { this.Pos1 -= 40; }
        movervisual(p, this.Pos1);
    } else {
        if (p > 2) {
            if (p == 3) {
                //es p3
                this.Pos3+=r;
                if (this.Pos3 >= 40) { this.Pos3 -= 40; }
                movervisual(p, this.Pos3);
            } else {
                //es p4
                this.Pos4+=r;
                if (this.Pos4 >= 40) { this.Pos4 -= 40; }
                movervisual(p, this.Pos4);
            }
        } else {
            //es p2
            this.Pos2+=r;
            if (this.Pos2 >= 40) { this.Pos2 -= 40; }
            movervisual(p, this.Pos2);
        }
    }
}
function movervisual(p, pos) {
    let x = 0, y = 0;
    // alert("p:"+p+" - pos:"+pos);
    if (pos == 0) {
        x = OPx;
        y = OPy;
    } else {
        if (pos < 10) {
            x = OPx;
            y = OPy - SPe;
            pos -= 1;
            y -= pos * SPn;
        } else {
            if (pos == 10) {
                x = OPx;
                y = OPy - 2 * SPe - 8 * SPn;
            } else {
                if (pos < 20) {
                    y = OPy - 2 * SPe - 8 * SPn;
                    x = OPx + SPe;
                    pos -= 1;
                    x += (pos - 10) * SPn;
                } else {
                    if (pos == 20) {
                        y = OPy - 2 * SPe - 8 * SPn;
                        x = OPx + 2 * SPe + 8 * SPn;
                    } else {
                        if (pos < 30) {
                            x = OPx + 2 * SPe + 8 * SPn;
                            y = OPy - 1 * SPe - 8 * SPn;
                            pos -= 1;
                            y += (pos - 20) * SPn;
                        } else {
                            if (pos == 30) {
                                x = OPx + 2 * SPe + 8 * SPn;
                                y = OPy;
                            } else {
                                y = OPy;
                                pos -= 1;
                                x = OPx + SPe + (8 - (pos - 30)) * SPn;
                            }
                        }
                    }
                }
            }
        }
    }

    if (p < 2) {
        //es p1
        p1.style.transform=`translate(${x}px,${y}px)`;
    } else {
        if (p > 2) {
            if (p == 3) {
                //es p3
                p3.style.transform=`translate(${x}px,${y+20}px)`;
            } else {
                //es p4
                p4.style.transform=`translate(${x+20}px,${y+20}px)`;
            }
        } else {
            //es p2
            p2.style.transform=`translate(${x+20}px,${y}px)`;
        }
    }
}

function pedido(){
    let number = parseInt(Math.random()*22);
    number++;
    alert("Tu pedido es el N°"+number);
}