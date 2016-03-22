module.exports = {
  name: "fsync",
  ns: "fs",
  description: "fs fsync",
  phrases: {
    active: "Calling sync for fd"
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
  fn: function fsync(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.fsync($.fd, function fsyncCallback(exception) {
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