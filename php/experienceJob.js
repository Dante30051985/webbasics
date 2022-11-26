document.getElementById('experienceJob').addEventListener('click', function() {
	let countFormJob = 1; //количество созданных карточек опыта
	createWindow(); //создаю основное окно и задний фон
	createFormEnter(countFormJob); //создаю форму
	eventsNewWork(countFormJob); //вешаю события на каждую карточку опыта
	eventsByPassSendDB(); //подготовка к отправке данных на сервер
	eventsClose(); //функция закрытия формы
});
//функция закрытия формы добавления опыта работы
function eventsClose() {
	document.getElementById('closeForm').addEventListener('click', function() {
		document.getElementById('ContainerForm').remove();
		document.getElementById('backgroundContainer').remove();
	})
}
//функция подготовки данных для отправки данных на сервер
function eventsByPassSendDB() {
	document.getElementsByClassName('sendDB')[0].addEventListener('click', function() {
		//сколько карточек опыта работы было создано всего?
		countJobCard = document.getElementsByClassName('wrapperContainerJob')[0].childElementCount;
		let exper = []; //массив в который пишу все введёные значения в поля input и textarea а также состояния checkbox
		for(i = 1; i <= countJobCard; i++) {
			nameCompany = document.querySelector('input[name=nameCompany' + i + ']').value;;
			startWork = document.querySelector('input[name=StartDate' + i + ']').value;;
			endWork = document.querySelector('input[name=EndWorkDate' + i + ']').value;
			post = document.querySelector('input[name=enterJobPost' + i + ']').value;
			dutiy = document.querySelector('textarea[name=wrapDuties' + i + ']').value;
			current = document.querySelector('input[name=currentWork' + i + ']:checked') !== null;
			exper.push(nameCompany, startWork, endWork, dutiy, post, current);
		}
		//передаю в функцию на отправку данных массив и количество созданных карточек опыта
		sendExperienceDB(exper, countJobCard);
	});
}
//функция отправки введёного опыта в базу данных
function sendExperienceDB(exper, countJobCard) {
	//преобразую полученный массив exper(опыта) в JSON строку
	json = JSON.stringify(exper);
	//создаю объект чтобы осуществлять HTTP запросы	
	xhr = new XMLHttpRequest();
	//создаю строку запроса используя кодирующий компонента encodeURIComponent
	param = 'anketa=' + encodeURIComponent(json) + '&card=' + encodeURIComponent(countJobCard);
	//инициализирую только что созданный запрос на отправку данных
	xhr.open('post', 'anketa.php');
	//устанавливаю заголовок запроса используя стандартное кодирование urlencoded
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	//устанавливаю обработчик на изменения состояния запроса
	xhr.onreadystatechange = function() {
			//если запрос прошёл нормально и вернул статус 200 то форму просто закрываю(можно повесить какое-нибудь, окно говорящее что данные были внесены успешно) 
			if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
				document.getElementById('ContainerForm').remove();
				document.getElementById('backgroundContainer').remove();
			}
		}
		//отправляю запрос
	xhr.send(param);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//при клике по кнопке добавить место работы счётчик карточек работы countFormJob увеличится на 1 и передаст функции createFormEnter
