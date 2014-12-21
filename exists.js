module.exports = {
  name: "exists",
  ns: "fs",
  async: true,
  description: "fs exists",
  phrases: {
    active: "Checking whether file {{input.path}} exists"
  },
  ports: {
    input: {
      path: {
        type: "string",
        async: true,
        fn: function __PATH__(data, x, source, state, input, output, fs) {
          var r = function() {
            fs.exists(data, function(yes) {
              if (yes) {
                output({
                  yes: data
                });
              } else {
                output({
                  no: data
                });
              }
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      yes: {
        title: "Exists",
        type: "string"
      },
      no: {
        title: "Absent",
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