module.exports = {
  name: "utimes",
  ns: "fs",
  description: "fs utimes",
  phrases: {
    active: "Getting utimes for {{input.path}}"
  },
  ports: {
    input: {
      path: {
        type: "string"
      },
      atime: {
        type: "string"
      },
      mtime: {
        type: "string"
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
  fn: function utimes(input, output, state, done, cb, on, fs) {
    var r = function() {
      fs.utimes(input.path, input.atime, input.mtime, function utimesCallback(exception) {
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