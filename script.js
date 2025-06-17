/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const currentForecastTitle = document.querySelector ('.current-forecast h1');
const currentForecastProbability = document.querySelector('.current-forecast p');
const forecastsContainer = document.querySelector('.forecasts');
const forecastTemplate = document.querySelector('#forecast-item');

forecastBtn.addEventListener('click', function() {
addForecastToList();
generateNewForecast();
})

function getRandomValue(min, max) {
return min + Math.floor(Math.random() * (max - min))
}

function generateForecastText(num) {
switch(num) {
case 0:
case 7:
return "Все будет хорошо!";
case 1:
case 4:
return "Тебя ждет просто умопомрачительный день!";
case 2:
case 5:
return "Скоро будет прибавка в зарплате";
case 3:
case 6:
return "Сегодня вечером тебя ожидает приятный сюрприз";
case 8:
case 9:
return "Ты найдешь вещь, которую теряла";
default:
return "Тебе точно зачтут этот модуль на курсе";
}
}

function generateNewForecast() {
const randomValue = getRandomValue(0, 10);
const randomProbablity = getRandomValue(0, 101);

currentForecastTitle.textContent = generateForecastText(randomValue)
currentForecastProbability.textContent = Вероятность: ${randomProbablity}%
}

function addForecastToList() {
const title = currentForecastTitle.textContent;
const probability = currentForecastProbability.textContent;

if (!title || !probability) {
return;
}

const forecastToAdd = forecastTemplate.content.cloneNode(true);
forecastToAdd.querySelector('h3').textContent = title;
forecastToAdd.querySelector('p').textContent = probability;
forecastsContainer.prepend(forecastToAdd);
}