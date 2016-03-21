output = function(cb) {

  var opts = {
    flag: $.flag,
    encoding: $.encoding
  };

  var stream = fs.createWriteStream($.file, opts);
  cb({ stream: $.create(stream)});

  stream.on('error', function(err) {
    cb({ error: $.create(err)});
  });

  stream.on('open', function(fd) {
    cb({ fd: $.create(fd)});
  });

};
