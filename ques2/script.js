// Function to toggle the characters of a string
function toggleChars(str){
    let charArray=str.split('');
    toggleCharArray=charArray.map(char=>char===char.toUpperCase()?char.toLowerCase():char.toUpperCase());
    return toggleCharArray.join('');    
}
console.log(toggleChars("javaScripT"));
