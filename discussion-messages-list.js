const { request } = require('./client');

const discussionId = process.argv[2];

if (!discussionId) {
  console.error('Usage: node discussion-messages-list.js <discussionId>');
  process.exit(1);
}

request('GET', `discussion/${discussionId}/messages`)
  .then(messages => {
    console.log(`Messages for discussion ${discussionId}:`);
    if (!messages || messages.length === 0) {
      console.log('  (none)');
    } else {
      messages.forEach(m => {
        console.log(`- [${m.id}] ${m.authorName}: ${m.body}`);
      });
    }
  })
  .catch(err => console.error(err.message));
