class Map{
    constructor(target,sity)
    {
        this.target = target;
        this.sity = ymaps.geocode(sity);
        this.polygons = [];
        this.setObject = false;
        this.id = null;
        this.setQuest = false;
        this.map=this.createMap();

    }
    //создает карту и навешивает слушателей на событие клика
    createMap()
    {
        return this.sity.then((res)=>{
            let center;
            let zoom;

            if(maps.center && maps.center.length){
                center = maps.center;
                zoom = maps.zoom;
            }else{
                center = res.geoObjects.get(0).geometry.getCoordinates();
                zoom = 10;
            }

            this.map = new ymaps.Map(this.target,{
                center:center,
                zoom:zoom,
                controls:['zoomControl','fullscreenControl']
            });
            this.setObjectsFromload();
            //установить объект
            this.map.events.add('click',(e)=>{
                if(this.setObject){
                    objects.filter((obj)=>{
                        if(obj.id === this.id){
                            if(obj.team === "Общий"){
                                this.createObjectinMap(e.get('coords'),obj.title,obj.description);
                                obj.map = true;
                                obj.coords = e.get('coords');
                                this.setObject = false;
                                this.id = null;
                                setHtmlObjects();
                            }else{
                                let team = teams.filter((t)=>{return t.title === obj.team});
                                this.createObjectinMap(e.get('coords'),obj.title,obj.description,team[0].title,team[0].color);
                                obj.map = true;
                                obj.coords = e.get('coords');
                                this.setObject = false;
                                this.id = null;
                                setHtmlObjects();
                            }
                        }
                    });


                }
                if(this.setQuest){
                    this.setQuestMap(e);
                }
            });
            if (maps.polygons && maps.polygons.length){
                this.loadPolygons();
            }
            return this.map;

        });

    }

    /**
     * для редактора задач
     * @param obj
     */
    canvasQuestInMap(obj)
    {
        for(let i =0;i<obj.coords.length;i++){
            let team = '';
            let role = '';
            let color = '#000';
            if(obj.team === 'Всем'){
                team = obj.team;
            }else{
                team = 'Принадлежит команде: ' + teams.filter((t)=>{return t.id == obj.team})[0].title;
                color = teams.filter((t)=>{return t.id == obj.team})[0].color;
            }
            if(obj.role === 'Всем'){
                role = obj.role;
            }else{
                role = roles.filter((r)=>{return r.id == obj.role})[0].title;
            }
            let quest=  new ymaps.Placemark(obj.coords[i], {
                balloonContent:`Квест ${obj.title}<br>
Описание: ${obj.description}<br>${team}<br>Роль: ${role}`,
            }, {
                preset: 'islands#governmentCircleIcon',
                iconColor: color
            });
            this.map.then((e)=>{
                this.map.geoObjects.add(quest);
            });

        }
    }

