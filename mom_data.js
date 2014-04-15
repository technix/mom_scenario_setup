var cards_list = {
    Axe:                { type: 'e', name: 'Axe' },
    BrassKey:           { type: 'e', name: 'Brass Key' },
    CeremonialSkull:    { type: 'e', name: 'Ceremonial Skull' },
    Colt38:             { type: 'e', name: 'Colt .38' },
    Crowbar:            { type: 'e', name: 'Crowbar' },
    Crucifix:           { type: 'e', name: 'Crucifix' },
    CultRobes:          { type: 'e', name: 'Cult Robes' },
    DeVermisMysteriis:  { type: 'e', name: 'De Vermis Mysteriis' },
    DholChants:         { type: 'e', name: 'Dhol Chants' },
    ElderSign:          { type: 'e', name: 'Elder Sign' },
    FireExtinguisher:   { type: 'e', name: 'Fire Extinguisher' },
    Knife:              { type: 'e', name: 'Knife' },
    Lantern:            { type: 'e', name: 'Lantern' },
    MagicPhrase:        { type: 'e', name: 'Magic Phrase' },
    NamelessCults:      { type: 'e', name: 'Nameless Cults' },
    Password:           { type: 'e', name: 'Password' },
    RubyOfRlyeh:        { type: 'e', name: 'Ruby of R\'lyeh' },
    SaturnianWine:      { type: 'e', name: 'Saturnian Wine' },
    Sedative:           { type: 'e', name: 'Sedative' },
    Shotgun:            { type: 'e', name: 'Shotgun' },
    SilverKey:          { type: 'e', name: 'Silver Key' },
    Sledgehammer:       { type: 'e', name: 'Sledgehammer' },
    StartlingEvidence:  { type: 'e', name: 'Startling Evidence' },
    Torch:              { type: 'e', name: 'Torch' },
    WhateleyDiary:      { type: 'e', name: 'Whateley\'s Diary' },
    Whiskey:            { type: 'e', name: 'Whiskey' },
    
    // TDDUP
    BradysHand:         { type: 'e', name: 'Brady\'s Hand' },
    BradysHead:         { type: 'e', name: 'Brady\'s Head' },
    Carbine:            { type: 'e', name: 'Carbine' },
    TheCure:            { type: 'e', name: 'The Cure' },
    SheetMusic:         { type: 'e', name: 'Sheet Music' },
    SmithWesson:        { type: 'e', name: 'Smith & Wesson' },
    BrassKnuckles:      { type: 'e', name: 'Brass Knuckles' },
    Machete:            { type: 'e', name: 'Machete' },
    NathanStone:        { type: 'e', name: 'Nathan Stone' },
    Pickaxe:            { type: 'e', name: 'Pickaxe' },
    TchoTchoTalisman:   { type: 'e', name: 'Tcho-Tcho Talisman' },

    // HOF
    CapsulesOfTranquility:   { type: 'e', name: 'Capsules of Tranquility' },
    CrescentBlade:      { type: 'e', name: 'Crescent Blade' },
    Marionettes:        { type: 'e', name: 'Marionettes' },
    SatchelOfTheVoid:   { type: 'e', name: 'Satchel of the Void' },
    SymbolOfTheElderLight: { type: 'e', name: 'Symbol of the Elder Light' },
    TheLostReel:        { type: 'e', name: 'The Lost Reel' },
    UnreflectingMirror: { type: 'e', name: 'Unreflecting Mirror' },
    VaultKey:           { type: 'e', name: 'Vault Key' },
    DaphneCuthbert:     { type: 'e', name: '(Daphne Cuthbert)' },
    NataliePrescott:    { type: 'e', name: '(Natalie Prescott)' },
    RoryMichaels:       { type: 'e', name: '(Rory Michaels)' },
    VivianDavis:        { type: 'e', name: '(Vivian Davis)' },

    N:                  { type: 'e', name: 'Nothing of interest' },
    N2:                 { type: 'e', name: 'Nothing of interest x2' },
    N3:                 { type: 'e', name: 'Nothing of interest x3' },
    N4:                 { type: 'e', name: 'Nothing of interest x4' },
    N5:                 { type: 'e', name: 'Nothing of interest x5' },
    N6:                 { type: 'e', name: 'Nothing of interest x6' },
    N7:                 { type: 'e', name: 'Nothing of interest x7' },
    N8:                 { type: 'e', name: 'Nothing of interest x8' },
    N9:                 { type: 'e', name: 'Nothing of interest x9' },

    BarredEntry:       { type: 'l', name: 'Barred Entry' },
    DarkRoom:          { type: 'l', name: 'Dark Room' },
    DreadfulPassage:   { type: 'l', name: 'Dreadful Passage' },
    ElectricLock:      { type: 'l', name: 'Electric Lock' },
    GuardedPassage:    { type: 'l', name: 'Guarded Passage' },
    JammedDoor:        { type: 'l', name: 'Jammed Door' },
    LockedDoor:        { type: 'l', name: 'Locked Door' },
    MagicalLock:       { type: 'l', name: 'Magical Lock' },
    OpeningTheGate:    { type: 'l', name: 'Opening The Gate' },
    PadlockedDoor:     { type: 'l', name: 'Padlocked Door' },
    RunelockedDoor:    { type: 'l', name: 'Runelocked Door' },
    SealedDoor:        { type: 'l', name: 'Sealed Door' },
    HiddenEntrance:    { type: 'l', name: 'Hidden Entrance' }, //TDDUP
    FleshDoor:         { type: 'l', name: 'Flesh Door' }, //TDDUP
    ChimeLock:         { type: 'l', name: 'Chime Lock' }, //TDDUP
    ArchiveVault:      { type: 'l', name: 'Archive Vault' }, //HOF
    MarionsStage:      { type: 'l', name: 'Marion\'s Stage' }, //HOF


    Lockbox:           { type: 'o', name: 'Lockbox' },
    LockedCabinet:     { type: 'o', name: 'Locked Cabinet' },
    ManholeCover:      { type: 'o', name: 'Manhole Cover' },
    PowerFailure:      { type: 'o', name: 'Power Failure' },
    Puzzlebox:         { type: 'o', name: 'Puzzlebox' },
    ShortCirquit:      { type: 'o', name: 'Short Circuit' },
    Suitcase:          { type: 'o', name: 'Suitcase' },
    ImpassableDebris:  { type: 'o', name: 'Impassable Debris' }, //TDDUP
    FaultyProjector:   { type: 'o', name: 'Faulty Projector' }, //HOF
    MissingReel:       { type: 'o', name: 'Missing Reel' }, //HOF
    SuitOfArmor:       { type: 'o', name: 'Suit of Armor' }, //HOF

    Clue1: { type: 'c', name: 'Clue 1' },
    Clue2: { type: 'c', name: 'Clue 2' },
    Clue3: { type: 'c', name: 'Clue 3' },
    Clue4: { type: 'c', name: 'Clue 4' },
    Clue5: { type: 'c', name: 'Clue 5' },
    Clue6: { type: 'c', name: 'Clue 6' }
};

