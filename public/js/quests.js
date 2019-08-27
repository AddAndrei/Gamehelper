let map;
//создание карты
ymaps.ready(()=>{
    map = new Map('map',$('#map').attr('data-sity'));
    $("#polygons").on('click',function () {
        canvas = true;
        if (canvas){
            $("#polygons").addClass('blink');
        }
        canvas = map.createPolygon(canvas);
    });

});
/**********************************************************/
let teams = [];
let roles =[];
let objects = [];
let maps = [];
let canvas = false;
let quests = [];
let game =[];
let questCoords = [];
let questImage = null;
/**********************************************************/
/**
 * load map
 */
function loadMap() {
    if(localStorage.getItem('maps')!==null){
        maps = JSON.parse(localStorage.getItem('maps'));
    }
    if(localStorage.getItem('objects')!==null){
        objects = JSON.parse(localStorage.getItem('objects'));
    }
    if(localStorage.getItem('teams')!==null){
        teams = JSON.parse(localStorage.getItem('teams'));
        setHtmlTeams();
    }
    if(localStorage.getItem('roles')!==null){
        roles = JSON.parse(localStorage.getItem('roles'));
        setHtmlRoles();
    }
    if(localStorage.getItem('game')!==null){
        game = JSON.parse(localStorage.getItem('game'));
        setTimeGame();
    }else{
        error("У вас не создана игра");
    }
}

function error(str) {
    let alert = "<div class ='col-sm-12'><div class='alert alert-danger alert-dismissible'>" +
        "<button type='button' class='close' data-dismiss='alert'>&times;</button>" +
        "<strong>Внимание!</strong> "+str+"</div></div>";
    $('.error').html(alert);
}



loadMap();
function setTimeGame() {
    $("#new-quest-start").val(game.start);
    $("#new-quest-end").val(game.end);
}
function setHtmlTeams() {
    teams.filter((team)=>{
        $("#new-quest-team").append(`<option value="${team.id}">${team.title}</option>`);
        $("#redact-quest-team").append(`<option value="${team.id}">${team.title}</option>`);
    });
}
function setHtmlRoles() {
    roles.filter((role)=>{
        $("#new-quest-role").append(`<option value="${role.id}">${role.title}</option>`);
        $("#redact-quest-role").append(`<option value="${role.id}">${role.title}</option>`);
    });
}
/*****************************passwords********************************/
function checkVariant(el) {
    if ($(el).val() == 1) {
        $(".hidden-pass").css({"display": "none"});
        $("#quests-pass").val('');
    } else {
        $(".hidden-pass").css({"display": "flex"});
    }
}

/**
 *
 * @param el
 */
function checkRedactVariant(el) {
   if($(el).val() == 1){
       $(".hidden-pass-redact").css({"display":"none"});
       $("#redact-quests-pass").val('');
   } else {
       $(".hidden-pass-redact").css({"display":"flex"});
   }
}
/**
 *
 */
function genesisPass(bool=null) {
    let pass = '';
    let stringandnum = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z',
        0,1,2,3,4,5,6,7,8,9];

    function getRandom(min,max)
    {
        return Math.floor(Math.random() * (max-min)) + min;

    }
    for(var a=0;a<getRandom(8,18);a++)
    {
        let char = stringandnum[getRandom(0,stringandnum.length)];
        if(typeof char == 'string'){
            if(getRandom(1,3)==2){
                char = char.toUpperCase();
            }


        }
        pass+=char;
    }
    if(bool){
        $("#redact-quests-pass").val(pass);
    }else{
        $("#quests-pass").val(pass);
    }

    pass = '';
}
/********************************add quest**************************************/
/**
 *
 */
