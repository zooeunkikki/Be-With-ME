/* Javascript 샘플 코드 */
const servicekey = 'EZBKFPgBHO0yYU53Trh27vNlPOsHe6g1Yrctkox0ENVtlD7zt%2B9XQfLWk9j%2FrjnsTnRTux%2Ff2tcNWoaqxf%2BFjg%3D%3D';
const sido = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido';/*URL-시도*/
const sigungu = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu';/*URL-시군구*/
const public = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic';/*URL-유기동물 조회*/

var xhr = new XMLHttpRequest();
var url = public; /*URL*/
var queryParams = '?serviceKey='+ servicekey;
queryParams += '&bgnde=' + ''; /*유기날짜 - 검색시작일 */
queryParams += '&endde=' + ''; /*유기날짜 - 검색종료일*/
queryParams += '&upkind=' + ''; /*품종코드(개 : 417000, 고양이 : 422400, 기타 : 429900)*/
queryParams += '&kind=' + ''; /*품종코드*/
queryParams += '&upr_cd=' + '6110000'; /*시도코드*/
queryParams += '&org_cd=' + ''; /*시군구코드*/
queryParams += '&care_reg_no=' + ''; /*보호소코드*/
queryParams += '&state=' + ''; /*상태(전체 : null(빈값), 공고중 : notice, 보호중 : protect)*/
queryParams += '&neuter_yn=' + '';  /*중성화 (전체 : null(빈값), 예 : Y, 아니오 : N, 미상 : U)*/
queryParams += '&pageNo=' + 1; /*페이지 수*/
queryParams += '&numOfRows=' + 3; /*몇개 띄울건지*/
queryParams += '&_type=json'; /*json & xml*/


xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        let list;
        let tags;
        let data = this.responseText;  // API
        data = JSON.parse(data)   // API - json으로 바꿔주는 역할
        data = data.response.body.items.item;
        console.log(data)
        
        function dogFind(){
            list = '';
            tags = [];
            let Box = document.querySelector('.find .dog-find ul');
            data.forEach(function(value){
                tags.push(`<li>
                    <p><img src="${value.popfile}"></p>
                    <div class="li-txt"></div>
                </li>`);

                
            });
            tags.forEach(function(vlaue){
                list += vlaue;
            });
            Box.innerHTML = list;
            // dogFindTxt();
        }
        // function dogFindTxt(){
        //     list = '';
        //     tags = [];
        //     let txtBox = document.querySelectorAll('.find .dog-find .li-txt');


        //     txtBox.forEach(function(value,k){
                
        //         txtBox[k].innerHTML= tags.push(`<div>
        //                 <p>${value.age}</p>     
        //                 <p>${value.weight}</p>           
        //                 <p>${value.specialMark}</p>
        //             </div>`
        //             );
        //             txtBox.innerHTML = tags;
        //     });
                
        // }

    dogFind();
    }
};

xhr.send('');