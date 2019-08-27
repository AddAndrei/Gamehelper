let picker = new Picker(document.getElementById("color-picker"),280,180);
setInterval(() => picker.draw(),1);

picker.onChange((color)=>{
    let selected = document.getElementsByClassName("selected")[0];
    selected.style.backgroundColor = `rgb(${color.r},${color.g},${color.b})`;
});
let teams = [];
//Удаление ролей
function DeleteRole(el,id) {
    if(($(`#default_role option`).size())==1){
        error("Вы не можете удалить все роли");
    }else{
        el.parentElement.parentElement.remove();
        $(`#default_role option[id="${id}"]`).remove();
        for (let i = 0; i< roles.length; i++)
        {
            if(roles[i].id == parseInt(id)){
                roles.splice(i,1);
            }
        }
    }

}
//команды
let roles = [];
function loadTeams()
{
    if(localStorage.getItem('teams') !== null){
        teams = JSON.parse(localStorage.getItem('teams'));
        createTeam();
    }else{


    }
}
//localStorage.clear();
//роли
function loadRoles()
{
    if(localStorage.getItem('roles')!==null){
        roles = JSON.parse(localStorage.getItem('roles'));
        setRoles();
    }else{
        $('.roles').each((i,e)=>{
            let role = {
                id:parseInt($(e).children('.text-sm-left:nth-child(1)').attr('for')),
                title:$(e).children('.text-sm-left:nth-child(2)').html(),
                description:$(e).children('.text-sm-left:nth-child(2)').attr('title'),
                icon:$(e).children('.text-sm-left:nth-child(3)').children().attr('class'),
                default:false,
            }
            roles.push(role);
        });

    }
}

function setRoles() {
    $(".roles").remove();
    $("#default_role").empty();
    let html = [];
    let selected = [];
    for(let i = 0; i<roles.length; i++)
    {
        html.push(`<div class='form-group row roles'>`+
        `<label for='${roles[i].id}' class='col-sm-2 col-form-label text-sm-left'>Роль</label>`+
        `<label for='${roles[i].id}' class="col-sm-2 col-form-label text-sm-left" title="${roles[i].description}">${roles[i].title}</label>`+
        `<label for="${roles[i].id}" class="col-sm-6 col-form-label text-sm-left"><i class="${roles[i].icon}"></i></label>`+
        `<label for="${roles[i].id}" class="col-sm-2 col-form-label text-sm-right">`+
        `<i class="fas fa-times roles-close" onclick="DeleteRole(this, ${roles[i].id})"></i>`+
        `</label></div>`);
        selected.push(`<option id='${roles[i].id}'>${roles[i].title}</option>`);
    }
    $('.container-roles').html(html.join(''));
    $("#default_role").html(selected.join(''));
}


loadRoles();

loadTeams();


let icon = 'fas fa-blind list-icons';

$('.list-icons').on('click',function(){

   $('.list-icons').each(function(i,e){
       e.style.color = '#000000';
   });
   this.style.color = '#548FE2';
   icon = this.getAttribute('class');
});

/**
 *Добавление роли
 */
function addRole() {
    if($("#new-role-title").val()){
        $("#new-role-title").css({"border-color":"#ccc"});
        if($("#new-role-description").val()) {
            $("#new-role-description").css({"border-color":"#ccc"});
            let arr=[];
                $('.roles').each((i,e)=>{
                    arr.push(parseInt($(e).children('.text-sm-left:nth-child(1)').attr('for')));
                });
                let newrole = {
                    id:(Math.max.apply(null,arr)+1),
                    title:$("#new-role-title").val(),
                    description:$("#new-role-description").val(),
                    icon:icon,
                    default:false
                };
                let html = `<div class='form-group row roles'>
                            <label for='${newrole.id}' class='col-sm-2 col-form-label text-sm-left'>Роль</label>
                            <label for='${newrole.id}' class="col-sm-2 col-form-label text-sm-left" title="${newrole.description}">${newrole.title}</label>
                            <label for="${newrole.id}" class="col-sm-6 col-form-label text-sm-left"><i class="${newrole.icon}"></i></label>
                            <label for="${newrole.id}" class="col-sm-2 col-form-label text-sm-right">
                                <i class="fas fa-times roles-close" onclick="DeleteRole(this, ${newrole.id})"></i>
                            </label>
                        </div>`;
                let error = false;
                for (let i = 0; i < roles.length; i++){
                    error = (roles[i].title == newrole.title) ? true : false;
                }
                if(error){
                    errorRole("Такая роль уже есть в списке");
                }else{
                    $('.roles :first').before(html);
                    $(`#default_role`).prepend(`<option id="${newrole.id}">${newrole.title}</option>`);
                    $("#default_role :first").attr('selected','selected');
                    roles.push(newrole);
                }


        }else{
            $("#new-role-description").css({"border-color":"red"});
        }
    }else{
        $("#new-role-title").css({"border-color":"red"});
    }
}







