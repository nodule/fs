module.exports = {
  name: "readFile",
  ns: "fs",
  title: "fs readFile",
  description: "fs readFile",
  phrases: {
    active: "Reading file {{input.file}} ({{input.options.encoding}}, {{input.options.flag}})"
  },
  async: true,
  ports: {
    input: {
      file: {
        title: "Filename",
        type: "string",
        required: true,
        async: true,
        fn: function __FILE__(data, source, state, input, $, output, fs) {
          var r = function() {
            fs.readFile($.file, {
              flag: $.flag,
              encoding: $.encoding
            }, function(err, contents) {
              if (err) {
                output({
                  error: $.create(err)
                })
              } else {
                output({
                  out: $.create(contents)
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