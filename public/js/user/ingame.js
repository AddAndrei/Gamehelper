function ingame() {
    $.ajaxSetup({
        headers:{
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url:'/ingame',
        type:'post',
        data:({user:''}),
        success:(res)=>{
            if(res!=''){
                setHtml(res);
            }else{

            }
        }
    })
}

ingame();



function setHtml(res)
{

    let html = `<div class="card">
                <div class="card-header bg-dark text-light"><b>${res.game[0].title}</b></div>
                <div class="card-body">
                <div class="row">
                    <div class="col-4">
                        <p class="card-text"><i class="fas fa-university"></i> ${res.game[0].sity}</p>
                    </div>
                    <div class="col-4">
                    <p class="card-text"><i class="fas fa-user-friends" style="color: ${res.team[0].color};"></i>${res.team[0].title}</p>
                    </div>
                    <div class="col-4">
                    <p class="card-text"><i class="${res.role[0].icon}"></i>${res.role[0].title}</p>
</div>
                </div>
                
                <div class="row">
                    
                    
                     
                </div>   
                <div class="row">
                <div class="col-6">
                    <a href="/game/${res.game[0].id}/quests" class="btn btn-secondary btn-sm active " role="button" aria-pressed="true">В бой</a>
</div>
                    <div class="col-6 text-lg-right">
                    <a href="/exitgame" class="btn btn-secondary btn-sm active" role="button" aria-pressed="true">Покинуть</a>
</div>
</div>  
                    
                </div>
            </div>`;
    $("#game").html(html);
}
