"use strict";
window.addEventListener('DOMContentLoaded', function() {

    function delete_cookie(cookie_name) {
        var cookie_date = new Date(); // Текущая дата и время
        cookie_date.setTime(cookie_date.getTime() - 1);
        document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
    }

    function get_cookie(cookie_name) {
        var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

        if (results)
            return (unescape(results[2]));
        else
            return null;
    }

    function on_cookie(cookie_name) {
        var x = get_cookie("block_left_menu");
        var k = document.getElementsByClassName('axis_non').length;
        if (x == '1') {

            for (let x = 0; x < k; x++) {
                var ar = document.querySelectorAll('.axis_non')[x];
                ar.classList.add('axis_END');
            }

            var ar_1 = document.querySelectorAll('.bg_lm1')[0];
            ar_1.classList.remove('axis_non_1');
            ar_1.classList.add('axis_END_1');
        }
    };
    on_cookie("block_left_menu");
    document.getElementsByClassName('bg_lm1')[0]
        .addEventListener('click', function(event) {

            var k = document.getElementsByClassName('axis_non').length;
            if (this.classList.contains("axis_END_1") === false) {
                this.classList.remove('axis_non_1');
                this.classList.add('axis_1');
                document.cookie = "block_left_menu = 1;";

                function get_cookie(cookie_name) {
                    var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

                    if (results)
                        return (unescape(results[2]));
                    else
                        return null;
                }
                var x = get_cookie("block_left_menu");
                console.log(x);

                setTimeout(() => {
                    this.classList.remove('axis_1');
                    this.classList.add('axis_END_1');
                }, 1000);

                var i = 0,
                    ar_f = document.querySelectorAll('bg_lm_f')[i];

                for (let x = 0; x < k; x++) {
                    var ar = document.querySelectorAll('.axis_non')[i];
                    ar.classList.add('axis');
                    i += 1;
                };

            }
            if (i == k == true) {
                var a = 0;
                for (let x = 0; x < k; x++) {

                    setTimeout(() => {
                        var ar = document.querySelectorAll('.axis_non')[a];
                        ar.classList.remove('axis');
                        ar.classList.add('axis_END');
                        a += 1;
                    }, 900);
                }
                a = 0;
            }

        });

    document.getElementsByClassName('bg_lm1')[0]
        .addEventListener('click', function(event) {
            var k = document.getElementsByClassName('axis_non').length;

            if (this.classList.contains("axis_END_1") === true) {
                this.classList.remove('axis_END_1');
                this.classList.add('axis_r_1');
                delete_cookie("block_left_menu");
                setTimeout(() => {
                    this.classList.remove('axis_r_1');
                    this.classList.add('axis_non_1');
                }, 1000);

                var i = 0,
                    ar_f = document.querySelectorAll('bg_lm_f')[i];

                for (let x = 0; x < k; x++) {
                    var ar = document.querySelectorAll('.axis_non')[i];
                    ar.classList.add('axis_r');
                    i += 1;
                };
                var s = 0;
                for (let y = 0; y < k; y++) {
                    var ar = document.querySelectorAll('.axis_non')[s];
                    ar.classList.remove('axis_END');
                    s += 1;
                }

            }
            if (i == k == true) {
                var a = 0;

                for (let x = 0; x < k; x++) {
                    setTimeout(() => {
                        var ar = document.querySelectorAll('.axis_non')[a];
                        ar.classList.remove('axis_r');
                        a += 1;
                    }, 1000);
                };
            };

        });

});
// LOL

