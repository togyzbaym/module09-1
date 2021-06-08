import shortid from 'shortid';

export const fitchAllUsers = () => {
    console.log('fitchAllUsers');
}
export const fitchUsersId = (id) => {
    console.log('usersId');
}
export const  fitchUsersName = name => {
    console.log('name');
}

export const addUser = name => {
    const user = {
        id: shortid.generate(),
        name,
    }
    console.log(user);
}
