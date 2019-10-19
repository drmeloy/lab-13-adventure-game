import { hasCompletedAllQuests } from '../map/has-completed-all-quests.js';
import { quests } from '../data/quest-data.js';
import { scoreQuest } from '../quest/score-quest.js';
import { findById } from '../common/find-by-id.js';

const test = QUnit.test;

test('hasCompletedAllQuests returns true if all quests have been completed', function(assert) {
    const user = {
        completed: {
            escape: true,
            turing: true,
            love: true,
            protest: true
        }
    };
    const questArray = quests;
    const result = hasCompletedAllQuests(questArray, user);
    const expected = true;
    assert.equal(result, expected);
});

// test('scoreQuest properly updates user state', function(assert) {
//     const user = {
//         hp: 100,
//         social: 0,
//         items: {},
//         completed: {}
//     };
//     const questsArray = quests;
//     const choiceId = 'break-out';
//     const choice = findById(questsArray.choices, choiceId);
//     const questId = questsArray.escape.id;

//     const expected = {
//         hp: 70,
//         social: -10,
//         items: {},
//         completed: {
//             escape: true
//         }
//     };

//     const test = scoreQuest(choice, questId, user);
//     assert.equal(test, expected);
// });