console.log('step1');
var start=Date.now();
for (var i=l;i<1000 i++){
  console.log(i); //shows the actual 1 to 1000 processing, if no console.log(i) moves to millisec step1 step2 output 

}

var end=Date.now();
console.log('step2');
console.log(end-start);
