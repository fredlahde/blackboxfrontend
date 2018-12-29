import p5 from "p5"
const sketch = function( p ) {
    const x = 100; 
    const y = 100;
    let i = 0;

    p.setup = function() {
        p.createCanvas(900, 900);
    };

    p.draw = function() {
        p.background(151, 120, 184);
        p.fill(255);
        p.rect((x+i) % 900,y,50,50);
         i++;
    };
 };

   const myp5 = new p5(sketch);
