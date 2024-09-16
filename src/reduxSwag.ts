import { store, setKey, persistor } from './store/store';

/**
 * Utility functions for interacting with the Redux store.
 */
const reduxSwag = {
    /**
     * Retrieves a value from the Redux store.
     *
     * @param key - The key of the value to retrieve.
     * @returns The value associated with the given key, or undefined if the key does not exist.
     */
    get: (key: string): any => {
        const state = store.getState();
        return state[key];
    },

    /**
     * Sets a value in the Redux store.
     *
     * @param key - The key of the value to set.
     * @param value - The value to be set.
     * @param persist - Optional boolean to indicate if the value should be persisted.
     */
    set: (key: string, value: any, persist: boolean = false): void => {
        store.dispatch(setKey({ key, value }));
        if (persist) {
            // Optionally trigger a persistence save
            persistor.flush().catch((error) => {
                console.error('Failed to persist store:', error);
            });
        }
    },
};

export { persistor };

// reduxSwag utility for use in other parts of the application if required
export default reduxSwag;
