// for (initilize;condition;++--){
//     body
// }

let strin=''
for(let i=0;i<=5;i++){
    for(let j=0;j<i;j++){
        strin+='*'
    }
    strin+='\n'
}
console.log(strin)



let string=''
for(let i=0;i<=5;i++){
    for(let j=0;j<5-i;j++){
        string+='*'
    }
    string+='\n'
}
console.log(string)



let strings=''
for(let i=0;i<=5;i++){
    for(let j=0;j<5-i;j++){
        strings+=' '
    }
    for(let k=0;k<=i;k++){
        strings+='*'
    }
strings+='\n'
}
console.log(strings)




let stri=''
for(let i=0;i<=5;i++){
    for(let j=0;j<i;j++){
        stri+=' '
    }
    for(let k=0;k<=5-i;k++){
        stri+='*'
    }
stri+='\n'
}
console.log(stri)




// hollow

let star=''
for (let i=0;i<=5;i++){
    for(let j=0;j<=5;j++){
        if(i===0 || i===5 || j===0 || j===5){
            star+="*"
        }else{
            star+=' '
        }
    }
    star+='\n'
}
console.log(star)



let str=''
for(let i=0;i<=5;i++){
    for(let j=0;j<=i;j++){

        if(i===5 || j===0 || j===i){
        str+='*'
    }else{
        str+=' '
    }
}
str+='\n'
}
console.log(str)


let str1=''
for(let i=0;i<=5;i++){
    for(let j=i;j<=5;j++){

        if(i===0 || j===5 || j===i ){
        str1+='*'
    }else{
        str1+=' '
    }
}
str1+='\n'
}
console.log(str1)


let str2=''
for (let i=0;i<=5;i++){
    for(let j=0;j<=5;j++){
            if(i===5 || j===5 || j===5-i ){
                str2+="*"
            }
            else{
                str2+=" "
            }
    }
 str2+="\n"

   
}
console.log(str2)


let str3=''
for (let i=0;i<=5;i++){
    for(let j=0;j<i;j++){
        str3+=" "
    }
    for(let k=0;k<=5-i;k++){
        if(i===0 || i===5 || k===0 || k===5-i ){
            str3+="*"
    }else{
        str3+=" "
    }

}
str3+="\n"
}
console.log(str3)



let str4=''
for (let i=0;i<=5;i++){
    for(let j=0;j<5-i;j++){
        str4+=" "
    }
    for(let k=0;k<=2*i;k++){
            str4+="*"
        }
        str4+="\n"

}
console.log(str4)



let str5=''
for (let i=0;i<=5;i++){
    for(let j=0;j<i;j++){
        str5+=" "
    }
    for(let k=0;k<=2*(5-i);k++){
            str5+="*"
        }
        str5+="\n"

}
console.log(str5)



let str6=''
for (let i=0;i<=5;i++){
    for(let j=0;j<i;j++){

        str6+=" "
    }
    for(let k=0;k<=2*(5-i);k++){
        if (i===0 || i===5 || k===0 || k===2*(5-i))
        {
            str6+="*"
        }else{
            str6+=" "
        }
    }
        str6+="\n"

}
console.log(str6)



let str7=''
for (let i=0;i<=5;i++){
    for(let j=0;j<5-i;j++){

        str7+=" "
    }
    for(let k=0;k<=2*(i);k++){
        if (i===0 || i===5 || k===0 || k===2*(i))
        {
            str7+="*"
        }else{
            str7+=" "
        }
    }
        str7+="\n"

}
console.log(str7)



let str8=''
for (let i=0;i<=3;i++){
    for(let j=0;j<4-i;j++){
        str8+=" "
    }
    for(let k=0;k<=2*i;k++){
            str8+="*"
        }      
        str8+="\n"
}
for (let i=0;i<=5;i++){
    for(let j=0;j<i;j++){
        str8+=" "
    }
    for(let k=0;k<(5-i)*2-1;k++){
            str8+="*"
        }
        str8+="\n"

}

console.log(str8)




let str9=''
for (let i=0;i<5;i++){
    for(let j=0;j<4-i;j++){
        str9+=" "
    }
    for(let k=0;k<=2*i;k++){
        if(k===0||k===(2*i)){
            str9+="*"
        }else{
            str9+=" "
        }
        }      
        str9+="\n"
}
for (let i=4;i>0;i--){
    for(let j=0;j<=4-i;j++){
        str9+=" "
    }
    for(let k=0;k<(2*i)-1;k++){
        if(k===0||k===(2*i)-2){
            str9+="*"
        }else{
            str9+=" "
        }
    }
        str9+="\n"

}

console.log(str9)




let str10 = "";
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    str10 += "*";
  }
  str10 += "\n";
}
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j < 4 - i; j++) {
    str10 += "*";
  }
  str10 += "\n";
}
console.log(str10);



// let str11 = "";
// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j < 5-i; j++) {
//     str11 += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   str11 += "\n";
// }
// for (let i = 0; i <= 4; i++) {
//   for (let j = 0; j < 4 - i; j++) {
//     str11 += "*";
//   }
//   str11 += "\n";
// }
// console.log(str11);



let str12=''
for (let i=0;i<4;i++){
    for(let j=0;j<i;j++){
        str12+=" "
    }
    for(let k=0;k<=2*(4-i);k++){
            str12+="*"
        }
        str12+="\n"
}

for (let i=0;i<=4;i++){
    for(let j=0;j<4-i;j++){
        str12+=" "
    }
    for(let k=0;k<=2*i;k++){
            str12+="*"
        }
        str12+="\n"

}
console.log(str12)




let str13=""
let a=0
while(a<=5){
    let b=0
    while(b<5-a){
        str13+="*";
        b++;
    }
    str13+="\n"
    a++;
}
console.log(str13)



let str14=""
let c=0
while(c<=5){
    let d=0
    while(d<5-c){
        str14+=" "
        d++;
    }
    let e=0
    while(e<=2*c){
        str14+="*"
        e++
    }
    str14+="\n"
    c++
    
}
console.log(str14)




let str15=""
let f=1
while(f<5){
    let g=0
    while(g<f){
        str15+=" "
        g++
    }
    let h=0
    while(h<=2*(5-f)){
        str15+="*"
        h++
    }
    str15+="\n"
    f++
}
let i=0
while(i<5){
    let j=0
    while(j<5-i){
        str15+=" "
        j++;
    }
    let k=0
    while(k<=2*i){
        str15+="*"
        k++
    }
    str15+="\n"
    i++   
}
console.log(str15)