function addQuest() {

    if($("#new-quest-title").val()==''||$("#new-quest-title").val()==' '){
        $("#new-quest-title").css({"border-color":"red"});
    }else{
        $("#new-quest-title").css({"border-color":"#ccc"});
        if($("#new-quest-description").val()==''||$("#new-quest-description").val()==' '){
            $("#new-quest-description").css({"border-color":"red"});
        }else{
            $("#new-quest-description").css({"border-color":"#ccc"});

                if($("#new-quest-variants").val()==2){

                    if ($("#quests-pass").val()){
                        $("#quests-pass").css({"border-color":"#ccc"});
                        quests.push(getDataQuest());
                        setHtmlQuests();
                        $('body,html').animate({scrollTop: window.document.body.offsetHeight}, 500);
                        questCoords = [];
                        map.setQuest = false;
                        setParents();
                        clearImage();
                    }else{
                        $("#quests-pass").css({"border-color":"red"});
                    }
                }else{
                    quests.push(getDataQuest());
                    setHtmlQuests();
                    $('body,html').animate({scrollTop: window.document.body.offsetHeight}, 500);
                    questCoords = [];
                    map.setQuest = false;

                    setParents();
                    clearImage();
                }


        }
    }

}

function setParents() {
    let html = '<option value="noparents">Без родителя</option>';
    let opts = [];

    let parent = getParents();
    parent.filter((p)=>{
       opts.push(`<option value="${p.id}">${p.title}</option>`);
    });

    $("#new-quest-parents").html(html+opts.join(''));


}

function getParents() {
    quests.filter((elem,i,quests)=>{
       if(elem.parent != 'noparents'){
           quests.filter((q)=>{
               if(q.id == parseInt(elem.parent)){
                   q.children = true;
               }
           });
       }
    });

    return quests.filter((q)=>{return q.children==false && q.password != ''});
}


/**
 * Собрать данные
 * @returns {{parent: string, score: (*|jQuery|string|undefined), password: (*|jQuery|string|undefined), role: (*|jQuery|string|undefined), variant: (*|jQuery|string|undefined), start: (*|jQuery|string|undefined), description: (*|jQuery|string|undefined), end: (*|jQuery|string|undefined), team: (*|jQuery|string|undefined), title: (*|jQuery|string|undefined), coords: Array, player: string}}
 */
function getDataQuest()
{
    return {
        id:getMaxiId(),
        title:$("#new-quest-title").val(),
        description:$("#new-quest-description").val(),
        variant:$("#new-quest-variants").val(),
        password:$("#quests-pass").val(),
        parent:$("#new-quest-parents").val(),
        start:$("#new-quest-start").val(),
        end:$("#new-quest-end").val(),
        team:$("#new-quest-team").val(),
        role:$("#new-quest-role").val(),
        player:'',
        score:$("#new-quest-score").val(),
        coords:questCoords,
        children:false,
        image:questImage,
    }
}

/**
 *
 * @returns {number}
 */
function getMaxiId() {
    if(quests.length){
        return (Math.max.apply(null,quests.map((e)=>{
            return e.id;
        }))+1);
    }else{
        return 0;
    }
}

/**
 *отрисовка квестов
 */
function setHtmlQuests() {
    let body =[];
    quests.filter((q)=>{
        body.push(`<tr class="${setChild(q.parent)}"><td>${setChain(q.children)}</td>
<td>${q.title}</td>
<td>${getTeam(q.team)}</td>
<td>${getRole(q.role)}</td>
<td>${q.start.replace('T',' ')}</td>
<td>${q.end.replace('T',' ')}</td>
<td>${checkPassQuest(q.password)}</td>
<td><i class="fas fa-file-code delete-quest" title="Редактировать" onclick="redactQuest(this,${q.id})" data-toggle="modal" data-target=".bd-example-modal-lg"></i>
<i class="far fa-trash-alt delete-quest" title="Удалить" onclick="DeleteQuest(this,${q.id})"></i>
</td></tr>`);
    });

    let html = `<table class="table table-quests">
                    <thead class="table-dark">
                    <tr>
                        <th></th>
                        <th>Название</th>
                        <th><i class="fas fa-user-friends" title="Команда"></i></th>
                        <th><i class="fas fa-blind" title="Роль"></i></th>
                        <th><i class="fas fa-hourglass-start"></i></th>
                        <th><i class="fas fa-hourglass-end"></i></th>
                        <th><i class="fas fa-lock"></i></th>
                        <th><i class="far fa-eye"></i></th>
                    </tr>
                    </thead>
                    <tbody>
                    ${body.join('')}
</tbody>
                </table>`;
    

    $(".for-quests").html(html);
}

