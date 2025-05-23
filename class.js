document.addEventListener('DOMContentLoaded', function(){
    const video=document.getElementById('main-video');
    const gridBackground=document.getElementById('grid-background');
    const scalingText=document.getElementById('scaling-text');
    const woodBackground=document.getElementById('wood-background');
    const words=document.querySelectorAll('.word');
    const popupText=document.getElementById('popup-text');
    const defocusText=document.getElementById('defocus-text');
    const techCompaniesText=document.getElementById('tech-companies-text');
    const slidingText=document.getElementById('sliding-text');
    const blinkingText=document.getElementById('blinking-text');
    const risingWord=document.getElementById('rising-word');

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
        if(video.currentTime >=143 && video.currentTime <143.5){
            woodBackground.classList.add('visible');
        }
        if(video.currentTime >=147){
            woodBackground.classList.remove('visible');
        }
        if(video.currentTime >=143){
            const elapsed=video.currentTime-143;
            const totalDuration=147-143;
            words.forEach((word,index)=>{
                if (elapsed >=(index * totalDuration/words.length)){
                    word.classList.add('visible');
                }
            });
        if(video.currentTime >=157 && video.currentTime <157.5){
            popupText.classList.add('popup-active');
        }
        if(video.currentTime >=159){
            popupText.classList.remove('popup-active');
         }
        if(video.currentTime >=227 && video.currentTime < 227.5) {
            defocusText.classList.add('defocused');
        }
        if(video.currentTime >=230){
            defocusText.classList.remove('defocused');
        }
        if(video.currentTime >=305 && video.currentTime < 305.5){
            techCompaniesText.classList.add('visible');
        }
        if(video.currentTime >=309){
            techCompaniesText.classList.remove('visible');
        }
        if(video.currentTime >=333 && !hasAnimationStarted){
            slidingText.classList.add('slide-active');
            hasSlidingStarted=true;
            console.log('滑动动画已触发');
        }
        if(video.currentTime >=414 && ! blinkingText.classList.contains('blink-active')){
            blinkingText.classList.add('blink-active');
            console.log('闪烁动画已启动');
        }
        if(video.currentTime >=439 && !
            risingWord.classList.contains('rise-up')){
                risingWord.classList.add('rise-up');
                console.log('文字已上升-时间：', video.currentTime);
            }
    }});
});
