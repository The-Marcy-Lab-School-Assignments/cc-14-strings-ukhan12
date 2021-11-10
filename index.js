//write your code here

function stripUpperCase(str){
    let newString="";
    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() === str[i]){
            newString += str[i];
        }
    }
    return newString;
}