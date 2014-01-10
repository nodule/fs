var file = input.ext ? input.name + input.ext : input.name;
output.file = input.dir ? path.normalize([input.dir, file].join(path.sep)) : file;
