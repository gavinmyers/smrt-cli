const { request } = require('./client');

const discussionId = process.argv[2];
const body = process.argv[3];

if (!discussionId || !body) {
  console.error('Usage: node discussion-message-create.js <discussionId> <body>');
  process.exit(1);
}

request('POST', `discussion/${discussionId}/message`, { body })
  .then(m => console.log(`Created message: [${m.id}] ${m.authorName}: ${m.body}`))
  .catch(err => console.error(err.message));
