on.input.file = function() {
  fs.readFile($.file, {
    flag: $.flag,
    encoding: $.encoding
  }, function(err, contents) {
    if (err) {
      output({error: $.create(err)})
    } else {
      output({out: $.create(contents)})
    }
  })
}
