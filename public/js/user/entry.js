let data;
function getData() {
    $.ajaxSetup({
        headers:{
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url:'/getgame',
        type:'POST',
        data:({game:parseInt($("#datagame").attr('data-id-game'))}),
        success:(res)=>{

            let map = new Map('map',res[0].map);
            ymaps.ready(()=>{
                data = res;
                map.createMap();
                if(res[0].map.polygon != null){
                    map.CreatePolygons(JSON.parse(res[0].map.polygon));
                }
                map.createTeamObjects(res[0].get_teams);
                map.createAllObjects(res[0].map.all_objects);
            });


        }
    });
}
getData();

function entryGame(game,team) {

    let t = data[0].get_teams.filter((res)=>{return res.id == team});
    if(t[0].password != null){
        if($(`#${t[0].id}`).val()===''){
            $(`#${t[0].id}`).css({"border-color":"red"});
        }else{
            if($(`#${t[0].id}`).val() === t[0].password){
                $(`#${t[0].id}`).css({"border-color":"#ccc"});
                entry(game,team,t[0].password);
            }else{
                $(`#${t[0].id}`).css({"border-color":"red"});
                $(`#${t[0].id}`).val('');
                $(`#${t[0].id}`).attr('placeholder','Неверный пароль');

            }
        }
    }else{
        entry(game,team);
    }
}

/**
 *
 * @param game
 * @param team
 */
function entry(game,team,pass=null) {
    $.ajaxSetup({
        headers:{
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url:'/entry',
        type:'POST',
        data:({game:parseInt(game),team:parseInt(team),password:pass}),
        success:(res)=>{
            if (res === 'ok'){
                window.location.href = '/home';
            }else{
                $(`#${team}`).css({"border-color":"red"});
                $(`#${t[0].id}`).attr('placeholder',res);
            }
        }
    });
}
