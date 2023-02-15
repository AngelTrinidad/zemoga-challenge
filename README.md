# Code challenge digital house

## Demo

<img src="./src/assets/demo/ios.gif" width="240" alt="Demo ios"/>

## App dependencies

- React Native(0.71.2)
- Typescript
- React Navigation(6)

## Project Structure

Inside the `src` folder, you will find the following:

    .
    ├── api             # Axios config & api services
    ├── assets          # App assets (fonts, images)
    ├── components      # App components, with Atom Design
    ├── constants       # Global constants
    ├── contexts        # Definition of React contexts used in the project
    ├── helpers         # Util functions
    ├── hooks           # Custom hooks
    ├── interfaces      # Global interfaces
    ├── navigation      # Navigation setup
    ├── screens         # App screens

## How to start

First, you have to set up your environment, you can follow all the steps in the [official React Native doc](https://reactnative.dev/docs/environment-setup) to do so. Once your enviromnet is ready:

1. Install dependencies

   ```bash
   $ yarn
   ```

2. Instal pods

   ```bash
   $ cd ios && pod install
   ```

## How to run

### Android

```bash
$ yarn android
```

### iOS

```bash
$ yarn iOS
```
