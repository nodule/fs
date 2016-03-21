var file = $.ext ? $.name + $.ext : $.name;
output.file = $.create($.dir ? path.normalize([$.dir, file].join(path.sep)) : file);
