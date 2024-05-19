# Async

## Usage
```javascript
const urls = [
  'http://placehold.it/1300x1600/E97452/fff',
  'http://placehold.it/1300x1300/4C6EB4/fff',
  'http://placehold.it/1300x1250/449F93/fff',
  'http://placehold.it/dsadsa/936FBC/fff',
  'http://placehold.it/1000x500/D25064/fff',
  'http://placehold.it/1300x1200/D25064/fff',
  'http://placehold.it/749x1327/D25064/fff'
]

// handler
const loadImg = (url) => {
  return new Promise((res, rej) => {
    const img = new Image()
    img.src = url
    img.onload = () => res(img)
    img.onerror = rej
  })
}

// promise
asyncLimit(
  urls,             
  loadImg,          
  4,                
  (data, err) => {  
    // ...
  }
)
.then(results => {  
  // ...
})

// async/await
;(async () => {
  const res = await asyncLimit(
    urls, 
    loadImg, 
    4,             
    (data, err) => {  
      // ...
    }
  )

  // ...
})()
```
