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
let objects = [];
let maps = [];
let canvas = false;
let setobject = false;
function loadTeams()
{
    let html = `<option id='all'>Общий</option>`;
    if(localStorage.getItem('teams')!==null)
    {
        teams = JSON.parse(localStorage.getItem('teams'));
        for (let i =0;i<teams.length;i++)
        {
            html +=`<option id='${teams[i].id}'>${teams[i].title}</option>`;
        }
        $("#teams").html(html);
    }else{
        error("У вас нет ни одной команды!");
    }
}

function error(str) {
    let alert = "<div class='alert alert-danger alert-dismissible'>" +
        "<button type='button' class='close' data-dismiss='alert'>&times;</button>" +
        "<strong>Внимание!</strong>" +str+"</div>";
    $('.card-body :first').before(alert);

}

loadTeams();



//добавить объект
function AddObject() {
    let object = {
        id:getIdObject(),
        title:$("#objects").val(),
        team:$("#teams").val(),
        map:false,
        description:$("#new-role-description").val(),
        coords:[]
    }
    objects.push(object);
    setHtmlObjects();
}

/**
 *
 * @returns {number}
 */
function getIdObject() {
    if(objects.length){
        return (Math.max.apply(null,objects.map((o)=>{
            return o.id;
        }))+1);
    }else{
        return 0;
    }
}

//отрисовка
function setHtmlObjects() {

    let arr = objects.map((o)=>{
        return `<tr>
                            <td>${o.title}</td>
                            <td>${o.team}</td>
                            <td>${checkObject(o.map,o.id)}</td>
                            <td><i class="fas fa-times roles-close" onclick="DeleteObject(this,parseInt(${o.id}))"></i></td>
                        </tr>`;
    });
    let html = `
            <div class="col-sm-2 col-form-label text-sm-left"></div>
            <div class="col-sm-10">
                <table class="table table-objects">
                    <thead class="table-dark">
                    <tr>
                            <th scope="col">Название</th>
                            <th>Команда</th>
                            <th>Статус</th>
                            <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        ${arr.join('')}
                    </tbody>
                </table>
            </div>`;
    $(".for-objects").html(html);
}

function checkObject(bool,id) {
    if(bool){
        return `<i class="far fa-trash-alt map-objects" onclick="dropObjectFromMap(${id})"></i>`;
    }else{
        return `<i class="fas fa-map-marker-alt map-objects" onclick="setObjectInMap(parseInt(${id}))"></i>`;
    }
}


function setObjectInMap(id) {
    map.setObject = true;
    map.id = id;
}
//создать объект
function CreateObject() {
    let arr = [];
    if($("#new-object-title").val()){
        $("#new-object-title").css({"border-color":"#ccc"});
        $("#objects").children().each((e,i)=>{
            arr.push(parseInt($(i).attr('id')));
        });
        let id = (Math.max.apply(null,arr)+1);
        $("#objects").prepend(`<option selected id='${id}'>${$("#new-object-title").val()}</optionselected>`);


    }else{
        $("#new-object-title").css({"border-color":"red"});
    }
}

function DeleteObject(el,id) {
    objects.map((e,i)=>{
        if(e.id==id){
            if(e.map){
                errorObj();
            }else{
                objects.splice(i,1);
            }

        }
    });
    setHtmlObjects();
}

function errorObj() {
    let alert = "<div class='alert alert-danger alert-dismissible'>" +
        "<button type='button' class='close' data-dismiss='alert'>&times;</button>" +
        "<strong>Внимание!</strong> Объект установлен на карте</div>";
    $('.error-drop').html(alert);
}

function dropObjectFromMap(id) {
    map.dropFromMap(id);
}



/**
 * взять данные о карте
 * сохранить все данные
 */

function saveData() {
    maps = map.getData();
    localStorage.setItem('maps',JSON.stringify(maps));
    localStorage.setItem('objects',JSON.stringify(objects));
    window.location.href = '/quests';
}

/**
 * загрузка данных
 */
function loadMap() {
    if(localStorage.getItem('maps')!==null){
        maps = JSON.parse(localStorage.getItem('maps'));
    }
    if(localStorage.getItem('objects')!==null){
        objects = JSON.parse(localStorage.getItem('objects'));
        setHtmlObjects();
    }
}
loadMap();












