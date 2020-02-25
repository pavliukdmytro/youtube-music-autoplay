setInterval(()=> {
    let button = document.querySelectorAll('ytd-popup-container #cancel-button');
    if(!button) return;
    let click = new Event('click');
    console.log('#cancel-button', button);
    button.dispatchEvent(click);
},1000);
