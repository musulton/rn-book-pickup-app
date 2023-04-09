# Book Pickup App

Built using Expo it can run on iOS and Android. <br>
Design inspired from https://www.uplabs.com/posts/book-app-ui-exploration-839b1065-bcb8-4e72-8a81-f83a11fa28ed

## How to run the app

1. Install dependencies <br>
Use the package manager [npm](https://nodejs.org/en) or [yarn](https://yarnpkg.com/) to install dependencies.

```bash
npm install
# or
yarn install
```
2. Run on your devices <br>
    1. Install Expo Go on your device, you can download the app from AppStore and PlayStore
   2. Run the `yarn start` command, and use your device to scan the barcode that appears in the terminal
   3. Or you can also install it on an emulator or simulator, by following the guide in the terminal

## Required dependencies
1. `@react-navigation` -> for screen navigation
2. `@reduxjs/toolkit` & `react-redux` -> for save the history of borrowing books
3. `axios` -> for fetch API
4. `@react-native-community/datetimepicker` & `react-native-modal-datetime-picker` -> for select a pickup date
5. `jest` & `@testing-library/react-native` -> for unit testing

You can see this in more detail in the `package.json` file

## Screenshot
| IOS Platform                                    | Android Platform                                        |
|-------------------------------------------------|---------------------------------------------------------|
| ![book-list](./book-list.jpeg?raw=true)         | ![book-list](./android-book-list.jpeg?raw=true)         |
| ![book-detail](./book-details.jpeg?raw=true)    | ![book-detail](./android-book-details.jpeg?raw=true)    |
| ![date-pickup](./pickup.jpeg?raw=true)          | ![date-pickup](./android-pickup.jpeg?raw=true)          |
| ![borrowed-list](./borrowed-list.jpeg?raw=true) | ![borrowed-list](./android-borrowed-list.jpeg?raw=true) |

# Coverage
Unit tests are created to cover all components and functions.

![coverage](./coverage.png?raw=true)
