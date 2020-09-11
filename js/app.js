'use strict';


var sum = 0

var gender = prompt('Do you think that I am Male?').toLowerCase();
// declaring a function
function funGender(){
if (gender == 'yes' || gender == 'y') {
    alert('It is correct');
    console.log(gender);
    sum+=1
} else {
    alert('Oops! it is wrong');
    console.log(gender);
}
}
//  invoking a function
funGender(); 

var major = prompt('Do you think that I am an artist?').toLowerCase();
// declaring the funtion funartist
function funArtist(){
if (major === 'yes' || major === 'y') {
    alert('Oops! it is wrong');
    console.log(major);

} else {
    alert('It is correct');
    console.log(major);
    sum+=1
}
}

// invoking the function
funArtist();


var work = prompt('Related to poor economical situation, Do you think me worked before?').toLowerCase();
//  declaring a function 
function funWork(){
if (work === 'yse' || work === 'y') {
    alert('It is correct');
    console.log(work);
    sum+=1
} else {
    alert('Oops! it is wrong');
    console.log(work);
}
} 
// invok the funWork funtion
funWork();


var goal = prompt('Do you think that I have some goals?').toLowerCase();
// declaring function
function funGoal(){
if (goal === 'yes' || goal === 'y') {
    alert('It is correct');
    console.log(goal);
    sum+=1
} else {
    alert('Oops! it is wrong');
    console.log(goal);
}
}
// invoking the funGoal 
funGoal();



var city = prompt('Do you thik that I am arabian').toLowerCase();
// declaring function 
function funArabian(){
if (city === 'yes' || city === 'y') {
    alert('Oops! it is wrong');
    console.log(city);

} else {
    alert('It is correct');
    console.log(city);
    sum+=1
}
}
// invoking funArabian 
funArabian();


// declaring funHieght

 var tall = 0 ;

function funHieght(tall) {

    for (var i = 0; i <= 3; i++) {
        var tall = prompt('Ty to guess my hieght in cm ');
        tall = Number(tall);
        if (tall > 185) {
           
            alert('I am shorter -_-');
            
             tall = Number(tall);
            console.log(tall);

        }
        else if (tall < 185) {
            alert('Hey -_- I am taller');
            tall = Number(tall);
            console.log(tall);
        }
        else if (tall === 185) {
            alert('correct answer');
            sum += 1
            console.log(tall);
            break;
        }
    }

}


// invoking funHieght 
funHieght(tall);


var favSport = ['football' , 'basketball' , 'volleyball' , 'swimming' , 'mma', 'hockey' , 'parkour' , 'golf' , 'mini golf' , 'ping pong' , 'tennis'];
var user= 0;
// declaring function 
function funSport(user){
 for(var i=0 ; i<=5 ; i++) {
    var user = prompt('What is my favourite sport ?').toLocaleLowerCase();
     if(user === favSport[0] || user === favSport[9]) {
        alert('Great! it is correct');
         sum+=1
         console.log(user);
         break;
     }else{
         alert('oops! it is wrong');
         
         console.log(user);
     }
 }
}
// invoking funSport
funSport(user);





 alert('The possible answers are: ' + favSport[0] + ", " + favSport[9]);


 alert('Your final score is ' +sum + ' out of 7');

//  updated By Diana 