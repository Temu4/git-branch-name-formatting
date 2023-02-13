/**
 * The utils takes ticket name from  (param 1) and
 * return formatted branch name.
 */

require('dotenv').config();

const {BRANCH_NAME_PREFIX} = process.env;

const jiraTicketName = process.argv.slice(2)[0];

const formatBranchName = (ticketName = '') => {
  if (!BRANCH_NAME_PREFIX) {
    throw new Error("Branch name prefix couldn't be empty");
  }

  if (!ticketName) {
    throw new Error("Jira ticket name couldn't be empty");
  }

  const normalizedTicketName = ticketName
    .replaceAll(/\W/g, '-')
    .replace(/-{2,}/g, '-')
    .toLowerCase();

  return `${BRANCH_NAME_PREFIX}-${normalizedTicketName}`;
};

try {
  console.log(formatBranchName(jiraTicketName));
  process.exit(0);
} catch (e) {
  console.log(e);
  process.exit(1);
}
