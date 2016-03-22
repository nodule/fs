module.exports = {
  name: "appendFile",
  ns: "fs",
  title: "Append File",
  description: "fs appendFile",
  phrases: {
    active: "Appending data to {{input.file}}"
  },
  ports: {
    input: {
      file: {
        title: "Filename",
        type: "string",
        required: true
      },
      "in": {
        title: "Data",
        type: "string"
      },
      options: {
        title: "Options (TODO)",
        type: "object"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function appendFile(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.appendFile($.file, $.in, $.options, function appendFileCallback(error) {
        cb({
          error: error
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