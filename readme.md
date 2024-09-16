# redux-swag

`redux-swag` is a utility library designed to simplify state management with Redux Toolkit and Redux Persist. It abstracts away boilerplate code, allowing you to interact with your Redux store more intuitively using `.get` and `.set` methods.

## Features

- **Simplified State Management**: Easily get and set state values with a few lines of code.
- **Persistence Control**: Specify whether a value should be persisted or not.
- **Compatibility**: Works seamlessly with Redux Toolkit and Redux Persist.

## Installation

To install `redux-swag`, you can use npm or yarn:

```bash
npm install redux-swag
```
## Example Usage:
### Step 1: Wrap your app component with State Provider
```bash
// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux-swag'; // Import from redux-swag
import ExampleComponent from './ExampleComponent'; // Your application component

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ExampleComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
```
### Step 2: Use in component
```bash
import React, { useEffect, useState } from 'react';
import reduxSwag from 'redux-swag';

const ExampleComponent: React.FC = () => {

  useEffect(() => {
    // Retrieve a value from the store
    const storedValue = reduxSwag.get('myKey');
  }, []);

  const handleSetValue = () => {
    // Set a value in the store with persistence
    reduxSwag.set('myKey', 'New Value', true);
  };

  return (
    <div>
      <h1>Stored Value: {value}</h1>
      <button onClick={handleSetValue}>Set Value</button>
    </div>
  );
};

export default ExampleComponent;
```
