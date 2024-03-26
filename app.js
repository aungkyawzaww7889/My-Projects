// console.log("Hello");
const timetables = document.getElementById('timetables');
const firsttitles = document.getElementById('firsttitles');
const secondtitles = document.getElementById('secondtitles');
const days = document.getElementById('days');
const classes = document.getElementById('classes');
const texteffects = document.querySelectorAll('#texteffects');


const timelanguages = ["Time Tables","Your Timetables","Check Your Timetables"];
const classnames = ["JQuery","CSS Inter","PHP","Ubuntu","JS Small App","Free Today!!!"];
const datenames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let getdate = new Date();

// let getdays = String(getdate.getDay());
let getdays = getdate.getDay();
// console.log(getdays);
// let getdays = 0;


days.innerHTML = datenames[getdays];
// console.log(datenames[getdays]);

if(getdays === 0){
    classes.innerHTML = classnames[5];
}else if(getdays === 1){
    classes.innerHTML = `(${classnames[0]}) and (${classnames[2]})`;
}else if(getdays === 2){
    classes.innerHTML = `(${classnames[0]}) and (${classnames[2]})`;
}else if(getdays === 3){
    classes.innerHTML = `(${classnames[3]}) and (${classnames[3]})`;
}else if(getdays === 4){
    classes.innerHTML = `(${classnames[0]})`;
}else if(getdays === 5){
    classes.innerHTML = `(${classnames[4]})`;
}else if(getdays === 6){
    classes.innerHTML = `(${classnames[1]})`;
}else{
    // console.log("great");
}




//texteffects

texteffects.forEach(function(texteffect){
    // console.log(texteffect);

    const arrtexts = texteffect.innerText.split("");
    // console.log(arrtexts);
    texteffect.innerHTML = '';

    arrtexts.forEach(function(arrtext,idx){
        // console.log(arrtext);

        const createp = document.createElement('em');
        createp.textContent = arrtext;
        createp.style.animationDelay = `${idx * 0.1}s`;

        texteffect.append(createp);
        // console.log(createp);
    });

});



// for(let i=0; i< timelanguages.length; i++){
//     console.log(timelanguages[i]);
// }

function* generator(){
    var idx =0;
    while(true){
        yield idx ++;

        if(idx > 2){
            idx = 0;
        }
    }
}

let genfun = generator();
// console.log(genfun.next().value);
// console.log(genfun.next().value);



function textgo(words){

    // console.log(words[1]);
    // console.log(getlengthtimes);

    let x = 0;
    timetables.innerHTML = '';

    let showinterval = setInterval(function(){
        if(x >= words.length){
            clearInterval(showinterval);
            delwords();
        }else{
            timetables.innerHTML += words[x];
            x++;
        }

    },200)


}


function delwords(){
    let timetablesvales = timetables.innerHTML;
    // console.log(timetablesvales);

    let timetablesidx = timetablesvales.length-1;
    // console.log(timetablesidx);


    let delinterval = setInterval(function(){
        if(timetablesidx >= 0){
            timetables.innerHTML = timetables.innerHTML.substring(0,timetables.innerHTML.length-1);
            timetablesidx--;
        }else{
            textgo(timelanguages[genfun.next().value]);
            clearInterval(delinterval);
        }

    },200)


}

textgo(timelanguages[genfun.next().value]);



// setInterval(function(){
//     textgo();
// },500);