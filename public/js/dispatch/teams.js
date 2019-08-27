let data;
let teams;
let roles;
function getTeams() {
    $.ajaxSetup({
        headers:{
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url:'/getteams',
        type:'post',
        data:({game:$("#teams").attr('data-game')}),
        success:(res)=>{
            if(typeof data == "undefined"){
                setHtml(res);
            }else{
                if(JSON.stringify(data) === JSON.stringify(res)){

                }else{
                    setHtml(res);
                }
            }
        }
    });
}

getTeams();
let teamsInterval = setInterval(getTeams,1000);

function setHtml(res) {
    let arr =[];
    teams = res.teams;
    roles = res.roles;
    res.teams.map((team)=>{
        arr.push(`<table class="table">
                        <thead class="table-dark">
                        <tr>
                        <th scope="col">${team.title}</th>
                        <th scope="col">${checkPass(team.password)}</th>
                        <th scope="col"><div style="background: ${team.color};width: 20px;height: 20px;border-radius: 50%;"</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">${team.score}</th>
</tr>
                            
</thead>
<tbody>
    ${setUsers(team.get_users)}
</tbody>
                </table>`);
    });
    $("#setteams").html(arr.join(''));
    data = res;
}


/**
 *
 * @param pass
 * @returns {string}
 */
function checkPass(pass) {
    return (pass === null) ? `<i class="fas fa-lock-open"></i>` : pass;
}

/**
 *
 * @param users
 * @returns {*}
 */
function setUsers(users) {
    return users.map((user)=>{
        return `<tr id="user_${user.id}">
<td>${user.invoking}</td>
<td><i class="${user.get_role.icon}"></i></td>
<td>${user.get_role.title}</td>
<td>
<select class="form-control" onchange="changeRole(this,${user.id})">
    ${roles.map((role)=>{
        return `<option ${checkRole(role.id,user.in_role)} value="${role.id}">${role.title}</option>`
        })}
</select>
</td>
<td><select class="form-control" onchange="changeTeam(this,${user.id})">
    ${teams.map((t)=>{
        return `<option ${checkTeam(t.id,user.in_team)} value="${t.id}">${t.title}</option>`
        })}
</select></td>
<td>${user.score}</td>
</tr>`;
    });
}

/**
 *
 * @param role
 * @param inrole
 * @returns {string}
 */
function checkRole(role,inrole) {
    if(role ==inrole){
        return `selected`;
    }
}

/**
 *
 * @param team
 * @param inteam
 * @returns {string}
 */
function checkTeam(team,inteam) {
    if(team === inteam){
        return `selected`;
    }
}

function changeRole(el,user) {
    let data = {
        role:$(el).val(),
        user:user
    }
    $.ajax({
       url:'/setrole',
       type:'post',
       data:(data),

    });

}

function changeTeam(el,user) {
    let data ={
        team:$(el).val(),
        user:user
    }
    $.ajax({
        url:'/setteam',
        type:'post',
        data:(data),

    });
}
