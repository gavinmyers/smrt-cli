const { request } = require('./client');

const name = process.argv[2];

if (!name) {
  console.error('Usage: node discussion-create.js <name>');
  process.exit(1);
}

request('POST', 'discussion', { name })
  .then(d => console.log(`Created discussion: [${d.id}] ${d.name}`))
  .catch(err => console.error(err.message));
