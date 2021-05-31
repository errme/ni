/*
 * Diaspora
 * @author LoeiFy
 * @url http://lorem.in
 */

var Home = location.href;

var Diaspora = {

    L: function(url, f) {
		$.ajax({
			type: 'GET',
			url: url,
			timeout: 10000,
			success: function(data) {f(data)},
			error: function() {window.location.href = url}
		})
    },

    P: function() {
		return !!('ontouchstart' in window);
	},

    PS: function() {

        if (!(window.history && history.pushState)) return;

        history.replaceState({u: Home, t: document.title}, document.title, Home)

		window.addEventListener('popstate', function(e) {
			var state = e.state;

			if (!state) return;

			document.title = state.t;

			if (state.u == Home) {
                $('#preview').css('position', 'fixed')
                setTimeout(function() {
                    $('#preview').removeClass('show')
                    $('#container').show()
                    window.scrollTo(0, parseInt($('#container').data('scroll')))
                    setTimeout(function() {
                        $('#preview').html('')
                    }, 300)
                }, 0)
			} else {
                Diaspora.loading()

                Diaspora.L(state.u, function(data) {

                    document.title = state.t;

                    $('#preview').html($(data).filter('#single'))

                    Diaspora.preview()

                    setTimeout(function() { Diaspora.player(state.d) }, 0)
                })
			}

		})
    },

	HS: function(tag, flag) {
        var id = tag.data('id') || 0,
            url = tag.attr('href'),
            title = tag.attr('title') || tag.text();

        if (!$('#preview').length || !(window.history && history.pushState)) location.href = url;

        Diaspora.loading()

        var state = {d: id, t: title, u: url};

        Diaspora.L(url, function(data) {

            switch (flag) {

                case 'push':
                    history.pushState(state, title, url)
                break;

                case 'replace':
                    history.replaceState(state, title, url)
                break;

            }

            document.title = title;

            $('#preview').html($(data).filter('#single'))

            switch (flag) {

                case 'push': 
                    Diaspora.preview()
                break;

                case 'replace':
                    window.scrollTo(0, 0)
                    Diaspora.loaded()
                break;
            }

            setTimeout(function() {
                Diaspora.player(id)

                // ga
                try {_gaq.push(['_trackPageview', url])} catch(e) {}
            }, 0)

        })
	},

    preview: function() {
        setTimeout(function() {
            $('#preview').addClass('show')
            $('#container').data('scroll', window.scrollY)
            setTimeout(function() {
                $('#container').hide()
                setTimeout(function() {
                    $('#preview').css({
                        'position': 'static',
                        'overflow-y': 'auto'
                    })

                    Diaspora.loaded()
                }, 500)
            }, 300)
        }, 0)
    },

    player: function(id) {

        var p = $('#audio-'+ id +'-1');

        if (!p.length) return;

        p.on({

            'timeupdate': function() {
                $('.bar').css('width', p[0].currentTime / p[0].duration * 100 +'%')
            },

            'ended': function() {
                $('.icon-pause').removeClass('icon-pause').addClass('icon-play')
            },

            'playing': function() {
                $('.icon-play').removeClass('icon-play').addClass('icon-pause')
            } 

        })

    },

    loader: function() {
        var w = window.innerWidth;
        var css = '<style id="loaderstyle">@-moz-keyframes loader{0%{background-position:0 0}100%{background-position:'+ w +'px 0}}@-webkit-keyframes loader{0%{background-position:0 0}100%{background-position:'+ w +'px 0}}></style>';
        $('#loaderstyle').remove()
        $('head').append(css)
    },

    loading: function() {
        $('.loader').addClass('loading').show()
    },

    loaded: function() {
        $('.loader').removeClass('loading').hide()
    }

}

