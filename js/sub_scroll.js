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
            let slideBox =  document.querySelector('.vanner');
            el = slideBox.offsetHeight;
            console.log(el)
            if(el<=pageYOffset){
                Hd.classList.add('bgopen');
                
            }else{Hd.classList.remove('bgopen');}
            
        }
        headerBG();

        
    })
}

function mouseOver(){
    let Hd =document.querySelector('.hd');
    let slideBox =  document.querySelector('.vanner');
    el = slideBox.offsetTop;

    Hd.addEventListener("mouseover",function(){
        Hd.classList.add('bgopen');
    })

    Hd.addEventListener("mouseout",function(){
        Hd.classList.remove('bgopen');
    })

}









//함수실행
function init(){
    scroll();
    mouseOver();
}

window.addEventListener('load',init);
