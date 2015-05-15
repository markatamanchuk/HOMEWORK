/*При клике на кнопку исчезает элемент с id="text".*/

function inviza(){
	text.style.display = 'none'
}
	btnInv.addEventListener('click',inviza);
	

/*Кнопка при клике на которую, она будет скрывать сама себя.*/

function selfInviza(){
	btnSelfInv.style.display='none'
}
	btnSelfInv.addEventListener('click',selfInviza)
	

/*В переменной button1 находится кнопка. Изначально обработчиков на ней нет. 
	Что будет выведено при клике после выполнения кода?*/

button1.addEventListener("click", function() { alert("1"); });

button1.removeEventListener("click", function() { alert("1"); });

button1.onclick = function() { alert(2); };


/*Раскрывающееся меню*/

function forSolar(){
	solarSys.classList.toggle('open');
}	
	planets.addEventListener('click', forSolar);

/*	var menuElem = document.getElementById('sweeties');
    var titleElem = menuElem.querySelector('.title');

    titleElem.onclick = function() {
    menuElem.classList.toggle('open');
    };*/


/*Карусель*/

/* этот код помечает картинки, для удобства разработки */
    var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.position = 'relative';
      var span = document.createElement('span');
      // обычно лучше использовать CSS-классы,
      // но этот код - для удобства разработки, так что не будем трогать стили
      span.style.cssText = 'position:absolute;left:0;top:0';
      span.innerHTML = i + 1;
      lis[i].appendChild(span);
    }

    /* конфигурация */
    var width = 290; // ширина изображения
    var count = 3; // количество изображений

    var carousel = document.getElementById('carousel');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');

    var position = 0; // текущий сдвиг влево

    carousel.querySelector('.prev').onclick = function() {
      if (position >= 0) return; // уже сдвинулись до упора

      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      if (position <= -width * (listElems.length - count)) return; // уже до упора

      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
	
	
	//Спрятать Сообщение
	
var buttons = document.querySelectorAll('#messages-container .remove-button');

	for (var i = 0; i < buttons.length; i++) {
		var button = buttons[i];

		button.onclick = function() {
        var el = this.parentNode;
        el.parentNode.removeChild(el);
      };
    }