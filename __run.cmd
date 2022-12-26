@ECHO OFF
:: Компилирование и запуск FRONT

:: Заголовок окна - путь и имя файла
TITLE %~0

:: Запуск сервера
START "ng serve" ng serve

:: Запуск браузера
START /B chrome http://localhost:4200/index.html
