const cloud=document.querySelector('.cloud');
let rest=document.getElementsByClassName('fa-snowflake');
setInterval(snowfall,50);


function snowfall(){
    const snowflake= document.createElement('i');
    snowflake.classList.add('fa-regular');
    snowflake.classList.add('fa-snowflake');
    snowflake.style.fontSize= Math.max((Math.random()*20),10)+'px';
    let a=Math.random()* 2;
    snowflake.style.animationDuration= a +'s';
    snowflake.style.opacity = Math.max(Math.random(),0.4);
    snowflake.style.left = Math.random() * window.innerWidth + 'px';

    cloud.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, a*1000);
}


