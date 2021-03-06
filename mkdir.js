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
        fn: function __PATH__(data, source, state, input, $, output, fs) {
          var r = function() {
            fs.mkdir($.path, $.mode, function(err) {
              if (err) {
                output({
                  error: $.create(err)
                });
              } else {
                output({
                  path: $.get('path')
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
        "default": 511
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