const { request } = require('./client');

const discussionId = process.argv[2];
const id = process.argv[3];
const body = process.argv[4];

if (!discussionId || !id || !body) {
  console.error('Usage: node discussion-message-update.js <discussionId> <id> <body|->');
  process.exit(1);
}

const payload = {};
if (body !== '-') payload.body = body;

if (Object.keys(payload).length === 0) {
  console.log('No changes requested.');
  process.exit(0);
}

request('PATCH', `discussion/${discussionId}/message/${id}`, payload)
  .then(m => console.log(`Updated message: [${m.id}] ${m.authorName}: ${m.body}`))
  .catch(err => console.error(err.message));
