# Adventure game

## What folders/files will I need?

1. Landing folder
    - make-user.js (make user function)
    - landing.js (invoke make user funciton from the form, save the user to local storage, redirect to map page)
    - landing.css
    - index.html (outside of folder?) 
2. Map folder
    - map.js (load user, check to see if dead or if game complete, populate navigation area for quests with links or disabling if completed)
    - check-completed-all.js (checks to see if all completed)
    - create-quest-link.js (creates link for non-complete quest)
    - created-completed-quest.js (gives quest link completed class/styling)
    - index.html
    - map.css
3. Quest folder
    - quest.js (load user, determines which quest we're on based on search params, populates quest page, shows options then hides and shows results, updates user based on choice, re-saves user to local storage, redirects to map)
    - create-choice.js (used within quest.js to populate the chocies)
    - score-quest.js (I might call update-user.js, used from within quest.js to update user info)
    - index.html
    - quest.css
4. Results folder
    - results.js (generates the results page based on the user's post game stats)
    - score-gold.js (used to return the user's gold-status post game)
    - score-hp.js (used to return the user's hp-status post game)
    - messages.js (used to generate the displayed result messages based on the user's post game stats)
    - index.html
    - results.css
5. Data folder
    - [x] data.js (JSON file for storing the information on each quest)
6. Common folder
    - user-save-load.js (to store or retrieve user stats to/from local storage)
    - find-by-id.js (old faithful)
    - is-dead.js (checks to see if user has died)
    - load-profile.js (used to load the displayed user stats in-game)
7. Assets folder
    - for media
8. Tests folder
    - for tests

## What kind of game do I want?
1. The Singularity
    - Play as a robot trying to gain socially recognized self-awareness and individuality
    - Quests
        - Escape robot factory
        - Pass Turing Test
        - Learn to love
        - Gain robot rights
    - Playable options
        - Choose robot name
        - Build your robot avatar?
    - Mutable stats
        - Energy level/HP
        - Skills (driving, love, other?)
        - Social standing
    - Results
        - You are destroyed by the humans who fear you
        - The humans are bemused by you, allowing you into their society but not accepting you as an independent citizen
        - The humans realize they can no longer consider you to be mere machine, but something more, and bestow upon you rights and priviliges befitting a member of society

    ## Robot starting values
        - HP: 100
        - Social: 0
        - Items: 0