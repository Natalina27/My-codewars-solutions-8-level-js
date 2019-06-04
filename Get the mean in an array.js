//1.
function getAverage(marks){
    let acc=0;
    marks.forEach(el=>acc+=el);
    return Math.floor(acc/marks.length);
}
//2.

function getAverage(marks){

    return Math.floor(marks.reduce((a,b)=>a+b,0)/marks.length);
}

