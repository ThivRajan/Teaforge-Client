/* eslint-disable indent */
import { State } from './state';
import { Games } from '../types';

const getPlayerCount = (game: Games): number => {
	switch (game) {
		case (Games.Resistance):
			return 5;
		default:
			return 0;
	}
};

export type Action =
	{
		type: 'SET_SOCKET';
		payload: SocketIOClient.Socket;
	}
	| {
		type: 'SET_KEY';
		payload: string;
	}
	| {
		type: 'SET_GAME';
		payload: Games;
	}
	| {
		type: 'CLEAR';
	};

export const setSocket = (payload: SocketIOClient.Socket): Action => {
	return {
		type: 'SET_SOCKET',
		payload
	};
};

export const setGame = (payload: Games): Action => {
	return {
		type: 'SET_GAME',
		payload
	};
};

export const setKey = (payload: string): Action => {
	return {
		type: 'SET_KEY',
		payload
	};
};

export const clearState = (): Action => {
	return { type: 'CLEAR' };
};

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'SET_SOCKET':
			return {
				...state,
				socket: action.payload
			};
		case 'SET_GAME': {
			const title = action.payload;
			return {
				...state,
				game: { title, playerCount: getPlayerCount(title) }
			};
		}
		case 'SET_KEY':
			return {
				...state,
				key: action.payload
			};
		case 'CLEAR':
			return {
				socket: null,
				game: null,
				key: null
			};
		default:
			return state;
	}
};
