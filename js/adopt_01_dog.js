/* Javascript 샘플 코드 */
const servicekey = 'EZBKFPgBHO0yYU53Trh27vNlPOsHe6g1Yrctkox0ENVtlD7zt%2B9XQfLWk9j%2FrjnsTnRTux%2Ff2tcNWoaqxf%2BFjg%3D%3D';
const sido = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido';/*URL-시도*/
const sigungu = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu';/*URL-시군구*/
const public = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic';/*URL-유기동물 조회*/


// localStorage.page
let page;

if(localStorage.page){
    page = Number(localStorage.page);

}else{
    page = 1;
}




function request(uptype,fn,page){
    var xhr = new XMLHttpRequest();
    var url = public; /*URL*/
    var queryParams = '?serviceKey='+ servicekey;
    queryParams += '&bgnde=' + ''; /*유기날짜 - 검색시작일 */
    queryParams += '&endde=' + ''; /*유기날짜 - 검색종료일*/
    queryParams += '&upkind=' + uptype; /*품종코드(개 : 417000, 고양이 : 422400, 기타 : 429900)*/
    queryParams += '&kind=' + ''; /*품종코드*/
    queryParams += '&upr_cd=' + '6110000'; /*시도코드*/
    queryParams += '&org_cd=' + ''; /*시군구코드*/
    queryParams += '&care_reg_no=' + ''; /*보호소코드*/
    queryParams += '&state=' + ''; /*상태(전체 : null(빈값), 공고중 : notice, 보호중 : protect)*/
    queryParams += '&neuter_yn=' + '';  /*중성화 (전체 : null(빈값), 예 : Y, 아니오 : N, 미상 : U)*/
    queryParams += '&pageNo=' + page; /*페이지 수*/
    queryParams += '&numOfRows=' + 16; /*몇개 띄울건지*/
    queryParams += '&_type=json'; /*json & xml*/

    xhr.open('GET', url + queryParams);
    xhr.send('');
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            fn(this);

            let btn = document.querySelectorAll('.btn span a');
            let btnArrow = document.querySelectorAll('.btn>a');

            btn.forEach(function (v, k) {
                v.addEventListener('click', function () {
                    event.preventDefault();


                    page = this.textContent;
                    console.log(page)
                    localStorage.page = page;

                    setTimeout(function(){location.reload();},50);
                });
            })



            //btnarrow
            btnArrow.forEach(function(v,k){
                btnArrow[0].addEventListener('click',function(){
                    event.preventDefault();
                    if(page>0){
                    localStorage.page = page;
                    page--;
                    }else{
                        alert('가장 첫 화면입니다 ૮ฅ・ﻌ・აฅ')
                    }
                    
                    setTimeout(function(){location.reload();},50);
                })
                btnArrow[1].addEventListener('click',function(){
                    event.preventDefault();
                    if(page<4){
                    localStorage.page = page;
                    page++;
                    }else{
                        alert('ฅ^•ﻌ•^ฅ 가장 마지막 화면입니다.')
                    }


                    setTimeout(function(){location.reload();},50);
                })
            })

        
            //ACTIVE발생
            btn[page-1].style = 'background-color:#FFDD85';
        }
    };
}



request('417000', Dog, page);

function Dog(_this) {
    let list;
    let tags;
    let data = _this.responseText;  // API
    data = JSON.parse(data)   // API - json으로 바꿔주는 역할
    data = data.response.body.items.item;

    function dogFind() {
        list = '';
        tags = [];
        let Box = document.querySelector('.find ul');
        data.forEach(function (value) {
            tags += `<li>
                <p><img src="${value.popfile}"></p>
                <div class="li-txt"></div>
                </li>`;
        });
        Box.innerHTML = tags;


        let tags2 = [];
        let TxtBox = document.querySelectorAll('.find .li-txt');

        data.forEach(function (v, k) {

            tags2 = `
            <p>${v.age}</p>     
            <p>${v.weight}</p>           
            <p>${v.specialMark}</p>
            `;
            // console.log(tags2);
            TxtBox[k].innerHTML = tags2;
        })

    }

    dogFind();
}