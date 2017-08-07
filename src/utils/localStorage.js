// Export function to load state from local storage and deserialize it
export const loadState = () => {
    try {

        // Fetch state from localStorage
        const serializedState = localStorage.getItem('state');

        // Return undefined if state is null else returned parsed state
        if( serializedState === null) {
            return undefined;
        } else {
            return JSON.parse(serializedState);
        }
    } catch (err) {
        return undefined;
    }
};

// Export function to serialized and save state to local storage
export const saveState = () => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch ( err ) {
        // TODO Do something with this error
    }
};