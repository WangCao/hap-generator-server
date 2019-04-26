const locker = require('../util/fileLock') 

locker.lock((err) => {
  if (err) throw err;

  locker.unlock(()=>{})
})