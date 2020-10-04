/* eslint-disable indent */
import { State } from './state';
import { Games } from '../types';

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
	};

export const setSocket = (payload: SocketIOClient.Socket): Action => {
	return {
		type: 'SET_SOCKET',
		payload
	};
};

export const setKey = (payload: string): Action => {
	return {
		type: 'SET_KEY',
		payload
	};
};

export const setGame = (payload: Games): Action => {
	return {
		type: 'SET_GAME',
		payload
	};
};

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'SET_SOCKET':
			return {
				...state,
				socket: action.payload
			};
		case 'SET_KEY':
			return {
				...state,
				key: action.payload
			};
		case 'SET_GAME':
			return {
				...state,
				game: action.payload
			};
		default:
			return state;
	}
};
