```bash

## monorepo setup (npm) ==================

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

# install monorepo package in a workspace/app
npm install @monorepo/shared --workspace=apps/api

# show all workspaces and their relationships
npm ls --workspaces

```
