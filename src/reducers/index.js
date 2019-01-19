import { combineReducers } from 'redux';
import barStatus from './barStatsReducer';

const rootReducer = combineReducers({
	barStatus: barStatus
});

export default rootReducer;