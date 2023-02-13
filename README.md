# Git branch naming util

The utils takes Jira ticket's name and the ticket's type (2 argument, optional. `feature` by default) and returns formatted branch name.

Under _formatted branch name_ means that:

- non-word character are replaced with '-'
- string normalized to the lower case

## Prerequirements

Installed `Node.js` and `yarn` module.

## Installation

```
yarn install
```

## Example of usage

```javascript
node ./index.js 'Test Jira ticket: update logo'

// returns -> 'feature-test-jira-ticket-update-logo'

node ./index.js 'Test Jira ticket: update logo' fix

// returns -> 'fix-test-jira-ticket-update-logo'
```

Also you can add specific branch prefix by creating and editing `.env` file inside the root folder. Example is [.env.example](https://github.com/Temu4/git-branch-name-formatting/blob/main/.env.expample).

By default is empty string.

E.g. add your initials.
