import { PREVIOUS_DATE, NEXT_DATE } from './index';

export function previousDate() {
    return {
        type: PREVIOUS_DATE
    }
}

export function nextDate() {
    return {
        type: NEXT_DATE
    }
}