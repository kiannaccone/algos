function funWithAnagrams(text) {
    // Write your code here
      for(let i=0;i<text.length;i++){
        for(let j=text.length-1;j>i;j--){
      let sortedA = text[i].split("").sort().join("")
      let sortedB = text[j].split("").sort().join("")
      if(sortedA===sortedB){
        text.splice(j,1)
      }
    }
  }
  return text.sort()
}