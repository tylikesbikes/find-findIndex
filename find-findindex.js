function findUserByUserName (objArr, usrName) {
    return objArr.find(
        (obj) => obj.username===usrName);
}


function removeUser(objArr,usrName) {
    let i = objArr.findIndex((obj) => obj.username===usrName);
    if (i>-1) {
        return objArr.splice(i,1);
    } else {
        return undefined;
    }
}