/**
 *
 * @param parent
 * @returns {string}
 */
function setChild(parent) {
    return (parent == 'noparents') ? '' : 'table-secondary';
}

/**
 *
 * @param bool
 * @returns {string}
 */
function setChain(bool) {
    return (bool) ? `<i style="color: #FD7E14;" class="fas fa-link"></istyle>` : '';
}

/**
 *
 * @param el
 * @param id
 * @constructor
 */
function DeleteQuest(el,id) {
    el.parentElement.parentElement.remove();
    quests.filter((q,i)=>{
        if(q.id === id){
            quests.splice(i,1);
        }
    });
}

/**
 * редактировать квест
 * @param el
 * @param id
 */
let quest = null;
let newmap = null;
let questRedactImage = null;
$('.bd-example-modal-lg').on('show.bs.modal',function(){
    //let quest = quests.filter((q)=>{return q.id === id});
    ymaps.ready(()=>{
        newmap = new Map('map-redact',$('#map').attr('data-sity'));
        if(quest[0].coords.length){
                newmap.canvasQuestInMap(quest[0]);
        }


    });
    let parent =[];
    $("#exampleModalLabel").text(quest[0].title);
    $("#redact-quest-title").val(quest[0].title);
    $("#redact-quest-description").val(quest[0].description);
    $(`#redact-quest-variants [value='${quest[0].variant}']`).attr('selected','selected');
    if(quest[0].password!==''){
        $(".hidden-pass-redact").css({"display":"flex"});
        $("#redact-quests-pass").val(quest[0].password);
    }

    if(quest[0].parent!='noparents'){
        parent = quests.filter((q)=>{return q.id == parseInt(quest[0].parent)});
        $("#redact-quest-parents").html(`<option value="${parent[0].id}">${parent[0].title}</option>`);
    }else{
        $("#redact-quest-parents").html(`<option value="noparents">Без родителя</option>`);
    }
    //
    $("#redact-quest-start").val(quest[0].start);
    if(quest[0].team !== "Всем"){
        $(`#redact-quest-team [value='${quest[0].team}']`).attr('selected','selected');
    }else{
        setSelectedInRedact($('#redact-quest-team'),quest[0].team);
    }
    if(quest[0].role !== "Всем"){
        $(`#redact-quest-role [value='${quest[0].role}']`).attr('selected','selected');
    }else{
        setSelectedInRedact($('#redact-quest-role'),quest[0].role);
    }
    $("#redact-quest-score").val(quest[0].score);
    $("#redact-quest-end").val(quest[0].end);
    if(quest[0].image !== null){
        let img = document.createElement('img');
        img.src = quest[0].image;
        img.classList.add('img-fluid');
        $("#redact-image-quest").html(img);
        questRedactImage = quest[0].image;
    }
    console.log(quest);

});

/**
 *
 * @param el
 * @param val
 */
function setSelectedInRedact(el,val)
{
    $(el).children().each((e,i)=>{
        if(i.innerHTML ===val){
            i.setAttribute('selected','selected');
        }else{
            i.removeAttribute('selected');
        }
    });
}

/**
 * Destroy map from redactor quests
 */
$('.bd-example-modal-lg').on('hidden.bs.modal',function(){
    newmap.destroy();
});

/**
 * save redact quests
 */
function saveRedactQuest(el) {
    if($("#redact-quest-title").val()!=''){
        $("#redact-quest-title").css({"border-color":"#ccc"});
        if($("#redact-quest-description").val()!=''){
            $("#redact-quest-description").css({"border-color":"#ccc"});
            if($("#redact-quest-variants").val()==2){

                if ($("#redact-quests-pass").val()){
                    $("#redact-quests-pass").css({"border-color":"#ccc"});
                    saveQuestFromRedact(el);
                    $('body,html').animate({scrollTop: window.document.body.offsetHeight}, 500);

                }else{
                    $("#redact-quests-pass").css({"border-color":"red"});
                    $('.bd-example-modal-lg').animate({scrollTop: 400}, 500);
                }
            }else{
                saveQuestFromRedact(el);
                $('body,html').animate({scrollTop: window.document.body.offsetHeight}, 500);


            }

        }else{
            $("#redact-quest-description").css({"border-color":"red"});
            $('.bd-example-modal-lg').animate({scrollTop: 350}, 500);
        }
    }else{
        $("#redact-quest-title").css({"border-color":"red"});
        $('.bd-example-modal-lg').animate({scrollTop: 250}, 500);
    }
}

