const correctLogin = "qwertY"; //registered login & pass
const correctPassword = "12345Y";

window.addEventListener('load', formData);

function formData () {
    const loginForm = document.getElementById('login-form');
    const selectLogin = loginForm.querySelector('input[name="login"]');
    //const labelLogin = loginForm.querySelector('label[for="login"]'); //*
    const selectPassword = loginForm.querySelector('input[name="password"]');
    //const labelPassword = loginForm.querySelector('label[for="password"]');//*
    const rememberMe = document.getElementById('remember-me');
    const sendButton = document.getElementById('send-data');
    
    function check() { //check if logged in
        if (localStorage.getItem('login') === correctLogin && localStorage.getItem('password') === correctPassword) {
            alert('Окно приветствия. Логин: ' + localStorage.getItem('login')); //if u need u can use redirect below
            //window.location.replace("logged.html");
        }
    }
    check();

    selectLogin.onfocus = function () { //delete symbols
        if (selectLogin.value === 'Заполните поле') {
            selectLogin.value = '';
            selectLogin.classList.remove('notvalid');
            selectLogin.previousSibling.classList.remove('notvalid-text');
        }
    }
    selectPassword.onfocus = function () { //delete symbols
        if (selectPassword.value === 'Заполните поле') {
            selectPassword.value = '';
            selectPassword.classList.remove('notvalid');
            selectPassword.type = 'password';
            selectPassword.previousSibling.classList.remove('notvalid-text');
        }
    }
    selectLogin.oninput = function () { //replace symbols
        selectLogin.value = selectLogin.value.replace(/[^A-Za-zА-Яа-яЁё\'\s\-0-9\-]/g,'');
    }
    selectPassword.oninput = function () { //replace symbols
        selectPassword.value = selectPassword.value.replace(/[^A-Za-zА-Яа-яЁё\'\s\-0-9\-]/g,'');
    }
    
    sendButton.onclick = sendData; //sending login and pass (method post disabled)
    function sendData () {
        event.preventDefault();
        
        const loginValue = selectLogin.value;
        const passwordValue = selectPassword.value;
        if(loginValue === correctLogin && passwordValue === correctPassword && rememberMe.checked) {
            localStorage.setItem('login', loginValue);
            localStorage.setItem('password', passwordValue);
            window.location.replace("logged.html");
        } else if (loginValue === correctLogin && passwordValue === correctPassword){
            window.location.replace("logged.html");
        } else if (loginValue == '') {
            selectLogin.value = 'Заполните поле';
            selectLogin.classList.add('notvalid');
            selectLogin.previousSibling.classList.add('notvalid-text');
        } else if (passwordValue == '') {
            selectPassword.value = 'Заполните поле';
            selectPassword.type = 'text';
            selectPassword.classList.add('notvalid');
            selectPassword.previousSibling.classList.add('notvalid-text');
        } else alert('Вы ввели неправильный логин или пароль. Логин: qwertY, Пароль: 12345Y. Чекбокс рабочий. Если стоит галочка, вход будет запоминаться. При обновлении страницы перенаправление выключено. Если хотите включить - раскоментируйте строку вверху.');
            
    }
}
//# sourceMappingURL=main.js.map
