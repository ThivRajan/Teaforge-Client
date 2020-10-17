export enum Game {
	Resistance = 'resistance'
}

export type RoomInfo = {
	name: Game;
	reqPlayers: number;
	host: string;
	players: string[];
}

/* Resistance Types */
export interface Votes {
	approve: string[];
	reject: string[];
}