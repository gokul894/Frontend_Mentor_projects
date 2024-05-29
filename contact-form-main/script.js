
document.getElementById('consent-checker').checked = false;
const q1 = document.getElementById('q1-id');
const q2 = document.getElementById('q2-id');

q1.checked = false;
q2.checked = false;

function setColor(el1, el2){
    el1.parentElement.classList.add('checked-color');
    el2.parentElement.classList.remove('checked-color');
}


q1.onchange = e =>{
    setColor(q1,q2)
}
q2.onchange = e =>{
    setColor(q2,q1)
}


/*-----   form validation & error   ------*/

const form = document.querySelector('#form');


form.addEventListener('submit', e =>{
    e.preventDefault();
    checkInput();
})



function checkInput(){
    const userName = document.querySelector('#fname');
    const lastName = document.querySelector('#lname');
    const email = document.querySelector('#email');
    const query1 = document.querySelector('#q1-id');
    const query2 = document.querySelector('#q2-id');
    const mssg = document.querySelector('#msg')
    const consent = document.querySelector('#consent-checker');
    const grandQuery = query1.parentElement.parentElement;

    // username validation

    if(userName.value ===''){
        sendError(userName, 'This field is required');
    }else{
        sendSuccess(userName)
    }
    
    // lastname validation


    if(lastName.value ===''){
        sendError(lastName, 'This field is required')
    }else{
        sendSuccess(lastName)
    }

    // mail validation

    if(email.value ===''){
        sendError(email, 'Please enter a valid email address')
    }else{
        sendSuccess(email)
    }

    // consent validation

    if(consent.value ===''){
        sendError(consent, 'This field is required')
    }else{
        sendSuccess(consent)
    }

    // massage validation

    if(mssg.value ===''){
        sendError(mssg, 'This field is required')
    }else{
        sendSuccess(mssg)
    }


    // query validation

    if(query1.checked || query2.checked){
        sendSuccess(grandQuery)
    }else{
        sendError(grandQuery, 'Please select a query type')
    }

    // consent validation

    if(consent.checked === false){
        sendError(consent, 'To submit the form, please consent to being contacted')
    }else{
        sendSuccess(consent)
    }
}


function sendError(elm, errMsg){
    const parent = elm.parentElement;
    const errdiv = parent.querySelector('.error');
    parent.classList.add('error');
    errdiv.textContent = errMsg;
}

function sendSuccess(elm){
    const parent = elm.parentElement;
    parent.classList.remove('error')
    const errdiv = parent.querySelector('.error');
    errdiv.textContent = ''
}

