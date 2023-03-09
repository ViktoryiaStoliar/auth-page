const valid = document.querySelector('.valid')

valid.addEventListener('click', function () {
    try {
        const mailOrPhoneNumber = document.querySelector('.inp_em_number').value;
        const password = document.querySelector('.inp_password').value;
        const confirmPassword = document.querySelector('inp_confim_password').value

        if (!/^\+[0-9]{3} \([0-9]{2}\) [0-9]{3}\-[0-9]{2}\-[0-9]{2}$|^[\w]{8,}@[a-z]+.[a-z]{1,5}$/gm.test(mailOrPhoneNumber)) throw new Error('некорректный e-mail или неверный формат телефона');
        document.querySelector('.inp_em_number').style = "border: 4px solid black";
        
        if (!/^\w+\+\w+\=[0-9]+$/gm.test(password)) throw new Error ('некорректный пароль')
        document.querySelector('.inp_password').style = "border: 4px solid black"

        if(!(confirmPassword.value === password.value)) throw new Error ('Пароли должны совпадать!')
        
        alert('Вы успешно авторизованы в системе')
        
    } catch (error) {
        alert(error.message)
        document.querySelector('.inp_em_number').style = "border: 4px solid red";
        document.querySelector('.inp_em_number').value = ''
        document.querySelector('.inp_password').style = "border: 4px solid red";
        document.querySelector('.inp_password').value = ''
        document.querySelector('inp_confim_password').value = ''
    }
})