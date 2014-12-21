module.exports = {
  name: "writeFile",
  ns: "fs",
  description: "fs writeFile",
  phrases: {
    active: "Writing file {{input.file}}"
  },
  ports: {
    input: {
      file: {
        type: "string"
      },
      "in": {
        type: "string"
      },
      encoding: {
        title: "Encoding",
        type: "string",
        "default": "utf-8"
      },
      mode: {
        title: "Mode",
        type: "number",
        "default": 438
      },
      flag: {
        title: "Flag",
        type: "string",
        "default": "w"
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
  fn: function writeFile(input, output, state, done, cb, on, fs) {
    var r = function() {
      fs.writeFile(input.file, input.in, {
        encoding: input.encoding,
        mode: input.mode,
        flag: input.flag
      }, function writeFileCallback(error) {
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