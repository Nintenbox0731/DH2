export const Moves: {[k: string]: ModdedMoveData} = {
	coalsting: {
		num: 827,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Coal Sting",
		shortDesc: "30% chance to burn the target. Thaws target.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Tough",
	},
    inkgulp: {
		num: 828,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Ink Gulp",
		shortDesc: "User recovers 50% of the damage dealt. Raises user's Special Attack by 1 if this KOes the target.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (!target || target.fainted || target.hp <= 0) this.boost({spa: 1}, pokemon, pokemon, move);
		},
      drain: [3, 4],
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	bouldertoss: {
		num: 829,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Boulder Toss",
		shortDesc: "No additional effect.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	icescream: {
		num: 830,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Ice Scream",
        shortDesc: "Lowers the user's Sp. Atk by 2.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	baitsplash: {
		num: 831,
		accuracy: 75,
		basePower: 100,
		category: "Special",
		name: "Bait Splash",
        shortDesc: "Traps and damages the target for 4-5 turns.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
   hamsterslam: {
        accuracy: 100,
        basePower: 45,
        category: "Physical",
        desc: "Hits twice. First Fighting then Electric.",
        shortDesc: "Hits 2 times in one turn.",
        name: "Hamster Slam",
        pp: 15,
        priority: 0,
        flags: {contact: 1, protect: 1, mirror: 1},
        multihit: 2,
        onTryHit(move) {
            if (move.hit === 1) {
                move.type === 'Fighting';
            }
           if (move.hit === 2) {
                move.type === 'Electric';
            }
        },
        secondary: false,
        target: "normal",
        type: move,
        zMovePower: 100,
        contestType: "Tough",
    },
};