/**
 *
 * @param str
 */
function error(str) {
    let alert = "<div class='alert alert-danger alert-dismissible'>" +
        "<button type='button' class='close' data-dismiss='alert'>&times;</button>" +
        "<strong>Внимание!</strong> "+str+"</div>";
    $('.roles :first').before(alert);
}
function errorRole(str) {
    let alert = "<div class='alert alert-danger alert-dismissible'>" +
        "<button type='button' class='close' data-dismiss='alert'>&times;</button>" +
        "<strong>Внимание!</strong> "+str+"</div>";
    $('.createrole').before(alert);
}
function errorTeam(str)
{

}
/*******************************end errors************************************/

function addTeam() {
    let errorname,errorcolor;
    if($("#teamname").val()){
        $("#teamname").css({"border-color":"#ccc"});
        let team = {
            id:getIdTeam(),
            title:$("#teamname").val(),
            color:$("#color-team").css("background-color"),
            password:$("#teampassword").val()
        }

        if(teams.length){
            title = teams.filter((t)=>{
               return t.title == team.title;
            });
            if(title.length){
                error("Команда с таким названием уже есть!");
            }else{
                color = teams.filter((t)=>{
                   return t.color == team.color;
                });
                if (color.length){
                    error("Команда с таким цветом уже есть");
                }else{
                    teams.push(team);
                    createTeam();
                }
            }
        }else{
            teams.push(team);
            createTeam();
        }
    }else{
        $("#teamname").css({"border-color":"red"});
    }
}
//проверка есть ли тимы
function checkTeams()
{
    return ($(".table-teams").length == 0) ? false : true;
}

/**
 *вернет самый большой индекс
 */
function getIdTeam() {
    if(teams.length){
        return (Math.max.apply(null,teams.map((e)=>{
            return e.id;
        }))+1);
    }else{
        return 0;
    }
}

/**
 *создает таблицу команд
 */
function createTeam() {
    let body='';
    if(teams.length){
        for(let i=0;i<teams.length;i++){
            body +=`<tr>
                    <td>${teams[i].title}</td>
                    <td><div style="border: 1px solid #ccc;
                    background-color: ${teams[i].color};
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    margin-left: 45%;"></div></td><td>${checkPass(teams[i].password)}</td>
                    <td><i class="fas fa-times roles-close" onclick="DeleteTeam(this,parseInt(${teams[i].id}))"></i></td>
                </tr>`;
        }
        let table = `<table class='table table-teams'>
                    <thead class="table-dark">
                        <tr>
                        <th scope="col">Название</th>
                        <th scope="col">Цвет</th><th scope="col"><i class="fas fa-lock"></i></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${body}
                    </tbody>
                </table>`;
        $('.teams').html(table);
    }
}
function checkPass(pass) {
    if(pass==''||pass==' '){
        return `<i class="fas fa-unlock"></i>`;
    }else{
        return `<i class="fas fa-lock"></i>`;
    }
}


/**
 *
 * @param el
 * @param id
 * @constructor
 */
function DeleteTeam(el,id) {
    teams.map((t,i)=>{
        if(t.id == id){
            teams.splice(i,1);
            el.parentElement.parentElement.remove();
        }
    });
}

/**
 *
 */
function saveTeamAndRoles(event) {
    if(!teams.length){
        error("У вас ни одной созданой команды");
        event.preventDefault();
    }else{
        let default_role = $("#default_role").val();
        roles = roles.map((r)=>{
           r.default = (r.title == default_role) ? true : false;
           return r;
        });
        localStorage.setItem('roles',JSON.stringify(roles));
        localStorage.setItem('teams',JSON.stringify(teams));
        window.location.href = '/map';

    }
    /*if(roles.length){
        let default_role = $("#default_role").attr('id');
        console.log(default_role);
    }*/
}

/**
 * password for teams
 * @param bool
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
        $("#teampassword").val(pass);
    }

    pass = '';
}
