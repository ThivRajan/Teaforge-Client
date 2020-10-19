export interface Votes {
	approve: string[];
	reject: string[];
}

export enum Role {
	Spy = 'spy',
	Spies = 'spies',
	Resistance = 'resistance'
}

export enum MissionResult {
	Pass = 'passed',
	Fail = 'failed'
}

export interface Mission {
	numPlayers: number;
	result: MissionResult | '';
}