import VueRuoter from 'vue-router';
import map from './components/users/map';
//маршрутизатор
export default new VueRuoter({
    routes:[
        {
            path:'/map',
            component:map
        }
    ],
    mode:'history'
});
