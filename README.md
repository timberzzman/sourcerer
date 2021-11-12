# Sourcerer

## Overview

This project is about visual profile for software engineer

## Configuration

Before using the project, you should get a token from [Github](https://github.com/settings/tokens) with the next scopes:

```
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```

After that, you should put it in a .env in client directory with the key "VUE_APP_API_TOKEN".

## Installation

You can install all the project's packages using

```shell
// for all
npm run all:install

// for the client
npm run client:install

// for the server (currently useless)
npm run server:install
```

After that you can launch the client and the server using

```shell
// client
npm run client:dev

// server (currently useless)
npm run server:dev
```

### Made by Elouan MAILLY
