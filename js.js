/*var url = document.getElementById('id_Элемента');
document.location.href = url.value;*/

/*function f4(a) {

switch(a) {
  case 'Faramir':  
window.open("https://lotr.fandom.com/wiki/Faramir");
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}*/
/*function f4(){
var x = document.getElementById("select").value;
if (a == "Dollar" ){
document.getElementById('r3').value = (x/380).toFixed(2) ;
} else if (a == "Euro"){
document.getElementById('r3').value = (x/420).toFixed(2) ;
}else if (a == "Sterling"){
document.getElementById('r3').value = (x/500).toFixed(2) ;
}
}*/
alert("Wolcome!");

 function f () {
  var a ;

  a = document.getElementById('wid').style.display='none';

return a;
 }

 function f1 () {
  let a = document.getElementById('wid').style.display='block';

  return a;
 }

 function f3 () {

  const list = ["Faramir", "Arwen", "Pippin", "Boromir", "Theoden"
  , "Elrond", "Galadriel", "Merry", "Gimli", "Eowyn", "Legolas"
  , "Frodo", "Sam", "Gandalf", "Aragorn"];

  var text = "<ol>";
for(var i = 0; i < list.length; i++) {
  text += list.length - i + "<li>" + list[i] + "</li>" + "</br>";
}
text += "</ol>";
document.getElementById("pre").innerHTML = text;
}

function f5(){ 
 if (document.getElementById("option2").checked == true && 
 	document.getElementById("option3").checked == false){
    alert("Right! Thank You!)))");
	document.getElementById('form2').style.display='none';
  } else {
    alert("You wrong!((( Try again!");
  }
}

