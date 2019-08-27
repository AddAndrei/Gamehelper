let data;
function getQuests() {
    $.ajaxSetup({
        headers:{
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url:'/getquests',
        type:'post',
        data:({}),
        success:(res)=>{
            if(typeof data == "undefined"){
                setHtml(res);
            }else{
                if(JSON.stringify(data) === JSON.stringify(res)){

                }else{
                    setHtml(res);
                }
            }
        }
    });
}
getQuests();

let questsInterval = setInterval(getQuests,1000);

function setHtml(res) {
    console.log(res);
    data = res;
}
