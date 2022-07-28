let maxScrollValue = document.body.offsetHeight - window.innerHeight;
const scrollPer = (pageYOffset / maxScrollValue) * 100;


function scroll(){
    window.addEventListener('scroll',function(){
        let maxScrollValue = document.body.offsetHeight - window.innerHeight;
        const scrollPer = (pageYOffset / maxScrollValue) * 100;
        let el;
        let winH;
        winH = window.innerHeight;
        el = '';
        
        function headerBG(){
            let Hd =document.querySelector('.hd');
            let slideBox =  document.querySelector('.adopt');
            el = slideBox.offsetTop;
            if(winH-el<pageYOffset){
                Hd.classList.add('bgopen');
                
            }else{Hd.classList.remove('bgopen');}
                console.log(winH-el<pageYOffset)
        }
        headerBG();

        
    })
}

function mouseOver(){
    let Hd =document.querySelector('.hd');
    let slideBox =  document.querySelector('.adopt');
    el = slideBox.offsetTop;

    Hd.addEventListener("mouseover",function(){
        Hd.classList.add('bgopen');
    })

    Hd.addEventListener("mouseout",function(){
        Hd.classList.remove('bgopen');
    })

}


function Ramdom(){
    const images = [
    "./img/ramdom/ramdom_01.jpg",
    "./img/ramdom/ramdom_02.jpg",
    "./img/ramdom/ramdom_03.jpg"
    ];

    let chosenImg = images[Math.floor(Math.random() * images.length)];
    console.log(chosenImg)
    let bgImg = document.querySelector('.vanner a img');

    bgImg.src = chosenImg;
    // document.body.appendChild(bgImg);

}







//함수실행
function init(){
    scroll();
    mouseOver();
    Ramdom();
}

window.addEventListener('load',init);
