const { request } = require('./client');

request('GET', 'discussions')
  .then(discussions => {
    console.log('Discussions:');
    if (!discussions || discussions.length === 0) {
      console.log('  (none)');
    } else {
      discussions.forEach(d => {
        console.log(`- [${d.id}] ${d.name}`);
      });
    }
  })
  .catch(err => console.error(err.message));
