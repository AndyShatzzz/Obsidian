

Работа через свойства `innerHTML` и `textContent` имеет особенность: каждый раз, когда вы переопределяете одно из этих свойств, всё DOM-дерево, вложенное в элемент, удаляется и пересоздаётся заново. Это происходит даже если было сделано незначительное изменение.

При добавлении третьего блока в конец первый и второй блоки будут пересозданы.

В элемент `zoo` вложен другой элемент с классом `elephant`:

Скопировать кодHTML

```
<main class="zoo">
    <div class="elephant"></div>
</main> 
```

С помощью JS присвоим «слону» имя «Дамбо»:

Скопировать кодJSX

```
// Получим элемент “elephant” через .querySelector 
let elephant = document.querySelector('.elephant');

// Запишем его свойство “name”
elephant.name = 'Дамбо';

// Выведем “name” элемента “elephant” в консоль
console.log(elephant.name); // "Дамбо" 
```

Свойством `innerHTML` поселим в зоопарк еще одно животное и проверим, как поживает слон Дамбо:

Скопировать кодJSX

```
// Получим элемент ”zoo“ через .querySelector 
let zoo = document.querySelector('.zoo');

// Добавляем новый элемент ”tiger“ (тигр) внутрь ”zoo“ с помощью .innerHTML
zoo.innerHTML += '<div class="tiger"></div>'; 
```

Что получится, если мы снова найдём слона и выведем его имя в консоль?

Скопировать кодJSX

```
// Снова получим элемент “elephant”
elephant = document.querySelector('.elephant');

// Выведем “name” элемента “elephant” в консоль
console.log(elephant.name); // ??? 
```

Правильный ответ: `undefined`.

Блок с классом “elephant” до и после манипуляций с `innerHTML` — два совершенно разных блока. Новый блок забыл все свойства, которые были установлены через JavaScript.

Чтобы не терять данные в элементах, существуют методы `insertAdjacentHTML` и `insertAdjacentText`. Они добавляют разметку и текст в документ и не затрагивают существующие элементы.

`insertAdjacentHTML` не пересоздаёт первый и второй блоки.

Добавим тигра в зоопарк свойством `insertAdjacentHTML`:

Скопировать кодJSX

```
zoo.insertAdjacentHTML('beforeend', '<div class="tiger"></div>'); 
```

Значение `'beforeend'` указывает, что мы вставили HTML-код перед закрывающим тегом элемента. Возможны также значения:

-   `'beforebegin'` — вставка до открывающего тега;
-   `'afterbegin'` — вставка после открывающего тега;
-   `'afterend'` — вставка после закрывающего тега.

Относительно разметки блока это выглядит так:

Скопировать кодHTML

```
<!-- beforebegin -->
<div>
    <!-- afterbegin -->
    
    <!-- существующая разметка-->
    
    <!-- beforeend -->
</div>
<!-- afterend --> 
```

После такой вставки слон Дамбо останется Дамбо:

Скопировать кодJSX

```
// Получим элемент “elephant” через .querySelector 
let elephant = document.querySelector('.elephant');

// Запишем его свойство “name” и выведем в консоль
elephant.name = 'Дамбо';
console.log(elephant.name); // "Дамбо"

// Получим элемент “zoo” через .querySelector 
let zoo = document.querySelector('.zoo');
    
// Добавляем новый элемент “tiger” (тигр) с помощью .insertAdjacentHTML
zoo.insertAdjacentHTML('beforeend', '<div class="tiger"></div>');

// Снова получим элемент “elephant” и выведем его “name” на консоль
elephant = document.querySelector('.elephant');
console.log(elephant.name); // "Дамбо" 
```

Установленное до вставки свойство осталось на месте, а значит блок “elephant” до и после вставки один и тот же.

Свойство `insertAdjacentText` работает аналогичным образом, только вставляет текст, как и свойство `textContent`.