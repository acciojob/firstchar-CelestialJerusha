function firstChar(text) {
  // your code here
	for(let i=0;i<text.length;i++){
		if(text.charAt(i) >= 'A' && text.charAt(i)<='Z' || text.charAt(i) >= 'a' && text.charAt(i)<='z'){
			return text.charAt(i);
		}
	}
	if(text.length === 0){
		return '';
	}
	return text.charAt(0);
} 

// Do not change the code below

// const text = prompt("Enter text:");
// alert(firstChar(text));
