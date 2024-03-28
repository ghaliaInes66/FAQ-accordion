const plusIcon1=document.querySelector('.plus-icon1');
const minusIcon1=document.querySelector('.minus-icon1');
const p1=document.querySelector('.q1 p');
const plusIcon2=document.querySelector('.plus-icon2');
const minusIcon2=document.querySelector('.minus-icon2');
const p2=document.querySelector('.q2 p');
const plusIcon3=document.querySelector('.plus-icon3');
const minusIcon3=document.querySelector('.minus-icon3');
const p3=document.querySelector('.q3 p');
const plusIcon4=document.querySelector('.plus-icon4');
const minusIcon4=document.querySelector('.minus-icon4');
const p4=document.querySelector('.q4 p');


plusIcon1.onclick = (event) => { 
    plusIcon1.style.display='none';
    minusIcon1.style.display='block';
    p1.style.display='block';
}

minusIcon1.onclick = (event) => { 
    plusIcon1.style.display='block';
    minusIcon1.style.display='none';
    p1.style.display='none';
}

plusIcon2.onclick = (event) => { 
    plusIcon2.style.display='none';
    minusIcon2.style.display='block';
    p2.style.display='block';
}

minusIcon2.onclick = (event) => { 
    plusIcon2.style.display='block';
    minusIcon2.style.display='none';
    p2.style.display='none';
}

plusIcon3.onclick = (event) => { 
    plusIcon3.style.display='none';
    minusIcon3.style.display='block';
    p3.style.display='block';
}

minusIcon3.onclick = (event) => { 
    plusIcon3.style.display='block';
    minusIcon3.style.display='none';
    p3.style.display='none';
}

plusIcon4.onclick = (event) => { 
    plusIcon4.style.display='none';
    minusIcon4.style.display='block';
    p4.style.display='block';
}

minusIcon4.onclick = (event) => { 
    plusIcon4.style.display='block';
    minusIcon4.style.display='none';
    p4.style.display='none';
}