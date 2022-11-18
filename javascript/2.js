document.getElementById('StandartDecision').addEventListener('click', function() {
    nameUser = prompt('Здравствуйте! Как вас зовут?');
    if (nameUser.length > 0) {
        alert('Загляни в консоль! Ctrl+Shift+C я там тебе кое-что написал! =)');
        result = ConsoleGreetingUser(nameUser);
        console.log(result);
    } else {
        alert('вы забыли представится!');
    }

});

function ConsoleGreetingUser(nameUser) {
    if (nameUser.length == 0) {
        return helloUser = 'Вы не представились!';
    } else {
        return helloUser = 'Приветствую Вас ' + nameUser;
    }


}