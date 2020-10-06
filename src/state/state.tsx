import React, { createContext, useContext, useReducer } from 'react';

import { Action } from './reducer';
import { Games } from '../types';

export type State = {
	socket: SocketIOClient.Socket | null;
	key: string | null;
	game: { title: Games; playerCount: number } | null;
}

const initialState: State = { socket: null, key: null, game: null };

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
	initialState,
	() => initialState
]);

type StateProviderProps = {
	reducer: React.Reducer<State, Action>;
	children: React.ReactElement;
};

export const StateProvider: React.FC<StateProviderProps> = ({
	reducer,
	children
}: StateProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StateContext.Provider value={[state, dispatch]}>
			{children}
		</StateContext.Provider>
	);
};
export const useStateValue = () => useContext(StateContext);
