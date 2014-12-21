module.exports = {
  name: "realpath",
  ns: "fs",
  description: "fs realpath",
  phrases: {
    active: "Performing realpath for {{input.path}}"
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
      resolvedPath: {
        title: "Resolved Path",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function realpath(input, output, state, done, cb, on, fs) {
    var r = function() {
      fs.realpath(input.path, function realpathCallback(error, resolvedPath) {
        cb({
          error: error,
          resolvedPath: resolvedPath
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