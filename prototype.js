//prototype are objects
//here I learned to call the function beside console.log. create
// var p  added to calculateAge using p.calculateAge whree p can be api driven data.
//where as calculateAge is the function that sets platform for p and fulfills calculateAge function p variables

function person(name, job, birthYear){
  this.name=name;
  this.job=job;
  this.birthYear=birthYear;

}
console.log(person.prototype);
  person.prototype.calculateAge=function(){
    console.log('current age' + (2019 - this.birthYear));
  }
  var p=new person('john','IT', '1980');
  p.calculateAge();
