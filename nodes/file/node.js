var file = input.ext ? input.name + input.ext : input.name;
output.file = input.dir ? path.join(input.dir, file) : file;
