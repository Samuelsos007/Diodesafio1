//solução 1
function verif(string){
    if(!string) return "string inexistente";

   return string.split("").reverse().join("") === string;
}
console.log(verif("ama"));

//solução 2
// omo
// 012

function verif2(string){    
    if(!string) return "string inexistente";

    for(let i= 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i])
        return false;
    }
    return true;
}
console.log(verif2('abba'))