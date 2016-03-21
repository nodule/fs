on.input.path = function() {
  fs.mkdir(input.path, input.mode, function(err) {
    if(err) {
      output({error: err});
    } else {
      output({path: input.path});
    }
  });
};
