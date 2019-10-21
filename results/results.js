import { loadProfile } from '../common/load-profile.js';
import { getUser } from '../common/user-save-get.js';
import { scoreHP, scoreSocial } from './scores.js';
import { deadMessages, socialMessages } from './results-messages.js';

loadProfile();
const user = getUser();

const storyDisplay = document.getElementById('story-display');

const hpResult = scoreHP(user);
const socialResult = scoreSocial(user.social);

const hpMessage = deadMessages[hpResult];
const socialMessage = socialMessages[socialResult];

storyDisplay.textContent = hpMessage + ' ' + socialMessage;