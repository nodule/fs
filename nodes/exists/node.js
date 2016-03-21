on.input.path = function() {
  fs.exists($.path, function(yes) {
    if(yes) {
      output( { yes: $.path } );
    } else {
      output( { no: $.path } );
    }
  });
};
