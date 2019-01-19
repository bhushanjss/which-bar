import { CHANGE_COUNT_MAN, CHANGE_COUNT_WOMEN, CONTAINER_WIDTH_CHANGE } from '../actions/types';

const initialState = {
	man: {text: 'Man', value: 500, color: 'gold' }, 
	women: {text: 'Woman', value: 300, color: 'pink' },
	containerWidth: 500,
	containerMargin: {top: 20, right: 20, bottom: 30, left: 40} 	
};



export default (state = initialState, action) => {
	switch(action.type) {
		case CHANGE_COUNT_MAN:
			return { ...state, man: {...state.man, value: action.payload }};
		case CHANGE_COUNT_WOMEN:
			return { ...state, women: { ...state.women, value: action.payload }};
		case CONTAINER_WIDTH_CHANGE:
			return { ...state, containerWidth: action.payload };	
		default:
			return state;
	}

}