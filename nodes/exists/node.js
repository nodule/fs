on.input.path = function() {
  fs.exists(data, function(yes) {
    if(yes) {
      output( { yes: data } );
    } else {
      output( { no: data } );
    }
    done();
  });
};
