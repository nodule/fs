module.exports = {
  name: "fstat",
  ns: "fs",
  description: "fs fstat",
  phrases: {
    active: "Reading file statistics for fd"
  },
  ports: {
    input: {
      fd: {
        type: "object"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      stats: {
        title: "stats",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function fstat(input, output, state, done, cb, on, fs) {
    var r = function() {
      fs.fstat(input.fd, function fstatCallback(error, stats) {
        cb({
          error: error,
          stats: stats
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