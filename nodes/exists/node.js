on.input.path = function() {
  fs.exists(input.path, function(yes) {
    if(yes) {
      output( { yes: input.path } );
    } else {
      output( { no: input.path } );
    }
  });
};
