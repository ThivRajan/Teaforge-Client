export enum Game {
	Resistance = 'resistance'
}

export type RoomInfo = {
	name: Game;
	reqPlayers: number;
	host: string;
	players: string[];
}

