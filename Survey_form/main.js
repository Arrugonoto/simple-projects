/*
Project coded by @Arugonoto, based on "@lasjorg" project from freeCodeCamp.

Background image source "https://unsplash.com/photos/3994_NiNyqM", image authors "CDC USA"
*/
const answerNo = document.querySelector('.ifNoVacc');
const questionFourOther = document.querySelector('.otherQuestion4');
const questionFiveOther = document.querySelector('.otherQuestion5');

const answerNotVaccinated = () => {
    if (document.querySelector('#checkedNoVacc').checked) { 
        answerNo.classList.add('expanded')
    } 
    else answerNo.classList.remove('expanded');
}


const answerQuestionFour = () => {
    if (document.querySelector('#otherOptionQuestion4').checked) {
        questionFourOther.classList.add('expanded');
    } 
    else questionFourOther.classList.remove('expanded');
}


const answerQuestionFive = () => {
    if (document.querySelector('#otherOptionQuestion5').checked) {
        questionFiveOther.classList.add('expanded');
    } 
    else questionFiveOther.classList.remove('expanded'); 
}
