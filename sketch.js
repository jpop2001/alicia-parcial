var cancionc;
var analyzerc;
var szc = [];

let gui;
let sm;
let s0m;
var szm;
var pg;
//juego
//Para jugar dale click en play y luego click en Martin Scorsese
//A es para la izquierda u D para la derecha
var alicia0j;
var alicia1j;
var alicia2j;
var cardj;
var fondoj;
var gameOverj;
var llavej;

var ganastej;

var puntosj;
//estas variables son del punto que car
var posxj;
var posyj;
var velj;

var posx2j;
var posy2j;
var vel2j;

//estas variables son del punto que uso como control
var controlxj;
var controlyj;
var velocidadControlj;

//gato
var gatog;
var camarag;
var xg = 0;

//oruga
var xo = [];
var yo = [];
var roto = [];
var szo = [];
var x0o = [];
var y0o = [];
var z0o = [];
var ro = [];
var go = [];
var bo = [];

var fuente;
let vid;
let song;
let doors;
let tea;
var xt = [];
var yt = [];
var velxt = [];
var velyt = [];
var szt = [];
var randt = [];

var te;

function preload() {
  song = loadSound("late.mp3");
  doors = loadSound("doors.mp3");
  fuente = loadFont("fuente.ttf");
  te = loadImage("tea.jpg");
  tea = loadSound("tea.mp3");
  aeiou = loadSound("aeiou.mp3");
  cancionc = loadSound("curio.mp3");
  gato = loadSound("gato.mp3");
  cards = loadSound("cards.mp3");
}

