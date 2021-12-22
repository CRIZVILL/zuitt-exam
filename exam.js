// LONGEST COMMON SUBSEQUENCE OF TWO STRINGS:
// note: NO string functions , NO recursions
/*options: looping (simple, easy to understand)
 or dynamic programming (good for finding the length of lcs)*/
let string1 = "ajblqcpdz";
let string2 = "aefcnbtdi";
// expected outcome:abd,acd

// through simple looping:
let longestCommmonSubsequence = (string1, string2)=>{
let arr =[];
cs1=()=>{
let startingIndex=0;
  let result="";  
  for (let i = 0; i < string1.length; i += 1) {
    console.log(string1[i]);
    console.log(startingIndex)
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
  return result;}


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
   return result;
};

 let a1 =[cs1(), cs2()];
 if(a1[0]=== a1[1]){return a1[0]}
 if(a1[0].length > a1[1].length){return a1[0]}
 if(a1[0].length < a1[1].length){return a1[1]}
 if(a1[0].length = a1[1].length && a1[0]!== a1[1]){return a1}
 else{return "no common subsequence found"}
 
};
longestCommmonSubsequence(string1,string2);
console.log ("answer:"+ longestCommmonSubsequence(string1,string2))