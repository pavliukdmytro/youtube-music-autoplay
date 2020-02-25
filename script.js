setInterval(()=> {
    let button = document.querySelector('ytd-popup-container yt-formatted-string');
    if(!button) return;
    let click = new Event('click');
    button.dispatchEvent(click);
    console.log(button);
},1000);
