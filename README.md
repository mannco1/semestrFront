# Semestr portfolio Project

## Запуск приложение из idea:

### client:  
 >npm start

### server: 
 >npm run dev




## Как запустить приложения на докер контейнирах 

### Шаг 1: Установите Docker
Если Docker еще не установлен, перейдите на официальный сайт  **[Docker](https://www.docker.com/)** и следуйте инструкциям для вашей операционной системы.

### Шаг 2: Войдите в Docker Hub
Откройте терминал и выполните команду:

>docker login

Введите свои учетные данные Docker Hub (имя пользователя и пароль).

### Шаг 3: Скачайте Docker-образы client,server и mongo
Для скачивания образов выполните следующие команды:
>docker pull mongo:latest

>docker pull mannco1/dockersemestr-server:latest

>docker pull mannco1/dockersemestr-client:latest



### Шаг 4: Запустите ваши образы
Запустите контейнеры с вашими образами:
>docker run -d --name mongodb -p 27017:27017 mongo:latest

>docker run -d --name server --link mongodb:mongo -p 5000:5000 mannco1/dockersemestr-server:latest

>docker run -d --name client -p 3000:3000 mannco1/dockersemestr-client:latest
