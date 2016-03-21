output = function(cb) {

  var opts = {
    flag: $.flag,
    encoding: $.encoding
  };

  if($.start) opts.start = $.start;
  if($.end) opts.end = $.end;

  var stream = fs.createReadStream($.file, opts);
  cb({ stream: stream});

  stream.on('error', function(err) {
    cb({ error: $.create(err)});
  });

  stream.on('open', function(fd) {
    cb({ fd: $.create(fd)});
  });

};