var keeper_cards_list = {
    CommandMinion: 'Command Minion',
    CreatureOfNight: 'Creature of Night',
    Darkness: 'Darkness',
    DarkRitual: 'Dark Ritual',
    EvilPresence: 'Evil Presence',
    ManiacAttack: 'Maniac Attack',
    Pyromaniac: 'Pyromaniac',
    RaiseDead: 'Raise Dead',
    TakeSample: 'Take Sample',
    Summoning: 'Summoning',
    SummonWorshippers: 'Summon Worshippers',
    UncontrollableUrges: 'Uncontrollable Urges',
    Witchcraft: 'Witchcraft',

    // Till Death Do Us Part
    Absorb: 'Absorb',
    CrawlingChaos: 'Crawling Chaos',

    // House of Fears
    BreakingCharacter: 'Breaking Character',
    TheFourthWall: 'The Fourth Wall'
};

var mythos_cards_list = {
    bat: 'img/mythos_bat.png',
    door: 'img/mythos_door.png',
    downstairs: 'img/mythos_downstairs.png',
    fire: 'img/mythos_fire.png',
    gun: 'img/mythos_gun.png',
    question: 'img/mythos_question.png',
    upstairs: 'img/mythos_upstairs.png'
};


var scenarios_list = [
    { id: 1, name: 'The Fall of House Lynch', clues: 3 },
    { id: 2, name: 'The Inner Sanctum', clues: 4 },
    { id: 3, name: 'Blood Ties', clues: 5 },
    { id: 4, name: 'Classroom Curses', clues: 4 },
    { id: 5, name: 'Green-Eyed Boy', clues: 6 },
    { id: 6, name: '[POD] Till Death Do Us Part', clues: 5 },
    { id: 7, name: '[POD] House of Fears', clues: 5 }
];


