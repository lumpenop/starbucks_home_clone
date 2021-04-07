


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


