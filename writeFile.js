module.exports = {
  name: "writeFile",
  ns: "fs",
  description: "fs writeFile",
  phrases: {
    active: "Writing file {{input.file}}"
  },
  async: true,
  ports: {
    input: {
      file: {
        type: "string"
      },
      "in": {
        type: "string",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, fs) {
          var r = function() {
            fs.writeFile(input.file, data, {
              encoding: input.encoding,
              mode: input.mode,
              flag: input.flag
            }, function(err) {
              if (err) {
                output({
                  error: err
                })
              } else {
                output({
                  out: data
                })
              }
            })
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
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
      },
      out: {
        title: "Output",
        type: "string"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  state: {}
}