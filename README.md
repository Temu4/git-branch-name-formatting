# Git branch naming util

The utils takes Jira ticket name (1 argument) and returns formatted branch name.

Under _formatted branch name_ means that:

- non-word character are replaced with '-'
- string normalized to the lower case

## Prerequirements

Installed `Node.js` and `yarn` module.

## Example of usage

```javascript
node ./index.js 'Test Jira ticket: update logo'
```