function get_unused_cards(all_cards, items) {
    var unused_cards = all_cards.slice(0);
    for (var i = 0; i < items.length; i++) {
        for (var j = 0; j < items[i]['cards'].length; j++) {
            var ul = unused_cards.length;
            for (var k = 0; k < ul; k++) {
                if (items[i]['cards'][j] == unused_cards[k]) {
                    unused_cards.splice(k,1);
                    ul = ul -1;
                }
            }
        }
    }
    return unused_cards;
}

function room_add(items, list, room_name) {
    //items.push({ room: room_name, cards: list.reverse() });
    items.push({ room: room_name, cards: list });
}

function chosen(choices, id) {
    var indices = { '2A': 1, '3A': 2, '4A': 3, '5A': 4, '6A': 5};
    return choices[ indices[id] ].selected == id;
}


function map_scenario_1 (choices) {
    var items = [];
    var list;

    var keeper_inv = {
        cards: [ 'CommandMinion', 'EvilPresence', 'ManiacAttack', 'TakeSample', 'UncontrollableUrges' ],
        threat: 1,
        mythos: 1,
        trauma: 0
    };
    var mythos_cards = [ 'bat', 'door', 'upstairs' ];
    var note_txt = '';

    var all_cards = {
        e: [ 'Axe', 'ElderSign', 'FireExtinguisher', 'Lantern', 'MagicPhrase',
             'NamelessCults', 'Sedative', 'Shotgun', 'SilverKey',
             'StartlingEvidence', 'Whiskey' ],
        o: [ 'PowerFailure', 'Puzzlebox', 'Suitcase' ],
        l: [ 'DarkRoom', 'JammedDoor', 'LockedDoor', 'MagicalLock', 'PadlockedDoor', 'SealedDoor' ]
    };

    list = [ 'N', 'SealedDoor' ];
    room_add( items, list, 'Ceremony Room' );

    list = chosen(choices,'2A') ? [ 'Clue1', 'MagicalLock' ] : [ 'Lantern', 'JammedDoor'];
    room_add( items, list, 'Basement Landing' );

    list = chosen(choices,'3A') ? [ 'N', 'StartlingEvidence', 'DarkRoom' ] : [ 'MagicPhrase', 'Clue2', 'LockedDoor' ];
    room_add( items, list, 'Guest Bedroom' );

    list = chosen(choices,'3A') ? [ 'ElderSign', 'PadlockedDoor' ] : [ 'Shotgun', 'PadlockedDoor' ];
    room_add( items, list, 'Storage Closet' );

    list = chosen(choices,'3A') ? [ 'MagicPhrase', 'Clue2', 'Puzzlebox', 'LockedDoor' ] : [ 'N', 'StartlingEvidence', 'Suitcase', 'DarkRoom' ];
    room_add( items, list, 'Master Bedroom' );

    list = chosen(choices,'3A') ? [ 'SilverKey', 'Clue3' ] : [ 'N', 'FireExtinguisher' ];
    room_add( items, list, 'Kitchen' );

    list = chosen(choices,'3A') ? [ 'Shotgun', 'Suitcase' ] : [ 'ElderSign', 'Puzzlebox' ];
    room_add( items, list, 'Freezer' );

    list = chosen(choices,'3A') ? [ 'N', 'FireExtinguisher', 'PowerFailure' ] : [ 'SilverKey', 'Clue3', 'PowerFailure' ];
    room_add( items, list, 'Operating Room' );

    list = chosen(choices,'2A') ? [ 'Axe', 'JammedDoor' ] : [ 'Clue1', 'MagicalLock' ];
    room_add( items, list, 'Garden' );

    var unused_cards = get_unused_cards(all_cards['e'], items);
    unused_cards.push('N5');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
}


