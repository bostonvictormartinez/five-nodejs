//gives me access to outer, created everytime a function is created at function timeout
//create local variable call node this is function available only in init function has access to variable



function init(){
  var name="node";
  function displayName(){
    console.log(name);
  }
  displayName();
}
init();

function initA(){
  var name='name of me';
  function init2(){
    console.log(name)
  }init2(name)
}initA()





function initt(){
  var name2="hey now";
  function newName(){
    console.log(name2)
  }newName(name2)
}initt()

function runTask(){
  var sunny='not cloudy';
   function isCloud(){
     console.log(sunny)

   }isCloud(sunny)
}runTask()


function init(){
  var name="jpoh";
  function newName(){
    console.log(name)
  }newName(name)
}init()
