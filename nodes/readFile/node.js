on.input.file = function() {
  fs.readFile($.file, {
    flag: $.flag,
    encoding: $.encoding
  }, function(err, $.file) {
    if (err) {
      output({error: err})
    } else {
      output({out: $.file})
    }
  })
}
