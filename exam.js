// LONGEST COMMON SUBSEQUENCE OF TWO STRINGS:
// note: NO string functions , NO recursions
/*options: looping (simple, easy to understand)
 or dynamic programming (good for finding the length of lcs)*/
let string1 = "ajblqcpdz";
let string2 = "aefcnbtdi";
// expected outcome:abd,acd

// through simple looping:
longestCommmonSubsequence = (string1, string2)=>{

	// find the common subsequence using string1 as basis:
	cs1=()=>{
	let startingIndex=0;
	  let result="";  
	  for (let i = 0; i < string1.length; i += 1) {
	    console.log(string1[i]);
	    console.log(startingIndex)
	    // function to find its equivalent/matching character in string2 by looping
	    // if found, a new value will be assigned to startingindex so as to not go back to index 0 of string2 for next looping
	       findMatch=()=>{ 
	            for (let b = startingIndex; b < string2.length; b += 1) {
	                if(string1[i]=== string2[b]){ 
	                    startingIndex= b+1; 
	                    result += string1[i]; 
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
	   for (let a = 0; a < string2.length; a += 1) {
	        findMatch=()=>{ 
	            // console.log(startingIndex);
	             for (let b = startingIndex; b < string1.length; b += 1) {
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
	// count the length of each cs:
	count=(s)=>{
	  let length = 0;
	  while (cs[0][length] !== undefined)
	    length++;
	  return length;
	};

let cs1Length=count(cs[0]);
let cs2Length=count(cs[1]);
console.log("length1 "+ cs1Length); console.log("length2 "+ cs2Length); 
 if(cs[0] !== undefined && cs[1] !== undefined){ 
    if(cs[0]=== cs[1] &&  cs1Length === cs2Length){return cs[0]}
    if( cs1Length > cs2Length){return cs[0]}
    if( cs1Length < cs2Length){return cs[1]}
    if( cs1Length === cs2Length && cs[0]!== cs[1]){return cs}
 }

 else{return "no common subsequence"}
 
};

longestCommmonSubsequence(string1,string2);
console.log ("ANSWER:"+ longestCommmonSubsequence(string1,string2))