function map_scenario_2 (choices) {
    var items = [];
    var list;

    var keeper_inv = {
        cards: [ 'CommandMinion', 'DarkRitual', 'SummonWorshippers', 'Summoning' ],
        threat: 1,
        mythos: 2,
        trauma: 0
    };
    var mythos_cards = [ 'bat', 'gun', 'downstairs' ];
    var note_txt = '';

    var all_cards = {
        e: [ 'Axe', 'BrassKey', 'Crucifix', 'DeVermisMysteriis', 'DholChants',
             'Knife', 'MagicPhrase', 'Password', 'SaturnianWine', 'Sedative',
             'StartlingEvidence', 'Torch' ],
        o: [ 'Lockbox', 'LockedCabinet', 'Puzzlebox', 'ShortCirquit' ],
        l: [ 'BarredEntry', 'DreadfulPassage', 'MagicalLock', 'RunelockedDoor' ],
        x: [ 'CultRobes' ]
    };

    list = chosen(choices,'2A') ? [ 'Clue1', 'BarredEntry' ] : [ 'DeVermisMysteriis', 'RunelockedDoor' ];
    room_add( items, list, 'Ceremony Room' );

    list = chosen(choices,'4A') ? [ 'N', 'StartlingEvidence', 'ShortCirquit' ] : [ 'BrassKey', 'Clue4', 'Puzzlebox' ];
    room_add( items, list, 'Basement Landing' );

    list = chosen(choices,'3A') ? [ 'Password', 'Clue2', 'MagicalLock' ] : [ 'N', 'Sedative', 'DreadfulPassage' ];
    room_add( items, list, 'Basement Storage' );

    list = chosen(choices,'4A') ? [ 'N', 'Crucifix', 'Lockbox' ] : [ 'MagicPhrase', 'Clue3', 'LockedCabinet' ];
    room_add( items, list, 'Bathroom' );

    list = chosen(choices,'4A') ? [ 'BrassKey', 'Clue4', 'Puzzlebox' ] : [ 'N', 'DholChants', 'Lockbox' ];
    room_add( items, list, 'Secret Passage' );

    list = chosen(choices,'4A') ? [ 'MagicPhrase', 'Clue3', 'LockedCabinet' ] : [ 'N', 'StartlingEvidence', 'ShortCirquit' ];
    room_add( items, list, 'Study' );

    list = chosen(choices,'3A') ? [ 'N', 'Sedative', 'DreadfulPassage' ] : [ 'Password', 'Clue2', 'MagicalLock' ];
    room_add( items, list, 'Chasm' );

    list = chosen(choices,'2A') ? [ 'N', 'DeVermisMysteriis', 'RunelockedDoor' ] : [ 'Knife', 'Clue1', 'BarredEntry' ];
    room_add( items, list, 'Crypt' );

    var unused_cards = get_unused_cards(all_cards['e'], items);
    unused_cards.push('N4');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
}


function map_scenario_3 (choices) {
    var items = [];
    var list;

    var keeper_inv = {
        cards: [ 'CreatureOfNight', 'EvilPresence', 'Pyromaniac', 'RaiseDead', 'TakeSample' ],
        threat: 2,
        mythos: 2,
        trauma: 1
    };
    var mythos_cards = [ 'fire', 'gun', 'downstairs' ];
    var note_txt = '';

    var all_cards = {
        e: [ 'BrassKey', 'CeremonialSkull', 'Colt38', 'Crowbar', 'Crucifix',
             'ElderSign', 'FireExtinguisher', 'Knife', 'MagicPhrase', 'SilverKey',
             'Torch', 'WhateleyDiary', 'Whiskey' ],
        o: [ 'Lockbox', 'LockedCabinet', 'ManholeCover', 'Puzzlebox' ],
        l: [ 'DreadfulPassage', 'ElectricLock', 'JammedDoor', 'LockedDoor', 'MagicalLock',
             'PadlockedDoor', 'RunelockedDoor', 'SealedDoor' ]
    };

    list = chosen(choices,'5A') ? [ 'WhateleyDiary', 'RunelockedDoor' ] : [ 'Colt38', 'PadlockedDoor' ];
    room_add( items, list, 'Storage Closet' );

    list = chosen(choices,'4A') ? [ 'N', 'FireExtinguisher', 'Lockbox' ] : [ 'MagicPhrase', 'Clue3', 'LockedCabinet' ];
    room_add( items, list, 'Garden' );

    list = chosen(choices,'5A') ? [ 'N', 'Knife', 'DreadfulPassage' ] : [ 'Crowbar', 'Clue5', 'RunelockedDoor' ];
    room_add( items, list, 'Front Porch' );

    list = chosen(choices,'5A') ? [ 'N', 'ElderSign', 'Puzzlebox' ] : [ 'BrassKey', 'Clue4', 'ManholeCover' ];
    room_add( items, list, 'Front Yard' );

    list = chosen(choices,'3A') ? [ 'SilverKey', 'Clue2', 'MagicalLock' ] : [ 'N', 'Crucifix', 'ElectricLock' ];
    room_add( items, list, 'Mud Room' );

    list = chosen(choices,'5A') ? [ 'Crowbar', 'Clue5', 'PadlockedDoor' ] : [ 'N', 'Knife', 'DreadfulPassage' ];
    room_add( items, list, 'Storage Shed' );

    list = chosen(choices,'5A') ? [ 'BrassKey', 'Clue4', 'ManholeCover' ] : [ 'N', 'ElderSign', 'Puzzlebox' ];
    room_add( items, list, 'Patio' );

    list = chosen(choices,'3A') ? [ 'N', 'Crucifix', 'ElectricLock' ] : [ 'SilverKey', 'Clue2', 'MagicalLock' ];
    room_add( items, list, 'Root Cellar' );

    list = [ 'N', 'SealedDoor' ];
    room_add( items, list, 'Furnace Room' );

    list = chosen(choices,'2A') ? [ 'CeremonialSkull', 'Clue1', 'LockedDoor' ] : [ 'Torch', 'JammedDoor' ];
    room_add( items, list, 'Crypt' );

    list = chosen(choices,'4A') ? [ 'MagicPhrase', 'Clue3', 'LockedCabinet' ] : [ 'N', 'FireExtinguisher', 'Lockbox' ];
    room_add( items, list, 'Chasm' );

    list = chosen(choices,'2A') ? [ 'Torch', 'JammedDoor' ] : [ 'CeremonialSkull', 'Clue1', 'LockedDoor' ];
    room_add( items, list, 'Cave 1' );

    var unused_cards = get_unused_cards(all_cards['e'], items);
    unused_cards.push('N5');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
}


