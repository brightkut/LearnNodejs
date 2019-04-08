//method js
// write a function for use in app.js
var c = 30

var obj = {};
obj.updateData = function(){
  console.log("Update Data");
}
obj.deleteuser = function(){
  console.log("deleteuser");
}
var update = function(){
  return "Update Server";

}
var add = function(a,b){
  return a+b;
}

//need to export for app.js can see function
exports.update = update;
exports.add = add;
exports.data = obj;
