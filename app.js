document.querySelectorAll('.q').forEach((question) => {
    const plusIcon = question.querySelector('.question .plus-icon');
    const minusIcon = question.querySelector('.question .minus-icon');
    const answer = question.querySelector('p');

    plusIcon.onclick = () => {
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'block';
        answer.style.animation = 'none';
        void answer.offsetWidth; 
        answer.style.animation = 'pDrop 0.7s ease-out forwards';
    }

    minusIcon.onclick = () => {
        plusIcon.style.display = 'block';
        minusIcon.style.display = 'none';
        answer.style.animation = 'none';
        void answer.offsetWidth;
        answer.style.animation = 'pDrop 0.7s ease-out reverse forwards';
    };
});