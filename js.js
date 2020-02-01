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

 // if (f4() = true){
 // document.getElementById('pre').style.display='block';
 // }

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
// function f4 () {
// document.getElementById('pre').style.display='none';
// }