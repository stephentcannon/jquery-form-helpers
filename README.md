jquery-form-helpers
====================
jquery form helpers that work well with meteor

usage
======

Convert form values to JASON doc in one line.

````
var params = $('#insert-form').toJSON();
MyCollection.insert(params);
````

Reset form

````
$("#insert-form").reset();
````

