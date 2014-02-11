output = function(cb) {

  var opts = {
    flag: input.flag,
    encoding: input.encoding
  };

  if(input.start) opts.start = input.start;
  if(input.end) opts.end = input.end;

  var stream = fs.createReadStream(input.file, opts);
  cb({ stream: stream});

  stream.on('error', function(err) {
    cb({ error: err});
  });

  stream.on('open', function(fd) {
    cb({ fd: fd});
  });

};
