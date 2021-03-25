# module-1
This is project for module 1

pull request https://github.com/Ecool88/middle.messenger.praktikum.yandex/pull/24

не заню в чем проблемы была про PR мб изначально создавался закрытый репозиторий сейчас сделал публичным? Дмитрий вопрос по тому сколько осталось ревью? Первые 2 тоже считаются там где вы писали чтобы открыть PR?

команда npm run start раздает страницы на 3000 порту с помощью express и собирает проект
команда npm run dev собирает проект для режима разработки на 3000 порту с помощью parcel

Домен netify https://quizzical-kare-014a12.netlify.app/

Вопрос по навигации тоже не пойму сейчас при запуске проекта страницы находятся по таким урл
    http://localhost:3000/profile/profile.html  profile
    http://localhost:3000/chats/chats.html      chats
    http://localhost:3000/login/login.html      login
    http://localhost:3000/signin/signin.html    signin
    http://localhost:3000/404/404.html          404
    http://localhost:3000/505/505.html          550

как сделать так чтобы навигация была к примеру http://localhost:3000/profile.html, я понимаю что это зависит от содержимого папки dist т.к там файлы .html вложены в папки, как от этого избавиться, я думаю что это из-за настройки сборки в parcel, также буду благодарен за ваши рекомендации

Вопрос насчет семантических тегов nav, header, main, footer они должны применяться на всех страницах? Можете для примера привести где будет актуально их применение?

По макету проекта оставил практически без изменений https://www.figma.com/file/a66YiMEpT1FZrLTxS9KjP0/Chat-Changed-fonts-colors изменил некоторые цвета

Вопрос по тз что значит "Разбейте все страницы на утилиты и модули"?

Хочу наследовать общие стили из src/layout/colors.scss но когда я подключаю через @import "src/layout/colors.scss" их почему-то не находит можете посмотреть в чем проблема в src/components/label-form/label-form.scss я оставил комментарий на первой строке можете посмотреть какая проблема с подключением может чего-то не хватает?




