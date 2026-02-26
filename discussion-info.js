const { request } = require('./client');

const id = process.argv[2];

if (!id) {
  console.error('Usage: node discussion-info.js <discussionId>');
  process.exit(1);
}

request('GET', `discussion/${id}`)
  .then(d => {
    console.log(`Discussion: ${d.name}`);
    console.log(`ID: ${d.id}`);
    console.log(`Project ID: ${d.projectId}`);
    console.log(`Created: ${d.createdAt}`);
    console.log(`Updated: ${d.updatedAt}`);
  })
  .catch(err => console.error(err.message));
