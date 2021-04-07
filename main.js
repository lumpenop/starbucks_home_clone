


/////////////////// main visual ///////////////////////
const img = document.querySelectorAll('.main_slider img')
function opacityOn(sliderIndex){
    
    if(sliderIndex==undefined){
        if(img[0].className=='' || img[0].className=='opacityOn'){
            img[0].className = 'opacityOff';
            img[1].className = 'opacityOn';
        } else if (img[0].className=='opacityOff'){
            img[1].className = 'opacityOff';
            img[0].className = 'opacityOn';
        }
    } else {
        if(sliderIndex.className=='slide_page0'){
            img[1].className = 'opacityOff';
            img[0].className = 'opacityOn';
            document.querySelector('.slide_page1').style.background = 'url(https://www.starbucks.co.kr/common/img/coffee/icon/visual_off.png)';
            sliderIndex.style.background = 'url(https://www.starbucks.co.kr/common/img/coffee/icon/visual_on.png)';
            
        } else {
            img[1].className = 'opacityOn';
            img[0].className = 'opacityOff';
            document.querySelector('.slide_page0').style.background = 'url(https://www.starbucks.co.kr/common/img/coffee/icon/visual_off.png)';
            sliderIndex.style.background = 'url(https://www.starbucks.co.kr/common/img/coffee/icon/visual_on.png)';
        }
    }

}

let setOpac = setInterval(opacityOn, 3000)

clickOpac = (sliderIndex) => {
    clearInterval(setOpac);
    opacityOn(sliderIndex);
    setOpac = setInterval(opacityOn, 3000)
}

clearOpac = (pause) => {
    clearInterval(setOpac);
    pause.style.display = 'none';
    document.querySelector('.start').style.display = 'inline-block';
}

startOpac = (start) => {
    clearInterval(setOpac);
    setOpac = setInterval(opacityOn, 3000)
    start.style.display = 'none';
    document.querySelector('.pause').style.display = 'inline-block';
}

///////////////////// gnb nav ////////////////////////////

gnbMenu = document.querySelectorAll('.gnb_nav_con > ul > li> h2> a')

for(i=0; i<gnbMenu.length; i++){
    gnbMenu[i].setAttribute("onmouseover","gnbSubOn(this);");
    gnbMenu[i].setAttribute("onmouseout","mouseOff();");
}



mouseOver = (menu) => {
    for(i=0; i<gnbMenu.length; i++){
        if(gnbMenu[i]==menu){

            return i;

        }
    }
}


gnbSub = document.querySelectorAll('.gnb_sub');
for(i=0; i<gnbSub.length; i++){
    gnbSub[i].setAttribute("onmouseover","gnbSubOn();");
    gnbSub[i].setAttribute("onmouseout","mouseOff();");
}


chosenMenu = 0;

function gnbSubOn(menu){
    
    if(menu==undefined){

        menuIndex = chosenMenu;

    } else {
        menuIndex = mouseOver(menu);
    }


    gnbSub = document.querySelectorAll('.gnb_sub');
    for(i=0; i<gnbSub.length;i++){
        gnbSub[i].className = 'gnb_sub';
       
    }
    
    chosenMenu = menuIndex;

    gnbSub[menuIndex].classList.add('sub_on'); 
   

    
    
    subMenu = document.querySelectorAll('.sub_on ul')

    for(i=0; i < subMenu.length;i++){
        if(subMenu.length>=5){
        subMenu[i].style.width = ''+ 1100/subMenu.length+'px';
        } else {
            subMenu[i].style.width = '220px';
        } 
    }
    gnbNav = document.querySelector('.gnb_nav');
    gnbNav.style.border = 'none;'
}

function mouseOff(){
   
    gnbSub = document.querySelectorAll('.gnb_sub');
    for(i=0; i<gnbSub.length;i++){
        gnbSub[i].className = 'gnb_sub';
    }
}




//////////////////////// news /////////////////////////

newsIndex = 0;
function newsOn(){
    
    newsA=document.querySelectorAll('.line_notice_news a')
    if(newsIndex>=newsA.length){
        newsIndex=0;
    }
    delClass = newsIndex-1;
    if(delClass == -1){
        delClass = 3;
    }

    newsA[newsIndex].classList.add('news_on');
    newsA[delClass].removeAttribute('class');
    newsIndex++;
}

setInterval(newsOn, 2000);


////////////// prom slider //////////////


slideProm = () => {
  
    document.querySelector('.swipe_right').removeAttribute('onclick')
    slider = document.querySelectorAll('.main_prom_slider > li')
    li = document.createElement('li')
    li.innerHTML = slider[0].innerHTML;
    document.querySelector('.main_prom_slider').appendChild(li);
    slider2 = document.querySelectorAll('.main_prom_slider > li')
    for(i=0; i<slider2.length;i++){
        slider2[i].classList.add('prom_slider');
    }

    setTimeout(function(){
        document.querySelector('.main_prom_slider').removeChild(slider[0]);
        for(i=0; i<slider2.length;i++){
            slider2[i].removeAttribute('class');
        }
    }, 1000)

    setTimeout(function(){
        document.querySelector('.swipe_right').setAttribute('onclick','goRight();')
    }, 1000)

}

promInterval = setInterval(slideProm, 4000);

////////////////// swipe ////////////////////

goLeft = () =>{

    clearInterval(promInterval);
    document.querySelector('.swipe_left').removeAttribute('onclick')
    slider = document.querySelectorAll('.main_prom_slider > li')
    li = document.createElement('li')
    li.innerHTML = slider[slider.length-1].innerHTML;
    document.querySelector('.main_prom_slider').prepend(li);
    slider2 = document.querySelectorAll('.main_prom_slider > li')
    for(i=0; i<slider2.length;i++){
        slider2[i].classList.add('prom_reverse');
    }

    setTimeout(function(){
        document.querySelector('.main_prom_slider').removeChild(slider2[slider2.length-1]);
        for(i=0; i<slider2.length;i++){
            slider2[i].removeAttribute('class');
        }
    }, 1000)

    setTimeout(function(){
        document.querySelector('.swipe_left').setAttribute('onclick','goLeft();')
    }, 1000)
    promInterval = setInterval(slideProm,4000);

}

function goRight(){
    clearInterval(promInterval);
    slideProm();
    
    promInterval = setInterval(slideProm,4000);
}

function bannerDown(){
    banner = document.querySelector('.main_prom_banner');
    banner.className = "main_prom_banner banner_down";
    document.querySelector('.notice_prom_up').style.display='block';
    document.querySelector('.notice_prom_down').style.display='none';
}

function bannerUp(){
    banner = document.querySelector('.main_prom_banner');
    banner.className = "main_prom_banner banner_up";
    document.querySelector('.notice_prom_down').style.display='block';
    document.querySelector('.notice_prom_up').style.display='none';
}