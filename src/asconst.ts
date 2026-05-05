// as const assertion


// enum UserRole{
//     admin='admin',
//     viewer='viewer',
//     editor='editor'
// }
const UserRole={
     admin:'admin',
    viewer:'viewer',
    editor:'editor'
}as const;

UserRole.admin='mon cacce'


const canEdit=(role: keyof typeof UserRole)=>{
    if(role=== UserRole.admin || role===UserRole.editor){
        return true;
    }
    else return false
    
};
const isEditParmigabale=canEdit(UserRole.admin)