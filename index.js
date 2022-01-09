function letters(letter, sound) {
    var lat = document.getElementById("LaterDisplay");
    lat.innerHTML= letter;
    var audio = new Audio(sound);
    audio.play();
}

function abbr() {
    var val = document.getElementById("LaterDisplay").innerHTML;
    var val1 = document.getElementById("LaterDisplay");
    if (val == 'A') {
        var audio = new Audio('abbrs/a.m4a');
        audio.play();
        val1.innerHTML = "Apple";
    } else if (val == 'B') {
        var audio = new Audio('abbrs/b.m4a');
        audio.play();
        val1.innerHTML = "Ball";
    } else if (val == 'C') {
        var audio = new Audio('abbrs/c.m4a');
        audio.play();
        val1.innerHTML = "Cat";
    } else if (val == 'D') {
        var audio = new Audio('abbrs/d.m4a');
        audio.play();
        val1.innerHTML = "Doll";
    } else if (val == 'E') {
        var audio = new Audio('abbrs/e.m4a');
        audio.play();
        val1.innerHTML = "Elephant";
    } else if (val == 'F') {
        var audio = new Audio('abbrs/f.m4a');
        audio.play();
        val1.innerHTML = "Frog";
    } else if (val == 'G') {
        var audio = new Audio('abbrs/g.m4a');
        audio.play();
        val1.innerHTML = "Giruff";
    } else if (val == 'H') {
        var audio = new Audio('abbrs/h.m4a');
        audio.play();
        val1.innerHTML = "Horse";
    } else if (val == 'I') {
        var audio = new Audio('abbrs/i.m4a');
        audio.play();
        val1.innerHTML = "Ice cream";
    } else if (val == 'J') {
        var audio = new Audio('abbrs/j.m4a');
        audio.play();
        val1.innerHTML = "Jug";
    } else if (val == 'K') {
        var audio = new Audio('abbrs/k.m4a');
        audio.play();
        val1.innerHTML = "Kite";
    } else if (val == 'L') {
        var audio = new Audio('abbrs/l.m4a');
        audio.play();
        val1.innerHTML = "Lamp";
    } else if (val == 'M') {
        var audio = new Audio('abbrs/m.m4a');
        audio.play();
        val1.innerHTML = "Mango";
    } else if (val == 'N') {
        var audio = new Audio('abbrs/n.m4a');
        audio.play();
        val1.innerHTML = "Nut";
    } else if (val == 'O') {
        var audio = new Audio('abbrs/o.m4a');
        audio.play();
        val1.innerHTML = "Orange";
    } else if (val == 'P') {
        var audio = new Audio('abbrs/p.m4a');
        audio.play();
        val1.innerHTML = "Pen";
    } else if (val == 'Q') {
        var audio = new Audio('abbrs/q.m4a');
        audio.play();
        val1.innerHTML = "Queen";
    } else if (val == 'R') {
        var audio = new Audio('abbrs/r.m4a');
        audio.play();
        val1.innerHTML = "Rat";
    } else if (val == 'S') {
        var audio = new Audio('abbrs/s.m4a');
        audio.play();
        val1.innerHTML = "Sun";
    } else if (val == 'T') {
        var audio = new Audio('abbrs/t.m4a');
        audio.play();
        val1.innerHTML = "Tiger";
    } else if (val == 'U') {
        var audio = new Audio('abbrs/u.m4a');
        audio.play();
        val1.innerHTML = "Umbrella";
    } else if (val == 'V') {
        var audio = new Audio('abbrs/v.m4a');
        audio.play();
        val1.innerHTML = "Violin";
    } else if (val == 'W') {
        var audio = new Audio('abbrs/w.m4a');
        audio.play();
        val1.innerHTML = "Window";
    } else if (val == 'X') {
        var audio = new Audio('abbrs/x.m4a');
        audio.play();
        val1.innerHTML = "Xilophone";
    } else if (val == 'Y') {
        var audio = new Audio('abbrs/y.m4a');
        audio.play();
        val1.innerHTML = "Yak";
    } else if (val == 'Z') {
        var audio = new Audio('abbrs/z.m4a');
        audio.play();
        val1.innerHTML = "Zebra";
    } else {
        var audio = new Audio('abbrs/click.m4a');
        audio.play();
    }
}