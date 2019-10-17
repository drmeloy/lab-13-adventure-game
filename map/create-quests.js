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