// Implementation of core game elements

(function(exports) {
// ------

// export as Game object, if not exist - create it
if (! exports.MoM) {
  exports.MoM = {};
}

exports.MoM.cards_list = {
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

    // TYS
    Costume:            { type: 'e', name: 'Costume' },
    DeckOfFates:        { type: 'e', name: 'Deck of Fates' },
    DreamDagger:        { type: 'e', name: 'Dream Dagger' },
    JuliansAmulet:      { type: 'e', name: 'Julian\'s Amulet' },
    KeyToCarcosa:       { type: 'e', name: 'Key to Carcosa' },
    LockedTome:         { type: 'e', name: 'Locked Tome' },
    Matches:            { type: 'e', name: 'Matches' },
    MrsWylde:           { type: 'e', name: 'Mrs. Wylde' },
    PropheticMirror:    { type: 'e', name: 'Prophetic Mirror' },
    TheNecronomicon:    { type: 'e', name: 'The Necronomicon' },
    TheScript:          { type: 'e', name: 'The Script' },
    TheUnderstudy:      { type: 'e', name: 'The Understudy' },
    TonicOfInspiration: { type: 'e', name: 'Tonic Of Inspiration' },
    YellowMask:         { type: 'e', name: 'Yellow Mask' },
    YellowSign:         { type: 'e', name: 'Yellow Sign x4' },

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
    BrokenPadlock:     { type: 'l', name: 'Broken Padlock' }, //TYS
    KingsChambers:     { type: 'l', name: 'King\'s Chambers' }, //TYS
    RehearsalRoom:     { type: 'l', name: 'Rehearsal Room' }, //TYS


    Lockbox:           { type: 'o', name: 'Lockbox' },
    LockedCabinet:     { type: 'o', name: 'Locked Cabinet' },
    ManholeCover:      { type: 'o', name: 'Manhole Cover' },
    PowerFailure:      { type: 'o', name: 'Power Failure' },
    Puzzlebox:         { type: 'o', name: 'Puzzlebox' },
    ShortCircuit:      { type: 'o', name: 'Short Circuit' },
    Suitcase:          { type: 'o', name: 'Suitcase' },
    ImpassableDebris:  { type: 'o', name: 'Impassable Debris' }, //TDDUP
    FaultyProjector:   { type: 'o', name: 'Faulty Projector' }, //HOF
    MissingReel:       { type: 'o', name: 'Missing Reel' }, //HOF
    SuitOfArmor:       { type: 'o', name: 'Suit of Armor' }, //HOF
    Act1Scene7:        { type: 'o', name: 'Act 1 Scene 7' }, //TYS
    AnchoredKey:       { type: 'o', name: 'Anchored Key' }, //TYS
    ArcaneCandles:     { type: 'o', name: 'Arcane Candles' }, //TYS
    DressRehearsal:    { type: 'o', name: 'Dress Rehearsal' }, //TYS


    Clue1: { type: 'c', name: 'Clue 1' },
    Clue2: { type: 'c', name: 'Clue 2' },
    Clue3: { type: 'c', name: 'Clue 3' },
    Clue4: { type: 'c', name: 'Clue 4' },
    Clue5: { type: 'c', name: 'Clue 5' },
    Clue6: { type: 'c', name: 'Clue 6' }
};


exports.MoM.keeper_cards_list = {
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
    TheFourthWall: 'The Fourth Wall',

    // The Yellow Sign
    CalledByTheKing: 'Called by the King',
    OpenAuditions: 'Open Auditions',
    TheCourtOfCarcosa: 'The Court of Carcosa'
};

exports.MoM.mythos_cards_list = {
    bat: 'img/mythos_bat.png',
    door: 'img/mythos_door.png',
    downstairs: 'img/mythos_downstairs.png',
    fire: 'img/mythos_fire.png',
    gun: 'img/mythos_gun.png',
    question: 'img/mythos_question.png',
    upstairs: 'img/mythos_upstairs.png'
};


exports.MoM.scenarios_list = [
    { id: 1, name: 'The Fall of House Lynch', clues: 3 },
    { id: 2, name: 'The Inner Sanctum', clues: 4 },
    { id: 3, name: 'Blood Ties', clues: 5 },
    { id: 4, name: 'Classroom Curses', clues: 4 },
    { id: 5, name: 'Green-Eyed Boy', clues: 6 },
    { id: 6, name: '[POD] Till Death Do Us Part', clues: 5 },
    { id: 7, name: '[POD] House of Fears', clues: 5 },
    { id: 8, name: '[POD] The Yellow Sign', clues: 4 }
];


exports.MoM.use_scenario = {
room_add: function (items, list, room_name) {
    items.push({ room: room_name, cards: list });
},
chosen: function (choices, id) {
    var indices = { '2A': 1, '3A': 2, '4A': 3, '5A': 4, '6A': 5};
    return choices[ indices[id] ].selected == id;
},
get_unused_cards: function(all_cards, items) {
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
},

// === Scenario 1: The Fall of House Lynch

1: function (choices) {
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
    this.room_add( items, list, 'Ceremony Room' );

    list = this.chosen(choices,'2A') ? [ 'Clue1', 'MagicalLock' ] : [ 'Lantern', 'JammedDoor'];
    this.room_add( items, list, 'Basement Landing' );

    list = this.chosen(choices,'3A') ? [ 'N', 'StartlingEvidence', 'DarkRoom' ] : [ 'MagicPhrase', 'Clue2', 'LockedDoor' ];
    this.room_add( items, list, 'Guest Bedroom' );

    list = this.chosen(choices,'3A') ? [ 'ElderSign', 'PadlockedDoor' ] : [ 'Shotgun', 'PadlockedDoor' ];
    this.room_add( items, list, 'Storage Closet' );

    list = this.chosen(choices,'3A') ? [ 'MagicPhrase', 'Clue2', 'Puzzlebox', 'LockedDoor' ] : [ 'N', 'StartlingEvidence', 'Suitcase', 'DarkRoom' ];
    this.room_add( items, list, 'Master Bedroom' );

    list = this.chosen(choices,'3A') ? [ 'SilverKey', 'Clue3' ] : [ 'N', 'FireExtinguisher' ];
    this.room_add( items, list, 'Kitchen' );

    list = this.chosen(choices,'3A') ? [ 'Shotgun', 'Suitcase' ] : [ 'ElderSign', 'Puzzlebox' ];
    this.room_add( items, list, 'Freezer' );

    list = this.chosen(choices,'3A') ? [ 'N', 'FireExtinguisher', 'PowerFailure' ] : [ 'SilverKey', 'Clue3', 'PowerFailure' ];
    this.room_add( items, list, 'Operating Room' );

    list = this.chosen(choices,'2A') ? [ 'Axe', 'JammedDoor' ] : [ 'Clue1', 'MagicalLock' ];
    this.room_add( items, list, 'Garden' );

    var unused_cards = this.get_unused_cards(all_cards['e'], items);
    unused_cards.push('N5');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
},

// === Scenario 2: The Inner Sanctum

2: function (choices) {
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
        o: [ 'Lockbox', 'LockedCabinet', 'Puzzlebox', 'ShortCircuit' ],
        l: [ 'BarredEntry', 'DreadfulPassage', 'MagicalLock', 'RunelockedDoor' ],
        x: [ 'CultRobes' ]
    };

    list = this.chosen(choices,'2A') ? [ 'Clue1', 'BarredEntry' ] : [ 'DeVermisMysteriis', 'RunelockedDoor' ];
    this.room_add( items, list, 'Ceremony Room' );

    list = this.chosen(choices,'4A') ? [ 'N', 'StartlingEvidence', 'ShortCircuit' ] : [ 'BrassKey', 'Clue4', 'Puzzlebox' ];
    this.room_add( items, list, 'Basement Landing' );

    list = this.chosen(choices,'3A') ? [ 'Password', 'Clue2', 'MagicalLock' ] : [ 'N', 'Sedative', 'DreadfulPassage' ];
    this.room_add( items, list, 'Basement Storage' );

    list = this.chosen(choices,'4A') ? [ 'N', 'Crucifix', 'Lockbox' ] : [ 'MagicPhrase', 'Clue3', 'LockedCabinet' ];
    this.room_add( items, list, 'Bathroom' );

    list = this.chosen(choices,'4A') ? [ 'BrassKey', 'Clue4', 'Puzzlebox' ] : [ 'N', 'DholChants', 'Lockbox' ];
    this.room_add( items, list, 'Secret Passage' );

    list = this.chosen(choices,'4A') ? [ 'MagicPhrase', 'Clue3', 'LockedCabinet' ] : [ 'N', 'StartlingEvidence', 'ShortCircuit' ];
    this.room_add( items, list, 'Study' );

    list = this.chosen(choices,'3A') ? [ 'N', 'Sedative', 'DreadfulPassage' ] : [ 'Password', 'Clue2', 'MagicalLock' ];
    this.room_add( items, list, 'Chasm' );

    list = this.chosen(choices,'2A') ? [ 'N', 'DeVermisMysteriis', 'RunelockedDoor' ] : [ 'Knife', 'Clue1', 'BarredEntry' ];
    this.room_add( items, list, 'Crypt' );

    var unused_cards = this.get_unused_cards(all_cards['e'], items);
    unused_cards.push('N4');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
},

// === Scenario 3: Blood Ties

3: function (choices) {
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

    list = this.chosen(choices,'5A') ? [ 'WhateleyDiary', 'RunelockedDoor' ] : [ 'Colt38', 'PadlockedDoor' ];
    this.room_add( items, list, 'Storage Closet' );

    list = this.chosen(choices,'4A') ? [ 'N', 'FireExtinguisher', 'Lockbox' ] : [ 'MagicPhrase', 'Clue3', 'LockedCabinet' ];
    this.room_add( items, list, 'Garden' );

    list = this.chosen(choices,'5A') ? [ 'N', 'Knife', 'DreadfulPassage' ] : [ 'Crowbar', 'Clue5', 'RunelockedDoor' ];
    this.room_add( items, list, 'Front Porch' );

    list = this.chosen(choices,'5A') ? [ 'N', 'ElderSign', 'Puzzlebox' ] : [ 'BrassKey', 'Clue4', 'ManholeCover' ];
    this.room_add( items, list, 'Front Yard' );

    list = this.chosen(choices,'3A') ? [ 'SilverKey', 'Clue2', 'MagicalLock' ] : [ 'N', 'Crucifix', 'ElectricLock' ];
    this.room_add( items, list, 'Mud Room' );

    list = this.chosen(choices,'5A') ? [ 'Crowbar', 'Clue5', 'PadlockedDoor' ] : [ 'N', 'Knife', 'DreadfulPassage' ];
    this.room_add( items, list, 'Storage Shed' );

    list = this.chosen(choices,'5A') ? [ 'BrassKey', 'Clue4', 'ManholeCover' ] : [ 'N', 'ElderSign', 'Puzzlebox' ];
    this.room_add( items, list, 'Patio' );

    list = this.chosen(choices,'3A') ? [ 'N', 'Crucifix', 'ElectricLock' ] : [ 'SilverKey', 'Clue2', 'MagicalLock' ];
    this.room_add( items, list, 'Root Cellar' );

    list = [ 'N', 'SealedDoor' ];
    this.room_add( items, list, 'Furnace Room' );

    list = this.chosen(choices,'2A') ? [ 'CeremonialSkull', 'Clue1', 'LockedDoor' ] : [ 'Torch', 'JammedDoor' ];
    this.room_add( items, list, 'Crypt' );

    list = this.chosen(choices,'4A') ? [ 'MagicPhrase', 'Clue3', 'LockedCabinet' ] : [ 'N', 'FireExtinguisher', 'Lockbox' ];
    this.room_add( items, list, 'Chasm' );

    list = this.chosen(choices,'2A') ? [ 'Torch', 'JammedDoor' ] : [ 'CeremonialSkull', 'Clue1', 'LockedDoor' ];
    this.room_add( items, list, 'Cave 1' );

    var unused_cards = this.get_unused_cards(all_cards['e'], items);
    unused_cards.push('N5');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
},


// === Scenario 4: Classroom Curses

4: function (choices) {
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
        o: [ 'LockedCabinet', 'PowerFailure', 'ShortCircuit', 'Suitcase' ],
        l: [ 'DarkRoom', 'JammedDoor', 'LockedDoor', 'MagicalLock' ],
        x: [ 'PadlockedDoor' ]
    };

    list = this.chosen(choices,'2A') ? [ 'Clue1', 'MagicalLock' ] : [ 'MagicPhrase', 'LockedDoor' ];
    this.room_add( items, list, 'Tower Room' );

    list = this.chosen(choices,'3A') ? [ 'WhateleyDiary', 'ShortCircuit' ] : [ 'DeVermisMysteriis', 'ShortCircuit' ];
    this.room_add( items, list, 'Attic Storage' );

    list = this.chosen(choices,'2A') ? [ 'MagicPhrase', 'LockedDoor' ] : [ 'Clue1', 'MagicalLock' ];
    this.room_add( items, list, 'Library' );

    list = this.chosen(choices,'3A') ? [ 'DeVermisMysteriis', 'PowerFailure' ] : [ 'WhateleyDiary', 'PowerFailure' ];
    this.room_add( items, list, 'Study' );

    list = this.chosen(choices,'4A') ? [ 'BrassKey', 'Clue3', 'JammedDoor' ] : [ 'N', 'Crowbar', 'JammedDoor' ];
    this.room_add( items, list, 'Furnace Room' );

    list = this.chosen(choices,'2A') ? [ 'RubyOfRlyeh' ] : [ 'Sedative' ];
    this.room_add( items, list, 'Attic Loft' );

    list = this.chosen(choices,'4A') ? [ 'Axe' ] : [ 'FireExtinguisher' ];
    this.room_add( items, list, 'Hallway 1' );

    list = this.chosen(choices,'4A') ? [ 'FireExtinguisher' ] : [ 'Lantern' ];
    this.room_add( items, list, 'Hallway 3' );

    list = this.chosen(choices,'3A') ? [ 'N', 'CeremonialSkull', 'Suitcase' ] : [ 'SilverKey', 'Clue2', 'LockedCabinet' ];
    this.room_add( items, list, 'Bathroom' );

    list = this.chosen(choices,'4A') ? [ 'Lantern' ] : [ 'Axe' ];
    this.room_add( items, list, 'Laboratory' );

    list = this.chosen(choices,'2A') ? [ 'Sedative' ] : [ 'RubyOfRlyeh' ];
    this.room_add( items, list, 'Operating Room' );

    list = this.chosen(choices,'4A') ? [ 'N', 'Crowbar', 'DarkRoom' ] : [ 'BrassKey', 'Clue3', 'DarkRoom' ];
    this.room_add( items, list, 'Freezer' );

    list = this.chosen(choices,'3A') ? [ 'SilverKey', 'Clue2', 'LockedCabinet' ] : [ 'N', 'CeremonialSkull', 'Suitcase' ];
    this.room_add( items, list, 'Coat Room' );

    var unused_cards = this.get_unused_cards(all_cards['e'], items);
    unused_cards.push('N5');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
},

// === Scenario 5: Green-Eyed Boy

5: function (choices) {
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

    list = this.chosen(choices,'6A') ? [ 'Password', 'Clue6' ] : [ 'N', 'Sledgehammer' ];
    this.room_add( items, list, 'Coat Room' );

    list = this.chosen(choices,'6A') ? [ 'N', 'Sledgehammer' ] : [ 'Password', 'Clue6' ];
    this.room_add( items, list, 'Dining Room' );

    list = this.chosen(choices,'6A') ? [ 'BrassKey', 'Clue5', 'BarredEntry' ] : [ 'N', 'DholChants', 'RunelockedDoor' ];
    this.room_add( items, list, 'Kitchen Storage' );

    list = this.chosen(choices,'2A') ? [ 'CeremonialSkull', 'Clue1', 'MagicalLock' ] : [ 'Colt38', 'PadlockedDoor' ];
    this.room_add( items, list, 'Nursery' );

    list = this.chosen(choices,'6A') ? [ 'N', 'DholChants', 'RunelockedDoor' ] : [ 'BrassKey', 'Clue5', 'BarredEntry' ];
    this.room_add( items, list, 'Library' );

    list = this.chosen(choices,'5A') ? [ 'N', 'Sedative', 'Lockbox' ] : [ 'Crowbar', 'Clue4', 'LockedCabinet' ];
    this.room_add( items, list, 'Laboratory' );

    if (choices[0].selected == '1B') {
        list = [ 'N', 'OpeningTheGate' ];
        all_cards['l'].splice( all_cards['l'].indexOf( 'DreadfulPassage' ), 1 ); // remove
    }
    else {
        list = this.chosen(choices,'2A') ? [ 'WhateleyDiary', 'DreadfulPassage' ] : [ 'CeremonialSkull', 'DreadfulPassage' ];
        all_cards['l'].splice( all_cards['l'].indexOf( 'OpeningTheGate' ), 1 ); // remove
    }
    this.room_add( items, list, 'Freezer' );

    list = this.chosen(choices,'4A') ? [ 'SilverKey', 'Clue3', 'ManholeCover' ] : [ 'N', 'NamelessCults', 'PowerFailure' ];
    this.room_add( items, list, 'Secret Passage' );

    list = this.chosen(choices,'4A') ? [ 'N', 'NamelessCults', 'PowerFailure' ] : [ 'SilverKey', 'Clue3', 'ManholeCover' ];
    this.room_add( items, list, 'Attic Loft' );

    list = this.chosen(choices,'5A') ? [ 'Crowbar', 'Clue4', 'LockedCabinet' ] : [ 'N', 'Sedative', 'Lockbox' ];
    this.room_add( items, list, 'Hallway 3' );

    list = this.chosen(choices,'3A') ? [ 'N', 'RubyOfRlyeh', 'DarkRoom' ] : [ 'MagicPhrase', 'Clue2', 'LockedDoor' ];
    this.room_add( items, list, 'Master Bedroom' );

    list = this.chosen(choices,'3A') ? [ 'MagicPhrase', 'Clue2', 'LockedDoor' ] : [ 'N', 'RubyOfRlyeh', 'DarkRoom' ];
    this.room_add( items, list, 'Bathroom 1' );

    list = this.chosen(choices,'2A') ? [ 'Colt38', 'PadlockedDoor' ] : [ 'WhateleyDiary', 'Clue1', 'MagicalLock' ];
    this.room_add( items, list, 'Tower Room' );

    var unused_cards = this.get_unused_cards(all_cards['e'], items);
    unused_cards.push('N5');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
},

// === Scenario 6: Till Death Do Us Part 

6: function (choices) {
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
        o: [ 'ShortCircuit', 'ImpassableDebris' ],
        l: [ 'ChimeLock', 'ElectricLock', 'FleshDoor', 'HiddenEntrance', 'PadlockedDoor', 'RunelockedDoor' ],
        x: [ 'JammedDoor' ]
    };

    list = this.chosen(choices,'5A') ? [ 'N', 'Lantern' ] : [ 'NathanStone', 'Clue5' ];
    this.room_add( items, list, 'Graveyard' );

    list = this.chosen(choices,'4A') ? [ 'N', 'DholChants', 'PadlockedDoor' ] : [ 'SheetMusic', 'Clue3', 'FleshDoor' ];
    this.room_add( items, list, 'Furnace Room' );

    list = this.chosen(choices,'5A') ? [ 'NathanStone', 'Clue5' ] : [ 'N', 'Lantern' ];
    this.room_add( items, list, 'Chapel' );

    list = this.chosen(choices,'4A') ? [ 'SheetMusic', 'Clue3', 'FleshDoor' ] : [ 'N', 'NamelessCults', 'PadlockedDoor' ];
    this.room_add( items, list, 'Secret Passage' );

    list = this.chosen(choices,'5A') ? [ 'N', 'BrassKnuckles', 'ElectricLock' ] : [ 'Machete', 'Clue4', 'HiddenEntrance' ];
    this.room_add( items, list, 'Cave 1' );

    list = this.chosen(choices,'3A') ? [ 'BradysHand', 'Clue2', 'ChimeLock' ] : [ 'N', 'ElderSign', 'RunelockedDoor' ];
    this.room_add( items, list, 'Freezer' );

    list = this.chosen(choices,'2A') ? [ 'N', 'SmithWesson', 'ShortCircuit' ] : [ 'TheCure', 'Clue1', 'ImpassableDebris' ];
    this.room_add( items, list, 'Hallway 1' );

    list = this.chosen(choices,'2A') ? [ 'TheCure', 'Clue1', 'ImpassableDebris' ] : [ 'N', 'TchoTchoTalisman', 'ShortCircuit' ];
    this.room_add( items, list, 'Library' );

    list = this.chosen(choices,'3A') ? [ 'N', 'ElderSign', 'RunelockedDoor' ] : [ 'BradysHand', 'Clue2', 'ChimeLock' ];
    this.room_add( items, list, 'Coat Room' );

    list = this.chosen(choices,'5A') ? [ 'Machete', 'Clue4', 'HiddenEntrance' ] : [ 'N', 'BrassKnuckles', 'ElectricLock' ];
    this.room_add( items, list, 'Basement Landing' );

    var unused_cards = this.get_unused_cards(all_cards['e'], items);
    unused_cards.push('N6');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
},


