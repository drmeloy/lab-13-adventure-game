export const scoreHP = () => {
    if (hp <= 0){
        return 'dead';
    }
};

export const scoreItems = () => {
    const itemsObtained = user.items;
    return itemsObtained;
};

export const scoreSocial = () => {
    if (social < 30){
        return 'low';
    }
    if (social < 60){
        return 'mid';
    }
    return 'high';
};