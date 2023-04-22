export const TodoReducer = (initialState = [],action) =>{
    switch(action.type){
        case 'ADD TODO':
            return [... initialState,action.payload]
        default:
            return initialState;
    }
}