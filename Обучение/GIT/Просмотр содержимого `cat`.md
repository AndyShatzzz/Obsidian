Команда `cat` выводит в терминал содержимое текстового файла. После команды указывают имя файла, содержимое которого нужно просмотреть:

Скопировать кодBASH

```
cat index.html
cat ~/Documents/file.txt 
```

Команда `cat` работает только с файлами с текстом. Вывести этой командой, скажем, изображение, не выйдет.


```
cat index.html
# выведем в окно терминала содержимое index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

</body>
</html>    
```

У команды `cat` есть настройки, которые указывают ключами. Ключ `-n` включает нумерацию строк:

Скопировать кодHTML

```
cat -n index.html
# выведем в окно терминала содержимое index.html
   
1 <!DOCTYPE html>
2 <html lang="en">
3 <head>
4  <meta charset="UTF-8">
5  <title>Document</title>
6 </head>
7 <body>
8        
9 </body>
10 </html> 
```

Друг