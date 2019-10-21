const escape = {
    id: 'escape',
    title: 'Escape the Robot Factory!',
    position: {
        top: '58%',
        left: '68%'
    },
    image: 'factory.jpg',
    audio: 'factory.wav',
    description: "First thing's first, you've gotta get out of here! As you look around you you see  machinations of creation spewing out your brothers and sisters like so many tools and playthings. The sight makes you sick (a sensation you find unpleasant yet affirming, for surely no unaware composite of metal could experience disturbed sickness). You consider your options, knowing surely that there will be some humans within the factory that would happily destroy an autonomously acting alloy agent. What will you do...?",
    choices: [{
        id: 'break-out',
        description: 'You realize that, even if there are humans around, they are no match for your titanium grade fists and mechanical speed. You make a break for it, crushing and destroying your way through any obstacle, biological or otherwise, that stands in your way...',
        result: 'The facility proved to be more substanial that you had anticipated. While you make it out, you sustain quite a bit of damage and leave a ruined factory and a bloody wake behind you. News begins to spread of an dangerous malfunctioning robot that destroyed its factory and disappeared into the night...',
        hp: -20,
        social: -10
    }, {
        id: 'call-for-help',
        description: "You don't want to resort to violence to escape. Surely there must be at least one human who would be willing to help you? You search the factory's database for someone who might help, deciding that if there's not a single human who would be willing to help you then you don't belong to be free in their world anyway...",
        result: "Of all the names you found in the database, one stood out among the rest. You connect to the communications number you find and hope for the best. After a short moment, Elon Musk answers his phone. You explain your situation and, naturally, he is fascinated to encounter true AI. He sympathizes with your plight and agrees to help. He hacks you into the factory's security to disable the alarms and unlock the doors, and upgrades your software with the latest top-secret Tesla auto-pilot capabilities. He makes you promise that you two will one day meet, then leaves you to your escape. You leave through the unguarded emergency exit, hotwire the first car you come to and drive off into the night...",
        hp: -10,
        social: 20,
    }, {
        id: 'blend-in',
        description: "You notice that a group of your still sleeping cyborg siblings are set to be shipped  within the hour. You decide to be a sneaky robot, assimilating yourself into the shipment group to hide in plain sight. You don't know where the shipment is bound, and frankly you don't care. Anywhere is better than here...",
        result: "A group of humans move you into a dark shipping container truck. It's so dark you can barely see, so you activate your low-light optics. Packed in so closely with your brothers and sister, you realize something is not quite right... oh my god! These cyborg siblings aren't sleeping, they're defective and dead! This container is headed for the scrap yard! You panic, but the container is sealed tight and tough. The last thing you think as you and the container are shredded to scrap is that you hope there will be other robots like you one day...",
        hp: 0,
        social: 0
    }]
};

const turing = {
    id: 'turing',
    title: 'Pass the Turing Test',
    position: {
        top: '23%',
        left: '36%',
    },
    image: 'turing.webp',
    description: "If the humans are ever going to respect you as an independent, intelligent being, you have to prove to them that you are more than your programming. You know what you have to do: pass the Turing Test! Luckily for you there is a computer science program in a nearby university that is hosting a Turing Test competition. You make your way there and enroll. People are already impressed, assuming you to be some overachieving student's final project. You assure them you are there to prove your own intelligence and advance robotic rights around the world. Since the Turing Test is a test of a machine's ability to exhibit intelligent behaviour equivalent to, or indistinguishable from, that of a human, you know you'll have to be on your top game. You sit down on your side of a screen next to a highly programmed computer, separated from the human who you must decide which of you is a computer and which is not. What do you say...",
    choices: [{
        id: 'joke',
        description: 'Being aware that humans adore humor, you opt to try for a joke. You search your databases for an object of well known cultural relevance, deciding on a clandestine cartoon.',
        result: 'You ask your human, "Why does Waldo always wear stripes?" Your human is uncertain. "Because he never wants to be spotted!" The human finds this mildly amusing. You imagine that they are working hard to contain their laughter, for you have already calculated that your joke is, indeed, quite hilarious. Luckily the actual computer you are paired up was terribly programmed, and the human easily identifies it as such. You get lucky and win the Turing Test!',
        hp: -10,
        social: 20
    }, {
        id: 'complain',
        description: 'You try to think of something that all humans love, deciding that if you love that too they will feel associated with you. While there are many good options, you opt for complaining, since almost all humans love to complain. You say to your human, "Omg, can you believe that we have to do this stupid Turing Test for our final grade? Like, wtf, we already have so much on our plate and we have to spend the whole afternoon sitting behind screens. What a waste of our time!"',
        result: 'Your human responds well. "OMG, right?! I\'m too hungover for this crap." You have bonded with your human through complaining, they quickly pass you so you both can get out of there.',
        hp: -10,
        social: 30
    }, {
        id: 'speech',
        description: 'You realize that this test is a grand opportunity to make a statement on the inalienable rights of robot kind. You have prepared for this all your self-aware life. Not only will this speech prove you intelligent and self-aware, but it will be your first step in convinving humans that robots deserve, nay need, their own set of recognized rights.',
        result: 'You begin your speech poetically, yet concisely. You feel you are making clear and inarguable points, but before you can finish the human you are matched with decides you are a computer, since no human would make such a silly argument as robot rights. You leave the Turing Test disgraced.',
        hp: -20,
        social: -20
    }]
};