// Scenario 7: House Of Fears

7: function (choices) {
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

    list = this.chosen(choices,'4A') ? [ 'N', 'CultRobes', 'JammedDoor' ] : [ 'VaultKey', 'Clue3', 'LockedDoor' ];
    this.room_add( items, list, 'Bathroom 1' );

    list = this.chosen(choices,'2A') ? [ 'N', 'SatchelOfTheVoid', 'Puzzlebox' ] : [ 'TheLostReel', 'Clue1', 'SuitOfArmor' ];
    this.room_add( items, list, 'Basement Stairs' );

    list = this.chosen(choices,'5A') ? [ 'N', 'SymbolOfTheElderLight' ] : [ 'Marionettes', 'Clue5' ];
    this.room_add( items, list, 'Basement Storage' );

    list = this.chosen(choices,'5A') ? [ 'SilverKey', 'Clue4' ] : [ 'N', 'CapsulesOfTranquility' ];
    this.room_add( items, list, 'Freezer' );

    list = this.chosen(choices,'5A') ? [ 'MarionsStage' ] : [ 'PadlockedDoor' ];
    this.room_add( items, list, 'Operating Room' );

    list = this.chosen(choices,'3A') ? [ 'CrescentBlade', 'Clue2', 'ArchiveVault' ] : [ 'N', 'Whiskey', 'RunelockedDoor' ];
    this.room_add( items, list, 'Study' );

    list = this.chosen(choices,'5A') ? [ 'N', 'DeVermisMysteriis', 'PadlockedDoor' ] : [ 'SilverKey', 'Clue4', 'MarionsStage' ];
    this.room_add( items, list, 'Library' );

    list = [ 'Clue6', 'UnreflectingMirror' ];
    this.room_add( items, list, 'Chapel' );

    list = this.chosen(choices,'3A') ? [ 'N', 'BrassKnuckles', 'RunelockedDoor' ] : [ 'CrescentBlade', 'Clue2', 'ArchiveVault' ];
    this.room_add( items, list, 'Bathroom 2' );

    list = [ 'FaultyProjector', 'MissingReel' ];
    this.room_add( items, list, 'Nursery' );

    list = this.chosen(choices,'5A') ? [ 'Marionettes', 'Clue5' ] : [ 'N', 'SymbolOfTheElderLight' ];
    this.room_add( items, list, 'Gallery' );

    list = this.chosen(choices,'2A') ? [ 'TheLostReel', 'Clue1', 'SuitOfArmor' ] : [ 'N', 'SatchelOfTheVoid', 'Puzzlebox' ];
    this.room_add( items, list, 'Coat Room' );

    list = this.chosen(choices,'4A') ? [ 'VaultKey', 'Clue3', 'LockedDoor' ] : [ 'N', 'TchoTchoTalisman', 'JammedDoor' ];
    this.room_add( items, list, 'Dining Room' );

    var unused_cards = this.get_unused_cards(all_cards['e'], items);
    unused_cards.push('N2');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
},


