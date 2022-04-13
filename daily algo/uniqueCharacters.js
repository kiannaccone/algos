function getUniqueCharacter(s) {
    let unique = {};
    
    for(let i = 0; i < s.length; i++){
        let character = s[i];
        
        if(Object.keys(unique).includes(character)){
            let total = unique[character]
            unique[character] = total+1; 
        } else {
            unique[character] = 1;
        }
    }
         for(let character in unique){
            if(unique[character] === 1){
                return s.indexOf(character)+1;
            }
        }
    return -1;
};

function getUniqueCharacter(s) {
    // Write your code here
    let result = {}
    for(let i = 0; i < s.length; i++){
        !result[s[i]] ? result[s[i]]= 1 : result[s[i]]++
    }
    for(let key of Object.keys(result)){
        if(result[key] === 1)
            return s.indexOf(key)+1
    }
    return -1 
}