function setup() {
  createCanvas(1920 / 2, 1080 / 2);
  
  //sombrerero
  bgm = loadImage("mad.png");
  gui = createGui();
  szm = 25;
  s = createSlider("Slider", 50, 50, width - 520, 32, 100, 900);
  s0 = createSlider("Slider0", 50, 90, width - 520, 32, 100, 900);
  s1 = createSlider("Slider", 50, 130, width - 520, 32, 100, 900);
  s2 = createSlider("Slider0", 50, 170, width - 520, 32, 100, 900);
  s3 = createSlider("Slider", 500, 50, width - 520, 32, 100, 900);
  s4 = createSlider("Slider0", 500, 90, width - 520, 32, 100, 900);
  s5 = createSlider("Slider", 500, 130, width - 520, 32, 100, 900);
  s6 = createSlider("Slider0", 500, 170, width - 520, 32, 100, 900);

  //estilo
  s.setStyle("fillBg", color(244, 255, 89));
  s.setStyle("fillTrack", color(244, 255, 89));
  s.setStyle("fillHandle", color(198, 20, 247));

  s.setStyle("fillBgHover", color(198, 20, 247));
  s.setStyle("fillTrackHover", color(198, 20, 247));
  s.setStyle("fillHandleHover", color(244, 255, 89));

  s.setStyle("fillBgActive", color(198, 20, 247));
  s.setStyle("fillTrackActive", color(198, 20, 247));
  s.setStyle("fillHandleActive", color(244, 255, 89));

  s.setStyle("strokeBg", color(255, 255, 0));

  s0.setStyle("fillBg", color(244, 255, 89));
  s0.setStyle("fillTrack", color(244, 255, 89));
  s0.setStyle("fillHandle", color(198, 20, 247));

  s0.setStyle("fillBgHover", color(198, 20, 247));
  s0.setStyle("fillTrackHover", color(198, 20, 247));
  s0.setStyle("fillHandleHover", color(244, 255, 89));

  s0.setStyle("fillBgActive", color(198, 20, 247));
  s0.setStyle("fillTrackActive", color(198, 20, 247));
  s0.setStyle("fillHandleActive", color(244, 255, 89));

  s0.setStyle("strokeBg", color(255, 255, 0));

  s1.setStyle("fillBg", color(244, 255, 89));
  s1.setStyle("fillTrack", color(244, 255, 89));
  s1.setStyle("fillHandle", color(198, 20, 247));
  s1.setStyle("fillBgHover", color(198, 20, 247));
  s1.setStyle("fillTrackHover", color(198, 20, 247));
  s1.setStyle("fillHandleHover", color(244, 255, 89));
  s1.setStyle("fillBgActive", color(198, 20, 247));
  s1.setStyle("fillTrackActive", color(198, 20, 247));
  s1.setStyle("fillHandleActive", color(244, 255, 89));
  s1.setStyle("strokeBg", color(255, 255, 0));

  s2.setStyle("fillBg", color(244, 255, 89));
  s2.setStyle("fillTrack", color(244, 255, 89));
  s2.setStyle("fillHandle", color(198, 20, 247));
  s2.setStyle("fillBgHover", color(198, 20, 247));
  s2.setStyle("fillTrackHover", color(198, 20, 247));
  s2.setStyle("fillHandleHover", color(244, 255, 89));
  s2.setStyle("fillBgActive", color(198, 20, 247));
  s2.setStyle("fillTrackActive", color(198, 20, 247));
  s2.setStyle("fillHandleActive", color(244, 255, 89));
  s2.setStyle("strokeBg", color(255, 255, 0));

  s3.setStyle("fillBg", color(244, 255, 89));
  s3.setStyle("fillTrack", color(244, 255, 89));
  s3.setStyle("fillHandle", color(198, 20, 247));
  s3.setStyle("fillBgHover", color(198, 20, 247));
  s3.setStyle("fillTrackHover", color(198, 20, 247));
  s3.setStyle("fillHandleHover", color(244, 255, 89));
  s3.setStyle("fillBgActive", color(198, 20, 247));
  s3.setStyle("fillTrackActive", color(198, 20, 247));
  s3.setStyle("fillHandleActive", color(244, 255, 89));
  s3.setStyle("strokeBg", color(255, 255, 0));

  s4.setStyle("fillBg", color(244, 255, 89));
  s4.setStyle("fillTrack", color(244, 255, 89));
  s4.setStyle("fillHandle", color(198, 20, 247));
  s4.setStyle("fillBgHover", color(198, 20, 247));
  s4.setStyle("fillTrackHover", color(198, 20, 247));
  s4.setStyle("fillHandleHover", color(244, 255, 89));
  s4.setStyle("fillBgActive", color(198, 20, 247));
  s4.setStyle("fillTrackActive", color(198, 20, 247));
  s4.setStyle("fillHandleActive", color(244, 255, 89));
  s4.setStyle("strokeBg", color(255, 255, 0));

  s5.setStyle("fillBg", color(244, 255, 89));
  s5.setStyle("fillTrack", color(244, 255, 89));
  s5.setStyle("fillHandle", color(198, 20, 247));
  s5.setStyle("fillBgHover", color(198, 20, 247));
  s5.setStyle("fillTrackHover", color(198, 20, 247));
  s5.setStyle("fillHandleHover", color(244, 255, 89));
  s5.setStyle("fillBgActive", color(198, 20, 247));
  s5.setStyle("fillTrackActive", color(198, 20, 247));
  s5.setStyle("fillHandleActive", color(244, 255, 89));
  s5.setStyle("strokeBg", color(255, 255, 0));

  s6.setStyle("fillBg", color(244, 255, 89));
  s6.setStyle("fillTrack", color(244, 255, 89));
  s6.setStyle("fillHandle", color(198, 20, 247));
  s6.setStyle("fillBgHover", color(198, 20, 247));
  s6.setStyle("fillTrackHover", color(198, 20, 247));
  s6.setStyle("fillHandleHover", color(244, 255, 89));
  s6.setStyle("fillBgActive", color(198, 20, 247));
  s6.setStyle("fillTrackActive", color(198, 20, 247));
  s6.setStyle("fillHandleActive", color(244, 255, 89));
  s6.setStyle("strokeBg", color(255, 255, 0));

  alicia0j = loadImage("alicia0.png");
  alicia1j = loadImage("alicia1.png");
  alicia2j = loadImage("alicia2.png");
  llavej = loadImage("llave.png");
  fondoj = loadImage("fondo.jpg");
  gameOverj = loadImage("perdiste.png");
  ganastej = loadImage("ganaste.jpg");
  cardj = loadImage("card.png");
  posxj = width / 2;
  posyj = 10;
  velj = 2;

  posx2j = 20;
  posy2j = 0;
  vel2j = 3;
  puntosj = 0;

  controlxj = width / 2;
  controlyj = height - 80;
  velocidadControlj = 10;

  pgj = createGraphics(1920 / 2, 1080 / 2);
  
  pg = createGraphics(1920 / 2, 1080 / 2);
  pgo = createGraphics(1920 / 2, 1080 / 2, WEBGL);

  pgg = createGraphics(1920 / 2, 1080 / 2);

  gatog = loadImage("gato.png");

  camarag = createCapture(VIDEO);
  camarag.size(width, height);
  camarag.hide();

  gatog.resize(width, height);

  pg.background(228, 255, 173);
  pgo.background(0);

  pgc = createGraphics(1920 / 2, 1080 / 2);
  pgc.angleMode(DEGREES);
  pgc.colorMode(HSB);
  analyzerc = new p5.Amplitude();
  analyzerc.setInput(cancionc);

  for (var i = width * 2; i > 0; i -= 5) {
    szc = append(szc, i);
  }

  //oruga
  document.oncontextmenu = () => false;
  for (var i = 0; i < 555; i += 20) {
    xo = append(xo, i);
    yo = append(yo, 0);
    roto = append(roto, random(0.001, 0.02));
    szo = append(szo, random(50, 200));
  }
  for (var i = 0; i < 5; i++) {
    x0o = append(x0o, random(-1000, 1000));
    y0o = append(y0o, random(-1000, 1000));
    z0o = append(z0o, random(-1000, 1000));
    ro = append(ro, random(0, 255));
    go = append(go, random(0, 255));
    bo = append(bo, random(0, 255));
  }

  vid = createVideo("alicia.mp4");
  vid.play();
  vid.hide();
  song.play();

  x1 = 225 / 2;
  y1 = 400 / 2;
  sz = 25 / 2;

  x2 = 1000 / 2;
  y2 = 400 / 2;

  x3 = 1400 / 2;
  y3 = 350 / 2;

  x4 = 1700 / 2;
  y4 = 900 / 2;

  x5 = 840 / 2;
  y5 = 900 / 2;

  x6 = 500 / 2;
  y6 = 800 / 2;

  for (var i = 0; i < 20; i++) {
    xt = append(xt, random(0, width));
    yt = append(yt, random(0, height));
    velxt = append(velxt, random(-5, 5));
    velyt = append(velyt, random(-5, 5));
    szt = append(szt, random(10, 15));
    randt = append(randt, random(0, 1));
  }

  te.resize(1920 / 2, 1080 / 2);
}

