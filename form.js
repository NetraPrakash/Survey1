class Form {

    constructor() {
      this.input = createInput("How Long Should Lockdown Last?");
      this.title = createElement('h2');
    }
    hide(){
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("A Survey");
      this.title.position(displayWidth/2 - 50, 0);
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      }

      show(){
        this.input.show();
      this.title.show();
      }
  }
  