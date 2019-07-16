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

 var onlyFemale = arrWithObj.filter(function(sex){    
    return sex.genus === 'female';
    });

 if(onlyMale.length > onlyFemale.length) {
     console.log('Мужчин больше, их: ' + onlyMale.length)
 } else if(onlyMale.length < onlyFemale.length) {
    console.log('Женщин больше, их: ' + onlyFemale.length)
} else {
    console.log('Женщин и мужчин одинаковое кол-во, их по: ' + onlyFemale.length)
}
 console.log('Средний возраст:' + avgAge);