$(function($) {

    if (Diaspora.P()) $('#home').removeClass('skew');

    setTimeout(function() {
        $('html, body, #home').removeClass('loading')
    }, 1000)

    if ($('#preview').length) {

        Diaspora.PS()

        Diaspora.loader()

        CBFimage({
            id: 'cover',
            cache: true,
            start: function() {},
            progress: function(loaded, total) {},
            end: function() {}
        })

        $('.pview a').addClass('pviewa')

    } else {

	    window.addEventListener('popstate', function(e) {

			if (e.state) location.href = e.state.u;

        })

        Diaspora.player($('.icon-play').data('id'))

        $('.icon-icon').attr('href', '/')

    }

    $('body').on('click', function(e) {

        var tag = $(e.target).attr('class');

        if (!tag) return;

        switch (true) {

            // nav menu
            case (tag.indexOf('switchmenu') != -1):
                window.scrollTo(0, 0)
                $('body').toggleClass('mu')
            break;

            // next page
            case (tag.indexOf('more') != -1):
                if ($('.more').data('status') == 'loading') return false;
        
                $('.more').html('加载中..').data('status', 'loading')
                Diaspora.loading()

                Diaspora.L($('.more').attr('href'), function(data) {
                    var link = $(data).find('.more').attr('href');
                    if (link != undefined) {
                        $('.more').attr('href', link).html('加载更多').data('status', 'loaded')
                    } else {
                        $('#pager').remove()
                    }

                    $('#primary').append($(data).find('.group'))

                    Diaspora.loaded()
                })

                return false;
            break;

            // comment
            case (tag.indexOf('comment') != -1):
                Diaspora.loading()
                $('.comment').removeClass('link').html('')

                var id = $('.comment').data('id');

                $.getScript('http://static.duoshuo.com/embed.js', function() {
			        var el = document.createElement('div');
    		        el.setAttribute('data-thread-key', id)
    		        DUOSHUO.EmbedThread(el)
    		        $('.comment').html(el)

                    Diaspora.loaded()
		        })
            break;

            // post images
            case (tag.indexOf('icon-images') != -1):
                $('.icon-font').removeClass('active')
                $('.icon-images').addClass('active')

                $('.images').css('height', $('.images').data('height'))

                if ($('.icon-images').hasClass('tg')) {
                    $('.section').css('left', 0)
                } else {
                    $('.zoom').Chocolat()
                    $('.images').justifiedGallery({ margins: 5, rowHeight : 120 }).on('jg.complete', function () {
                        $('.section').css('left', 0)
                        $('.icon-images').addClass('tg')
                    })
                }

                setTimeout(function() { $('.article').css('height', '0') }, 0)
            break;

            // post text
            case (tag.indexOf('icon-font') != -1):
                $('.icon-images').removeClass('active')
                $('.icon-font').addClass('active')

                $('.article').css('height', 'auto')
                $('.section').css('left', '-100%')
                setTimeout(function() {
                    $('.images').data('height', $('.images').height()).css('height', '0') 
                }, 0)
            break;

            // qrcode
            case (tag.indexOf('icon-wechat') != -1):
                if ($('.icon-wechat').hasClass('tg')) {
                    $('#qr').toggle()
                } else {
                    $('.icon-wechat').addClass('tg')
                    $('#qr').qrcode({ width: 128, height: 128, text: location.href}).toggle()
                }
            break;

            // audio play
            case (tag.indexOf('icon-play') != -1):
                $('#audio-'+ $('.icon-play').data('id') +'-1')[0].play()
                $('.icon-play').removeClass('icon-play').addClass('icon-pause')
            break;

            // audio pause
            case (tag.indexOf('icon-pause') != -1):
                $('#audio-'+ $('.icon-pause').data('id') +'-1')[0].pause()
                $('.icon-pause').removeClass('icon-pause').addClass('icon-play')
            break;

            // post like
            case (tag.indexOf('icon-like') != -1):
                var t = $('.icon-like').parent(),
			        classes = t.attr('class');

			    classes = classes.split(' ');
			    if(classes[1] == 'active') return;

			    t.addClass('active')

			    var id = t.attr('id').split('like-');

			    $.ajax({
				    type: 'POST',
				    url: '/index.php',
				    data: 'likepost=' + id[1],
				    success: function() {
			            var text = $('#like-'+ id[1]).html(),
			                patt= /(\d)+/,
		                    num = patt.exec(text);

			            num[0] ++;
			            $('#like-'+ id[1]).html('<span class="icon-like"></span><span class="count">' + num[0] + '</span>')
                    }
			    })
            break;

            // history state
            case (tag.indexOf('cover') != -1):
                Diaspora.HS($(e.target).parent(), 'push')
                return false;
            break;

            // history state
            case (tag.indexOf('posttitle') != -1):
                Diaspora.HS($(e.target).parent(), 'push')
                return false;
            break;

            // relate post
            case (tag.indexOf('relatea') != -1):
                Diaspora.HS($(e.target), 'replace')
                return false;
            break;

            // relate post
            case (tag.indexOf('relateimg') != -1):
                Diaspora.HS($(e.target).parent(), 'replace')
                return false;
            break;

            // quick view
            case (tag.indexOf('pviewa') != -1):
                $('body').removeClass('mu')

                setTimeout(function() {
                    Diaspora.HS($(e.target), 'push')
                }, 300)

                return false;
            break;

            default:
                return;
            break;

        }

    })


})
