class Form {

    constructor() {
        this.kg = createInput("Name");
        this.m = createInput("Name");
          this.button = createButton('Calucate');
          this.greeting = createElement('h2');
          this.title = createElement('h2');
         
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.kg.hide();
        this.m.hide();
        this.title.hide();
    }
  
    display(){
        this.title.html("Body Mass Index Calcutor");
        this.title.position(displayWidth/2 - 50, 0);
    
        this.kg.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.m.position(displayWidth/2 - 30 , displayHeight/2 - 40);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
        this.button.mousePressed(()=>{
          this.kg.hide();
          this.m.hide();
          this.button.hide();
        this.weight = this.m.value();
        this.height = this.kg.value();
          this.greeting.html("Your BMI is " + this.height/this.weight*this.weight)
          this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        });
  
    }
  }
  