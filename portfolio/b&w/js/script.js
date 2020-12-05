'use strict';

let fields = document.querySelectorAll('input'),
    input = [...fields];

function listenName() {

    let defaultValue = document.querySelector('input[name="name"]').value;

    input[0].addEventListener('focus', () => {
        
        if (input[0].value == defaultValue) {
          input[0].value = ''; 
        } else {
            return false;
        }

    });

    input[0].addEventListener('blur', () => {

        if (input[0].value == '') {
            input[0].value = defaultValue;
        } else {
            return true;
        }
    });

}
listenName();

function listenEmail() {

    let defaultValue = document.querySelector('input[name="email"]').value;

    input[1].addEventListener('focus', () => {
        
        if (input[1].value == defaultValue) {
            input[1].value = '';
        } else {
            return false;
        }
        
    });

    input[1].addEventListener('blur', () => {

        if (input[1].value == '') {
            input[1].value = defaultValue;
        } else {
            return false;
        }
    });
}
listenEmail();

function listenNumber() {

    let defaultValue = document.querySelector('input[name="number"]').value;

    input[2].addEventListener('focus', () => {
        
        if (input[2].value == defaultValue) {
            input[2].value = '';
        } else {
            return false;
        }
        
    });
    
    input[2].addEventListener('blur', () => {

        if (input[2].value == '') {
            input[2].value = defaultValue;
        } else {
            return false;
        }
    });

}
listenNumber();

function listenMessage() {

    let mes = document.querySelector('textarea'),
        val = mes.getAttribute('placeholder');

    mes.addEventListener('focus', () => {
        
        mes.removeAttribute('placeholder');

    });

    mes.addEventListener('blur', () => {

        mes.setAttribute('placeholder', val);
    
    });
}
listenMessage();