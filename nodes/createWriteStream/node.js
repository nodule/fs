output = function(cb) {

  var opts = {
    flag: $.flag,
    encoding: $.encoding
  };

  var stream = fs.createWriteStream($.file, opts);
  cb({ stream: stream});

  stream.on('error', function(err) {
    cb({ error: err});
  });

  stream.on('open', function(fd) {
    cb({ fd: fd});
  });

};
