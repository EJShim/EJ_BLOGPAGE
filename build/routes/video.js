'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
    // let url = "https://www.youtube.com/user/soulrommel/videos?shelf_id=0&sort=dd&view=0";

    var url = 'https://www.youtube.com/watch?v=xMREVx4XaCY&list=PLcX8WMFmN4WMMJDQKSLL0EOxZDx99NkjZ';

    var list = [];
    // USE REQUEST
    // Get Video List of ID :Soulrommel' and send response
    (0, _request2.default)(url, function (error, response, html) {
        if (!error) {
            var $ = _cheerio2.default.load(html);

            var elements = $('.yt-uix-scroller-scroll-unit');
            // console.log("number of elements : ", elements.length);

            elements.each(function () {
                var data = {};

                data.id = $(this).attr('data-video-id');
                data.image = $(this).attr('data-thumbnail-url');
                data.title = $(this).attr('data-video-title');

                if (data.id === undefined) {
                    return;
                }
                //Rserve only image path
                data.image = data.image.split("?")[0];

                list.push(data);
            });
            res.send(list);
        }
    });
});

exports.default = router;