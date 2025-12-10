const titleCarts = document.querySelectorAll('.title-cart'); // ← множественное число, querySelectorAll
const rollBtn = document.querySelector('.menu-button-1');
const sushiBtn = document.querySelector('.menu-button-2');
const drinkBtn = document.querySelector('.menu-button-3');
const hotfoodBtn = document.querySelector('.menu-button-4');
const menuImg = document.querySelectorAll('.menu-img')

const price_cart = document.querySelectorAll('.price-cart')


rollBtn.addEventListener('click', () => {
    titleCarts.forEach(el => {
        el.textContent = 'Роллы';
    });
    
    price_cart.forEach(el =>{
        el.textContent = '365 ₽'
    })

    menuImg.forEach(el =>{
        el.src = 'https://www.newsinfo.ru/image/preview/article/1/7/8/933178_amp.jpeg'
    })
});

sushiBtn.addEventListener('click', () => {
    titleCarts.forEach(el => {
        el.textContent = 'Суши';
    });

    price_cart.forEach(el =>{
        el.textContent = '400 ₽'
    })

    menuImg.forEach(el =>{
        el.src = 'https://static.tildacdn.com/tild3732-3230-4566-b132-663438633235/_2022-03-22_194411.png'
    })

});

drinkBtn.addEventListener('click', () => {
    titleCarts.forEach(el => {
        el.textContent = 'Чаи';
    });

    price_cart.forEach(el =>{
        el.textContent = '150 ₽'
    })

    menuImg.forEach(el =>{
        el.src = 'https://avatars.mds.yandex.net/i?id=da47cb752a035150746a57befc469ee4c3e1a743-10652854-images-thumbs&ref=rim&n=33&w=354&h=250'
    })
});

hotfoodBtn.addEventListener('click', () => {
    titleCarts.forEach(el => {
        el.textContent = 'Жаренный Гусь';
    });

    price_cart.forEach(el =>{
        el.textContent = '520 ₽'
    })

    menuImg.forEach(el =>{
        el.src = 'https://pr6.zoon.ru/tDPz3KOM57wGZWwQ5x5Z3Q/600x400,q85/LeIxE8NBLGToRAKoqFZib6fADZ8JrhV2XqvurLOVvUx9x4WS_qiRbEGk1gJdYvyEjo__aHV7MC7GvmwWQdlSznWzYHYd7VKDeMcmzBNfYKdB_hL50jOlrrP9QkQGyZh7IW6E0ftwjzM2eUrTBzNLrFrNr3FyFUbv7lWcgpsB9FgLsQ7EsILvvVidxJQ6y_XxKKg2LInEuH8hKlDTRlw0ZEJAklU_ltFNqU1CqicSHV0kjad6b3eQSVDevIzcxEFGmBLmT2CWop4KFuh09xzEypvAEcnwePkbdktcy9IVw7ftbek66YuJZEpJDknGrz5ZkdZFukdsxqZDC5anwScoNQ'
    })
});



// FAQ 
document.querySelectorAll('.faq-tab').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.faq-tab').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.faq-panel').forEach(panel => panel.classList.remove('active'));

        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});