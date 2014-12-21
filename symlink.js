module.exports = {
  name: "symlink",
  ns: "fs",
  description: "fs symlink",
  phrases: {
    active: "Creating symbolic link from {{input.srcpath}} to {{input.dstpath}}"
  },
  ports: {
    input: {
      srcpath: {
        title: "Source path",
        type: "string"
      },
      dstpath: {
        title: "Destination path",
        type: "string"
      },
      type: {
        "enum": ["file",
          "dir",
          "junction"
        ],
        "default": "file"
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
  fn: function symlink(input, output, state, done, cb, on, fs) {
    var r = function() {
      fs.symlink(input.srcpath, input.dstpath, input.type, function symlinkCallback(exception) {
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