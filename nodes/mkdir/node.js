on.input.path = function() {
  fs.mkdir($.path, $.mode, function(err) {
    if(err) {
      output({error: err});
    } else {
      output({path: $.path});
    }
  });
};
