// Function to get the length of the object
function getLength(obj){
    let keys=Object.keys(obj);
    return keys.length;
}
//example
var student = {
    name : "David Rayy",
    class : "VI",
    rollno : 12 ,
};

console.log(getLength(student))