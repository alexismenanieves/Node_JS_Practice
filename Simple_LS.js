// We use const to avoid changing the received module
const fs = require('fs');
const util = require('util');
const fs_readdir = util.promisify(fs.readdir);

// Now an async anonymous function to list all files 
(async () => {
  const files = await fs_readdir('.');
  for(let fn of files) {
    console.log(fn);
  }
}) ().catch(err => {console.error(err)});
