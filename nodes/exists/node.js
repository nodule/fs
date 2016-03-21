on.input.path = function() {
  fs.exists($.path, function(yes) {
    if(yes) {
      output( { yes: $.get('path') } );
    } else {
      output( { no: $.get('path') } );
    }
  });
};
