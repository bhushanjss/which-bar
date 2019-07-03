import action from './action';
import { CONTAINER_WIDTH_CHANGE, CHANGE_COUNT_MAN, CHANGE_COUNT_WOMEN } from './types';


export const handleContainerWidthChange = value => action(CONTAINER_WIDTH_CHANGE ,value);
export const updateCountMen = value => action(CHANGE_COUNT_MAN, value);
export const updateCountWomen = value => action(CHANGE_COUNT_WOMEN, value);
