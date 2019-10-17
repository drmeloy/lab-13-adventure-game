export const scoreQuest = (choice, questId, user) => {
    user.hp += choice.hp;
    user.social += choice.social;
    user.item += choice.item;
    if (questId.choice === 'blend-in'){
        user.isScrapped = true;
    } else {
        user.completed[questId] = true;
    }
};