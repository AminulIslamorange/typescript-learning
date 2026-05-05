// set of fixed string ak jaigai rakhe

// type UserRole='admin'|'user'|'Editor';
enum UserRole{
    admin='admin',
    viewer='viewer',
    editor='editor'
}


const canEdit=(role:UserRole)=>{
    if(role=== UserRole.admin || role===UserRole.editor){
        return true;
    }
    else return false
    
};
const isEditParmigabale=canEdit(UserRole.admin)