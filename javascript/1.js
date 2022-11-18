//стандартное решение
document.getElementById('StandartDecision').addEventListener('click', function() {
    AlertTemperature();
});
//моё решение 
document.getElementById('MyDecision').addEventListener('click', function(e) {

    x = e.offsetX; //получаем позицию текущего клика по координатам X курсора(по элементу - кнопка)
    y = e.offsetY; //получаем позицию текущего клика по координатам Y курсора(по элементу - кнопка)

    CreateWindow(x, y); //передаем  полученные результаты клика по осям X,Y в функцию CreateWindow - функция создания окна;			
    //вешаю прослушку на поле для ввода градусов, если начинают тыкать по клавиатуре что-то передаю в функцию. keyup событие если кнопка была отжата. 

    document.getElementsByName('enterTemperature')[0].addEventListener('keyup', function() {

        degree = document.getElementsByName('enterTemperature')[0].value; //помещаю в переменную введённое значение в input
        resultConversion = PrintScreenTemperature(degree); //помещаю результат конвертации в переменную
        checkResult = String(Number.parseFloat(resultConversion, 10)) === String(resultConversion);

        if (checkResult) {
            document.getElementById('result').innerHTML = degree + '<sup>0</sup>С Цельсия по Фаренгейту будет ' + resultConversion + '<sup>0</sup>F'; //показал результат 
        } else {
            document.getElementById('result').innerHTML = '';
            document.getElementById('result').innerHTML = resultConversion;
        }

    });


});
//стандартное решение функция
function AlertTemperature() {
    inputTemperature = prompt('Введите температуру в градусах цельсия: ');
    translationFahrenheit = Math.round((9 / 5) * inputTemperature + 32);
    alert('Цельсий: ' + inputTemperature + ', Фаренгейт: ' + translationFahrenheit);
}


//моё решение 
//функция создания окна для конвертации градусов Целсья в Фаренгейты
function CreateWindow(x, y) {
    if (document.getElementById('mainContainer')) { //проверим есть ли уже у нас созданное окно? Если да то удалим его
        document.getElementById('mainContainer').remove();
    }

    let divMain = document.createElement('div'); //основной контейнер формы
    let closeDiv = document.createElement('div'); //контейнер формы для кнопки закрыть
    let inputDegree = document.createElement('div') //контейнер с предложением ввода градусов содержит поле для ввода, кнопку 
    let resultConversion = document.createElement('div') //контейнер результата конвертации градусов 

    //контейнер формы ввода градусов
    divMain.style.left = x + 135 + 'px';
    divMain.style.top = y + 30 + 'px';
    divMain.style.width = '220px';
    divMain.style.height = '200px';
    divMain.setAttribute('id', 'mainContainer');
    divMain.style.background = 'orange';
    divMain.style.boxShadow = '0px 0px 13px black';
    divMain.style.borderRadius = '10px';
    divMain.style.position = 'absolute';
    divMain.style.overflow = 'hidden';

    document.body.appendChild(divMain);
    //контейнер дополнительных кнопок формы ввода градусов(помещу кнопку закрыть окно)
    closeDiv.style.left = '0px';
    closeDiv.style.top = '0px';
    closeDiv.style.width = '100%';
    closeDiv.style.height = '30px';
    closeDiv.style.background = 'green';
    closeDiv.style.borderRadius = '10px 10px 0px 0px';
    closeDiv.style.position = 'relative';
    closeDiv.innerHTML = '<button id="closeWindowTemperature" style="position:relative;float:right;margin-right:5px;margin-top:3px;border-radius:10px;">Закрой меня</button>';
    document.getElementById('mainContainer').appendChild(closeDiv);
    //повесим сразу же прослушивание тыка на кнопку закрыть
    document.getElementById('closeWindowTemperature').addEventListener('click', function() {
        document.getElementById('mainContainer').remove();
    })
    //добавим поле ввода градусов пользователем и предложение ввести градусы
    inputDegree.style.padding = '10px';
    inputDegree.style.font = '10pt verdana';
    inputDegree.style.textAlign = 'justify';
    inputDegree.innerHTML = '<label>Введите температуру и она автоматически переведётся в Фаренгейты</label><input type="text" name="enterTemperature" style="margin-top:10px">';
    document.getElementById('mainContainer').appendChild(inputDegree);
    //создаём контейнер где будет отоброжаться результат конвертации градусов
    resultConversion.style.width = '100%';
    resultConversion.style.height = '40px';
    resultConversion.style.float = 'left';
    resultConversion.style.position = 'relative';


    resultConversion.innerHTML = '<p id="result" style="margin-left:10px;font:10pt verdana;"></p>'; //сюда будем писать результат конвертации
    document.getElementById('mainContainer').appendChild(resultConversion);
}
//функция преобразования градусов
function PrintScreenTemperature(degree) {
    number = String(Number.parseInt(degree, 10)) === String(degree); //проверка на то, число ли введено?

    if (number) {
        resultTranslation = (9 / 5) * degree + 32;
        return resultTranslation.toFixed(1); //беру 1 символ после плавающей точки
    } else {
        return resultTranslation = 'Введите градусы Цельсия!';
    }
}
