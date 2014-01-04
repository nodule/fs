output = function(cb) {

  fs.readFile(input.filename, input.options, function(err, data) {
    cb({
      error: err,
      data: data.toString()
    });
  });

};
