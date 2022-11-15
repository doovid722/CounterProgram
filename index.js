let count=0;
document.getElementById("decreasebtn").onclick=function(){
    count -=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increasebtn").onclick=function(){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetbtn").onclick=function(){
    count =0;
    document.getElementById("countLabel").innerHTML = count;
}


function Birthday(){
    console.log('happy birthday')
    console.log('happy birthday')
    console.log('happy birthday')

    console.log('happy birthday')
    console.log('happy birthday')  
    console.log('happy birthday')

    console.log('happy birthday')
    console.log('happy birthday')
    console.log('happy birthday')

}
Birthday();
Birthday();
function Area(width, height){
    const ar =width*height;
    return ar;
}
console.log(Area(4,5));


/*let username;
document.getElementById('mybutton').onclick= function(){
    username = document.getElementById("inpt").value;
    console.log(username);
    document.getElementById('Label').innerHTML="Hey" + username;
}
console.log(name);
document.getElementById('para1').innerHTML = 'Hello' + name;

age = window.prompt("enter the age");
age = Number(age);
age += 1;
console.log("you are ", age, "right now");
let a = 5.23;
a = String(a);
console.log(typeof a); 
let b;
b = Number("hello");
console.log(typeof b); */


/*Math 
let d = 4.4;
//d = Math.floor(d);  //floor - to round down
//ceil -  to round up
d = Math.ceil(d)
console.log(d);
let x = 3
x = Math.pow(x, 2);
console.log(x);
let y =-2;
//y = Math.sqrt(y);
//console.log(y);
y = Math.abs(y)
console.log(y);



let a;
let b;
let c;

/*a =  window.prompt("Enter side A:")
a = Number(a);

b = window.prompt("enter side B:")
b = Number(b);

c = Math.sqrt(Math.pow(a,2) + Math.pow(b, 2));
console.log(c);*/


