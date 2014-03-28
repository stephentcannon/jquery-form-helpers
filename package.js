Package.describe({
  summary: "jquery form helpers"
});

Package.on_use(function (api, where) {
  api.add_files([
    'jquery.resetform.js', 
    'jquery.toJSON.js', 
    ], 
  'client');
});