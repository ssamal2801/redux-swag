import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistConfig } from 'redux-persist/es/types';
import { useDispatch, useSelector } from 'react-redux';

interface State {
    [key: string]: any;
}

// Universal slice
const appSlice = createSlice({
    name: 'app',
    initialState: {} as State,
    reducers: {
        // Action to set a new value to a key
        setKey(state, action: PayloadAction<{ key: string; value: any }>) {
            state[action.payload.key] = action.payload.value;
        },
    },
});

// Redux Persist config
const persistConfig: PersistConfig<State> = {
    key: 'root',
    storage,
};

// Wrap the slice reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, appSlice.reducer);

// Create the Redux store with the persisted reducer
export const store = configureStore({
    reducer: persistedReducer,
});

// Custom persistor to handle persistence
export const persistor = persistStore(store);

export const { setKey } = appSlice.actions;

// Custom hooks for accessing dispatch and state
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector = <T>(selector: (state: State) => T) =>
    useSelector(selector);
