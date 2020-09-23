<p align="center">
   <img src="./.github/logo.svg" alt="Proffy" width="280"/>
</p>

<p align="center">	
  <a href="https://www.linkedin.com/in/marco-echevestre/">
      <img alt="Marco Echevestre" src="https://img.shields.io/badge/-Marco Echevestre-8257E5?style=flat&logo=Linkedin&logoColor=white" />
  </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/marcoaminotto/proffy?color=774DD6">
  <img alt="Repository size" src="https://img.shields.io/github/languages/code-size/marcoaminotto/proffy?color=774DD6">
  <a href="https://github.com/marcoaminotto/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marcoaminotto/proffy?color=774DD6">
  </a> 
  <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/marcoaminotto/proffy/total?logo=GitHub&style=flat&color=774DD6">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-8257E5">
</p>

> :book: Proffy is an online platform that helps students to find private tutors to assist them in their studies. This project was based on the [NLW #2](https://nextlevelweek.com) course.

# 📐 Layout

## Web

<div align="center">
  <img src="./.github/landing.png" width="475px">
  <img src="./.github/teacher-list.png" width="475px">
</div>

## Mobile

<div align="center">
   <img src="./.github/landing-mobile.jpg" width="230px">
   <img src="./.github/teacher-list-mobile.jpg" width="230px">
   <img src="./.github/favourite-mobile.jpg" width="230px">
   <img src="./.github/register-mobile.jpg" width="230px">
</div>

# :rocket: Technologies
This project was made using the following technologies:

* [Typescript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/en/about/) / [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [React Native](https://reactnative.dev/) / [Expo](https://expo.io/)

# 🔧 How to run
```bash
# Clone Repository
$ git clone git@github.com:marcoaminotto/proffy.git
```

### 📦 Run server

```bash
# Go to server folder
$ cd Proffy/server

# Install dependencies
$ yarn install

# Execute migrations
$ yarn knex:migrate

# Run the aplication
$ yarn start
```
To check if it is working, click on http://localhost:3333/connections. If it returns a JSON ``` {"total":0} ``` then the server is working 🎉. 

### 💻 Run web application

```bash
# Go to web folder
$ cd Proffy/web

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```
Go to http://localhost:3000/ to see the pretty website.

### 📱 Run mobile application
To run the mobile project you need a smartphone with the app of [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) installed or a android/ios emulator on your computer.

```bash
# Go to mobile folder
$ cd Proffy/mobile

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```
Read the QRCode with the app of [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) or run on your emulator.

# :closed_book: License

Released in 2020 :closed_book: License

Made with ♥️ by [Marco Echevestre](https://github.com/marcoaminotto/).
This project is under the [MIT license](./LICENSE).


Give a ⭐️ if this project helped you!

