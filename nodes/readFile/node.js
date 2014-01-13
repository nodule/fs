output = function(cb) {

  fs.readFile(input.filename, {
      flag: input.flag,
      encoding: input.encoding
    }, function(err, data) {

    cb({
      error: err,
      data: data.toString()
    }, done);

  });

};
