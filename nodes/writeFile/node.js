output = function() {
  fs.writeFile($.file, $.in, {
    encoding: $.encoding,
    mode: $.mode,
    flag: $.flag
  }, function(err) {
    if (err) {
      cb({error: $.create(err)})
    } else {
      cb({out: $.write('in', this.data)})
    }
    done()
  }.bind({data: $.in}))
}
