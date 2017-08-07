import express from 'express';
import request from 'request';
import cheerio from 'cheerio';

const router = express.Router();

router.get('/', (req, res) => {
    // let url = "https://www.youtube.com/user/soulrommel/videos?shelf_id=0&sort=dd&view=0";

    let url = 'https://www.youtube.com/watch?v=xMREVx4XaCY&list=PLcX8WMFmN4WMMJDQKSLL0EOxZDx99NkjZ';
    
    let list = [];
    // USE REQUEST
    // Get Video List of ID :Soulrommel' and send response
    request(url, function (error, response, html) {
        if (!error) {
            let $ = cheerio.load(html);

            let elements = $('.yt-uix-scroller-scroll-unit')
            // console.log("number of elements : ", elements.length);

            elements.each(function(){
                let data = {};
                
                data.id = $(this).attr('data-video-id');
                data.image = $(this).attr('data-thumbnail-url');
                data.title = $(this).attr('data-video-title');

                if(data.id === undefined){return;}
                //Rserve only image path
                data.image = data.image.split("?")[0];                            

                list.push( data);
            });            
            res.send(list);
        }
    });
});

export default router