function map_scenario_4 (choices) {
    var items = [];
    var list;

    var keeper_inv = {
        cards: [ 'CreatureOfNight', 'Darkness', 'EvilPresence', 'TakeSample', 'UncontrollableUrges' ],
        threat: 1,
        mythos: 1,
        trauma: 0
    };
    var mythos_cards = [ 'upstairs', 'door', 'bat' ];
    var note_txt = '';

    var all_cards = {
        e: [ 'Axe', 'BrassKey', 'CeremonialSkull', 'Crowbar', 'DeVermisMysteriis',
             'FireExtinguisher', 'Lantern', 'MagicPhrase', 'RubyOfRlyeh',
             'Sedative', 'Shotgun', 'SilverKey', 'Sledgehammer', 'WhateleyDiary' ],
        o: [ 'LockedCabinet', 'PowerFailure', 'ShortCirquit', 'Suitcase' ],
        l: [ 'DarkRoom', 'JammedDoor', 'LockedDoor', 'MagicalLock' ],
        x: [ 'PadlockedDoor' ]
    };

    list = chosen(choices,'2A') ? [ 'Clue1', 'MagicalLock' ] : [ 'MagicPhrase', 'LockedDoor' ];
    room_add( items, list, 'Tower Room' );

    list = chosen(choices,'3A') ? [ 'WhateleyDiary', 'ShortCirquit' ] : [ 'DeVermisMysteriis', 'ShortCirquit' ];
    room_add( items, list, 'Attic Storage' );

    list = chosen(choices,'2A') ? [ 'MagicPhrase', 'LockedDoor' ] : [ 'Clue1', 'MagicalLock' ];
    room_add( items, list, 'Library' );

    list = chosen(choices,'3A') ? [ 'DeVermisMysteriis', 'PowerFailure' ] : [ 'WhateleyDiary', 'PowerFailure' ];
    room_add( items, list, 'Study' );

    list = chosen(choices,'4A') ? [ 'BrassKey', 'Clue3', 'JammedDoor' ] : [ 'N', 'Crowbar', 'JammedDoor' ];
    room_add( items, list, 'Furnace Room' );

    list = chosen(choices,'2A') ? [ 'RubyOfRlyeh' ] : [ 'Sedative' ];
    room_add( items, list, 'Attic Loft' );

    list = chosen(choices,'4A') ? [ 'Axe' ] : [ 'FireExtinguisher' ];
    room_add( items, list, 'Hallway 1' );

    list = chosen(choices,'4A') ? [ 'FireExtinguisher' ] : [ 'Lantern' ];
    room_add( items, list, 'Hallway 3' );

    list = chosen(choices,'3A') ? [ 'N', 'CeremonialSkull', 'Suitcase' ] : [ 'SilverKey', 'Clue2', 'LockedCabinet' ];
    room_add( items, list, 'Bathroom' );

    list = chosen(choices,'4A') ? [ 'Lantern' ] : [ 'Axe' ];
    room_add( items, list, 'Laboratory' );

    list = chosen(choices,'2A') ? [ 'Sedative' ] : [ 'RubyOfRlyeh' ];
    room_add( items, list, 'Operating Room' );

    list = chosen(choices,'4A') ? [ 'N', 'Crowbar', 'DarkRoom' ] : [ 'BrassKey', 'Clue3', 'DarkRoom' ];
    room_add( items, list, 'Freezer' );

    list = chosen(choices,'3A') ? [ 'SilverKey', 'Clue2', 'LockedCabinet' ] : [ 'N', 'CeremonialSkull', 'Suitcase' ];
    room_add( items, list, 'Coat Room' );

    var unused_cards = get_unused_cards(all_cards['e'], items);
    unused_cards.push('N5');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
}


