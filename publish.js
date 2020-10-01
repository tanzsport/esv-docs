var ghpages = require('gh-pages');
var packageJson = require('./package.json');

ghpages.publish('build/site', {
  repo: packageJson.repository.url,
  dotfiles: true,
}, (err) => {
  if (err) {
    console.error(err);
    process.exit(1)
  } else {
    process.exit(0)
  }
});
