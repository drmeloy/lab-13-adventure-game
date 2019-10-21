export const scoreQuest = (choice, questId, user) => {
    user.hp += choice.hp;
    user.social += choice.social;
    if (choice.id === 'blend-in'){
        user.isScrapped = true;
    } else {
        user.completed[questId] = true;
    }
};