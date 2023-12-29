const initialState={
    notes:[]
}
function rootReducer(state=initialState,action){
    if(action.type='ADD_NOTE'){
        return{
            notes:[
                ...state.notes,{
                    title:action.title,
                    content:action.content
                }
            ]
        }
    }
    else{

    }
}

export default rootReducer