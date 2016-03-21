output = function() {
  fs.writeFile($.file, $.in, {
    encoding: $.encoding,
    mode: $.mode,
    flag: $.flag
  }, function(err) {
    if (err) {
      cb({error: err})
    } else {
      cb({out: this.data})
    }
    done()
  }.bind({data: $.in}))
}
