@ECHO OFF
:: Компилирование и запуск FRONT

:: Устанавливает заголовок окна
TITLE Run "ng serve"

:: Запуск сервера
START "ng serve" ng serve

:: Запуск браузера
START /B chrome http://localhost:4200/index.html
