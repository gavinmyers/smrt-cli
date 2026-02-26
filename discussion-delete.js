const { request } = require('./client');

const id = process.argv[2];

if (!id) {
  console.error('Usage: node discussion-delete.js <id>');
  process.exit(1);
}

request('DELETE', `discussion/${id}`)
  .then(() => console.log(`Deleted discussion: ${id}`))
  .catch(err => console.error(err.message));