function map_scenario_5 (choices) {
    var items = [];
    var list;

    var keeper_inv = {
        cards: [ 'CommandMinion', 'EvilPresence', 'UncontrollableUrges', 'Witchcraft' ],
        threat: 1,
        mythos: 1,
        trauma: 0
    };
    var mythos_cards = [ 'upstairs', 'bat', 'door', 'question' ];
    var note_txt = 'Do not place exploration card in Foyer.';

    var all_cards = {
        e: [ 'BrassKey', 'CeremonialSkull', 'Colt38', 'DeVermisMysteriis', 'Crowbar',
             'DholChants', 'ElderSign', 'Knife', 'Lantern', 'MagicPhrase',
             'NamelessCults', 'Password', 'RubyOfRlyeh', 'SaturnianWine',
             'Sedative', 'SilverKey', 'Sledgehammer', 'StartlingEvidence',
             'WhateleyDiary', 'Whiskey' ],
        o: [ 'Lockbox', 'LockedCabinet', 'ManholeCover', 'PowerFailure' ],
        l: [ 'BarredEntry', 'DarkRoom', 'DreadfulPassage', 'LockedDoor',
             'MagicalLock', 'OpeningTheGate', 'PadlockedDoor',
             'RunelockedDoor' ]
    };

    list = chosen(choices,'6A') ? [ 'Password', 'Clue6' ] : [ 'N', 'Sledgehammer' ];
    room_add( items, list, 'Coat Room' );

    list = chosen(choices,'6A') ? [ 'N', 'Sledgehammer' ] : [ 'Password', 'Clue6' ];
    room_add( items, list, 'Dining Room' );

    list = chosen(choices,'6A') ? [ 'BrassKey', 'Clue5', 'BarredEntry' ] : [ 'N', 'DholChants', 'RunelockedDoor' ];
    room_add( items, list, 'Kitchen Storage' );

    list = chosen(choices,'2A') ? [ 'CeremonialSkull', 'Clue1', 'MagicalLock' ] : [ 'Colt38', 'PadlockedDoor' ];
    room_add( items, list, 'Nursery' );

    list = chosen(choices,'6A') ? [ 'N', 'DholChants', 'RunelockedDoor' ] : [ 'BrassKey', 'Clue5', 'BarredEntry' ];
    room_add( items, list, 'Library' );

    list = chosen(choices,'5A') ? [ 'N', 'Sedative', 'Lockbox' ] : [ 'Crowbar', 'Clue4', 'LockedCabinet' ];
    room_add( items, list, 'Laboratory' );

    if (choices[0].selected == '1B') {
        list = [ 'N', 'OpeningTheGate' ];
        all_cards['l'].splice( all_cards['l'].indexOf( 'DreadfulPassage' ), 1 ); // remove
    }
    else {
        list = chosen(choices,'2A') ? [ 'WhateleyDiary', 'DreadfulPassage' ] : [ 'CeremonialSkull', 'DreadfulPassage' ];
        all_cards['l'].splice( all_cards['l'].indexOf( 'OpeningTheGate' ), 1 ); // remove
    }
    room_add( items, list, 'Freezer' );

    list = chosen(choices,'4A') ? [ 'SilverKey', 'Clue3', 'ManholeCover' ] : [ 'N', 'NamelessCults', 'PowerFailure' ];
    room_add( items, list, 'Secret Passage' );

    list = chosen(choices,'4A') ? [ 'N', 'NamelessCults', 'PowerFailure' ] : [ 'SilverKey', 'Clue3', 'ManholeCover' ];
    room_add( items, list, 'Attic Loft' );

    list = chosen(choices,'5A') ? [ 'Crowbar', 'Clue4', 'LockedCabinet' ] : [ 'N', 'Sedative', 'Lockbox' ];
    room_add( items, list, 'Hallway 3' );

    list = chosen(choices,'3A') ? [ 'N', 'RubyOfRlyeh', 'DarkRoom' ] : [ 'MagicPhrase', 'Clue2', 'LockedDoor' ];
    room_add( items, list, 'Master Bedroom' );

    list = chosen(choices,'3A') ? [ 'MagicPhrase', 'Clue2', 'LockedDoor' ] : [ 'N', 'RubyOfRlyeh', 'DarkRoom' ];
    room_add( items, list, 'Bathroom 1' );

    list = chosen(choices,'2A') ? [ 'Colt38', 'PadlockedDoor' ] : [ 'WhateleyDiary', 'Clue1', 'MagicalLock' ];
    room_add( items, list, 'Tower Room' );

    var unused_cards = get_unused_cards(all_cards['e'], items);
    unused_cards.push('N5');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
}

