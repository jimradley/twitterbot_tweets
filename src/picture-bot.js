
const Twit = require('twit')
const config = require('./config')
const bot = new Twit(config)


const uploadPhoto = (descriptionText, fileName) => {
    console.log(`uploadMedia: file PATH ${fileName}`)
     bot.postMediaChunked({
      file_path: fileName
    }, (err, data, respone) => {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
        const params = {
          status: descriptionText,
          media_ids: data.media_id_string
        }
       // postStatus(params)
       console.log('Status posted!')
      }
    })
  }

  function postStatus(params) {
    bot.post('statuses/update', params, (err, data, respone) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Status posted!')
      }
    })
  }


  module.exports = uploadPhoto