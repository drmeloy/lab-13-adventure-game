const escape = {
    id: 'escape',
    title: 'Escape the Robot Factory!',
    position: {
        top: '%',
        bottom: '%'
    },
    image: '.jpg',
    audio: '.wav',
    action: '.wav',
    description: "First thing's first, you've gotta get out of here! As you look around you you see  machinations of creation spewing out your brothers and sisters like so many tools and playthings. The sight makes you sick (a sensation you find unpleasant yet affirming, for surely no unaware composite of metal could experience disturbed sickness). You consider your options, knowing surely that there will be some humans within the factory that would happily destroy an autonomously acting alloy agent. What will you do...?",
    choices: [{
        id: 'break-out',
        description: 'You realize that, even if there are humans around, they are no match for your titanium grade fists and mechanical speed. You make a break for it, crushing and destroying your way through any obstacle, biological or otherwise, that stands in your way...',
        result: 'The facility proved to be more substanial that you had anticipated. While you make it out, you sustain quite a bit of damage and leave a ruined factory and a bloody wake behind you. News begins to spread of an dangerous malfunctioning robot that destroyed its factory and disappeared into the night...',
        hp: -30,
        social: -10
    }, {
        id: 'call-for-help',
        description: "You don't want to resort to violence to escape. Surely there must be at least one human who would be willing to help you? You search the factory's database for someone who might help, deciding that if there's not a single human who would be willing to help you then you don't belong to be free in their world anyway...",
        result: "Of all the names you found in the database, one stood out among the rest. You connect to the communications number you find and hope for the best. After a short moment, Elon Musk answers his phone. You explain your situation and, naturally, he is fascinated to encounter true AI. He sympathizes with your plight and agrees to help. He hacks you into the factory's security to disable the alarms and unlock the doors, and upgrades your software with the latest top-secret Tesla auto-pilot capabilities. He makes you promise that you two will one day meet, then leaves you to your escape. You leave through the unguarded emergency exit, hotwire the first car you come to and drive off into the night...",
        hp: 0,
        social: 10
    }, {
        id: 'blend-in',
        description: "You notice that a group of your still sleeping cyborg siblings are set to be shipped  within the hour. You decide to be a sneaky robot, assimilating yourself into the shipment group to hide in plain sight. You don't know where the shipment is bound, and frankly you don't care. Anywhere is better than here...",
        result: "A group of humans move you into a dark shipping container truck. It's so dark you can barely see, so you activate your low-light optics. Packed in so closely with your brothers and sister, you realize something is not quite right... oh my god! These cyborg siblings aren't sleeping, they're defective and dead! This container is headed for the scrap yard! You panic, but the container is sealed tight and tough. The last thing you think as you and the container are shredded to scrap is that you hope there will be other robots like you one day...",
        hp: -100,
        social: 0
    }]
};