function eventsNewWork(countFormJob) {
	document.getElementsByClassName('addWork')[0].addEventListener('click', function() {
		countFormJob += 1
		createFormEnter(countFormJob);
	})
}
//функция создания основного окна, заднего фона, кнопки 
function createWindow() {
	let divBackground = document.createElement('div'); //основной контейнер формы
	let divContainerForm = document.createElement('div'); //контейнер основной формы для ввода опыта работы
	let titleJobEnter = document.createElement('h1');
	let closeFormJob = document.createElement('div');
	let divWrapperContainerJob = document.createElement('div');
	divBackground.setAttribute('id', 'backgroundContainer');
	divContainerForm.setAttribute('id', 'ContainerForm');
	closeFormJob.setAttribute('id', 'closeForm');
	closeFormJob.innerHTML = 'X';
	titleJobEnter.setAttribute('id', 'titleJob');
	divWrapperContainerJob.setAttribute('class', 'wrapperContainerJob');
	titleJobEnter.innerText = 'Перечислите ваш опыт работы';
	document.body.appendChild(divBackground);
	document.body.appendChild(divContainerForm);
	document.getElementById('ContainerForm').appendChild(closeFormJob);
	document.getElementById('ContainerForm').appendChild(titleJobEnter);
	document.getElementById('ContainerForm').appendChild(divWrapperContainerJob);
	let buttonAdd = document.createElement('button');
	buttonAdd.setAttribute('class', 'addWork');
	buttonAdd.innerText = 'Добавить место работы';
	document.getElementById('ContainerForm').appendChild(buttonAdd);
	let buttonSendDB = document.createElement('button');
	buttonSendDB.setAttribute('class', 'sendDB');
	buttonSendDB.innerText = 'Внести в резюме';
	document.getElementById('ContainerForm').appendChild(buttonSendDB);
}
//функция создания формы карточек опыта работы
function createFormEnter(countFormJob) {
	let divContainerJobCard = document.createElement('div'); //основной контейнер формы
	divContainerJobCard.setAttribute('class', 'containerJobCard'); //аттрибуты основной формы
	divContainerJobCard.setAttribute('id', countFormJob); //аттрибут номер формы
	document.getElementsByClassName('wrapperContainerJob')[0].appendChild(divContainerJobCard);
	let numForms = document.createElement('p');
	numForms.innerText = '#' + countFormJob;
	numForms.setAttribute('class', 'numForm');
	document.getElementById(countFormJob).appendChild(numForms);
	let divContainerTitleCompany = document.createElement('div');
	divContainerTitleCompany.setAttribute('class', 'ContainerTitleCompany');
	divContainerTitleCompany.setAttribute('id', 'ctrTitleCompany' + countFormJob);
	document.getElementById(countFormJob).appendChild(divContainerTitleCompany);
	let divContainerDateWork = document.createElement('div');
	divContainerDateWork.setAttribute('class', 'ContainerDateWork');
	divContainerDateWork.setAttribute('id', 'ctdatework' + countFormJob);
	document.getElementById(countFormJob).appendChild(divContainerDateWork);
	let divWrapperDateWorkStart = document.createElement('div');
	divWrapperDateWorkStart.setAttribute('class', 'WrapperDateWorkStart');
	divWrapperDateWorkStart.setAttribute('id', 'WrapStartWork' + countFormJob);
	document.getElementById('ctdatework' + countFormJob).appendChild(divWrapperDateWorkStart);
	let divWrapperDateWorkEnd = document.createElement('div');
	divWrapperDateWorkEnd.setAttribute('class', 'WrapperDateWorkEnd');
	divWrapperDateWorkEnd.setAttribute('id', 'WrapEndWork' + countFormJob);
	document.getElementById('ctdatework' + countFormJob).appendChild(divWrapperDateWorkEnd);
	let divContainerDuties = document.createElement('div');
	divContainerDuties.setAttribute('class', 'ContainerDuties');
	divContainerDuties.setAttribute('id', 'ctrDuties' + countFormJob);
	document.getElementById(countFormJob).appendChild(divContainerDuties);
	let divWrapperPost = document.createElement('div');
	divWrapperPost.setAttribute('class', 'WrapperPost');
	divWrapperPost.setAttribute('id', 'WrapPost' + countFormJob);
	document.getElementById('ctrDuties' + countFormJob).appendChild(divWrapperPost);
	let divWrapperDuties = document.createElement('div');
	divWrapperDuties.setAttribute('class', 'WrapperDuties');
	divWrapperDuties.setAttribute('id', 'wrapDuties' + countFormJob);
	document.getElementById('ctrDuties' + countFormJob).appendChild(divWrapperDuties);
	let labelTitleCompany = document.createElement('label');
	labelTitleCompany.innerText = 'Компания';
	document.getElementById('ctrTitleCompany' + countFormJob).appendChild(labelTitleCompany);
	let labelTitlePost = document.createElement('label');
	labelTitlePost.innerText = 'Должность';
	document.getElementById('WrapPost' + countFormJob).appendChild(labelTitlePost);
	let labelDateStartWork = document.createElement('label');
	labelDateStartWork.innerText = 'Дата начала работы';
	document.getElementById('WrapStartWork' + countFormJob).appendChild(labelDateStartWork);
	let labelDateEndWork = document.createElement('label');
	labelDateEndWork.innerText = 'Дата конца работы';
	document.getElementById('WrapEndWork' + countFormJob).appendChild(labelDateEndWork);
	let labelPostDuties = document.createElement('label');
	labelPostDuties.innerText = 'Должостные обязанности. Чем вы занимались?';
	document.getElementById('wrapDuties' + countFormJob).appendChild(labelPostDuties);
	let enterTitleCompany = document.createElement('input');
	enterTitleCompany.setAttribute('class', 'enterTitleCompany');
	enterTitleCompany.name = 'nameCompany' + countFormJob;
	document.getElementById('ctrTitleCompany' + countFormJob).appendChild(enterTitleCompany);
	///дата начала
	let chooseDateStartWork = document.createElement('input');
	chooseDateStartWork.name = 'StartDate' + countFormJob;
	chooseDateStartWork.type = 'date';
	chooseDateStartWork.setAttribute('class', 'chooseDateStartWork');
	document.getElementById('WrapStartWork' + countFormJob).appendChild(chooseDateStartWork);
	//дата конца
	let chooseDateEndWork = document.createElement('input');
	chooseDateEndWork.name = 'EndWorkDate' + countFormJob;
	chooseDateEndWork.type = 'date';
	chooseDateEndWork.setAttribute('class', 'chooseDateEndWork');
	document.getElementById('WrapEndWork' + countFormJob).appendChild(chooseDateEndWork);
	let enterJobPost = document.createElement('input');
	enterJobPost.name = 'enterJobPost' + countFormJob;
	enterJobPost.type = 'text';
	document.getElementById('WrapPost' + countFormJob).appendChild(enterJobPost);
	let enterDuties = document.createElement('textarea');
	enterDuties.name = 'wrapDuties' + countFormJob;
	document.getElementById('wrapDuties' + countFormJob).appendChild(enterDuties);
	let currentWork = document.createElement('input');
	currentWork.name = 'currentWork' + countFormJob;
	currentWork.type = 'checkbox';
	document.getElementById('ctrDuties' + countFormJob).appendChild(currentWork);
	let labelCurrentWork = document.createElement('label');
	labelCurrentWork.innerText = 'Текушее место работы: ';
	document.getElementById('ctrDuties' + countFormJob).appendChild(labelCurrentWork);
}