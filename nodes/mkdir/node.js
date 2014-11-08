on.input.path = function() {

  fs.mkdir(data, input.mode, function(err) {
    if(err) {
      output({error: err});
    } else {
      output({path: data});
    }
  });

};
