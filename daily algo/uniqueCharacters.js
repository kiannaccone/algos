function getUniqueCharacter(s) {
    let spot = {};
    
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        
        if(Object.keys(spot).includes(char)){
            let amount = spot[char]
            spot[char] = amount+1; 
        } else {
            spot[char] = 1;
        }
    }
         for(let char in spot){
            if(spot[char] === 1){
                return s.indexOf(char)+1;
            }
        }
    return -1;
};