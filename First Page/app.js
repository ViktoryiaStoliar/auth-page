const valid = document.querySelector('.valid')

valid.addEventListener('click', function () {
    try {
        const mailOrPhoneNumber = document.querySelector('.inp_em_number').value;
        const password = document.querySelector('.inp_password').value;

        if (!/^\+[0-9]{3} \([0-9]{2}\) [0-9]{3}\-[0-9]{2}\-[0-9]{2}$|^[\w]{8,}@[a-z]+.[a-z]{1,5}$/gm.test(mailOrPhoneNumber)) throw new Error('некорректный e-mail или неверный формат телефона');
        
        if (!/^\w+\+\w+\=[0-9]+$/gm.test(password)) throw new Error ('некорректный пароль')
        
        alert('Вы успешно зарегистрированы в системе')
        
    } catch (error) {
        alert(error.message)
        document.querySelector('.inp_em_number').style = "border: 4px solid red";
        document.querySelector('.inp_em_number').value = ''
        document.querySelector('.inp_password').style = "border: 4px solid red";
        document.querySelector('.inp_password').value = ''
    }
})