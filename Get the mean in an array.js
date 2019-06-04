function getAverage(marks){
    let acc=0;
    marks.forEach(el=>acc+=el);
    return Math.floor(acc/marks.length);
}

