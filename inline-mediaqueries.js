/*
	inline-mediaqueries.js
	version 1.0
	
	Licensed under the MIT license:
	http://www.opensource.org/licenses/mit-license.php

	*/
(function($) {
    $.fn.mediaqueries = function(options) {
        var _ = this;

        _.each(function() {
            var screen = $(this).data('screen');
            screen = object_sort(screen);
            console.log(screen);

            $.each(screen, function(key, val) {
                // max
                if (key.match(/max(\d+)/)) {
                    var width = Number(RegExp.$1);

                    $(window).on('resize load', function() {
                        var timer = setTimeout(function() {
                            var w = $(window).width();

                            if (width >= w) {
                                //cssを追加
                                _.css(val);
                            }

                        }, 100);
                    });
                }
                //min
                else if (key.match(/min(\d+)/)) {
                    var width = Number(RegExp.$1);

                    $(window).on('resize load', function() {
                        var timer = setTimeout(function() {
                            var w = $(window).width();

                            if (width <= w) {
                                //cssを追加
                                _.css(val);
                            }

                        }, 100);
                    });
                }
            });

        });


        /**
         * オブジェクトをソートする
         */
        function object_sort(object) {
            var sorted = {};
            var array = [];
            for (key in object) {
                if (object.hasOwnProperty(key)) {
                    //if条件がtrueならば，配列の最後にキーを追加する
                    array.push(key);
                }
            }
            array.sort();
            //配列の逆ソート
            //array.reverse();

            for (var i = 0; i < array.length; i++) {
                sorted[array[i]] = object[array[i]];
            }
            return sorted;
        }

        return this;
    };

})(jQuery);