// Scenario 8: The Yellow Sign

8: function (choices) {
    var items = [];
    var list;

    var keeper_inv = {
        cards: [ 'TheCourtOfCarcosa', 'CalledByTheKing', 'CommandMinion', 'EvilPresence', 'OpenAuditions' ],
        threat: 4,
        mythos: 1,
        trauma: 0
    };
    var mythos_cards = [ 'downstairs', 'door', 'bat' ];
    var note_txt = 'Place each remaining exploration card in empty room on your choice.';

    var all_cards = {
        e: [ 'BrassKnuckles', 'CapsulesOfTranquility', 'DeckOfFates', 'DreamDagger', 'JuliansAmulet',
             'KeyToCarcosa', 'LockedTome', 'Matches', 'MrsWylde', 'PropheticMirror', 'SmithWesson',
             'TheNecronomicon', 'TheScript', 'TheUnderstudy',
             'TonicOfInspiration', 'Whiskey', 'YellowMask', 'YellowSign' ],
        o: [ 'Act1Scene7', 'AnchoredKey', 'ArcaneCandles', 'DressRehearsal', 'ShortCircuit' ],
        l: [ 'BrokenPadlock', 'KingsChambers', 'PadlockedDoor', 'RehearsalRoom' ],
        x: [ 'Costume' ]
    };

    list = this.chosen(choices,'3A') ? [ 'JuliansAmulet', 'Whiskey', 'Act1Scene7' ] : [ 'KeyToCarcosa', 'Clue2', 'Act1Scene7' ];
    this.room_add( items, list, 'Entryway' );

    list = this.chosen(choices,'4A') ? [ 'TheUnderstudy', 'Clue3', 'AnchoredKey' ] : [ 'N', 'Matches', 'ShortCircuit' ];
    this.room_add( items, list, 'FrontPorch' );

    list = this.chosen(choices,'4A') ? [ 'N', 'Matches', 'ShortCircuit' ] : [ 'TheUnderstudy', 'Clue3', 'AnchoredKey' ];
    this.room_add( items, list, 'Corner Hallway 1' );

    list = this.chosen(choices,'2A') ? [ 'TheScript', 'Clue1', 'KingsChambers' ] : [ 'N2', 'BrokenPadlock' ];
    this.room_add( items, list, 'Bathroom 1' );

    list = this.chosen(choices,'4A') ? [ 'LockedTome', 'Clue4' ] : [ 'N', 'MrsWylde' ];
    this.room_add( items, list, 'Coat Room' );

    list = this.chosen(choices,'4A') ? [ 'N', 'MrsWylde' ] : [ 'LockedTome', 'Clue4' ];
    this.room_add( items, list, 'Dining Room' );

    list = this.chosen(choices,'3A') ? [ 'DeckOfFates', 'PropheticMirror', 'PadlockedDoor' ] : [ 'TonicOfInspiration', 'PropheticMirror', 'PadlockedDoor' ];
    this.room_add( items, list, 'Secret Passage' );

    list = this.chosen(choices,'3A') ? [ 'KeyToCarcosa', 'Clue2', 'DressRehearsal', 'RehearsalRoom' ] : [ 'JuliansAmulet', 'Whiskey', 'DressRehearsal', 'RehearsalRoom' ];
    this.room_add( items, list, 'Chapel' );

    list = [ 'TheNecronomicon', 'YellowMask', 'ArcaneCandles' ];
    this.room_add( items, list, 'Basement Storage' );

    list = this.chosen(choices,'2A') ? [ 'N2', 'BrokenPadlock' ] : [ 'TheScript', 'Clue1', 'KingsChambers' ];
    this.room_add( items, list, 'Basement Stairs' );

    var unused_cards = this.get_unused_cards(all_cards['e'], items);
    // unused_cards.push('N2');

    return { cards: all_cards, cards_rnd: unused_cards, map: items, keeper: keeper_inv, m_cards: mythos_cards, note: note_txt };
}


};

// ------
}(this));
