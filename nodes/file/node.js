var file = $.ext ? $.name + $.ext : $.name;
output.file = $.dir ? path.normalize([$.dir, file].join(path.sep)) : file;
