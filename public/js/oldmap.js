function selectTypeGame(elem)
{
        if(elem.options[elem.options.selectedIndex].value>0){
            OpenPass();
        }else{
            ClosePass();
        }
}

//set button
let setbutton=false;
function setButton(el)
{

    if(el.children[0].tagName === 'BUTTON'){

    }else{
        el.children[0].remove();
        let button = document.createElement('button');
        button.classList.add('button-perform');
        button.setAttribute('onclick','performTask(this)');
        button.innerHTML = 'Р’С‹РїРѕР»РЅРёС‚СЊ';
        el.append(button);
    }


}


function Timer(elem)
{

    let start = parseInt(elem.getAttribute('time'))*1000;
    let t = start - Date.parse(new Date());
    let s = Math.floor((t/1000)%60);
    let m = Math.floor((t/1000/60)%60);
    let h = Math.floor((t/(1000*60*60))%24);
    let st = false;
    if(h<=0&&m<=0&&s<=0){
        st=true;

    }
    let days = Math.floor(t/(1000*60*60*24));
    let hb = h<10 ? h='0'+h:h;
    let mb = m<10 ? m='0'+m:m;
    let sb = s<10 ? s='0'+s:s;

    if(st){
        if(elem.classList==''){

            elem.innerHTML = 'Р—Р°РєРѕРЅС‡РёР»РѕСЃСЊ';
            elem.nextElementSibling.innerHTML = 'РќРµ РІС‹РїРѕР»РЅРµРЅРѕ';
        }else{
        elem.innerHTML = 'РќР°С‡Р°Р»Р°СЃСЊ';

        setButton(elem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
        }

    }else{
        if(days==0){
            elem.innerHTML = h+':'+m+':'+s;
        }else{
            elem.innerHTML = days+':'+h+':'+m+':'+s;
        }
        if(elem.classList==''){
            elem.innerHTML = '';
        }
    }



}

function TimerForredactTask(elem)
{
    let start = parseInt(elem.getAttribute('time'))*1000;
    let t = start - Date.parse(new Date());
    let s = Math.floor((t/1000)%60);
    let m = Math.floor((t/1000/60)%60);
    let h = Math.floor((t/(1000*60*60))%24);
    let st = false;
    if(h<=0&&m<=0&&s<=0){
        st=true;

    }
    let days = Math.floor(t/(1000*60*60*24));
    let hb = h<10 ? h='0'+h:h;
    let mb = m<10 ? m='0'+m:m;
    let sb = s<10 ? s='0'+s:s;
    if(st){
        if(elem.classList==''){

            elem.innerHTML = 'Р—Р°РєРѕРЅС‡РёР»РѕСЃСЊ';
            elem.nextElementSibling.innerHTML = 'РќРµ РІС‹РїРѕР»РЅРµРЅРѕ';
        }else{
        elem.innerHTML = 'РќР°С‡Р°Р»Р°СЃСЊ';

        setButton(elem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
        }

    }else{
        if(days==0){
            elem.innerHTML = h+':'+m+':'+s;
        }else{
            elem.innerHTML = days+':'+h+':'+m+':'+s;
        }

    }



}




function OpenPass()
{
    let passforgame = document.getElementsByClassName('row-password');
    passforgame[0].style.display = 'block';
}

function ClosePass()
{
    let passforgame = document.getElementsByClassName('row-password');
    passforgame[0].style.display = 'none';
}

//РєСЂРѕРЅ СѓСЃС‚Р°РЅР°РІР»РёРІР°РµС‚ СЃС‚Р°С‚СѓСЃ РёРіСЂС‹ РєРѕС‚РѕСЂРѕР°СЏ РІ РїСЂРѕСЃРµС†Рµ
//РјРѕРґР°Р»СЊРЅРѕРµ РѕРєРЅРѕ
function ErrorModal(str){
    let modal = document.getElementsByClassName('modal-back')[0];
    let error = document.getElementsByClassName('modal-body')[0];
    modal.style.marginLeft = '0';
    error.innerHTML = str;

}
//Р·Р°РєСЂС‹С‚СЊ РѕРєРЅРµРѕ
function CloseErrorModal()
{
    let modal = document.getElementsByClassName('modal-back')[0];
    modal.style.marginLeft = '-9999px';
}
/**
*РїРѕРєР°Р·С‹РІР°РµС‚ РєРѕР»РёС‡РµСЃС‚РІРѕ СЂРѕР»РµР№
*/
function update(el) {
    el.parentElement.children[1].children[0].children[0].innerHTML = el.value;


}
//С„СѓРЅРєС†РёСЏ СѓРґР°Р»РµРЅРёСЏ С„Р»Р°РіР° РёР· С‚Р°Р±Р»РёС†С‹
let PlaceId;
function deleteFlag(el)
    {
        var index = parseInt(el.getAttribute('id'));
        _Map.geoObjects.remove(PlaceId);
        CommandCount[index].nameCommand.setFlag = false;
    }

var _Map;
var CommandCount = [

];
var ObjectId;
    //function delete objects
    function deleteObject(el)
    {
        let type = el.getAttribute('type');
        if(type === 'all'){
            let index = parseInt(el.getAttribute('id'));
            _Map.geoObjects.remove(ObjectId);
            CommandCount[0].objects[index].set = false;

        }else{
            let command = parseInt(el.getAttribute('type'));
            let index = parseInt(el.getAttribute('id'));
            _Map.geoObjects.remove(ObjectId);
            CommandCount[command].nameCommand.objects[index].set = false;
        }

    }
//РѕС‚РєСЂС‹С‚СЊ С„СѓРЅРєС†РёРѕРЅР°Р» СЃРѕР·РґР°РЅРёСЏ РѕР±СЉРµРєС‚Р°
let createObkect = false;
function opencreateObject()
{
    if(!createObkect){

        let creater = document.getElementsByClassName('objectcreate');
        for(i=0;i<creater.length;i++)
            {
                creater[i].style.display = 'block';
            }

        createObkect = true;
    }else{
        let name = document.getElementById('example-title-createobject');
        let desc = document.getElementById('example-area-createobjectdesc');
        if(name.value===''||name.value===' '){
            name.style.border = '1px solid red';
        }else{
            name.style.border = '1px solid #ccc';

                let select = document.getElementById('example-select-objects');

                let opt = document.createElement('option');
                opt.setAttribute('value',parseInt(select.children[select.children.length-1].value)+1);
                opt.setAttribute('data-img','../public/objects/obj.png');
                opt.setAttribute('data-desc',desc.value);
                opt.innerHTML = name.value;
                select.insertBefore(opt,select.children[0]);
                select.value = parseInt(select.children[select.children.length-1].value)+1;
                name.value = '';
                desc.value = '';

        }
    }
}
function closeObjectCreater()
{
    let creater = document.getElementsByClassName('objectcreate');
        for(i=0;i<creater.length;i++)
            {
                creater[i].style.display = 'none';
            }
    createObkect = false;
}

/*******************************************************************************************************************************************/
//СЂРµРґР°РєС‚РѕСЂ Р·Р°РґР°С‡
function redactTask(el)
{

    $.ajax({
        url:'/system/gettaskforredact',
        type:'post',
        data:({id:parseInt(el.parentElement.parentElement.getAttribute('id'))}),
        success:function(res)
        {
            document.getElementsByClassName('redacttask')[0].innerHTML = res;


        }
    });

}
//СЃРѕС…СЂР°РЅРёС‚СЊ СЂРµРґР°РєС‚РёСЂСѓСЋРјСѓСЋ Р·Р°РґР°С‡Сѓ
function SaveRedactTask()
{
    let datatask = {
        idtask:parseInt(document.getElementsByClassName('taskid')[0].innerHTML),
        from:'games',
        idgame:parseInt(document.getElementsByClassName('gameid')[0].innerHTML),
        title:document.getElementById('example-title-game').value,
        desc:document.getElementById('example-title-desc').value,
        cond:'',
        variant:document.getElementById('example-title-var').options[parseInt(document.getElementById('example-title-var').options.selectedIndex)].value,
        password:'',
        self:'',
        score:document.getElementById('example-title-score').value,
        command:document.getElementById('example-title-comm').options[document.getElementById('example-title-comm').options.selectedIndex].value,
        role:document.getElementById('example-title-role').options[document.getElementById('example-title-role').options.selectedIndex].value,
        player:document.getElementById('example-title-player').options[document.getElementById('example-title-player').options.selectedIndex].value,
        start:document.getElementById('example-title-start').value,
        end:document.getElementById('example-title-end').value


    }
    if(datatask.title===''||datatask.title===' ')
        {
            document.getElementById('example-title-game').style.border = "1px solid red";
        }else{
            document.getElementById('example-title-game').style.border = "1px solid #ccc";

            if(datatask.desc===''||datatask.desc===' ')
                {
                    document.getElementById('example-title-desc').style.border = "1px solid red";
                }else{
                    document.getElementById('example-title-desc').style.border = "1px solid #ccc";
                    if(datatask.variant==='code'){
                        datatask.password = document.getElementById('example-title-pass').value;
                        if(datatask.password===''||datatask.password===' '){
                            document.getElementById('example-title-pass').style.border="1px solid red";
                        }else{
                            document.getElementById('example-title-pass').style.border = '1px solid #ccc';
                            $.ajax({
                                url:'/system/redactsavetask',
                                type:'post',
                                data:({task:JSON.stringify(datatask)}),
                                success:function(res)
                                {
                                    document.getElementsByClassName('redacttask')[0].innerHTML = res;
                                    let timers = document.getElementsByClassName('timer');
                                    for(a=0;a<timers.length;a++){
                                        Timer(timers[a]);
                                        Timer(timers[a].nextElementSibling);
                                    }
                                    let interval = setInterval(function(){
                                        for(i=0;i<timers.length;i++){
                                            Timer(timers[i]);
                                            Timer(timers[i].nextElementSibling);
                                        }
                                    },1000);
                                                }
                                            });
                        }
                    }else if(datatask.variant ==='self'){
                        datatask.self = document.getElementById('example-title-self').value;
                        if(datatask.self===''||datatask.self===' '){
                            document.getElementById('example-title-self').style.border = '1px solid red';

                        }else{
                            document.getElementById('example-title-self').style.border = '1px solid #ccc';
                            datatask.cond = document.getElementById('example-title-self').value;
                            datatask.end = document.getElementById('example-title-end').value;
                            $.ajax({
                                url:'/system/redactsavetask',
                                type:'post',
                                data:({task:JSON.stringify(datatask)}),
                                success:function(res)
                                {
                                   document.getElementsByClassName('redacttask')[0].innerHTML = res;
                                    let timers = document.getElementsByClassName('timer');
                                    for(a=0;a<timers.length;a++){
                                        Timer(timers[a]);
                                        Timer(timers[a].nextElementSibling);
                                    }
                                    let interval = setInterval(function(){
                                        for(i=0;i<timers.length;i++){
                                            Timer(timers[i]);
                                            Timer(timers[i].nextElementSibling);
                                        }
                                    },1000);
                                }
                            });
                        }
                    }else{
                        $.ajax({
                                url:'/system/redactsavetask',
                                type:'post',
                                data:({task:JSON.stringify(datatask)}),
                                success:function(res)
                                {
                                    document.getElementsByClassName('redacttask')[0].innerHTML = res;
                                    let timers = document.getElementsByClassName('timer');
                                    for(a=0;a<timers.length;a++){
                                        Timer(timers[a]);
                                        Timer(timers[a].nextElementSibling);
                                    }
                                    let interval = setInterval(function(){
                                        for(i=0;i<timers.length;i++){
                                            Timer(timers[i]);
                                            Timer(timers[i].nextElementSibling);
                                        }
                                    },1000);
                                }
                            });
                    }

                }
        }



}
/******************************************************************************************************************************************/
//color command
function setColorCommand(el)
    {
        document.getElementsByClassName('color_set')[0].style.backgroundColor = getComputedStyle(el).backgroundColor;


    }
var setmaptask = false;
function setMap()
{
    setmaptask = true;
}
var taskmap=[];
function inittask()
{
     var map = new ymaps.Map('maptask',{
            center:_Map.getCenter(),
            zoom:_Map.getZoom(),
            controls:['zoomControl','fullscreenControl']
        });
        var coords = JSON.parse(document.getElementById('maptask').getAttribute('data-polygon'));
        //РїРѕР»РёРіРѕРЅ
        var Polygon = new ymaps.Polygon([coords],{
            hintContent:'РџРѕР»РёРіРѕРЅ'
        });
        Polygon.events.add('click',function(e){
            if(setmaptask){
               var nametask = document.getElementById('example-title-game');
               if(nametask.value==''||nametask.value==' '){
                   ErrorModal('Р’РІРµРґРёС‚Рµ РЅР°Р·РІР°РЅРёРµ Р·Р°РґР°С‡Рё');
               }else{
                   var coords = e.get('coords');
                   var task = new ymaps.Placemark(coords,{
                       hintContent:nametask.value,
                       balloonContent:document.getElementById('example-title-desc').value
                   },{
                       iconLayout: 'default#image',
                       iconImageHref: '../public/images/star-solid.svg',
                       iconImageSize: [15, 15],
                       iconImageOffset: [-5, -11],
                   });
                   map.geoObjects.add(task);
                   taskmap.push(task.geometry.getCoordinates());
                   setmaptask = false;
               }

           }else{

           }
        });
        map.geoObjects.add(Polygon);
    //С„Р»Р°РіРё РєРѕРјРјР°РЅРґ


    //РѕР±СЉСЉРµРєС‚С‹ РєРѕРјРјР°РЅРґ
        let objcomm = document.getElementsByClassName('commobjects');

        for(o=0;o<objcomm.length;o++)
            {
                coords = objcomm[o].getAttribute('coords').split(',');
                if(coords==''||coords==' '){

                }else{
                    let newcolor = objcomm[o].getAttribute('color');
                    newcolor = newcolor.replace('rgb','').replace('(','').replace(')','').split(',');


                    var object = new ymaps.Placemark([parseFloat(coords[0]),parseFloat(coords[1])],{
                    hintContent:'РћР±СЉРµРєС‚ РєРѕРјР°РЅРґС‹ '+objcomm[o].getAttribute('comand'),
                    },{
                        preset: 'islands#dotIcon',
                        iconColor:changeColor(newcolor),
                    });
                    map.geoObjects.add(object);
                }

            }
    //РѕР±С‰РёРµ РѕР±СЉРµРєС‚С‹
    let all = document.getElementsByClassName('allobj');
        for(a=0;a<all.length;a++)
        {
            coords = all[a].getAttribute('coords').split(',');

            var allobj = new ymaps.Placemark([parseFloat(coords[0]),parseFloat(coords[1])],{
               hintContent:'РћР±С‰РёР№ РѕР±СЉРµРєС‚',

            },{
                preset: 'islands#dotIcon',
                iconColor:"#000",
            });
            map.geoObjects.add(allobj);
        }

}


//РёР·РјРµРЅРёС‚СЊ С†С‹РµС‚ РєР°СЂС‚РёРЅРєРё РЅР° РЅСѓР¶РЅС‹Р№

function changeColor(newColor)
{
    let hex='#';
        for(c=0;c<newColor.length;c++){
            if(parseInt(newColor[c].toString(16))==0){
                hex += '00';
            }else{
                hex += parseInt(newColor[c]).toString(16);
            }


        }

        return hex;

}
//commanda
let commanda=0;
function getCommand(el)
{
    let game = {
        id:parseInt(document.getElementsByClassName('gameid')[0].innerHTML),
        command:el.options[el.options.selectedIndex].value
    }
    commanda = game.command;
    $.ajax({
        url:'/system/getcommand',
        type:'post',
        data:({id:JSON.stringify(game)}),
        success:function(res)
        {

            let data = JSON.parse(res);


            //document.getElementById('example-title-comm').innerHTML = data.commands;
            document.getElementById('example-title-role').innerHTML= data.roles;
            document.getElementById('example-title-player').innerHTML = data.players;

        }
    });
}
//select SelectVariant
function SelectVariant(el)
{
    if(el.options[el.options.selectedIndex].value==='code')
    {
        document.getElementsByClassName('hid')[0].style.display = 'block';
        document.getElementsByClassName('hid')[1].style.display = 'none';
    }else if(el.options[el.options.selectedIndex].value==='self'){
        document.getElementsByClassName('hid')[1].style.display = 'block';
        document.getElementsByClassName('hid')[0].style.display = 'none';
    }else{
        document.getElementsByClassName('hid')[0].style.display = 'none';
        document.getElementsByClassName('hid')[1].style.display = 'none';
    }
}
//password
let passfortask='';
function GeneratorPass(el){
    let stringandnum = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                        'n','o','p','q','r','s','t','u','v','w','x','y','z',
                        0,1,2,3,4,5,6,7,8,9];
    function getRandom(min,max)
        {
            return Math.floor(Math.random() * (max-min)) + min;

        }
    for(var a=0;a<5;a++)
        {
            let char = stringandnum[getRandom(0,stringandnum.length)];
            if(typeof char == 'string'){
                if(getRandom(1,3)==2){
                   char = char.toUpperCase();
                   }


            }
            passfortask+=char;
        }
        document.getElementById('example-title-pass').value = passfortask;

        passfortask = '';
}
//СѓСЃС‚Р°РЅРѕРІРёС‚СЊ РєРѕРјР°РЅРґСѓ
let comandaset = 0;
function getCommand(el)
{
    let game = {
        id:parseInt(document.getElementsByClassName('gameid')[0].innerHTML),
        command:el.options[el.options.selectedIndex].value
    }
    comandaset = game.command;
    $.ajax({
        url:'/system/getcommand',
        type:'post',
        data:({id:JSON.stringify(game)}),
        success:function(res)
        {
            console.log(res);
            let data = JSON.parse(res);


            //document.getElementById('example-title-comm').innerHTML = data.commands;
            document.getElementById('example-title-role').innerHTML= data.roles;
            document.getElementById('example-title-player').innerHTML = data.players;

        }
    });
}
//setRole
function setRole(el)
{
    let game = {
        id:parseInt(document.getElementsByClassName('gameid')[0].innerHTML),
        command:commanda,
        role:el.options[el.options.selectedIndex].value
    }
    $.ajax({
        url:'/system/setrole',
        type:'post',
        data:({game:JSON.stringify(game)}),
        success:function(res)
        {
            let data = JSON.parse(res);
            document.getElementById('example-title-player').innerHTML = data.players;

        }
    });

}
//СЃРѕС…СЂР°РЅРёС‚СЊ Р·Р°РґР°С‡Сѓ
function SaveTask()
{
    let comm = document.getElementById('example-title-comm');
    let role = document.getElementById('example-title-role');
    let player = document.getElementById('example-title-player');
    let task = {
        from:'addgame',
        idgame:parseInt(document.getElementsByClassName('gameid')[0].innerHTML),
        title:document.getElementById('example-title-game').value,
        desc:document.getElementById('example-title-desc').value,
        cond:'',
        variant:document.getElementById('example-title-var').options[parseInt(document.getElementById('example-title-var').options.selectedIndex)].value,
        password:'',
        self:'',
        score:document.getElementById('example-title-score').value,
        command:comm.options[comm.options.selectedIndex].value,
        role:role.options[role.options.selectedIndex].value,
        player:player.options[player.options.selectedIndex].value,
        start:document.getElementById('example-title-start').value,
        end:document.getElementById('example-title-end').value,
        taskmap:taskmap,
    }
    if(task.title===''||task.title===' ')
        {
            document.getElementById('example-title-game').style.border = "1px solid red";
        }else{
            document.getElementById('example-title-game').style.border = "1px solid #ccc";

            if(task.desc===''||task.desc===' ')
                {
                    document.getElementById('example-title-desc').style.border = "1px solid red";
                }else{
                    document.getElementById('example-title-desc').style.border = "1px solid #ccc";
                    if(task.variant==='code'){
                        task.password = document.getElementById('example-title-pass').value;
                        if(task.password===''||task.password===' '){
                            document.getElementById('example-title-pass').style.border="1px solid red";
                        }else{
                            document.getElementById('example-title-pass').style.border = '1px solid #ccc';
                            sendTaskinSave(task);
                        }
                    }else if(task.variant ==='self'){
                        task.self = document.getElementById('example-title-self').value;
                        if(task.self===''||task.self===' '){
                            document.getElementById('example-title-self').style.border = '1px solid red';

                        }else{
                            document.getElementById('example-title-self').style.border = '1px solid #ccc';
                            task.cond = document.getElementById('example-title-self').value;
                            sendTaskinSave(task);
                        }
                    }else{
                        sendTaskinSave(task);
                    }

                }
        }

}
function sendTaskinSave(param)
{
    $.ajax({
        url:'/system/savetask',
        type:'post',
        data:({task:JSON.stringify(param)}),
        success:function(data)
        {

            if(data==='Р’СЂРµРјСЏ РЅР°С‡Р°Р»Р° Р·Р°РґР°С‡Рё РјРµРЅСЊС€Рµ РІСЂРµРјРµРЅРё РЅР°С‡Р°Р»Р° РёРіСЂС‹')
                {
                    document.getElementsByClassName('alert-main')[0].style.display = 'block';
                    document.getElementsByClassName('alert-main')[0].innerHTML = data;
                    setTimeout(function(){
                        document.getElementsByClassName('alert-main')[0].style.display = 'none';
                    },1500);
                }
            else if(data === 'Р’СЂРµРјСЏ РѕРєРѕРЅС‡Р°РЅРёСЏ Р·Р°РґР°С‡Рё Р±РѕР»СЊС€Рµ РІСЂРµРјРµРЅРё РєРѕРЅС†Р° РёРіСЂС‹')
                {
                    document.getElementsByClassName('alert-main')[1].style.display = 'block';
                    document.getElementsByClassName('alert-main')[1].innerHTML = data;
                    setTimeout(function(){
                        document.getElementsByClassName('alert-main')[1].style.display = 'none';
                    },1500);
                }
            else
                {
                    document.getElementsByClassName('tasks')[0].innerHTML = data;



                    //ymaps.ready(init);
                }

        }

    });
}
//СѓРґР°Р»РёС‚СЊ Р·Р°РґР°С‡Сѓ
function deleteTaskFromgame(el)
{
    let game = {
        task:parseInt(el.parentElement.parentElement.children[0].innerHTML),
        game:parseInt(document.getElementsByClassName('gameid')[0].innerHTML),
    }
    $.ajax({
        url:'/system/deletetask',
        type:'post',
        data:({id:JSON.stringify(game)}),
        success:function(res)
        {

            document.getElementsByClassName('tasks')[0].innerHTML = res;
        }

    });
}



//------------------------------------------------------------------------------------//
window.onload = function()
{
    var addcomand = document.getElementsByClassName('btn-addcommand');
    var validComm = false;
    var commandId = 0;
    var newRoleCount = 0;
    var icon ='';
    var srcFlag;
    var rolesTeam = document.getElementsByClassName('roles-teams');

    var commandnum = 1;
    var command=0;
    var pflag=false,p2,line,coords;
    var flagFromTable=[];//С„Р»Р°Рі РёР· С‚Р°Р±Р»РёС†С‹
    //РЅР°СЃС‚СЂРѕР№РєРё РґР»СЏ РѕР±СЉРµРєС‚РѕРІ
    var setobj = false;
    var objtype='';
    var allindex=0;
    var objindex=0;
    //РЅР°Р·РЅР°С‡Р°РµРј РґРѕР±Р°РІР»РµРЅРёРµ
    addcomand[0].onclick = function()
    {
        if(this.innerHTML === 'Р”РѕР±Р°РІРёС‚СЊ РєРѕРјРјР°РЅРґСѓ')
            {
                this.innerHTML = 'Р”РѕР±Р°РІРёС‚СЊ';
                if(!validComm)
            {

                var command = document.getElementsByClassName('hid')[0];
                command.style.display = 'block';


                //$('.row')[3].after(clon);

                validComm = true;
                commandId += 1;
                //Р·Р°РєСЂС‹С‚СЊ СЂРµРґР°РєС‚РѕСЂ РєРѕРјР°РЅРґС‹
                var dltCommand = document.getElementsByClassName('deleteCommand');
                dltCommand[0].onclick = function()
                {
                    command.style.display = 'none';
                    addcomand[0].innerHTML = "Р”РѕР±Р°РІРёС‚СЊ РєРѕРјРјР°РЅРґСѓ";
                    validComm = false;
                    if(CommandCount.length){
                        CommandCount.slice(-1);
                    }else{

                    }
                }
                //СѓРґР°Р»РёС‚СЊ СЂРѕР»СЊ
                RoleClose();

                //РґРѕР±Р°РІРёС‚СЊ СЂРѕР»СЊ
                var addRole = document.getElementsByClassName('addrole');
                addRole[0].onclick = function()
                {
                    document.getElementsByClassName('fide')[0].style.display = 'block';
                    document.getElementsByClassName('fide')[1].style.display = 'block';
                }
                //РґРѕР±Р°РІР»СЏРµРј СЂРѕР»СЊ РІСЃРїРёСЃРѕРє
                var addRoleToList = document.getElementsByClassName('icons')[0];
                addRoleToList.onclick = function()
                {
                    var str = this.parentElement.parentElement.children[1].children[0].children[0].children[0].value;
                    if(str === ''||str === ' '){
                        //РµСЃР»Рё РїРѕР»Рµ РїСѓСЃС‚РѕРµ
this.parentElement.parentElement.children[1].children[0].children[0].children[1].classList.add('glyphicon-remove');
this.parentElement.parentElement.children[1].children[0].classList.add('has-error');
this.parentElement.parentElement.children[1].children[0].children[0].children[0].placeholder = 'Р’РІРµРґРёС‚Рµ РёРјСЏ СЂРѕР»Рё';
                    }else{
                        if(!pattern(str)){
                        //РµСЃР»Рё РІСЃС‘ РѕРє
this.parentElement.parentElement.children[1].children[0].children[0].children[1].classList.remove('glyphicon-remove');
this.parentElement.parentElement.children[1].children[0].children[0].children[1].classList.add('glyphicon-ok');
this.parentElement.parentElement.children[1].children[0].classList.remove('has-error');
this.parentElement.parentElement.children[1].children[0].classList.add('has-success');
var maxCounts = parseInt($('#exampleInputAmount').val());
var Elem = $('.addcommand').children('.row')[1];
var newRole = Elem.cloneNode(true);
newRole.children[1].children[0].setAttribute('class',icon);

newRole.children[1].children[1].innerHTML = str;

newRole.children[3].children[0].setAttribute('data-name',$('#descriptionRole').val());
$('.addcommand').children('.row')[0].after(newRole);
RoleClose();
createRoles();


                        }else{
//РІС‹РІРѕРґ РѕС€РёР±РєРё
this.parentElement.parentElement.children[1].children[0].children[0].children[1].classList.remove('glyphicon-ok');
this.parentElement.parentElement.children[1].children[0].children[0].children[1].classList.add('glyphicon-remove');
this.parentElement.parentElement.children[1].children[0].classList.add('has-error');
this.parentElement.parentElement.children[1].children[0].children[0].children[0].placeholder = 'РўРѕР»СЊРєРѕ РєРёСЂРёР»Р»РёС†Р°';
                        }

                    }

                }

            }else{

            }
        //СѓСЃС‚Р°РЅРѕРІРєР° С„Р»Р°РіР° СѓСЃС‚Р°РЅРѕРІР»РµРЅРЅС‹Р№ СЃРІРµС‚РёС‚СЃСЏ СЃРёРЅРёРј С†РІРµС‚РѕРј
        var icons = document.getElementsByClassName('list-icons');
        for(var i = 0;i < icons.length; i++)
        {
            icons[i].onclick = function()
            {
                for(var a=0;a<icons.length;a++)
                {
                    icons[a].style.color = "#949494";
                }
                this.style.color = '#4AC7FC';
                icon = this.getAttribute('class').replace('list-icons','fasadd');
            }
        }
        //РґРѕР±Р°РІРёС‚СЊ С„Р»Р°Рі
        $('.flags').click(function(){
            if(typeof srcFlag != 'object')
                {
                    $('.logocommand')[0].setAttribute('src',this.getAttribute('src'));
                    srcFlag = this;
                    this.style.display = 'none';

                }else{
                    $('.logocommand')[0].setAttribute('src',this.getAttribute('src'));
                    srcFlag.style.display ='initial';
                    srcFlag = this;
                    this.style.display = 'none';
                }

        });
        //Р·Р°РєСЂС‹С‚СЊ СЂРµРґР°РєС‚РѕСЂ РґРѕР±Р°РІР»РµРЅРёСЏ СЂРѕР»Рё
        var closeAddRole = document.getElementsByClassName('add-roles-close')[0];
        closeAddRole.onclick = function()
        {
            document.getElementsByClassName('fide')[0].style.display = 'none';
            document.getElementsByClassName('fide')[1].style.display = 'none';
        }

    }else{
        //-----------------------Р·Р°РїРёСЃСЊ Рё РґРѕР±Р°РІР»РµРЅРёРµ РєРѕРјР°РЅРґС‹ РІ РёРіСЂСѓ------------------//

        let namecommand = document.getElementById('command_');
        if(namecommand.value === ''||namecommand.value === ' ')
            {
//РѕС€РёР±РєР° РїСѓСЃС‚РѕРіРѕ РїРѕР»СЏ
namecommand.parentElement.parentElement.classList.add('has-error');
namecommand.parentElement.children[1].classList.add('glyphicon-remove');
namecommand.placeholder = 'Р’РІРµРґРёС‚Рµ РЅР°Р·РІР°РЅРёРµ РєРѕРјР°РЅРґС‹';

            }else{
                //Р·Р°РїРёСЃС‹РІР°РµРј РґР°РЅРЅС‹Рµ
namecommand.parentElement.parentElement.classList.remove('has-error');
namecommand.parentElement.parentElement.classList.add('has-success');
namecommand.parentElement.children[1].classList.remove('glyphicon-remove');
namecommand.parentElement.children[1].classList.add('glyphicon-ok');
                let validCommandCount = false;
                let checkColor=false;
                let checkRoles = false;
                var data ={
                    nameCommand:{
                        num:commandnum,
                        name:namecommand.value,
                        colorcomm:getComputedStyle($('.color_set')[0]).backgroundColor,
                        coords:[],
                        setFlag:false,
                        objects:[],
                        roles:[]

                    },
                    roles:[],
                    objects:[],
                    polygon:[],
                    game:'',
                }

                var arr =[];
                var mans = 0;

                if(CommandCount.length){
                    for(var comm=0;comm < CommandCount.length;comm++)
                        {
                            if(CommandCount[comm].nameCommand.name === data.nameCommand.name)
                                {
                                    validCommandCount = true;
                                }
                            if(CommandCount[comm].nameCommand.colorcomm === data.nameCommand.colorcomm)
                                {
                                    checkColor = true;
                                }

                        }



                }
                if(validCommandCount){
                    document.getElementsByClassName('alert-main-err')[0].style.display = 'block';
                    document.getElementsByClassName('alert-main-err')[0].innerHTML = 'РљРѕРјР°РЅРґР° СЃ С‚Р°РєРёРј РЅР°Р·РІР°РЅРёРµРј СѓР¶Рµ РµСЃС‚СЊ';
                    setTimeout(function(){
                        document.getElementsByClassName('alert-main-err')[0].style.display = 'none';
                    },1500);
                }else{
                    if(checkColor){
                        document.getElementsByClassName('alert-main-err')[0].style.display = 'block';
                        document.getElementsByClassName('alert-main-err')[0].innerHTML = 'РС‚РѕС‚ С†РІРµС‚ Р·Р°РЅСЏС‚ РґСЂСѓРіРѕР№ РєРѕРјР°РЅРґРѕР№';
                        setTimeout(function(){
                            document.getElementsByClassName('alert-main-err')[0].style.display = 'none';
                        },1500);
                    }else{

                        for(var i = 0;i < rolesTeam.length; i++)
                            {

                                var roles={
                                    icon:rolesTeam[i].children[1].children[0].getAttribute('class').replace(' fasadd',''),
                                    role:rolesTeam[i].children[1].children[1].innerHTML,
                                    desc:rolesTeam[i].children[3].children[0].getAttribute('data-name'),
                                    default:document.getElementById('role-default').options[document.getElementById('role-default').options.selectedIndex].innerHTML,

                                }
                                data.nameCommand.roles.push(roles);
                                data.roles.push(roles);



                            }
                            if(CommandCount.length){

                                for(var i=0;i<CommandCount.length;i++)
                                    {
                                        if(JSON.stringify(CommandCount[i].roles)!=JSON.stringify(data.roles))
                                            {
                                                checkRoles = true;

                                            }

                                    }
                                if(checkRoles){
                                    document.getElementsByClassName('alert-main-err')[0].style.display = 'block';
                                    document.getElementsByClassName('alert-main-err')[0].innerHTML = 'РЎРѕСЃС‚Р°РІ РєРѕРјР°РЅРґ СЂР°Р·РЅС‹Р№';
                                    setTimeout(function(){
                                        document.getElementsByClassName('alert-main-err')[0].style.display = 'none';
                                    },1500);
                                }else{
                                    var pars = document.getElementsByClassName('commands-table')[0];

                                CommandCount.push(data);
                                $.ajax({
                                    url:'/admin/addcomand',
                                    type:'post',
                                    data:({addcomm:JSON.stringify(CommandCount)}),
                                    success:function(data){
                                        pars.style.display = 'block';
                                        pars.innerHTML = data;
                                        var del = document.getElementsByClassName('deleteCommand-table');
                                        for(var a =0;a<del.length;a++)
                                            {
                                                del[a].addEventListener('click',deleteFromTable);
                                            }

                                        addCommandInObjects();

                                    }
                                });

                                commandnum += 1;
                                }
                            }else{
                            var pars = document.getElementsByClassName('commands-table')[0];

                                CommandCount.push(data);
                                $.ajax({
                                    url:'/admin/addcomand',
                                    type:'post',
                                    data:({addcomm:JSON.stringify(CommandCount)}),
                                    success:function(data){
                                        pars.style.display = 'block';
                                        pars.innerHTML = data;
                                        var del = document.getElementsByClassName('deleteCommand-table');
                                        for(var a =0;a<del.length;a++)
                                            {
                                                del[a].addEventListener('click',deleteFromTable);
                                            }


                                        addCommandInObjects();

                                    }
                                });

                                commandnum += 1;

                            }





                    }

                }


            }












        }




    }

    let def = document.getElementById('role-default');
    let teamroles = document.getElementsByClassName('roles-teams');
    function createRoles(){
        def.innerHTML = '';
        for(var t=0;t<teamroles.length;t++)
            {

                let opt = document.createElement('option');
                opt.setAttribute('value',t);
                opt.innerHTML = teamroles[t].children[1].children[1].innerHTML;
                def.append(opt);
            }
        }
    createRoles();



    //СѓРґР°Р»РµРЅРёРµ РєРѕРјРјР°РЅРґС‹ РёР· С‚Р°Р±Р»РёС†С‹
    function deleteFromTable()
    {
        let index = parseInt(this.parentElement.parentElement.getAttribute('class'));
        let err = document.getElementsByClassName('alert-main');
         //this.parentElement.parentElement.remove();
        console.log(index);
            if(CommandCount[index].nameCommand.objects.length){
                err[0].style.display = 'block';
                err[0].innerHTML = 'РЈ РІР°СЃ РёРјРµСЋС‚СЃСЏ РѕР±СЉРµРєС‚С‹ РЅР° РєР°СЂС‚Рµ, СѓРґР°Р»РёС‚Рµ РёС…';
                setTimeout(function (){
                    err[0].style.display = 'none';
                },1500);
            }else{
                this.parentElement.parentElement.remove();
                CommandCount.splice(index,1);
                addCommandInObjects();
            }





         //addCommandInObjects();
    }


    //СѓРґР°Р»РµРЅРёРµ СЂРѕР»Рё РёР· СЃРїРёСЃРєР° СЂРѕР»РµР№ РІ СЂРµРґР°РєС‚РѕСЂРµ СЂРѕР»РµР№
    function RoleClose()
    {
        var roleClose = document.getElementsByClassName('roles-close');
        for(var a=0; a<roleClose.length; a++)
            {
                roleClose[a].onclick = function()
                {
                        this.parentElement.parentElement.remove();
                        createRoles();
                }
            }

    }

   //РґРµР»РµРіРёСЂРѕРІР°РЅРёРµ РЅР° РёРєРѕРЅРєРё


//**************************РєР°СЂС‚Р°*********************************************//
  var polygoncoords = {
      coords:'',
  }


    ymaps.ready(init);




function init(){
        var Polygon;

        var lat = document.getElementById('map');

                    /******/
        var map = new ymaps.Map('map',{
            center:[54.5293,36.27542],
            zoom:10,
            controls:['zoomControl','fullscreenControl']
        });
        //Р°РІС‚РѕРїРѕР·РёС†РёРѕРЅРёСЂРѕРІР°РЅРёРµ



        var button = new ymaps.control.Button({
            data:{
                content:'',
                image:'../public/icons/yandex_map_writing-pencil.png'
            },
            options:{

            }
        });

        var p;
        //РѕС‚СЂРёСЃРѕРІРєР° РёРіСЂРѕРІРѕРіРѕ РїРѕР»РёРіРѕРЅР°
        button.events.add('click',function(){
           var polygon = new ymaps.GeoObject({
            geometry:{
                type:'Polygon',
                coordinates:[]
            },
            properties:{
                hintContent:'РРіСЂРѕРІРѕР№ РїРѕР»РёРіРѕРЅ'
            },
                editorDrawingCursor:'crosshair',
                fillColor: '#00FF00',
                strokeColor: '#0000FF',
                draggable:true,
            });
            map.geoObjects.add(polygon);
            //Р·Р°РїРёСЃСЊ РєРѕРѕСЂРґРёРЅР°С‚ РїРѕР»РёРіРѕРЅР°
                polygoncoords.coords = polygon.geometry._coordPath;
             polygon.events.add('change',function(){
                polygoncoords.coords = polygon.geometry._coordPath;
             });


            //РґРѕР±Р°РІР»СЏРµРј РёР»Рё РѕР±СЉРµРєС‚ С„Р»Р°Рі РІРЅСѓС‚СЂРё РїРѕР»РёРіРѕРЅР°
            polygon.events.add('click',function(e){
                var coords = e.get('coords');
                var man=0;
                var text='';
                if(pflag){


                if(CommandCount[command].nameCommand.setFlag){
                    document.getElementsByClassName('alert-main')[0].innerHTML = 'Р¤Р»Р°Рі СЌС‚РѕР№ РєРѕРјР°РЅРґС‹ СѓР¶Рµ СѓСЃС‚Р°РЅРѕРІР»РµРЅ!';
                    document.getElementsByClassName('alert-main')[0].style.display='block'
                    setTimeout(function(){
                        document.getElementsByClassName('alert-main')[0].style.display = 'none';
                    },1500);
                    pflag = false;
                }else{
                    for(var a=0;a<CommandCount[command].roles.length;a++){
                                text+="<tr><td><i class='"+CommandCount[command].roles[a].icon+"'></i></td><td> "+CommandCount[command].roles[a].role+"</td><td><span class='badge'>"+CommandCount[command].roles[a].count+"</span></td></tr>";
                                man = CommandCount[command].roles[a].mans;
                            }

                            var icons='РљРѕРјР°РЅРґР° '+CommandCount[command].nameCommand.name+' <span class="badge">'+man+'</span><i class="far fa-trash-alt pull-right map-delete-flag" id="'+command+'" onclick="deleteFlag(this)"></i><br><table class="table table-hover"><thead><tr><th>Р РѕР»СЊ</th><th>РќР°Р·РІР°РЅРёРµ</th><th>РљРѕР»-РІРѕ</th></tr></thead><tbody>%text%</tbody></table>';

                            icons=icons.replace('%text%',text);
                            var Place = new ymaps.Placemark(coords,
                            {
                                hintContent:'РљРѕРјР°РЅРґР° '+CommandCount[command].nameCommand.name,
                                balloonContent:icons
                            },{
                                iconLayout:'default#image',
                                iconImageHref:CommandCount[command].nameCommand.flag,
                                iconImageSize: [15, 40],
                                iconImageOffset: [-5, -38],
                                draggable:true,

                            });
                    //С„СѓРЅРєС†РёСЏ РѕРїСЂРµРґРµР»РµРЅРёСЏ РЅРѕРІРѕР№ РїРѕР·РёС†РёСЏ С„Р»Р°РіР°
                    var startcoords;
                    Place.events.add('dragstart',function(){
                        startcoords = Place.geometry._coordinates;

                    });
                    //РѕС‚СЃР»РµР¶РёРІР°РЅРёРµ РЅРѕРІС‹С… РєРѕРѕСЂРґРёРЅР°С‚ С„Р»Р°РіР° РµСЃР»Рё РѕРЅРё РЅРµ РІС‹С€Р»Рё Р·Р° РїРѕР»РёРіРѕРЅ
                    Place.events.add('dragend',function(e){
                        var index =parseInt(Place.properties._data.balloonContent.match(/id="[0-9]+"/gm).join().match(/[0-9]+/gm).join());
                        //СЃС‚Р°РІРё РЅРѕРІС‹Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹
                        var coords = Place.geometry._coordinates;
                        var find = ymaps.geoQuery(Place).searchInside(Polygon);
                        if(find._objects.length){
                                    CommandCount[index].nameCommand.coords = Place.geometry._coordinates;
                                }else{
                                    //Place.getOverlay().getData.setCoordinates(startcoords);
                                    Place.geometry.setCoordinates(startcoords);
                                    document.getElementsByClassName('alert-main')[0].innerHTML = 'РЎС‚Р°РІСЊС‚Рµ С„Р»Р°Рі РІРЅСѓС‚СЂРё РїРѕР»РёРіРѕРЅР°';
                                    document.getElementsByClassName('alert-main')[0].style.display='block'
                                    setTimeout(function(){
                                        document.getElementsByClassName('alert-main')[0].style.display = 'none';
                                    },1500);
                                }



                    });
                    Place.events.add('click',function(e){
                       PlaceId = e.get('target');
                    },this);
                    CommandCount[command].nameCommand.coords = coords;
                    CommandCount[command].nameCommand.setFlag = true;


                }
                    //РµСЃР»Рё РЅР°РґРѕ СЃС‚Р°РІРёС‚СЊ РѕР±СЉРµРєС‚
                }else if(setobj){

                    //РµСЃР»Рё РѕР±С‰РёР№ РѕР±СЉРµРєС‚
                    if(objtype === 'all'){
                        if(CommandCount[0].objects[allindex].set){
                            document.getElementsByClassName('alert-main')[0].innerHTML = 'РћР±СЉРµРєС‚ СѓР¶Рµ СѓСЃС‚Р°РЅРѕРІР»РµРЅ!';
                            document.getElementsByClassName('alert-main')[0].style.display='block'
                            setTimeout(function(){
                                document.getElementsByClassName('alert-main')[0].style.display = 'none';
                            },1500);
                        pflag = false;
                        }else{

                            var Place = new ymaps.Placemark(coords,{
                                hintContent:'РћР±С‰РёР№',
                                balloonContent:'РќРёРєРѕРјСѓ РЅРµ РїСЂРёРЅР°РґР»РµР¶РёС‚!<i class="far fa-trash-alt pull-right map-delete-flag"  onclick="deleteObject(this)" id="'+allindex+'" type="all"></i><br>РћРїРёСЃР°РЅРёРµ: '+CommandCount[0].objects[allindex].desc,
                            },{
                                iconLayout:'default#image',
                                iconImageHref:CommandCount[0].objects[allindex].img,
                                iconImageSize: [15, 20],
                                iconImageOffset: [-5, -18],
                            });
                            CommandCount[0].objects[allindex].set = true;
                            Place.events.add('click',function(e){
                                ObjectId = e.get('target');
                            },this);
                        }
                        setobj = false;
                        CommandCount[0].objects[allindex].coords = coords
                        console.log(pflag);


                    }else{
                        if(CommandCount[objtype].nameCommand.objects[objindex].set){
                            document.getElementsByClassName('alert-main')[0].innerHTML = 'РћР±СЉРµРєС‚ СЌС‚РѕР№ РєРѕРјР°РЅРґС‹ СѓР¶Рµ СѓСЃС‚Р°РЅРѕРІР»РµРЅ!';
                            document.getElementsByClassName('alert-main')[0].style.display='block'
                            setTimeout(function(){
                                document.getElementsByClassName('alert-main')[0].style.display = 'none';
                            },1500);
                        }else{
                            CommandCount[objtype].nameCommand.objects[objindex].coords = coords;
                            var Place = new ymaps.Placemark(coords,{
                                hintContent:'РџСЂРёРЅР°РґР»РµР¶РёС‚ РєРѕРјРјР°РЅРґРµ '+CommandCount[objtype].nameCommand.name,
                                balloonContent:'РџСЂРёРЅР°РґР»РµР¶РёС‚ РєРѕРјРјР°РЅРґРµ '+CommandCount[objtype].nameCommand.name+'<i class="far fa-trash-alt pull-right map-delete-flag" type="'+objtype+'" id="'+objindex+'" onclick="deleteObject(this)"></i><br>РћРїРёСЃР°РЅРёРµ '+CommandCount[objtype].nameCommand.objects[objindex].desc,
                            },{
                                iconLayout:'default#image',
                                iconImageHref:CommandCount[objtype].nameCommand.objects[objindex].img,
                                iconImageSize: [15, 20],
                                iconImageOffset: [-5, -18],
                            });
                            CommandCount[objtype].nameCommand.objects[objindex].set = true;
                            Place.events.add('click',function(e){
                                ObjectId = e.get('target');
                            },this);
                        }
                        setobj = false;

                    }

                }else{


                }




                map.geoObjects.add(Place);

                //Р·Р°РїРёСЃС‹РІР°РµРј РїРѕР·РёС†РёСЋ С„Р»Р°РіР°

                pflag = false;




            });
            polygon.editor.startDrawing();
            Polygon = polygon;
            p=true;


        });



        //РґРѕР±Р°РІР»СЏРµРј С‚РѕС‡РєСѓ РЅР° РєР°СЂС‚Сѓ
        map.events.add('click',function(e){

                if(pflag)
                    {
                        if(p){
                       var coords = e.get('coords');
                var man=0;
                var text='';
                for(var a=0;a<CommandCount[command].roles.length;a++){
                            text+="<tr><td><i class='"+CommandCount[command].roles[a].icon+"'></i></td><td> "+CommandCount[command].roles[a].role+"</td><td><span class='badge'>"+CommandCount[command].roles[a].count+"</span></td></tr>";
                            man = CommandCount[command].roles[a].mans;
                        }

                        var icons='РљРѕРјР°РЅРґР° '+CommandCount[command].nameCommand.name+' <span class="badge">'+man+'</span><br><table class="table table-hover"><thead><tr><th>Р РѕР»СЊ</th><th>РќР°Р·РІР°РЅРёРµ</th><th>РљРѕР»-РІРѕ</th></tr></thead><tbody>%text%</tbody></table>';

                        icons=icons.replace('%text%',text);
                        var Place = new ymaps.Placemark(coords,
                        {
                            hintContent:'РљРѕРјР°РЅРґР° '+CommandCount[command].nameCommand.name,
                            balloonContent:icons
                        },{
                            iconLayout:'default#image',
                            iconImageHref:CommandCount[command].nameCommand.flag,
                            iconImageSize: [15, 40],
                        });


                        var find=ymaps.geoQuery(Place).searchInside(Polygon);
                            if(find._objects.length){
                                map.geoObjects.add(Place);
                                pflag = false;
                            }else{
                                document.getElementsByClassName('alert-main')[0].innerHTML = 'РЎС‚Р°РІСЊС‚Рµ С„Р»Р°Рі РІРЅСѓС‚СЂРё РїРѕР»РёРіРѕРЅР°';
                                document.getElementsByClassName('alert-main')[0].style.display='block'
                                setTimeout(function(){
                                    document.getElementsByClassName('alert-main')[0].style.display = 'none';
                                },1500);
                            }



                    }
                else
                    {
                        document.getElementsByClassName('alert-main')[0].innerHTML = 'РќРµС‚ РїРѕР»РёРіРѕРЅР°';
                                document.getElementsByClassName('alert-main')[0].style.display='block'
                                setTimeout(function(){
                                    document.getElementsByClassName('alert-main')[0].style.display = 'none';
                                },1500);
                    }
            }else{
                //РµСЃР»Рё РЅРµС‚ РїРѕР»РёРіРѕРЅР°

            }
        });


        map.controls.add(button);
        _Map = map;





    }


    //--------------------------------------------------color command--------------------------------//





    //------------------------------------РћР±СЉРµРєС‚С‹ РєРѕРјР°РЅРґС‹----------------------------------------------//

    var selectObject = document.getElementById('example-select-objects');
    selectObject.addEventListener('change',getDataFromSelect);
    //РїРѕР»СѓС‡Р°РµРј РґР°РЅРЅС‹Рµ РёР· СЃРµР»РµРєС‚Р°

    var imgObject;
    function getDataFromSelect()
    {
        let img = this.options[this.options.selectedIndex].getAttribute('data-img');
        imgObject = img;
        this.parentElement.parentElement.children[0].children[0].src = img;

    }
    //РґРѕР±Р°РІРёС‚СЊ РѕР±СЉРµРєС‚

    //addCommandInObjects РґРѕР±Р°РІР»СЏРµС‚ РєРѕРјР°Р°РЅРґС‹ РІ СЃРїРёСЃРѕРє
    function addCommandInObjects()
    {
        var selectObjectsforCommands = document.getElementById('example-sommands');
        var opt = document.createElement('option');
        opt.setAttribute('value','all');
        opt.setAttribute('class',0);
        opt.innerHTML = 'РћР±С‰РёР№';
        selectObjectsforCommands.innerHTML ='';
        selectObjectsforCommands.append(opt);
        for(var a = 0 ;a<CommandCount.length;a++){
            let op = document.createElement('option');
            op.setAttribute('class',a+1);
            op.setAttribute('num',CommandCount[a].nameCommand.num);
            op.setAttribute('value',a);
            op.innerHTML = CommandCount[a].nameCommand.name;
            selectObjectsforCommands.append(op);
        }

    }

    // add object in game
    let add_Object = document.getElementsByClassName('btn-addobject');
    add_Object[0].addEventListener('click',addOboject);

    function addOboject()
    {
        let table = document.getElementsByClassName('table-command');
        let err = this.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].children[0];

        if(CommandCount.length==0){
            err.style.display = 'block';
            err.innerHTML = 'РЈ РІР°СЃ РЅРµС‚ РєРѕРјРјР°РЅРґ';
            setTimeout(function(){
                err.style.display='none';
            },1500);
        }else{
            let objectId = document.getElementById('example-select-objects');
            let status = document.getElementById('example-sommands').value;
            let img = this.parentElement.parentElement.previousElementSibling.previousElementSibling.children[0].children[0].getAttribute('src');

            let object = {
                id:objectId.value,
                coords:[],
                status:status,
                name:objectId.options[objectId.options.selectedIndex].innerHTML,
                desc:objectId.options[objectId.options.selectedIndex].getAttribute('data-desc'),
                img:img,
                set:false,
            }

            if(status==='all'){
                CommandCount[0].objects.push(object);
                $.ajax({
                    url:'/admin/objectingame',
                    type:'post',
                    data:({object:JSON.stringify(CommandCount)}),
                    success:function(res)
                    {
                        document.getElementsByClassName('for-objects')[0].innerHTML = res;
                        let delobj = document.getElementsByClassName('delete-object');
                        for(var a =0;a<delobj.length;a++)
                            {
                                delobj[a].addEventListener('click',DeleteObjectsFromTable);
                            }
                        let setmap = document.getElementsByClassName('object-map');
                        for(var o=0;o<setmap.length;o++)
                            {
                                setmap[o].addEventListener('click',ObjectSetMap);
                            }
                    }
                });
                console.log(CommandCount);
            }else{
                CommandCount[status].nameCommand.objects.push(object);
                $.ajax({
                    url:'/admin/objectingame',
                    type:'post',
                    data:({object:JSON.stringify(CommandCount)}),
                    success:function(res)
                    {
                        document.getElementsByClassName('for-objects')[0].innerHTML = res;
                        let delobj = document.getElementsByClassName('delete-object');
                        for(var a =0;a<delobj.length;a++)
                            {
                                delobj[a].addEventListener('click',DeleteObjectsFromTable);
                            }
                        let setmap = document.getElementsByClassName('object-map');
                        for(var o=0;o<setmap.length;o++)
                            {
                                setmap[o].addEventListener('click',ObjectSetMap);
                            }

                    }
                });
            }
        }

    }
    //delete object from table
    function DeleteObjectsFromTable()
    {
        let err = document.getElementsByClassName('alert-main');
        let all = this.parentElement.parentElement.children[2].innerHTML;
        if(all === 'all'){
            let index = parseInt(this.getAttribute('id'));
            if(CommandCount[0].objects[index].set){
                err[0].style.display = 'block';
                err[0].innerHTML = 'РћР±СЉРµРєС‚ СѓСЃС‚Р°РЅРѕРІР»РµРЅ РЅР° РєР°СЂС‚Сѓ';
                setTimeout(function(){
                    err[0].style.display = 'none';
                },1500);
            }else{
                CommandCount[0].objects.splice(index,1);
            }


        }else{
            let index = parseInt(this.parentElement.parentElement.children[2].innerHTML);//index in object
            let obj = parseInt(this.getAttribute('id'));
            if(CommandCount[index-1].nameCommand.objects[obj].set){
                err[0].style.display = 'block';
                err[0].innerHTML = 'РћР±СЉРµРєС‚ РєРѕРјР°РЅРґС‹ '+CommandCount[index-1].nameCommand.name+' СѓСЃС‚Р°РЅРѕРІР»РµРЅ РЅР° РєР°СЂС‚Сѓ';
                setTimeout(function(){
                    err[0].style.display = 'none';
                },1500);
            }else{
                CommandCount[index-1].nameCommand.objects.splice(obj,1);
            }


        }
        $.ajax({
            url:'/admin/objectingame',
            type:'post',
            data:({object:JSON.stringify(CommandCount)}),
            success:function(res)
                    {
                        document.getElementsByClassName('for-objects')[0].innerHTML = res;
                        let delobj = document.getElementsByClassName('delete-object');
                        for(var a =0;a<delobj.length;a++)
                            {
                                delobj[a].addEventListener('click',DeleteObjectsFromTable);
                            }
                        let setmap = document.getElementsByClassName('object-map');
                        for(var o=0;o<setmap.length;o++)
                            {
                                setmap[o].addEventListener('click',ObjectSetMap);
                            }

                    }
            });
    }


    //set map object
    function ObjectSetMap()
    {
        let all = this.parentElement.parentElement.children[2].innerHTML;
        if(all === 'all'){
            objtype = all;
            allindex = parseInt(this.getAttribute('id'));
            pflag=false;
            setobj = true;
        }else{
            objtype = parseInt(this.parentElement.parentElement.children[2].innerHTML)-1;
            objindex = parseInt(this.getAttribute('id'));
            pflag=false;
            setobj = true;
        }

    }

   //-------------------------------------------------logo game----------------------------------//

    var logo = document.getElementById('uploade-file');
    logo.addEventListener('change',ImgLoaderServer);

    function ImgLoaderServer()
    {
        let file = this.files[0];
        if(this.files.length){
            var data = new FormData();
            data.append('logo',file);
            $.ajax({
                url:'/admin/filelogo',
                type:'post',
                data:data,
                async: false,
                cache: false,
                processData:false,
                contentType:false,
                success:function(res)
                {
                    document.getElementsByClassName('logogame')[0].innerHTML = res;

                }
            });
        }else{

        }

    }

    //-----------------password for close or hidden games----------------//



    let passforgame = document.getElementsByClassName('row-password');


    //----------------------------generator pass-----------------------//
    let generator = document.getElementsByClassName('btn-password');
    generator[0].addEventListener('click',GeneratorPass);
    let inp = document.getElementById('example-title-password');

    let pass='';
    function GeneratorPass()
    {
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
        inp.value = pass;
        pass = '';

    }
    //СѓСЃС‚Р°РЅРѕРІРєР° С†РІРµС‚Р° РєРѕРјР°РЅРґС‹


    //-------------------create Game-------------------------------------//
    var createGame = document.getElementsByClassName('btn-createGame');
    createGame[0].addEventListener('click',CreateGame);

    function CreateGame()
    {
        let name = document.getElementById('example-title-game');
        let sity = document.getElementById('example-title-sity');
        let err = document.getElementsByClassName('alert-main')[0];
        let open = document.getElementById('rdo-1');
        let close = document.getElementById('rdo-2');
        let hidden = document.getElementById('rdo-3');
        let lazer = document.getElementById('lazer');
        let paint = document.getElementById('paint');
        let strike = document.getElementById('strike');

        var game = {
            name:'',
            desc:document.getElementById('example-title-game-description').value,
            start:document.getElementById('example-title-start').value,
            end:document.getElementById('example-title-end').value,
            sity:'',
            logo:document.getElementsByClassName('logogame')[0].innerHTML,
            type:document.getElementById('example-select-affordable').options.selectedIndex,
            typegame:document.getElementById('example-select-type').options[document.getElementById('example-select-type').options.selectedIndex].value,
            password:'',
            center:_Map.getCenter(),
            zoom:_Map.getZoom(),
            setscore:document.getElementById('scoreprotection').checked
        }


        if(name.value === ''||name.value ===' '){
            name.style.border = "1px solid red";
            name.placeholder = 'Р’РІРµРґРёС‚Рµ РЅР°Р·РІР°РЅРёРµ РёРіСЂС‹';
            ErrorModal('Р’РІРµРґРёС‚Рµ РЅР°Р·РІР°РЅРёРµ РёРіСЂС‹');
        }else{
            name.style.border = "1px solid green";
            game.name = name.value;
            if(sity.value===""||sity.value === " "){

            }else{
                game.sity = sity.value;
            }
            if(CommandCount.length){
                if(polygoncoords.coords===""||polygoncoords.coords===" ")
                    {
                        ErrorModal('Р”РѕР±Р°РІСЊС‚Рµ РїРѕР»РёРіРѕРЅ РЅР° РєР°СЂС‚Сѓ');

                    }else{

                        if(game.type == 1 || game.type == 2){

                            game.password = document.getElementById('example-title-password').value;
                        }






                        CommandCount[0].polygon = polygoncoords.coords._coordinates;
                        CommandCount[0].game = game;


                        $.ajax({
                            url:'/admin/savegame',
                            type:'post',
                            data:({newgame:JSON.stringify(CommandCount)}),
                            success:function(res)
                            {

                                if(res.length<15){

                                    $.ajax({
                                        url:'/admin/gettask',
                                        type:'post',
                                        data:({id:res}),
                                        success:function(data)
                                        {

                                            document.getElementsByClassName('wrapper')[0].innerHTML = data;
                                            ymaps.ready(inittask);
                                            let timers = document.getElementsByClassName('timer');
                                            for(a=0;a<timers.length;a++){
                                                Timer(timers[a]);
                                                Timer(timers[a].nextElementSibling);
                                            }
                                            let interval = setInterval(function(){
                                                for(i=0;i<timers.length;i++){
                                                    Timer(timers[i]);
                                                    Timer(timers[i].nextElementSibling);
                                                }
                                            },1000);
                                        }
                                    });

                                }else{
                                    ErrorModal(res);

                                }


                            }
                        });
                    }


            }else{
                ErrorModal('РЈ РІР°СЃ РЅРµС‚ РєРѕРјРјР°РЅРґ')

            }



        }

    }














}