function map_scenario_6 (choices) {
    var items = [];
    var list;

    var keeper_inv = {
        cards: [ 'Absorb', 'CrawlingChaos', 'CommandMinion', 'EvilPresence', 'RaiseDead', 'Witchcraft' ],
        threat: 2,
        mythos: 2,
        trauma: 2
    };
    var mythos_cards = [ 'bat', 'fire', 'gun' ];
    var note_txt = 'Place 1 random card in each empty room on the Lower Floor and leave the rest unseed.';

    var all_cards = {
        e: [ 'BradysHand', 'TheCure', 'TchoTchoTalisman', 'BradysHead',
             'SheetMusic', 'Carbine', 'Pickaxe', 'NathanStone',
             'BrassKnuckles', 'Machete', 'SmithWesson',
             'DholChants', 'ElderSign', 'NamelessCults', 'RubyOfRlyeh', 'Lantern',
             'WhateleyDiary', 'Whiskey' ],
        o: [ 'ShortCirquit', 'ImpassableDebris' ],
        l: [ 'ChimeLock', 'ElectricLock', 'FleshDoor', 'HiddenEntrance', 'PadlockedDoor', 'RunelockedDoor' ],
        x: [ 'JammedDoor' ]
    };

    list = chosen(choices,'5A') ? [ 'N', 'Lantern' ] : [ 'NathanStone', 'Clue5' ];
    room_add( items, list, 'Graveyard' );

    list = chosen(choices,'4A') ? [ 'N', 'DholChants', 'PadlockedDoor' ] : [ 'SheetMusic', 'Clue3', 'FleshDoor' ];
    room_add( items, list, 'Furnace Room' );

    list = chosen(choices,'5A') ? [ 'NathanStone', 'Clue5' ] : [ 'N', 'Lantern' ];
    room_add( items, list, 'Chapel' );

    list = chosen(choices,'4A') ? [ 'SheetMusic', 'Clue3', 'FleshDoor' ] : [ 'N', 'NamelessCults', 'PadlockedDoor' ];
    room_add( items, list, 'Secret Passage' );

    list = chosen(choices,'5A') ? [ 'N', 'BrassKnuckles', 'ElectricLock' ] : [ 'Machete', 'Clue4', 'HiddenEntrance' ];
    room_add( items, list, 'Cave 1' );

    list = chosen(choices,'3A') ? [ 'BradysHand', 'Clue2', 'ChimeLock' ] : [ 'N', 'ElderSign', 'RunelockedDoor' ];
    room_add( items, list, 'Freezer' );

    list = chosen(choices,'2A') ? [ 'N', 'SmithWesson', 'ShortCirquit' ] : [ 'TheCure', 'Clue1', 'ImpassableDebris' ];
    room_add( items, list, 'Hallway 1' );

    list = chosen(choices,'2A') ? [ 'TheCure', 'Clue1', 'ImpassableDebris' ] : [ 'N', 'TchoTchoTalisman', 'ShortCirquit' ];
    room_add( items, list, 'Library' );

    list = chosen(choices,'3A') ? [ 'N', 'ElderSign', 'RunelockedDoor' ] : [ 'BradysHand', 'Clue2', 'ChimeLock' ];
    room_add( items, list, 'Coat Room' );

    list = chosen(choices,'5A') ? [ 'Machete', 'Clue4', 'HiddenEntrance' ] : [ 'N', 'BrassKnuckles', 'ElectricLock' ];
    room_add( items, list, 'Basement Landing' );

    var unused_cards = get_unused_cards(all_cards['e'], items);
    unused_cards.push('N6');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
}


