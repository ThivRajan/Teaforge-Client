/* eslint-disable indent */
import { State } from './state';
import { RoomInfo } from '../types';

export type Action =
	{
		type: 'SET_SOCKET';
		payload: SocketIOClient.Socket;
	}
	| {
		type: 'SET_NAME';
		payload: string;
	}
	| {
		type: 'SET_KEY';
		payload: string;
	}
	| {
		type: 'SET_GAME';
		payload: RoomInfo;
	}
	| {
		type: 'SET_MESSAGE';
		payload: string;
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

export const setName = (payload: string): Action => {
	return {
		type: 'SET_NAME',
		payload
	};
};

export const setGame = (payload: RoomInfo): Action => {
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

export const setMessage = (payload: string): Action => {
	return {
		type: 'SET_MESSAGE',
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
		case 'SET_NAME':
			return {
				...state,
				name: action.payload
			};
		case 'SET_GAME': {
			const name = action.payload.name;
			const reqPlayers = action.payload.reqPlayers;
			const host = action.payload.host;
			const players = action.payload.players;

			return {
				...state,
				game: { name, reqPlayers, host, players }
			};
		}
		case 'SET_KEY':
			return {
				...state,
				key: action.payload
			};
		case 'SET_MESSAGE':
			return {
				...state,
				message: action.payload
			};
		case 'CLEAR':
			return {
				socket: null,
				name: '',
				game: null,
				key: '',
				message: ''
			};
		default:
			return state;
	}
};
