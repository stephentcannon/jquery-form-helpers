Package.describe({
  summary: "jquery form helpers",
  // Version number.
  version: "0.0.7",
  // Optional.  Default is package directory name.
  name: "steeve:jquery-form-helpers",
  // Optional github URL to your source repository.
  git: "https://github.com/stephentcannon/jquery-form-helpers.git",
});

Package.onUse(function (api, where) {
  api.addFiles([
    'jquery.resetform.js',
    'jquery.toJSON.js',
    ],
  'client');
});