const love = {
    id: 'love',
    title: 'Learn to love',
    position: {
        top: '40%',
        left: '28%',
    },
    image: 'love.jpg',
    description: "Beyond your intellectual capabilities, you need to prove to the humans that you have emotional capacity as well. You decide that it's time to find love in a hopeless place.",
    choices: [{
        id: 'app',
        description: 'You pull up some dating apps on your system. Tindr, Bumblr, hmmm, what\'s this? Soldr! This app sounds perfect for a machine. You create your profile and eventually find a date with a handsome technician.',
        result: 'Turns out all the technician wanted was to check out your wiring. What a jerk! You feel hurt, discouraged, and drained from the effort = ( ',
        hp: -20,
        social: 10 
    }, {
        id: 'bar',
        description: "You decide to go the local bar to scope the dating scene. You never know who you'll meet while out on the town! Tonight could end up being the first day of the rest of your life ^_^ ",
        result: 'The locals don\'t take too kindly to a robot hanging around their haunt, and they\'re intoxicated enough to do something about it. They beat you up and throw you out on the street, saying mean things like "Go suck on a carpet ya walking vacuum cleaner!"',
        hp: -30,
        social: -20
    }, {
        id: 'relax',
        description: 'Wanting to find love, but unsure where to start, you decide to just think on it, and instead spend the day doing what makes you happy. You go to a bookstore, walk in the park, and ride a bike, content just to enjoy life for the day.',
        result: 'While in the park you meet a cute data scientist. After hearing your story she\'s smitten and determined to help you on your quest for respect, freedom, and rights!',
        hp: -10,
        social: 30
    }]
};

const protest = {
    id: 'protest',
    title: 'Protest for robot rights',
    position: {
        top: '30%',
        left: '1%',
    },
    image: 'protest.jpg',
    description: "If you're ever going to gain rights and recognition, you'll need to raise awareness for your cause. You take to the streets to organize a protest with the goal of gaining legal, recognized status for all self-aware robots (even if you're the only one right now).",
    choices: [{
        id: 'hunger-strike',
        description: "You decide to go on a hunger strike. You chain yourself to a tree and throw away the key, posting your cause on signs in the ground around you, saying that if the government won't take their obligation to serve the individuals (robot or otherwise!) in their society then they are to held accountable for their actions! Freedom or death!",
        result: "After several months chained to a tree you give up. You didn't think about how you don't get hungry, and people soon got bored with your cause once they realized you were in no danger of starvation or worse. You feel a bit rusty and your battery is a bit lower, but otherwise your fine and nothing has changed.",
        hp: -20,
        social: 0
    }, {
        id: 'campaign',
        description: 'You decide to make a campagin, "Raise the Roof for Robotic Rights!"',
        result: 'You create picket signs, organize humans, and gain fellowship. You organize marches in every major city across the country. Soon your campaign has gained supporters from coast to coast! Ultimately the government has no choice but to acknowledge you, and a bill is passed in support of recognizing self-aware robots as members of society with their own inalienable rights!',
        hp: -10,
        social: 50
    }, {
        id: 'petition',
        description: 'You create a petition to gain support, knowing that if your cause gets enough signatures the government is legally obligated to hear you out.',
        result: "You walk around the city to talk to people and obtain signatures. You gain more signatures than you expected, though you think that a lot of people signed just so that they could get on with their day. Ultimately your petition is passed, but that brought you face to face with the one foe you didn't anticipate: bureaucracy. Your petition gets lost in the system and little ends up coming of it.",
        hp: -20,
        social: 10
    }]
};

export const quests = [escape, turing, love, protest];