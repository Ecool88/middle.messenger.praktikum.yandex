import './signin.scss';

import './../../main.js'
import '../../components/headline/headline.js'
import '../../blocks/signin-form/signin-form.js'
import '../../components/label-form/label-form.js'
import '../../components/button/button.js'
import '../../components/button-link/button-link.js'


window.onload = () => {
    const passwordData = document.querySelector('#btnClick');
    passwordData.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Почта ' + document.querySelectorAll('.form__input')[0].value);
        console.log('Логин ' + document.querySelectorAll('.form__input')[1].value);
        console.log('Имя ' + document.querySelectorAll('.form__input')[2].value);
        console.log('Фамилия ' + document.querySelectorAll('.form__input')[3].value);
        console.log('Телефон ' + document.querySelectorAll('.form__input')[4].value);
        console.log('Пароль ' + document.querySelectorAll('.form__input')[5].value);
        console.log('Повоторите пароль ' + document.querySelectorAll('.form__input')[6].value);
    });
};
