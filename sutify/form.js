class Form{

    constructor(){
  
      this.title = createElement('h2');
      this.subtitle = createElement('h1');
      this.artist = createElement('h3');
      this.radio = createRadio();
      this.button=createButton('play');

    }


    display(){
        
       /*fill("red");
        textSize(20);
        text(" welcome to ",windowWidth-20,windowHeight-10);
        textSize(25);
        fill("green");
        text(" Sutify ",windowWidth-25,windowHeight-10);*/

        
    }


 start() {

  background(bg1);


this.title.html(" welcome to " );
this.title.position(windowWidth/2,windowHeight/2-10);


this.subtitle.html(" SUTIFY" );
this.subtitle.position(windowWidth/2,windowHeight/2-50);


this.artist.html(" choose your favourite Artist" );
this.artist.position(windowWidth/4-60,windowHeight-200);


    
    this.radio.option('BTS');
    this.radio.option('Justin  Biber');
    this.radio.style('width', '70px');
    //radio.style('height','250px');
    //radio.size(400,400);
    fill("pink");
    this.radio.position(windowWidth/4-50,windowHeight-100);
    textAlign(CENTER);
     
       this.button.position(windowWidth/4-10,windowHeight-30);


  }

  hide(){

  this.title.hide();
  this.subtitle.hide();
  this.artist.hide();
  this.radio.hide();
  this.button.hide();

  }
  
}
  