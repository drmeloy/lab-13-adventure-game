export const hasCompletedAllQuests = (quests, user) => {
    quests.forEach(quest => {
        if (!user.completed[quest.id]){
            return false;
        } return true;
    });
    
};