output = function(cb) {

  var opts = {
    flag: input.flag,
    encoding: input.encoding
  };

  var stream = fs.createWriteStream(input.file, opts);
  cb({ stream: stream});

  stream.on('error', function(err) {
    cb({ error: err});
  });

  stream.on('open', function(fd) {
    cb({ fd: fd});
  });

};
