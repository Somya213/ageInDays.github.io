function ageInDays(){
    var birthYear = prompt('In Which Year Were You Born?');
    var age = (2021 - birthYear) * 365; 
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + age + 'days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('wrapper').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}