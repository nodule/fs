output = function() {
  fs.writeFile(input.file, input.in, {
    encoding: input.encoding,
    mode: input.mode,
    flag: input.flag
  }, function(err) {
    if (err) {
      cb({error: err})
    } else {
      cb({out: this.data})
    }
    done()
  }.bind({data: input.in}))
}
