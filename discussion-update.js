const { request } = require('./client');

const id = process.argv[2];
const name = process.argv[3];

if (!id || !name) {
  console.error('Usage: node discussion-update.js <id> <name|->');
  process.exit(1);
}

const body = {};
if (name !== '-') body.name = name;

if (Object.keys(body).length === 0) {
  console.log('No changes requested.');
  process.exit(0);
}

request('PATCH', `discussion/${id}`, body)
  .then(d => console.log(`Updated discussion: [${d.id}] ${d.name}`))
  .catch(err => console.error(err.message));
