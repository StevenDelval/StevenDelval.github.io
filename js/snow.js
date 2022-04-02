const cloud=document.querySelector('.cloud');
let rest=document.getElementsByClassName('fa-snowflake');
setInterval(snowfall,100)
function snowfall(){
    const snowflake= document.createElement('i');
    snowflake.classList.add('fa-regular');
    snowflake.classList.add('fa-snowflake');
    snowflake.style.fontSize= Math.random() * 20 +'px';
    snowflake.style.animationDuration= Math.random()* 1.5 +'s';
    snowflake.style.opacity = Math.min(Math.random(),0.4);
    snowflake.style.left = Math.random() * window.innerWidth + 'px';

    cloud.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 1500);
}


