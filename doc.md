```bash

npm init -y

# you can run npm install -- from root -- and it installs packages for each workspace

# install into a workspace from root
npm install hono --workspace=apps/api

# run this from root
# node_modules - must be created from root, for npm to recognize workspaces
npm install

# check if npm sees my workspaces
npm ls --workspaces --depth=0

# lets run all workspaces concurrently
npm install -D concurrently

```
