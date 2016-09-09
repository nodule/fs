on.input.in = function() {
  mime_types.lookup($.in, function(err) {
    if(err) {
      output({error: $.create(err)});
    } else {
      output({path: $.get('path')});
    }
  });
};
