export enum Game {
	Resistance = 'resistance'
}

export type RoomInfo = {
	name: Game;
	reqPlayers: number;
	host: string;
	players: string[];
}

/* Style Types */
export enum Color {
	Red = 'red',
	Blue = 'blue',
	BG = 'bg',
	FG = 'fg',
	Font = 'font'
}

type ThemeProps = { darkMode: boolean };

export type GlobalStyleProps = { theme: ThemeProps };

export interface ButtonProps {
	theme: ThemeProps;
	color?: Color;
}