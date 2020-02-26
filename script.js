setInterval(()=> {
    let button = document.querySelector('ytd-popup-container #cancel-button');
    if(!button && getComputedStyle(button).display === 'none') return;
    let click = new Event('click');
    console.log('click on #cancel-button', button);
    button.dispatchEvent(click);
},1000);
