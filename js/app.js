'use strict';
var sum = 0
var gender = prompt('Do you think that I am Male?').toLowerCase();
if (gender == 'yes' || gender == 'y') {
    alert('It is correct');
    console.log(gender);
    sum+=1
} else {
    alert('Oops! it is wrong');
    console.log('it is wrong');
}

var major = prompt('Do you think that I am an artist?').toLowerCase();

if (major === 'yes' || major === 'y') {
    alert('Oops! it is wrong');
    console.log('it is wrong');
    
} else {
    alert('It is correct');
    console.log('It is correct');
    sum+=1
}
var work = prompt('Related to poor economical situation, Do you think me worked before?').toLowerCase();

if (work === 'yse' || work === 'y') {
    alert('It is correct');
    console.log('It is correct');
    sum+=1
} else {
    alert('Oops! it is wrong');
    console.log('it is wrong');
}
var goal = prompt('Do you think that I have some goals?').toLowerCase();
if (goal === 'yes' || goal === 'y') {
    alert('It is correct');
    console.log('It is correct');
    sum+=1
} else {
    alert('Oops! it is wrong');
    console.log('it is wrong');
}

var city = prompt('Do you thik that I am arabian').toLowerCase();

if (city === 'yes' || city === 'y') {
    alert('Oops! it is wrong');
    console.log('it is wrong');
    
} else {
    alert('It is correct');
    console.log('It is correct');
    sum+=1
}

var tall = prompt('Try to guess my hieght in cm ');
tall = Number(tall);
console.log(tall);
for (var i = 0; i <= 2; i++) {
    if (tall === 185) {
        alert('correct answer');
        sum+=1
        break;
    } else if (tall > 185) {
        alert('I am shorter -_-');
        var tall = prompt('Ty to guess my hieght in cm ');
        tall = Number(tall);

    }
    else {
        alert('Hey -_- I am taller');
        var tall = prompt('Ty to guess my hieght in cm ');
        tall = Number(tall);
    }
}

var favsport = ['football' , 'basketball' , 'volleyball' , 'swimming' , 'mma', 'hockey' , 'parkour' , 'golf' , 'mini golf' , 'ping pong' , 'tennis'];
var user = prompt('What is my favourt sport ?').toLocaleLowerCase();
 for(var i=0 ; i<=4 ; i++) {
     if(user === favsport[0] || user === favsport[9]) {
         alert('Great, it is correct');
         sum+=1
         break;
     }else{
         alert('oops! it is wrong');
         var user = prompt('What is my favourt sport ?').toLocaleLowerCase();
     }
 }
 alert('The possible answers are: ' + favsport[0] + ", " + favsport[9]);
 alert('Your final score is ' +sum + ' out of 7');