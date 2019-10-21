import { hasCompletedAllQuests } from '../map/has-completed-all-quests.js';
import { quests } from '../data/quest-data.js';

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