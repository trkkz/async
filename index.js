const asyncLimit = (
  arr,
  handler,
  limit = 1,
  callback = false
) => {
  const queue = Array.from(arr)
  const result = []
  let count = 0
  
  if (limit > arr.length) limit = arr.length

  if (typeof handler !== 'function') {
    throw new TypeError('handler is not a function')
  }

  if (typeof callback !== 'function') {
    console.warn('callback is not a function')
  }


  return new Promise((res, rej) => {
    const next = () => {
      if (queue.length <= 0 || count >= limit) return
      next(count++)
      handler(queue.shift())
        .then(data => {
          next(count--)
          result.push(data)
          callback && callback(data, null)
          count === 0 && res(result)
        })
        .catch(err => 
          callback
            ? callback(err) 
            : rej(err)
        )
    }
    
    next()
  })
}
