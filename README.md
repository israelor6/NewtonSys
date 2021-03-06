# Newton



### Prerequisites

first you need to clone this repo
```
git clone https://github.com/israelor6/NewtonSys.git
```
* install nodeJs, npm (or yarn).

```
cd NewtonSys
```

### Installing

A step by step series of examples that tell you have to get a development env running


```
yarn (or npm install)
```

After the installation is complete run this command

```
yarn start
```
this command will run automatically those next commands:
* start:server - this script will start for you a dev server with auto reloading (includes react hot loading that refresh only the changes without to reload the all page).
* lint:watch - this script will check every change if there is a lint error.
* test:watch - this script will run the testing every change.

## Deployment

to deploy this project run the next command
```
yarn run build
```
this command will build the project to dist folder. 

## Built With

* [react](https://reactjs.org/) - A JavaScript library for building user interfaces
* [redux](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps
* [eslint](https://eslint.org/) - The pluggable linting utility for JavaScript and JSX
* [Webpack](https://webpack.js.org/) - Bundle your scripts

## Authors

* **Israel or** - [my github](https://github.com/israelor6)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

