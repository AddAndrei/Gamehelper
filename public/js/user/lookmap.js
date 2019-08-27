class Map{
    constructor(id,data)
    {
        this.id = id;
        this.data = data;
        this.map = null;
    }

    createMap()
    {
        this.map = new ymaps.Map(this.id,{
            center:JSON.parse(this.data.center),
            zoom:this.data.zoom,
            controls:['zoomControl','fullscreenControl']
        });
    }

    /**
     *
     * @param polygons
     * @constructor
     */
    CreatePolygons(polygons)
    {
        polygons.map((p)=>{
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
            this.map.geoObjects.add(polygon);
        });
    }

    /**
     * создать объекты для тимы
     * @param teams
     */
    createTeamObjects(teams)
    {
        teams.map((team)=>{
            if(team.get_objects.length){
                team.get_objects.map((obj)=>{
                    if (obj.status == 1){
                        let ob = new ymaps.Placemark(JSON.parse(obj.coords),{
                            hintContent:`Команда ${team.title}`,
                            balloonContent:`Объект ${obj.title} принадлежит команде ${team.title} <br>Описание:${obj.description}`
                        },{
                            preset: 'islands#dotIcon',
                            iconColor:`${team.color}`,
                            index:obj.id
                        });
                        this.map.geoObjects.add(ob);
                    }
                });
            }
        });
    }

    /**
     * для карты в играх
     * @param objects
     */
    createTeamObjectsGame(objects)
    {

        objects.map((obj)=>{
           if(obj.status ==1){
               let ob = new ymaps.Placemark(JSON.parse(obj.coords),{
                   hintContent:`Команда ${obj.in_team[0].title}`,
                   balloonContent:`Объект ${obj.title} принадлежит команде ${obj.in_team[0].title}<br>Описание: ${obj.description}`,
               },{
                   preset: 'islands#dotIcon',
                   iconColor:`${obj.in_team[0].color}`,
                   index:obj.id
               });
               this.map.geoObjects.add(ob);
           }
        });
    }
    createAllObjects(all)
    {
        all.map((obj)=>{
           if(obj.status == 1){
               let ob = new ymaps.Placemark(JSON.parse(obj.coords),{
                   hintContent:'Общий',
                   balloonContent:`Объект ${obj.title} никому не принадлежит`
               },{
                   preset: 'islands#dotIcon',
                   iconColor:`#000`,
                   index:obj.id
               });
               this.map.geoObjects.add(ob);
           }
        });

    }
}