function draw() {
  image(vid, 0, 0, width, height);

  if (frameCount >= 1) {
    song.pause();

    background(228, 255, 173);
    puerta1 = rectMode(CORNER);
    fill(204, 136, 0);
    strokeWeight(3);
    rect(120 / 2, 240 / 2, 120 / 2, 240 / 2);

    strokeWeight(2);
    stroke(0);
    fill(255, 255, 0);
    ellipse(x1, y1, sz, sz);

    puerta2 = rectMode(CORNER);
    fill(166, 164, 65);
    rect(960 / 2, 240 / 2, 117 / 2, 340 / 2);
    strokeWeight(3);

    strokeWeight(2);
    stroke(0);
    fill(255, 255, 0);
    ellipse(x2, y2, sz, sz);

    puerta3 = rectMode(CORNER);
    fill(130, 87, 0);
    rect(1300 / 2, 200 / 2, 117 / 2, 340 / 2);

    strokeWeight(2);
    stroke(0);
    fill(255, 255, 0);
    ellipse(x3, y3, sz, sz);

    puerta4 = rectMode(CORNER);
    fill(83, 102, 38);
    rect(1670 / 2, 800 / 2, 117 / 2, 150 / 2);
    strokeWeight(3);

    strokeWeight(2);
    stroke(0);
    fill(255, 255, 0);
    ellipse(x4, y4, sz, sz);

    puerta5 = rectMode(CORNER);
    fill(255, 170, 0);
    rect(770 / 2, 800 / 2, 150 / 2, 150 / 2);
    strokeWeight(3);

    strokeWeight(2);
    stroke(0);
    fill(255, 255, 0);
    ellipse(x5, y5, sz, sz);

    puerta6 = rectMode(CORNER);
    fill(120, 92, 0);
    rect(370 / 2, 600 / 2, 150 / 2, 400 / 2);
    strokeWeight(3);

    strokeWeight(2);
    stroke(0);
    fill(255, 255, 0);
    ellipse(x6, y6, sz, sz);

    //BOTONES PUERTAS

    var d = dist(x1, y1, mouseX, mouseY);

    if (d < sz / 2) {
      fill(255, 0, 0);
      if (mouseIsPressed) {
        if (tea.isPlaying()) {
        } else {
          tea.loop();
        }
        for (var i = 0; i < xt.length; i++) {
          var col = te.get(xt[i], yt[i]);
          var col0 = te.get(xt[i], yt[i]);

          if (randt[i] <= 0.5) {
            pg.fill(col0);
          } else {
            pg.fill(col);
          }
          pg.noStroke();
          pg.rect(xt[i], yt[i], szt[i], szt[i]);

          xt[i] += velxt[i];
          yt[i] += velyt[i];

          if (xt[i] > width || xt[i] < 0) {
            xt[i] = random(0, width);
            yt[i] = random(0, height);
            velxt[i] = 10;
            velyt[i] = 10;
          }

          if (yt[i] > height || yt[i] < 0) {
            xt[i] = random(0, width);
            yt[i] = random(0, height);
            velxt[i] = random(-5, 5);
            velyt[i] = random(-5, 5);
          }
        }
      }
      image(pg, 0, 0);
    } else if (tea.isPlaying()) {
      tea.stop();
    } else {
    }
    //oruga
    var d2 = dist(x2, y2, mouseX, mouseY);
    if (d2 < sz / 2) {
      if (mouseIsPressed) {
        if (aeiou.isPlaying()) {
        } else {
          aeiou.loop();
        }
        for (var i = 0; i < x0o.length; i++) {
          pgo.pointLight(ro[i], go[i], bo[i], x0o[i], y0o[i], z0o[i]);
        }

        for (var i = 0; i < xo.length; i++) {
          pgo.push();
          pgo.translate(0, 0, 0);
          pgo.rotateZ(frameCount * i * 0.0001);
          pgo.translate(xo[i], yo[i]);
          pgo.strokeWeight(1);
          pgo.noStroke();
          pgo.specularMaterial(250, 250, 250);
          pgo.shininess(40);
          pgo.sphere(szo[i]);
          pgo.pop();
        }
      }
      image(pgo, 0, 0);
    } else if (aeiou.isPlaying()) {
      aeiou.stop();
    } else {
    }

    //CANCION
    var d3 = dist(x3, y3, mouseX, mouseY);
    if (d3 < sz / 2) {
      if (mouseIsPressed) {
        if (cancionc.isPlaying()) {
        } else {
          cancionc.play();
        }
        let rmsc = analyzerc.getLevel();
        var rotc = map(rmsc, 0, 1, 0, 3);
        var grosorc = map(rmsc, 0, 1, 0, 15);
        var valc = map(rmsc, 0, 1, 0, 2);

        for (var i = 0; i < szc.length; i++) {
          var hc = map(sin(frameCount + i * valc), -1, 1, 0, 255);

          pgc.push();
          pgc.translate(width / 2, height / 2);
          pgc.rotate(frameCount + i * rotc);
          pgc.rectMode(CENTER);
          pgc.noFill();
          pgc.strokeWeight(grosorc);
          pgc.stroke(hc, 255, 255);
          pgc.rect(0, 0, szc[i], szc[i]);
          pgc.pop();
        }
      }
      image(pgc, 0, 0);
    }else if (cancionc.isPlaying()) {
      cancionc.stop();
    } else {
    }

    //GATO
    var d4 = dist(x4, y4, mouseX, mouseY);
    if (d4 < sz / 2) {
      if (gato.isPlaying()) {
        } else {
          gato.loop();
        }
      pgg.fill(255, 0, 0);
      if (mouseIsPressed) {
        pgg.tint(255, 255, 255, 5);
        pgg.image(gatog, 0, 0, width, height);

        pgg.copy(camarag, width / 2, 0, 15, height, xg, 0, 15, height);

        xg += 1;

        if (xg > width) {
          xg = 0;
        }
      }
    
    image(pgg, 0, 0);
    }else if (gato.isPlaying()) {
      gato.stop();
    } else {
    }
  

    //JUEGO
    var d5 = dist(x5, y5, mouseX, mouseY);
    if (d5 < sz / 2) {
      if (cards.isPlaying()) {
        } else {
          cards.play();
        }
      pgj.fill(255, 0, 0);
      if (mouseIsPressed) {
        pgj.background(220);

        pgj.imageMode(CORNER);
        pgj.image(fondoj, 0, 0, width, height);

        pgj.textSize(50);
        pgj.fill(0);
        pgj.text(puntosj, 50, 50);

        //este es el punto que uso de control

        //este es el punto que cae
        pgj.strokeWeight(10);
        pgj.imageMode(CENTER);
        pgj.image(llavej, posxj, posyj, 50, 90);
        //point(posx, posy);

        pgj.strokeWeight(10);
        pgj.imageMode(CENTER);
        pgj.image(cardj, posx2j, posy2j, 50, 90);

        posy2j += vel2j;

        if (posy2j > height) {
          posx2j = random(0, width);
          posy2j = 0;
          vel2j = random(6, 10);
          puntosj += 1;
        }

        var distanciaj = dist(posxj, posyj, controlxj, controlyj);

        if (distanciaj <= 50) {
          posxj = random(0, width);
          posyj = 0;
          velj = random(5, 7);
          puntosj += 1;
        }

        var distanciaj = dist(posx2j, posy2j, controlxj, controlyj);

        //este pedazo de codigo corresponde a las operaciones del punto que controlo
        if (keyIsPressed) {
          if (key == "a") {
            controlxj -= velocidadControlj;
            pgj.image(alicia2j, controlxj, controlyj, 150, 150);
          }
          if (key == "d") {
            controlxj += velocidadControlj;
            pgj.image(alicia1j, controlxj, controlyj, 150, 150);
          }
        } else {
          pgj.strokeWeight(10);
          pgj.point(controlxj, controlyj);
          pgj.imageMode(CENTER);
          pgj.image(alicia0j, controlxj, controlyj, 150, 150);
        }

        if (puntosj > 20) {
          velj = random(7, 10);
          vel2j = 20;
        }
        if (puntosj > 30) {
          pgj.imageMode(CORNER);
          pgj.image(ganastej, 0, 0, width, height);
          pgj.textSize(50);
          pgj.textAlign(CENTER);
          pgj.fill(0);
          pgj.strokeWeight(10);
          pgj.text("GANASTE :)", width / 2, height / 2);
          pgj.noLoop();
          pgj.noLoop();
        }

        //esta condicion le corresponde al punto que cae
        posyj += velj;
        if (posyj > height) {
          pgj.imageMode(CORNER);
          pgj.image(gameOverj, 0, 0, width, height);
          pgj.textSize(50);
          pgj.textAlign(CENTER);
          pgj.fill(255, 255, 0);
          pgj.strokeWeight(10);
          pgj.text("PERDISTE :(", width / 2, height / 2);
          pgj.noLoop();
        }
        if (distanciaj < 40) {
          pgj.imageMode(CORNER);
          pgj.image(gameOverj, 0, 0, width, height);

          pgj.textSize(50);
          pgj.textAlign(CENTER);
          pgj.fill(255, 255, 0);
          pgj.strokeWeight(10);
          pgj.text("PERDISTE :(", width / 2, height / 2);
          pgj.noLoop();
        }
      }image(pgj, 0, 0);
    }else if (cards.isPlaying()) {
      cards.stop();
    } else {
    }
      
    
  }
}
