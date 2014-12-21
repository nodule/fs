module.exports = {
  name: "mkdir",
  ns: "fs",
  description: "fs mkdir",
  async: true,
  phrases: {
    active: "Creating directory {{input.path}}"
  },
  ports: {
    input: {
      path: {
        title: "Path",
        type: "string",
        async: true,
        fn: function __PATH__(data, x, source, state, input, output, fs) {
          var r = function() {
            fs.mkdir(data, input.mode, function(err) {
              if (err) {
                output({
                  error: err
                });
              } else {
                output({
                  path: data
                });
              }
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      mode: {
        title: "Mode",
        type: "number",
        "default": "0777"
      }
    },
    output: {
      path: {
        title: "Path",
        type: "string"
      },
      error: {
        title: "Error",
        type: "Error"
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