const elEx2_li = document.querySelectorAll('.faq ul li');
        //li 클릭시 클래스 추가 (class명 => active)


        
        for(let i=0; i<elEx2_li.length; i++){
            elEx2_li[i].addEventListener('click',function(){
                // console.log(i)
                elEx2_li[0].classList.remove('active');
                elEx2_li[i].classList.add('active');
                
                //classList-> add(),remove(),toggle()
            });
        }