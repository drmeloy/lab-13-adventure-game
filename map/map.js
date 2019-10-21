import { getUser } from '../common/user-save-get.js';
import { quests } from '../data/quest-data.js';
import { loadProfile } from '../common/load-profile.js';
import { createQuestLink, createCompletedQuest, disableNonFirstQuests } from './create-quests.js';
import { hasCompletedAllQuests } from './has-completed-all-quests.js';
import { isDead, isScrapped } from '../common/is-dead.js';

loadProfile();
const user = getUser();
if (isScrapped(user) || isDead(user) || hasCompletedAllQuests(quests, user)){
    window.location = '../results';
}

const nav = document.getElementById('quests');

quests.forEach(quest => {
    let questDisplay;
    if (user.completed[quest.id]){
        questDisplay = createCompletedQuest(quest);
    } else {
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay);
});

disableNonFirstQuests(user);