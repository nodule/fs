module.exports = {
  name: "lstat",
  ns: "fs",
  description: "fs lstat",
  phrases: {
    active: "Getting stats for {{input.path}}"
  },
  ports: {
    input: {
      path: {
        type: "string"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      stats: {
        title: "Stats",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function lstat(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.lstat($.path, function lstatCallback(error, stats) {
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