class Map{
    constructor(target)
    {
        this.target = target;
        this.map = new ymaps.Map(this.target,{
            center:[54.5293,36.27542],
            zoom:10,
            controls:['zoomControl','fullscreenControl']
        });
    }
}
