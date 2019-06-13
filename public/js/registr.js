

function previewImg(el)
{

    let reader = new FileReader();
    reader.onload = function(e){
        let img = document.createElement('img');
        img.src = e.target.result;
        img.classList.add('img-fluid');
        $("#preload-img").append(img);
    }
    reader.readAsDataURL(el.files[0]);
}

window.onload = function(){
    //console.log($("#mobile"));
    $("#login").mask("+7 (999)-999-99-99");
    $("#mobile").mask("+7 (999)-999-99-99");

    /*let map = (document.getElementById('map')) ? new Map(document.getElementById('map').getAttribute('id')) : false;
    if(map){
        console.log(1);
    }*/
    ymaps.ready(()=>{
        let map = new Map('map');
    });

}



