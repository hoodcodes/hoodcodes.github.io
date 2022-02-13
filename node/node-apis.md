# Creating an API using Node

Here are some notes I have created while practicing API creation in Node.

1. create folder and cd into it
2. `npm init` - just hit Enter leaving all answers blank for now - and finally type in `yes` and Enter
3. add index.js file
4. add README.md file
5. add .gitignore file and add proper content for Node apps
6. add .vscode folder (assuming you are using VS Code as the editor, otherwise nevermind!)
   1. add settings.json file inside and add your fav settings
7. install packages which will be dependencies in your project
   1. head ove rto npmjs.com - where you can look up your pkgs and use their install guidance
   2. NOTE: if you ever need to reinstall your dependencies - run `npm i` after deleting your packages folder
   3. Express: `npm i express`
   4. Cheerio: `npm i cheerio`
   5. Axios: `npm i axios`
8. Write a script in the package.json
   1. first - remove the existing `test` script.
   2. Create new script for `start` (e.g. when we type: `npm run start` this script will be run)
      1. `”start”: “nodemon index.js”`. Nodemon listens to any changes made to the index.js file
9. Head over to your index.js file:
   1. add `const axios = require('axios’);`
   2. add `const express = require(‘express’);`
   3. add `const cheerio = require(‘cheerio’);`
10. Start Coding!
