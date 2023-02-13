/**
 * The utils takes ticket name from  (param 1) and
 * return formatted branch name.
 */

require('dotenv').config();
const {TICKET_TYPES} = require('./constants');

const {BRANCH_NAME_PREFIX} = process.env;

const [jiraTicketName, ticketType = TICKET_TYPES.FEATURE] = process.argv.slice(2);

const formatBranchName = (ticketName = '') => {
  if (!ticketName) {
    throw new Error("Jira ticket name couldn't be empty");
  }

  const normalizedTicketName = ticketName.replaceAll(/\W/g, '-').replace(/-{2,}/g, '-');

  const branchPrefix = BRANCH_NAME_PREFIX ? BRANCH_NAME_PREFIX + '-' : '';

  return `${branchPrefix}${ticketType}-${normalizedTicketName}`.trim().toLowerCase();
};

try {
  console.log(formatBranchName(jiraTicketName));
  process.exit(0);
} catch (e) {
  console.log(e);
  process.exit(1);
}
