import action from './action';
import { CONTAINER_WIDTH_CHANGE } from './types';


export const handleContainerWidthChange = (value) => (action(CONTAINER_WIDTH_CHANGE ,value));