"build-css": "node-sass-chokidar src/assets/style.scss -o src/style",
    "watch-css": "npm run build-css && node-sass-chokidar src/assets/style.scss -o src/style —watch —recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "react-scripts build",
    "build": "npm-run-all build-css build-js",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"