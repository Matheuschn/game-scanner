<p align="center">
  <img src="https://github.com/Matheuschn/game-scanner/blob/main/ios/GameScanner/Images.xcassets/AppIcon.appiconset/180.png?raw=true" alt="Game Scanner icon" class="center"> 
</p>
<h1 align="center">
  Game Scanner
</h1>
Game Scanner is a way to run simple games directly from a QR Code, without need for an internet connection.

# Usage
Try installing the app, going into the QR Code screen on the bottom menu and scanning the following QR Code:
<p align="center">
  <img src="https://github.com/Matheuschn/game-scanner/blob/main/src/game/qrcode.png?raw=true" alt="QRCode for a Snake game" class="center"> 
</p>

# How it works?
The app expects to read a QR Code containing simple JS code, which will then be executed. The app is built using React Native and Typescript.

# Install
To build the app, follow the steps:
  1. Run `yarn install`
  2. Run `yarn start`
  3. In another terminal, run `yarn run android`

# Acknowledgements
* [Snake As Short As I Can](https://github.com/guckstift/shortest-js-snake), the game used to test the first QR Code.
