# github_issue_tracker
Discord bot that notifies you issues on your github repository.

## Setup

1. Clone this repository.
```bash
$ git clone https://github.com/CommunityOfCoders/DiscordBot.git
```
2. Change your working directory.
```bash
$ cd DiscordBot
```
3. Setup environment variables.
```bash
$ cp .env.example .env
```
4. To generate your tokens, see [here](./tokens.md).
5. Install the packages.
```bash
$ npm i
```
6. Start the development server.
```bash
$ npm run dev
```

To deploy on Heroku, follow the steps below.
1. If you haven't already, install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) and login.
```bash
$ npm i -g heroku
$ heroku login
```

2. From your working directory, create a new Heroku app.
```bash
$ heroku create
```