function map_scenario_7 (choices) {
    var items = [];
    var list;

    var keeper_inv = {
        cards: [ 'BreakingCharacter', 'CommandMinion', 'TheFourthWall', 'EvilPresence', 'Darkness' ],
        threat: 2,
        mythos: 2,
        trauma: 2
    };
    var mythos_cards = [ 'bat', 'door', 'upstairs' ];
    var note_txt = 'Place each remaining exploration card in empty room on your choice.';

    var all_cards = {
        e: [ 'BrassKnuckles', 'CapsulesOfTranquility', 'CrescentBlade', 'CultRobes', 'DeVermisMysteriis',
             'Marionettes', 'SatchelOfTheVoid', 'SilverKey', 'SmithWesson', 'SymbolOfTheElderLight',
             'TchoTchoTalisman', 'TheLostReel', 'UnreflectingMirror', 'VaultKey', 'Whiskey',
             'DaphneCuthbert', 'NataliePrescott', 'RoryMichaels', 'VivianDavis' ],
        o: [ 'FaultyProjector', 'MissingReel', 'SuitOfArmor', 'Puzzlebox' ],
        l: [ 'ArchiveVault', 'JammedDoor', 'LockedDoor', 'MarionsStage', 'PadlockedDoor', 'RunelockedDoor' ]
        // x: [ '' ]
    };

    list = chosen(choices,'4A') ? [ 'N', 'CultRobes', 'JammedDoor' ] : [ 'VaultKey', 'Clue3', 'LockedDoor' ];
    room_add( items, list, 'Bathroom 1' );

    list = chosen(choices,'2A') ? [ 'N', 'SatchelOfTheVoid', 'Puzzlebox' ] : [ 'TheLostReel', 'Clue1', 'SuitOfArmor' ];
    room_add( items, list, 'Basement Stairs' );

    list = chosen(choices,'5A') ? [ 'N', 'SymbolOfTheElderLight' ] : [ 'Marionettes', 'Clue5' ];
    room_add( items, list, 'Basement Storage' );

    list = chosen(choices,'5A') ? [ 'SilverKey', 'Clue4' ] : [ 'N', 'CapsulesOfTranquility' ];
    room_add( items, list, 'Freezer' );

    list = chosen(choices,'5A') ? [ 'MarionsStage' ] : [ 'PadlockedDoor' ];
    room_add( items, list, 'Operating Room' );

    list = chosen(choices,'3A') ? [ 'CrescentBlade', 'Clue2', 'ArchiveVault' ] : [ 'N', 'Whiskey', 'RunelockedDoor' ];
    room_add( items, list, 'Study' );

    list = chosen(choices,'5A') ? [ 'N', 'DeVermisMysteriis', 'PadlockedDoor' ] : [ 'SilverKey', 'Clue4', 'MarionsStage' ];
    room_add( items, list, 'Library' );

    list = [ 'Clue6', 'UnreflectingMirror' ];
    room_add( items, list, 'Chapel' );

    list = chosen(choices,'3A') ? [ 'N', 'BrassKnuckles', 'RunelockedDoor' ] : [ 'CrescentBlade', 'Clue2', 'ArchiveVault' ];
    room_add( items, list, 'Bathroom 2' );

    list = [ 'FaultyProjector', 'MissingReel' ];
    room_add( items, list, 'Nursery' );

    list = chosen(choices,'5A') ? [ 'Marionettes', 'Clue5' ] : [ 'N', 'SymbolOfTheElderLight' ];
    room_add( items, list, 'Gallery' );

    list = chosen(choices,'2A') ? [ 'TheLostReel', 'Clue1', 'SuitOfArmor' ] : [ 'N', 'SatchelOfTheVoid', 'Puzzlebox' ];
    room_add( items, list, 'Coat Room' );

    list = chosen(choices,'4A') ? [ 'VaultKey', 'Clue3', 'LockedDoor' ] : [ 'N', 'TchoTchoTalisman', 'JammedDoor' ];
    room_add( items, list, 'Dining Room' );

    var unused_cards = get_unused_cards(all_cards['e'], items);
    unused_cards.push('N2');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
}
/*
    list = chosen(choices,'') ? [  ] : [  ];
    room_add( items, list, '' );
*/