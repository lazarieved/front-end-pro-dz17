 var arrWithObj = [{name: 'Vlad', genus: 'male', date: 1997},
 {name: 'Vika', genus: 'female', date: 1980}, {name: 'Maks', genus: 'male', date: 1990},
 {name: 'Sasha', genus: 'male', date: 1987}, {name: 'Eva', genus: 'female', date: 2004}];
 var avgAge = 0;
 for (var i = 0; i < arrWithObj.length; i++){
     avgAge += (new Date().getFullYear() - arrWithObj[i].date);
 }
 avgAge /= arrWithObj.length;
  
 var onlyMale = arrWithObj.filter(function(sex){    
    return sex.genus === 'male';
    });

if ((arrWithObj.length / 2) < onlyMale.length) {
    console.log('Мужчин больше');
}   else if ((arrWithObj.length / 2) > onlyMale.length) {
    console.log('Женщин больше');
}   else {
    console.log('Женщин и мужчин одинаковое кол-во');
}

 console.log('Средний возраст:' + avgAge);