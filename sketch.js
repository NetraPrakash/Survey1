var form;
var database;

function setup(){
database=firebase.database();
form= new Form();

}

function draw(){
form.display();
}