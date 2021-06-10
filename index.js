function fearNotLetter(str) {
  let arr = str.split('');
  let result;
  for(let x = 0; x < arr.length; x++) {
    if(str[x+1] !== undefined) {
      if(str.charCodeAt(x) + 1 !== str.charCodeAt(x+1)) {
        result = String.fromCodePoint(str.charCodeAt(x) + 1);
      }
    }
  }
  return result;
}

fearNotLetter("abce");
console.log(fearNotLetter("abcdefghjklmno"))
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))
