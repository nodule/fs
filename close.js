module.exports = {
  name: "close",
  ns: "fs",
  description: "fs close",
  phrases: {
    active: "Closing file handle"
  },
  ports: {
    input: {
      fd: {
        type: "object"
      }
    },
    output: {
      exception: {
        title: "Exception",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function close(input, output, state, done, cb, on, fs) {
    var r = function() {
      fs.close(input.fd, function closeCallback(exception) {
        cb({
          exception: exception
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}