var routes = require('./routes.json');

/**
 *route('name',[1]);
 */
export default function()
{
    let args = Array.prototype.slice.call(arguments);
    let name = args.shift();
    if(routes[name] === undefined){
        console.log('Error not found route');
    }else{

        return '/' + routes[name]
        .split('/')
        .map(str=>{
            if(str[0] == '{'){
                return args.shift();
            }else{
                return str;
            }
        })
        .join('/');
    }
}
