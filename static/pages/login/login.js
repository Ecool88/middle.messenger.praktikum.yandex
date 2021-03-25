import './login.scss';

import './../../main.js'
import '../../components/headline/headline.js'
import '../../blocks/login-form/login-form.js'
import '../../components/label-form/label-form.js'
import '../../components/button/button.js'
import '../../components/button-link/button-link.js'


window.onload = () => {
    const loginData = document.querySelector('#btnClick');
    loginData.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Логин ' + document.querySelectorAll('.form__input')[0].value);
        console.log('Пароль ' + document.querySelectorAll('.form__input')[1].value);
    });
};
