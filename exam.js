// LONGEST COMMON SUBSEQUENCE OF TWO STRINGS:
// note: NO string functions , NO recursions
/*options: looping (simple, easy to understand)
 or dynamic programming (good for finding the length of lcs)*/
let string1 = "ajblqcpdz";
let string2 = "aefcnbtdi";
// expected outcome:abd,acd

// simple looping:
// problem:only returns one lcs
let longestCommmonSubsequence = (string1, string2)=>{
	  let result=""; 
	  let startingIndex=0;
	  for (let i = 0; i < string1.length; i += 1) {
	       match=()=>{ 
	            for (let b = startingIndex; b < string2.length; b += 1) {
	                if(string1[i]=== string2[b]){ 
	                    return startingIndex= b+1, result += string1[i]
	                    
	                  }
	            }
	       }
	       match();
	  }
	  return result;
};
console.log(longestCommmonSubsequence(string1, string2));