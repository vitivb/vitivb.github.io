function addBackground() {

    let a = [...document.querySelectorAll('.advantages__item')];
    
    a[0].style.cssText = 'background: url("img/advantages/clock.jpg") center center/cover no-repeat'; 
    a[1].style.cssText = 'background: url("img/advantages/robohand.jpg") center center/cover no-repeat';
    a[2].style.cssText = 'background: url("img/advantages/globus.jpg") center center/cover no-repeat';
    a[3].style.cssText = 'background: url("img/advantages/phone.jpg") center center/cover no-repeat';
    a[4].style.cssText = 'background: url("img/advantages/jacket.jpg") center center/cover no-repeat';
    a[5].style.cssText = 'background: url("img/advantages/card.jpg") center center/cover no-repeat';
}
addBackground();
