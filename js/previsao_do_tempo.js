require('dotenv').config()
const axios = require('axios')
// const APP_ID = process.env.APP_ID
// const Q = process.env.Q

const { 
  APP_ID, 
  Q,
  CNT,
  UNITS,
  LANG_WEATHER,
  PROTOCOL,
  BASE_URL 
} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APP_ID}&q=${Q}&cnt=${CNT}&units=${UNITS}&lang=${LANG_WEATHER}`

console.log(url)

//isso resulta em promise
axios.get(url)
.then((res) => {
  console.log(res.data)
  console.log('****************************')
  return res.data
})
.catch((err) => {
  console.log("erro")
  return {cnt: "aqui pode"}
})
.then((res) => {
  console.log(`cnt: ${res.cnt}`)
  console.log('****************************')
  return res
})
.then((res) => {
  for (let previsao of res.list){
    //data: max: 23, min: 22
    // console.log(previsao)
    console.log(previsao)
    console.log(`
    ${new Date(previsao.dt * 1000).toTimeString()}:
    max: ${previsao['main'].temp_max}\u00B0
    min: ${previsao['main']['temp_min']}\u00B0
    desc: ${previsao['weather'][0]['description']}
    `)
    console.log('-----------------------------------')
  }  
  return res
})