module.exports = {
  name: "rename",
  ns: "fs",
  description: "fs rename",
  phrases: {
    active: "Renaming {{input.oldPath}} to {{input.newPath}}"
  },
  ports: {
    input: {
      oldPath: {
        type: "string"
      },
      newPath: {
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
  fn: function rename(input, output, state, done, cb, on, fs) {
    var r = function() {
      fs.rename(input.oldPath, input.newPath, function renameCallback(exception) {
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