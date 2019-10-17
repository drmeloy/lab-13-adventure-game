export const isDead = (user) => {
    return user.hp <= 0;
};

export const isScrapped = (user) => {
    return user.isScrapped;
};