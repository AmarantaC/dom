/*--------------------- Signos --------------------- */

class Signo{
    constructor(nombre, mensaje, img){
        this.nombre = nombre;
        this.mensaje = mensaje;
        this.img = img;
               
    }
};

const aries = new Signo ("aries", "Aunque se hayan suavizado los problemas, especialmente con los amigos, la relación no augura buen panorama.","img/aries.jpg");
const tauro = new Signo ("tauro", "Evita que los celos te jueguen una mala pasada. Piensa dos veces antes de hacer comentarios irónicos que ofusquen a tu pareja.","img/tauro.jpg");
const geminis = new Signo ("geminis", "Es momento de cerrar círculos. Esa historia inconclusa merece un final, ya que tu pareja no soportará convivir con el pasado.","img/geminis.jpg");
const cancer = new Signo ("cancer", "Situación oportuna para complacer con una cena romántica y una noche tranquila a la persona que te atrae.","img/cancer.jpg");
const leo = new Signo ("leo", "Los encuentros virtuales de recreo con amistades estimularán tu lado más romántico. Presta atención a señales indirectas.","img/leo.jpg");
const virgo = new Signo ("virgo", "Tu bienestar lo encontrarás en las cosas más pequeñas, en la familia, una cena, una película. La soledad será tu aliada.","img/virgo.jpg");
const libra = new Signo ("libra", "Cierto clima de tensión y traiciones se respira en tu trabajo. Lo mejor será tomar distancia de algunos colegas y acercarte más a otros.","img/libra.jpg");
const escorpio = new Signo ("escorpio", "Trata de descansar un poco más y así relajarte del estrés diario de tu trabajo. Renueva en lo posible tu interés por la vida sana.","img/escorpio.jpg");
const sagitario = new Signo ("sagitario", "No habrá vuelta atrás de las determinaciones que pretendes tomar en el día de hoy. Piensa dos veces antes de hacerlo.","img/sagitario.jpg");
const capricornio = new Signo ("capricornio", "Tus relaciones sociales experimentarán un gran giro, aunque se manifestarán de muy diferentes formas.","img/capricornio.jpg");
const acuario = new Signo ("acuario", "Surgen nuevas gestiones y negocios importantes. No realices cambios radicales, simplemente mejora lo que tienes.","img/acuario.jpg");
const picis = new Signo ("picis", "No habrá vuelta atrás de las determinaciones que pretendes tomar en el día de hoy. Piensa dos veces antes de hacerlo.","img/picis.jpg");

const signos = [aries, tauro, geminis, cancer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario, picis];

/*------------------- Saludo -------------------- */

function saludo(){

    let signoSuerte = prompt("Cual es tu signo: ").toLowerCase();
    while(signoValido = ! (signos.some(Signo => Signo.nombre == signoSuerte))){
        signoSuerte = prompt("Ingrese un signo valido: ").toLowerCase();
    }

let signoValidado = signos.find(Signo => Signo.nombre == signoSuerte);
const contenedor_texto = document.getElementById("contenedor_texto");
const contenedor_info = document.getElementById("contenedor_info");

const saludo = document.createElement("h1");
saludo.innerText = `Hola ${signoValidado.nombre}!`;
contenedor_texto.appendChild(saludo);

const horoscopo = document.createElement("p");
horoscopo.innerText = `${signoValidado.mensaje}`;
contenedor_texto.appendChild(horoscopo);

const image = document.createElement("div");
image.innerHTML = `<img src= ${signoValidado.img}>`;
contenedor_info.appendChild(image);
}

saludo();


