// LONGEST COMMON SUBSEQUENCE OF TWO STRINGS:


let string1 = "ajblqcpdz";
let string2 = "aefcnbtdi";
// expected outcome:abd,acd

// through simple looping:
longestCommmonSubsequence = (string1, string2)=>{

	// count the length of of string:
	count=(s)=>{
	  let length = 0;
	  while (s[length] !== undefined)
	    length++;
	  return length;
	};
	let lengthOfString1 = count(string1);
	let lengthOfString2 = count(string2);

	// find the common subsequence using string1 as basis:
	cs1=()=>{
		let startingIndex=0;
	  	let result="";  

	  for (let a = 0; a < lengthOfString1; a += 1) {
	    // function to find its equivalent/matching character in string2 by looping
	    // if found, a new value will be assigned to starting index so as not to go back to index 0 of string2 for next looping
	       findMatch=()=>{ 
	            for (let b = startingIndex; b < lengthOfString2; b += 1) {
	                if(string1[a]=== string2[b]){ 
	                    startingIndex= b+1; 
	                    result += string1[a]; 
	                    break;
	                  }
	            }
	       }
	       findMatch();
	  }
	  if(result !== ""){return result;}
	  
	};

	// find the common subsequence using string2 as basis:
	cs2=()=>{
	   let result=""; 
	   let startingIndex=0;

	   for (let a = 0; a < lengthOfString2; a += 1) {
	        findMatch=()=>{ 
	             for (let b = startingIndex; b < lengthOfString1; b += 1) {
	                 if(string2[a]=== string1[b]){ 
	                     startingIndex= b+1;
	                      result += string2[a];
	                      break;
	                     
	                   }
	             }
	        }
	        findMatch();
	   }
	   if(result !== ""){return result;}
	};

// -----supppose .length isn't allowed to use-------
		let cs = [cs1(), cs2()];
		let cs1Length=count(cs[0]);
		let cs2Length=count(cs[1]);

 		if(cs[0] !== undefined && cs[1] !== undefined){ 
 		   if(cs[0]=== cs[1] &&  cs1Length === cs2Length){return cs[0]}
		    if( cs1Length > cs2Length){return cs[0]}
		    if( cs1Length < cs2Length){return cs[1]}
		    if( cs1Length === cs2Length && cs[0]!== cs[1]){return cs}
		 }

 else{return "No common subsequence found"}
 
};



longestCommmonSubsequence(string1,string2);

