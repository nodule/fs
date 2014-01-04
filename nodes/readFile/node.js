output = function(cb) {

  fs.readFile(input.filename, input.options, function(err, data) {
    cb({
      err: err,
      data: data.toString()
    });
  });

};
