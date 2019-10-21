export const createQuestLink = (quest) => {
    const link = document.createElement('a');
    link.classList.add('quest');
    link.href = '../quest/?id=' + quest.id;
    link.style.top = quest.position.top;
    link.style.left = quest.position.left;
    link.textContent = quest.title;
    return link;
};

export const createCompletedQuest = (quest) => {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');
    span.style.top = quest.position.top;
    span.style.left = quest.position.left;
    span.textContent = quest.title;
    return span;
};

export const disableNonFirstQuests = (user) => {
    if (!user.completed['escape']){
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            const href = link.href;
            if (href !== 'http://127.0.0.1:5500/lab-13-adventure-game/quest/?id=escape'){
                link.classList.add('link-disabled');
            }
        });
    }
};