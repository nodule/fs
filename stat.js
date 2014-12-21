module.exports = {
  name: "stat",
  ns: "fs",
  description: "fs stat",
  phrases: {
    active: "Reading stats for {{input.path}}"
  },
  ports: {
    input: {
      path: {
        title: "Path",
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
  fn: function stat(input, output, state, done, cb, on, fs) {
    var r = function() {
      fs.stat(input.path, function statCallback(error, stats) {
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