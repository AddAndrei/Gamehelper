let data = {}

function saveGame() {
    data['type'] = $("#type option:selected").attr('id');
    data['title'] = $("#name").val();
    data['description'] = $("#description").val();
    data['sity'] = $("#sity").val();
    data['start'] = $("#start").val();
    data['end'] = $("#end").val();
    if($(".img-fluid")){
        data['img'] = $(".img-fluid").attr('src');
    }
    localStorage.setItem('game',JSON.stringify(data));
}
//localStorage.clear();
function loadData()
{
    if(localStorage.getItem('game') !== null){
        let res = JSON.parse(localStorage.getItem('game'));
        $("#type :nth-child("+parseInt(res['type'])+")").attr('selected','selected');
        $("#name").val(res['title']);
        $("#description").val(res['description']);
        $("#sity").val(res['sity']);
        $("#start").val(res['start']);
        $("#end").val(res['end']);
        if(res['img']) {
            let img = document.createElement('img');
            img.src = res['img'];
            img.classList.add('img-fluid');
            $("#preload-img").html(img);
        }
    }else{

    }


}
loadData();

function previewImg(el)
{

    let reader = new FileReader();
    reader.onload = function(e){
        let img = document.createElement('img');
        img.src = e.target.result;
        data['img'] = e.target.result;
        img.classList.add('img-fluid');
        $("#preload-img").html(img);
        //console.log(el.files[0]);
    }
    reader.readAsDataURL(el.files[0]);


}


