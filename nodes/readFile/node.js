/*
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
*/
var state = {
  flag: 'r',
  encoding: 'utf-8'
};

on.input.filename = function() {
  fs.readFile(data, {
    flag: state['flag'],
    encoding: state['encoding']
  }, output);
}

on.input.encoding = function() {
  state['encoding'] = data;
}

on.input.flag = function() {
  state['flag'] = data;
}
