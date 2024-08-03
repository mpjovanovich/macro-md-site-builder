---
title: AsyncStorage
course: SDEV264
---

- [AsyncStorage](#asyncstorage)
  - [Features](#features)
  - [Common Use Cases](#common-use-cases)
  - [Installing the package](#installing-the-package)
  - [Functions](#functions)
  - [Demo](#demo)

# AsyncStorage

Documentation: [AsyncStorage](https://reactnative.dev/docs/asyncstorage)

## Features

- Simple key-value storage
- Local to device (saved on the phone)
- Asynchronous
- Unencrypted
- Persistent (data remains after app is closed)

## Common Use Cases

- Session storage (login tokens, session data, etc.)
  - Login tokens
  - Session data
  - etc.
- User settings and preferences
  - Theme
  - Language
  - etc.
- Offline data storage
  - Persistent application data (data "saved" by user)
  - Local store for sync with server; user can work if offline

## Installing the package

```bash
npm install @react-native-async-storage/async-storage
```

## Functions

```jsx
import AsyncStorage from "@react-native-async-storage/async-storage";

// Save data
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

// Retrieve data
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      console.log(value);
    } else {
      console.log("Key not found");
    }
  } catch (e) {
    console.log(e);
  }
};

// Remove data
const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};

// Clear all data
const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};
```

## Demo

Do some basics using console.log to warm up...

[Snack: AsyncStorage](https://snack.expo.dev/@mpjovanovich/asyncstorage)
