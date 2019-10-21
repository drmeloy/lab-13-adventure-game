export const saveUser = (user) => {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
};

export const getUser = () => {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
};