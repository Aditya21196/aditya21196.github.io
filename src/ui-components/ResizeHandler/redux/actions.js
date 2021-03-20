import { createAction } from "../../../utils"
import * as ActionTypes from './actionTypes';

export const updateHeight = createAction(ActionTypes.HEIGHT_UPDATE);

export const updateWidth = createAction(ActionTypes.WIDTH_UPDATE);

export const updateViewMode = createAction(ActionTypes.VIEW_MODE_UPDATE);