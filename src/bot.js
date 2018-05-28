const Twit = require('twit')
const config = require('./config')
const Tabletop = require('tabletop')
const picture = require('./picture-bot')

const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1-kELr5E5URPxRuwJsp0RQ3ecRMDPUZDnWckN9409Sjo/edit?usp=sharing'
const bot = new Twit(config)
const filePath = "C:\\temp\\"
const hashTags = " #punk #1977 #1978 "

var arr = new Array();

var square = function getTable()
{ Tabletop.init({
    key: spreadsheetUrl,
    callback(data, tabletop) {
     

arr = data;

    //   data.forEach(d => {
        
    //     fileName = filePath + d.images

    //     setTimeout(function()
    //     {picture(d.links + ' ' + d.description + hashTags + d.hashtags , fileName)
    //     Task.Wait(5000)

       
    //   },5000)
    // })
  },
  simpleSheet: true })
};
  square();
  console.log(arr);

 // console.log(arr)
// bot.post('statuses/update', {
//     status: 'hello world!'
//   }, (err, data, response) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(`${data.text} tweeted!`)
//     }
//   })