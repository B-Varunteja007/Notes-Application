export function addNote(title,content){
    return{
        type: 'ADD_NOTE',
        title:title,
        content:content
    }
}

export function deleteNote(id){
    return{
        type:'DELETE_NOTE',
        id:id
    }
}