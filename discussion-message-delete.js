const { request } = require('./client');

const discussionId = process.argv[2];
const id = process.argv[3];

if (!discussionId || !id) {
  console.error('Usage: node discussion-message-delete.js <discussionId> <id>');
  process.exit(1);
}

request('DELETE', `discussion/${discussionId}/message/${id}`)
  .then(() => console.log(`Deleted message: ${id} (discussion ${discussionId})`))
  .catch(err => console.error(err.message));
