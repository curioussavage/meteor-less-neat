Package.describe({
  name: 'curioussavage:less-neat',
  version: '0.2.0',
  // Brief, one-line summary of the package.
  summary: 'joasakuras less implementation of the bourbon neat grid as a meteor package.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/curioussavage/meteor-less-neat',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'lib/less-neat/README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/stylesheets/less-neat.less', 'client');
  api.addFiles('lib/stylesheets/core/_functions.less', 'client');
  api.addFiles('lib/stylesheets/core/_utils.less', 'client');
  api.addFiles('lib/stylesheets/core/_variables.less', 'client');

  api.addFiles('lib/stylesheets/grid/_fill-parent.less', 'client');
  api.addFiles('lib/stylesheets/grid/_omega.less', 'client');
  api.addFiles('lib/stylesheets/grid/_outer-container.less', 'client');
  api.addFiles('lib/stylesheets/grid/_pad.less', 'client');
  api.addFiles('lib/stylesheets/grid/_row.less', 'client');
  api.addFiles('lib/stylesheets/grid/_shift.less', 'client');
  api.addFiles('lib/stylesheets/grid/_span-columns.less', 'client');

});

