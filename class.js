document.addEventListener('DOMContentLoaded', function(){
    const video=document.getElementById('main-video');
    const gridBackground=document.getElementById('grid-background');
    const scalingText=document.getElementById('scaling-text');

    let hasAnimationStarted=false;

    video.addEventListener('timeupdate', function(){
        if (video.currentTime >=56 && video.currentTime<56.5){
            gridBackground.classList.add('visible');
            setTimeout(function(){
                gridBackground.classList.remove('visible');
            },1500);
        }
        if(video.currentTime >=108 && !hasAnimationStarted){
            scalingText.classList.add('animate-scale');
            hasAnimationStarted=true;
        }
        if(video.currentTime >=110 && hasAnimationStarted){
                scalingText.classList.remove('animate-scale');
                hasAnimationStarted=false;
        }
    });
});
