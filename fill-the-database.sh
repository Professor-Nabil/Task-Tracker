#! /bin/bash

# NOTE: Run this file from "Project Root" Example `./tests/bash/fill-the-database.sh`

rm -f data/tasks.json

node ./src/app.js add "Learn JavaScript"
node ./src/app.js add "Learn C++"
node ./src/app.js add "Learn Python"
node ./src/app.js add "Learn GitLab"
node ./src/app.js add "Learn TypeScript"
node ./src/app.js add "Mession A"
node ./src/app.js add "Learn GtiHub Acrion"
node ./src/app.js add "Mession C"
node ./src/app.js add "Mession D"
node ./src/app.js add "Mession D"

clear

node ./src/app.js mark 1 done
node ./src/app.js mark 5 done
node ./src/app.js mark 4 in-progress
node ./src/app.js mark 7 in-progress

clear

node ./src/app.js list
node ./src/app.js list done
node ./src/app.js list not-done
node ./src/app.js list in-progress
