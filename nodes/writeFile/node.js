on.input.in = function() {
  fs.writeFile(input.file, data, {
    encoding: input.encoding,
    mode: input.mode,
    flag: input.flag
  }, function(err) {
    if (err) {
      output({error: err})
    } else {
      output({out: data})
    }
  })
}
