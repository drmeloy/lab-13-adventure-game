import { loadProfile } from '../common/load-profile.js';
import { getUser } from '../common/user-save-get.js';
import { scoreHP, scoreSocial, scoreItems } from './scores.js';
import { deadMessages, socialMessages, itemMessages } from './results-messages.js';

loadProfile();
const user = getUser();

const storyDisplay = document.getElementById('story-display');
const itemsDisplay = document.getElementById('items-display');

const hpResult = scoreHP(user);
const socialResult = scoreSocial(user.social);
const itemResult = scoreItems(user.items);

const hpMessage = deadMessages[hpResult];
const socialMessage = socialMessages[socialResult];
const itemMessage = itemMessages[itemResult];

storyDisplay.textContent = hpMessage + socialMessage + itemMessage;
itemsDisplay.textContent = user.items;