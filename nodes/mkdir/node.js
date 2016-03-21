on.input.path = function() {
  fs.mkdir($.path, $.mode, function(err) {
    if(err) {
      output({error: $.create(err)});
    } else {
      output({path: $.get('path')});
    }
  });
};