/**
 * Сохранение данных
 */
function saveQuestFromRedact(el)
{
    quests.filter((q)=>{
        if(q.id == parseInt(quest[0].id)){
            q.title = $("#redact-quest-title").val();
            q.description = $("#redact-quest-description").val();
            q.variant = $("#redact-quest-variants").val();
            q.parent = $("#redact-quest-parents").val();
            q.start = $("#redact-quest-start").val();
            q.text = $("#redact-quest-team").val();
            q.role = $("#redact-quest-role").val();
            q.player = '';
            q.score = $("#redact-quest-score").val();
            q.end = $("#redact-quest-end").val();
            q.image = questRedactImage;
            q.password = $("#redact-quests-pass").val();

        }
    });
    el.setAttribute('data-dismiss','modal');
    setHtmlQuests();
}


/**
 * load data quest in global var
 * @param el
 * @param id
 */
function redactQuest(el,id) {
    quest = quests.filter((q)=>{return q.id === id});
}

/**
 * getter team
 * @param t
 * @returns {*[]}
 */
function getTeam(t) {
    return (t === "Всем") ? t : teams.filter((team) => {
        return team.id == parseInt(t)
    })[0].title;
}

/**
 *
 * @param r
 * @returns {*}
 */
function getRole(r) {
    return (r === "Всем") ? r : roles.filter((role)=>{return role.id === parseInt(r)})[0].title;
}

/**
 *
 * @param q
 */
function checkPassQuest(pass) {
    return (pass !== '') ? `<i class="fas fa-lock"></i>` : `<i class="fas fa-unlock"></i>`;
}

function setMapQuest() {
    if($("#new-quest-title").val()==''||$("#new-quest-title").val()==' '){
        $("#new-quest-title").css({"border-color":"red"});
    }else{
        $("#new-quest-title").css({"border-color":"#ccc"});
        if($("#new-quest-description").val()==''||$("#new-quest-description").val()==' '){
            $("#new-quest-description").css({"border-color":"red"});
        }else{
            $("#new-quest-description").css({"border-color":"#ccc"});
            map.setQuest = true;
        }
    }

}


/**
 * delete image from redact
 */
function deleteImage() {
    $("#redact-image-quest").children().remove();
    questRedactImage = null;
}

/**
 * загрузка в редактор квеста картинки
 * @param el
 */
function previewRedactImg(el) {
    let reader = new FileReader();
    reader.onload = function(e){
        let img = document.createElement('img');
        img.src = e.target.result;
        questRedactImage = e.target.result;
        img.classList.add('img-fluid');
        $("#redact-image-quest").html(img);
        //console.log(el.files[0]);
    }
    reader.readAsDataURL(el.files[0]);
}


/**
 *
 * @param el
 */
function previewImg(el)
{

    let reader = new FileReader();
    reader.onload = function(e){
        let img = document.createElement('img');
        img.src = e.target.result;
        questImage = e.target.result;
        img.classList.add('img-fluid');
        $("#preload-img").html(img);
        //console.log(el.files[0]);
    }
    reader.readAsDataURL(el.files[0]);


}

/**
 * Чистит картинку при добавлении так же при удалении пользователем
 */
function clearImage() {
    if(questImage!==null){
        $("#preload-img").children().remove();
        questImage = null;
    }
}

/**
 * Завершить создание игры
 */
function endCreateGame() {
    $.ajaxSetup({
        headers:{
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type:'POST',
        url:'/creategame',
        data:({
            game:game,
            teams:teams,
            roles:roles,
            objects:objects,
            quests:quests,
            map:maps
            }),
        success:(res)=>{
            if(res === 'ok'){
                localStorage.clear();
                window.location.href = '/home';
            }
            
        }
    });
    //console.log(data);
}


function getToUrl() {
    console.log(1);
}

