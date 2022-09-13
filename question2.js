// Problem 2 : Check whether a string is palindrome or not.
let str="naman"
let x=""
for(let i=str.length-1; i>=0; i--){
    x=x+str[i]
}
if(str==x){
    console.log("Yes")
}else{
    console.log("No")
}