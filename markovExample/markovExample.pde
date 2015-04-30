import rita.*;

RiMarkov m;

void setup() {
  size(500, 500);
  RiText.defaultFontSize(18);
  new RiText(this, "click to generate");
  
  m = new RiMarkov(4); //n-gram of 3
  m.loadFrom(new String[] {"annakarenina.txt", "warandpeace.txt"}, this);
  
}

void draw() {
  
  background(255);
  RiText.drawAll();
  
}

void mousePressed() {
  if (!m.ready()) return;
  
  RiText.disposeAll();
  
  String[] lines = m.generateSentences(5);
  
  RiText.createLines(this, lines, 50, 50, 400, 400);
  
}
