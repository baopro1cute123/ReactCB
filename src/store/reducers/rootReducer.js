const initState = {
    users: [
        {id: 1 , name : 'Bao'},
        {id: 2 , name : 'Bao2'},

       
    ],
    posts: [],
}
const rootReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'DELETE_USER':
            console.log(">>> run into delete user", action)
            //action là dữ liệu bên React gửi qua Redux
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
        case 'ADD_USER':
            let id = Math.floor(Math.random()*1001)
            let user = {
                    id : id,
                    name: `ramdom - ${id}`}
            return {
                ...state, users: [...state.users, user]
            }
                    
        default:
            return state;
        }

}

export default rootReducer