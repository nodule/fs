on.input.file = function() {
  fs.readFile(data, {
    flag: input.flag,
    encoding: input.encoding
  }, function(err, data) {
    if (err) {
      output({error: err})
    } else {
      output({out: data})
    }
  })
}
