//const family =() => {
    //const members = []
    //const birth = (name) => {
        
        //members.push(name)
        //console.log(members)
   // }

   // return (birth)
//}
//const giveBirth = family()
//giveBirth("tom")
//giveBirth("sam")
//giveBirth("pam")



//const mathOperations = () => {
    //const sum = (x,y) =>{
        //return(x+y)
        
    //}
    //const mul = (x, y) =>{
        //return(x*y)
    //}

    //return {sum: sum, 
            //mul: mul}
//}

//const m = mathOperations()
//console.log(m.sum(13,29))
//console.log(m.mul(1.75, 24))
//console.log(m.mul(7, (36/6)))


const UsersModule = function () {
    const _users = ['Aaron', 'Avi', "Mark", "Sam"];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()
console.log(usersModule.listUsers())