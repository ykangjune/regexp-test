let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

console.log(
  str.match(/[fox]/g)
)

console.log(
  str.match(/[0-9]{1,}/g)
)

console.log(
  str.match(/[가-힣]{1,}/g)
)

console.log(
  str.match(/\w/g)
)

console.log(
  str.match(/\bf\w{1,}\b/g)
) // (2) ["frozen", "fox"]

console.log(
  str.match(/\d{1,}/g)
)

console.log(
  str.match(/\s/g)
)


const h = `  the hello  world   !  

`

console.log(
  h.replace(/\s/g, '')
) // thehelloworld

console.log(
  str.match(/.{1,}(?=@)/g)
) // ["thesecon"]

console.log(
  str.match(/.{1,}(?<=@)/g)
) // ["thesecon@"]

console.log(
  str.match(/(?<=@).{1,}/g)
) // ["gmail.com"]