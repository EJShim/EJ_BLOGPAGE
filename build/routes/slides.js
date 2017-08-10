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
    var url = 'http://slides.com/soulrommel/';

    var list = [];
    // USE REQUEST
    // Get Video List of ID :Soulrommel' and send response
    (0, _request2.default)(url, function (error, response, html) {
        if (!error) {
            var $ = _cheerio2.default.load(html);

            var elements = $('.deck.public');

            elements.each(function () {
                var data = {};

                data.id = $(this).attr('data-slug');
                // data.image = $(this).find('.deck-thumbnail').find(".deck-image").attr('style');
                data.title = $(this).find('.deck-title').find(".deck-title-value").text();
                // data.image = $(this).attr('data-thumbnail-url');
                // data.title = $(this).attr('data-video-title');

                if (data.id === undefined) {
                    return;
                }
                //Rserve only image path
                // data.image = data.image.split("?")[0];                 

                list.push(data);
            });
            // console.log(list.length)
            res.send(list);
        }
    });
});

exports.default = router;