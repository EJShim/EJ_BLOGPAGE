import express from 'express';
import request from 'request';
import cheerio from 'cheerio';

const router = express.Router();

router.get('/', (req, res) => {    
    let url = 'http://slides.com/soulrommel/';
    
    let list = [];
    // USE REQUEST
    // Get Video List of ID :Soulrommel' and send response
    request(url, function (error, response, html) {
        if (!error) {
            let $ = cheerio.load(html);

            let elements = $('.deck.public');

            elements.each(function(){
                let data = {};
                
                data.id = $(this).attr('data-slug');
                // data.image = $(this).find('.deck-thumbnail').find(".deck-image").attr('style');
                data.title = $(this).find('.deck-title').find(".deck-title-value").text();
                // data.image = $(this).attr('data-thumbnail-url');
                // data.title = $(this).attr('data-video-title');

                if(data.id === undefined){return;}
                //Rserve only image path
                // data.image = data.image.split("?")[0];                 

                list.push( data);
            });            
            // console.log(list.length)
            res.send(list);
        }
    });
});


export default router;