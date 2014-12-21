module.exports = {
  name: "readFile",
  ns: "fs",
  title: "fs readFile",
  description: "fs readFile",
  phrases: {
    active: "Reading file {{input.file}} ({{input.options.encoding}}, {{input.options.flag}})"
  },
  ports: {
    input: {
      file: {
        title: "Filename",
        type: "string",
        required: true
      },
      encoding: {
        title: "Encoding",
        type: "string",
        "default": "utf-8"
      },
      flag: {
        title: "Flag",
        type: "string",
        "default": "r"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      out: {
        title: "Out",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function readFile(input, output, state, done, cb, on, fs) {
    var r = function() {
      fs.readFile(input.file, {
        flag: input.flag,
        encoding: input.encoding
      }, function readFileCallback(error, out) {
        cb({
          error: error,
          out: out
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