    /**
     *
     * @param e
     */
    setQuestMap(e)
    {
        let data = getDataQuest();
        let team = '';
        let role = '';
        let color = '#000';
        if(data.team === 'Всем'){
            team = data.team;
        }else{
            team = 'Принадлежит команде: ' + teams.filter((t)=>{return t.id == data.team})[0].title;
            color = teams.filter((t)=>{return t.id == data.team})[0].color;
        }
        if(data.role === 'Всем'){
            role = data.role;
        }else{
            role = roles.filter((r)=>{return r.id == data.role})[0].title;
        }
        let quest =  new ymaps.Placemark(e.get('coords'), {
            balloonContent:`Квест ${data.title}<br>
Описание: ${data.description}<br>${team}<br>Роль: ${role}`,
        }, {
            preset: 'islands#governmentCircleIcon',
            iconColor: color
        });
        questCoords.push(e.get('coords'));
        this.map.geoObjects.add(quest);
    }
    /**
     *Загрузка полигонов
     */
    loadPolygons()
    {
        maps.polygons.map((p)=>{

            let polygon = new ymaps.GeoObject({
               geometry: {
                   type:"Polygon",
                   coordinates: [p],
                   properties:{
                       hintContent:'Игровой полигон'
                   },
                   editorDrawingCursor:'crosshair',
                   fillColor: '#00FF00',
                   strokeColor: '#0000FF',
                   draggable:true,

               }
            });
            this.polygons.push(polygon.geometry._coordPath);
            polygon.events.add('click',(e)=>{
                if(this.setObject){
                    objects.filter((obj)=>{
                        if(obj.id === this.id){
                            if(obj.team === "Общий"){
                                this.createObjectinMap(e.get('coords'),obj.title,obj.description);
                                obj.map = true;
                                obj.coords = e.get('coords');
                                this.setObject = false;
                                this.id = null;
                                setHtmlObjects();
                            }else{
                                let team = teams.filter((t)=>{return t.title === obj.team});
                                this.createObjectinMap(e.get('coords'),obj.title,obj.description,team[0].title,team[0].color);
                                /*let o = new ymaps.Placemark(e.get('coords'),{
                                    hintContent:`Команда ${team[0].title}`,
                                    balloonContent:`Объект ${obj.title} пренадлежит команде ${team[0].title} <br>Описание: ${obj.description}`
                                },{
                                    preset: 'islands#dotIcon',
                                    iconColor:`${team[0].color}`,
                                    index:this.id,
                                });*/
                                obj.map = true;
                                obj.coords = e.get('coords');
                                //this.map.geoObjects.add(o);
                                this.setObject = false;
                                this.id = null;
                                setHtmlObjects();
                            }
                        }
                    });


                }
                if(this.setQuest){
                    this.setQuestMap(e);
                }
            });
            this.map.geoObjects.add(polygon);
        });
    }
    /**
     * создает объект на карте
     * @param title
     */
    createObjectinMap(coords,title,description,team=null,color=null)
    {
        let hint = (team!==null) ? `Команда ${team}` : `Общий`;
        let baloon = (team!==null) ? `Объект ${title} пренадлежит команде ${team} <br>Описание: ${description}` : `Объект ${title} никому не пренадлежит<br>Описание: ${description}`;
        let c = (team!==null) ? color : `#000`;
        let o = new ymaps.Placemark(coords,{
            hintContent:hint,
            balloonContent:baloon
        },{
            preset: 'islands#dotIcon',
            iconColor:`${c}`,
            index:this.id,
        });
        this.map.geoObjects.add(o);
    }
    /**
     * Создать полигон
     */
    createPolygon(bool)
    {
        var polygon = new ymaps.GeoObject({
            geometry:{
                type:'Polygon',
                coordinates:[]
            },
            properties:{
                hintContent:'Игровой полигон'
            },
            editorDrawingCursor:'crosshair',
            fillColor: '#00FF00',
            strokeColor: '#0000FF',
            draggable:true,
        });
        this.map.geoObjects.add(polygon);
        //запись координат полигона
        this.polygons.push(polygon.geometry._coordPath);
        polygon.events.add('change',function(){
            this.polygon.push(polygon.geometry._coordPath);

        });
        //установить объект на полигон
        polygon.events.add('click',(e)=>{
            if(this.setObject){
                objects.filter((obj)=>{
                    if(obj.id === this.id){
                        if(obj.team === "Общий"){
                            this.createObjectinMap(e.get('coords'),obj.title,obj.description);
                            obj.map = true;
                            obj.coords = e.get('coords');
                            this.setObject = false;
                            this.id = null;
                            setHtmlObjects();
                        }else{
                            let team = teams.filter((t)=>{return t.title === obj.team});
                            this.createObjectinMap(e.get('coords'),obj.title,obj.description,team[0].title,team[0].color);
                            /*let o = new ymaps.Placemark(e.get('coords'),{
                                hintContent:`Команда ${team[0].title}`,
                                balloonContent:`Объект ${obj.title} пренадлежит команде ${team[0].title} <br>Описание: ${obj.description}`
                            },{
                                preset: 'islands#dotIcon',
                                iconColor:`${team[0].color}`,
                                index:this.id,
                            });*/
                            obj.map = true;
                            obj.coords = e.get('coords');
                            //this.map.geoObjects.add(o);
                            this.setObject = false;
                            this.id = null;
                            setHtmlObjects();
                        }
                    }
                });


            }
        });

        polygon.editor.startDrawing();
        //слушаем когда закончится отрисовка полигона пользователем
        polygon.events.add('editorstatechange',function (e) {
           if(e.originalEvent.originalEvent.originalEvent.oldDrawing){
               $("#polygons").removeClass('blink');
               bool = false;
           }else{
               bool = true;
           }
        });

        return bool;
    }

    /**
     *
     * @returns {{polygons: *, center: *, zoom: *}}
     */
    getData()
    {
        return {
            zoom:this.map.getZoom(),
            center:this.map.getCenter(),
            polygons:(this.polygons === undefined) ? [] : this.getPolygons(),
        }
    }

    /**
     *вернуть все полигоны
     */
    getPolygons()
    {
        return this.polygons.map((p)=>{
            return p._coordinates[0];
        });
    }

    /**
     * удаляет объект с карты
     * @param id
     */
    dropFromMap(id)
    {
        this.map.geoObjects.each((obj)=>{
            if(obj.options.get('index')==id){
                this.map.geoObjects.remove(obj);
            }

        });
        objects.filter((ob)=>{
            if(ob.id === id){
                ob.map = false;
                ob.coords = [];
            }
        });
        setHtmlObjects();
    }
    //загрузка данных и отрисовка
    setObjectsFromload()
    {
        objects.filter((obj)=>{
            if(obj.map){
                if(obj.team === "Общий"){
                    this.id = obj.id;
                    this.createObjectinMap(obj.coords,obj.title,obj.description);
                    this.id = null;
                }else{
                    let team = teams.filter((t)=>{return t.title === obj.team});
                    this.id = obj.id;
                    this.createObjectinMap(obj.coords,obj.title,obj.description,team[0].title,team[0].color);
                    this.id = null;
                }
            }
        });

    }

    /**
     * Удалить карту
     */
    destroy()
    {
        this.map.destroy();
    }

















}
