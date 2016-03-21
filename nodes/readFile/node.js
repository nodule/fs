on.input.file = function() {
  fs.readFile(input.file, {
    flag: input.flag,
    encoding: input.encoding
  }, function(err, input.file) {
    if (err) {
      output({error: err})
    } else {
      output({out: input.file})
    }
  })
}
