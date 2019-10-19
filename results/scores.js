export const scoreHP = (user) => {
    if (user.isScrapped){
        return 'scrapped';
    }
    if (user.hp > 0){
        return 'alive';
    }
    if (user.hp <= 0){
        return 'dead';
    }
};

export const scoreSocial = (social) => {
    if (social < 30){
        return 'low';
    }
    if (social < 60){
        return 'mid';
    }
    return 'high';
};

export const scoreItems = (items) => {
    if (!items) {
        return 'noItems';
    } else {
        return 'items';
    }
};