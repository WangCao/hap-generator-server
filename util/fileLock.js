/**
 * 锁文件，用来给文件加锁，其他进程修改文件
 */

const fs = require('fs');
let hasLock = false;
let lockDir = 'config.lock';

exports.lock = (cb) => {
  if (hasLock) return cb();
  fs.mkdir(lockDir,function (err) {
    if (err) return cb(err);
    fs.writeFile(`${lockDir}/${process.pid}`,(err) =>{
      if (err) console.error(err);
      hasLock = true;
      return cb();
    })
  })
}

exports.unlock = (cb) => {
  if (!hasLock) return cb();
  fs.unlink(`${lockDir}/${process.pid}`,(err)=> {
    if (err) return cb(err);
    fs.rmdir(lockDir,(err)=> {
      if (err) return cb(err);
      hasLock = false;
      cb();
    })
  })
}

process.on('exit',()=> {
  if (hasLock) {
    fs.unlinkSync(`${lockDir}/${process.pid}`)
    fs.rmdirSync(lockDir);
    console.log("解锁")
  }
})