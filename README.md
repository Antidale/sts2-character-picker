# STS2 Character Picker
This is a small project to give you a little more configuration than the `Random` option when choosing a character for Slay the Spire 2. Assign each character a value

You can use the deployed application at https://sts2.tellah.life

## Known Issues
* Firefox doesn't prevent alpha characters in a numeric field, and I am currently not preventing it either
* The experience isn't great on mobile/small screen siezes
  * It's too hard to see all the info at once
  * mobile firefox doesn't show the correct background color (at least on dark mode)
  * the Settings menu runs into the header
  * the settings icon doesn't display on iOS (unknown if it displays on Android)


#### Project Setup

```sh
npm install
```

##### Compile and Hot-Reload for Development

```sh
npm run dev
```

##### Type-Check, Compile and Minify for Production

```sh
npm run build
```

##### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
