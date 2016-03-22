module.exports = {
  name: "readdir",
  ns: "fs",
  description: "fs readdir",
  phrases: {
    active: "Listing files from directory {{input.path}}"
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
      files: {
        title: "Files",
        type: "array"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function readdir(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.readdir($.path, function readdirCallback(error, files) {
        cb({
          error: error,
          files: files
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