import {
    SIDEBAR_ACTIVATE,
    SIDEBAR_ENABLE,
    SIDEBAR_RESPONSIVE
} from '../actions';

export const sidebarActivate = active => ({
    type: SIDEBAR_ACTIVATE,
    payload: active
});

export const sidebarEnable = enabled => ({
    type: SIDEBAR_ENABLE,
    payload: enabled
});
export const sidebarResponsive = responsive => ({
    type: SIDEBAR_RESPONSIVE,
    payload: responsive
});