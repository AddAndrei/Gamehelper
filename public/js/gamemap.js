let map;
function getData() {
    $.ajaxSetup({
        headers:{
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url:'/gamemap',
        type:'post',
        data:({}),
        success:(res)=>{

            ymaps.ready(function(){
                map = new Map('map',res.game[0].map);
                map.createMap();
                if(res.game[0].map.polygon.length){
                    map.CreatePolygons(JSON.parse(res.game[0].map.polygon));
                }
                if(res.game[0].map.all_objects.length){
                    map.createAllObjects(res.game[0].map.all_objects);
                }
                if (res.objects.length){
                    map.createTeamObjectsGame(res.objects);
                }
            });
        }
    })
}


getData();
