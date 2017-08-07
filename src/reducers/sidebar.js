import {
    SIDEBAR_ACTIVATE,
    SIDEBAR_ENABLE,
    SIDEBAR_RESPONSIVE
} from '../actions';

const initialState = {
    active: true,
    enabled: true,
    responsive: 'multiple',
    items: [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/products', label: 'Products' },
        { path: '/subscriptions', label: 'Subscriptions' },
        { path: '/users', label: 'Users' }
    ]
};

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case SIDEBAR_ACTIVATE:
            return { ...state, active: action.payload, activateOnMultiple: undefined };
        case SIDEBAR_ENABLE:
            return { ...state, enabled: action.payload };
        default:
            return state;
    }
}