(function() {

    /**
     * Adds the triggers that show/hide search related fields
     */
    var initSearchField = function() {
        $('#topnavigation_search_input').focus(function() {
            $('#topnavigation_search_results_container').show();
        });

        $(document).on('click', function(ev) {
            if ($('#topnavigation_search_results_container').is(':visible') &&
                $(ev.target).attr('id') !== 'topnavigation_search_input' &&
                !$(ev.target).parents('#topnavigation_search_results_container').length) {
                $('#topnavigation_search_results_container').hide();
            }
        });

        $('.research_assistance_switch').click(function() {
            $('.research_assistance_switch').toggle();
            $('#research-assistance-off').toggle();
            $('#research-assistance-on').toggle();
            $('.search_footer').toggle();
        });

        $('#start_search_assistance_walkthrough').on('click', function() {
            $('.search_footer').hide();
            $('#topnavigation_search_results_results > div').hide();
            $('#search_wt_step_one').show();
        });

        $('#start_second_sa_step').on('click', function() {
            $('#search_wt_step_one').hide();
            $('#search_wt_step_two').show();
        });

        $('#start_third_sa_step').on('click', function() {
            $('#search_wt_step_two').hide();
            $('#search_wt_step_three').show();
        });

        $('#close_sa').on('click', function() {
            $('#topnavigation_search_results_container').hide();
            $('.research_assistance_switch').toggle();
            $('#search_wt_step_three').hide();
            $('.main_search_footer.search_footer').toggle();
            $('#research-assistance-off').toggle();
        });

        $('.searches-list .summary-panel h3').on('click', function(ev) {
            $(this).toggleClass('summary_collapsed');
            $(this).siblings('div').toggle();
        });
    };

    /**
     * Initializes a basic autosuggest example with 3 people
     */
    var initAutoSuggestExample = function() {
        var data = {items: [
            {
                value: "mjagger23",
                name: "Stanley Roberts",
                img: 'images/dummy_users/profile-pic-stanley.png'
            },
            {
                value: "jlibrarion53",
                name: "John Librarian",
                img: 'images/dummy_users/profile-pic-john.png'
            },
            {
                value: "janderson23",
                name: "Joyce Anderson",
                img: 'images/dummy_users/profile-pic-joyce.png'
            },
            {
                value: "bio101",
                name: "Biology 101",
                img: 'images/dummy_content/activity-item5-collection-item1.png'
            },
            {
                value: "bioinspired",
                name: "Bio Microsystems",
                img: 'images/dummy_content/activity-item5-collection-item5.png'
            },
            {
                value: "biorobotics",
                name: "Bio-Robotics",
                img: 'images/dummy_content/activity-item5-collection-item6.png'
            }
        ]};

        $('#autosuggest_example').autoSuggest(data.items, {
            selectedItemProp: "name",
            searchObjProps: "name",
            startText: 'Enter other names, courses, research projects to ask...',
            preFill: [{
                value: "jlibrarion53",
                name: "John Librarian",
                img: 'images/dummy_users/profile-pic-john.png'
            }],
            formatList: function(data, elem){
                var my_image = data.image;
                var new_elem = elem.html('<img src="' + data.img + '" class="gt-force-left" /><div class="autosuggest_name">' + data.name + '</div>');
                return new_elem;
            }
        });

        $('#share_autosuggest').autoSuggest(data.items, {
            selectedItemProp: "name",
            searchObjProps: "name",
            formatList: function(data, elem){
                var my_image = data.image;
                var new_elem = elem.html('<img src="' + data.img + '" class="gt-force-left" /><div class="autosuggest_name">' + data.name + '</div>');
                return new_elem;
            }
        });
    };

    var initQuestionsPopup = function() {
        // Bind buttons
        $('.questions').on('click', function() {
            $('.gt-popup.question').toggle();
        });

        $('.questions-close').on('click', function() {
            $('.gt-popup.question').hide();
        });

        $('#question-send').on('click', function() {
            $('.gt-popup.question').hide();
            $('.gt-popup.success').show();
            setTimeout(function() {
                $('.gt-popup.success').fadeOut(300);
            }, 5000);
        });

        $('.success-close').on('click', function() {
            $('.gt-popup.success').hide();
        });

    };

    var initCommentssPopup = function() {
        // Bind buttons
        $('a.discussions').on('click', function() {
            $('.gt-popup.discussions').toggle();
        });

        $('.discussions-close').on('click', function() {
            $('.gt-popup.discussions').hide();
        });

        $('#discussions-send').on('click', function() {
            $('.gt-popup.discussions').hide();
            $('.gt-popup.success').show();
            setTimeout(function() {
                $('.gt-popup.success').fadeOut(300);
            }, 5000);
        });

        $('.success-close').on('click', function() {
            $('.gt-popup.success').hide();
        });
    };

    var initSourcePopup = function() {
        // Bind buttons
        $('.action_button.source').on('click', function() {
            $('.gt-popup.source').show();
            $('.gt-popup.source').css('z-index', 10000);
            $('.gt-popup.source').css('top', $(this).offset().top - 95);
            $('.gt-popup.source').css('left', $(this).offset().left);

        });

        $('.gt-popup-close.source').on('click', function() {
            $('.gt-popup.source').hide();
        });
    };

    var initSharePopup = function() {
        // Bind buttons
        $('.action_button.share').on('click', function() {
            $('.gt-popup.share').show();
            $('.gt-popup.share').css('z-index', 10000);
            $('.gt-popup.share').css('top', $(this).offset().top - 95);
            $('.gt-popup.share').css('left', $(this).offset().left - ($('.gt-popup.share').width() / 2) - ($(this).width() / 2));

        });

        $('#share_new_collection').on('click', function() {
            $(this).hide();
            $('#share_new_collection_input').show();
            $('#share_new_collection_create').show();
            $('#share_new_collection_input').focus();
        });

        $('#share_new_collection_create').on('click', function() {
            $('#share_new_collection').show();
            $('#share_new_collection_input').hide();
            $('#share_new_collection_create').hide();
            $('#water_testing_listitem').show();
        });

        $('.gt-popup-close.share').on('click', function() {
            $('.gt-popup.share').hide();
        });
    };

    var initCenterPanel = function() {
        $(document).scroll(function() {
            var $panel = $('.center_panel');
            var panelWidth = $panel.width();
            if ($(this).scrollTop() >= 128) {
                $('#gt-search-results').css('margin-top', '110px');
                $panel.css('width', panelWidth);
                $panel.css('top', $(this).scrollTop());
                $panel.addClass('absolute_panel');
            } else {
                $('#gt-search-results').css('margin-top', '0');
                $panel.removeClass('absolute_panel');
                panelWidth = $panel.width();
            }
        });

        $('#gt-search-results input[type=checkbox]').on('change', function() {
            if ($('#gt-search-results input[type=checkbox]').is(':checked')) {
                $('.center-panel-inner').addClass('center_panel_shown');
                $('.center-panel-closed').attr('style', 'display: none !important');
            } else {
                $('.center-panel-inner').removeClass('center_panel_shown');
                $('.center-panel-closed').attr('style', 'display: block');
            }
        });

        $('.question-item input[type=checkbox]').on('change', function() {
            if ($('.question-item input[type=checkbox]').is(':checked')) {
                $('.center-panel-inner').addClass('center_panel_shown');
                $('.center-panel-closed').attr('style', 'display: none !important');
            } else {
                $('.center-panel-inner').removeClass('center_panel_shown');
                $('.center-panel-closed').attr('style', 'display: block');
            }
        });

        $('.gridview-listed-item input[type=checkbox]').on('change', function() {
            if ($('.gridview-listed-item input[type=checkbox]').is(':checked')) {
                $('.center-panel-inner').addClass('center_panel_shown');
                $('.center-panel-closed').attr('style', 'display: none !important');
            } else {
                $('.center-panel-inner').removeClass('center_panel_shown');
                $('.center-panel-closed').attr('style', 'display: block');
            }
        });

        $('#research-results-1').on('click', function(ev) {
            ev.preventDefault();
            if ($('.center-panel-inner').hasClass('center_panel_shown')) {
                $('.center-panel-inner').removeClass('center_panel_shown');
                $('.center-panel-closed').attr('style', 'display: block');
            } else {
                $('.center-panel-inner').addClass('center_panel_shown');
                $('.center-panel-closed').attr('style', 'display: none !important');
            }
        });

        setTimeout(function() {
            $('.center_panel #added-items-to').fadeOut(300);
        }, 10000);

        $('.center_panel #added-items-to .gt-popup-close').on('click', function() {
            $('.center_panel #added-items-to').fadeOut(300);
        })
    };

    var initOverlays = function() {
        $('#gt_video_overlay_link').on('click', function() {
            $('#gt_video_overlay').show();
            $('#gt_video_overlay + div').show();
        });

        $('#gt_video_overlay_close').on('click', function() {
            $('#gt_video_overlay').hide();
            $('#gt_video_overlay + div').hide();
        });

        $('.gt-popup-close.guide-close').on('click', function() {
            $(this).parents('.guide.gt-popover').hide();
        });
    };

    var initSorryMessage = function() {
        // Set action on all links with no href
        $("a").each(function(index, el){
            var $anchor = $(el);
            if ($anchor.attr("href") === "#") {
                $anchor.on("click", function(){
                    alert("Ooops, not your fault, it's ours, try again...");
                    return false;
                });
            }
        });
    }

    var initRightHandSideColumn = function() {
        $('#close-column-button').on('click', function() {
            $('#gt-right-column-open').animate({'width': 30}, 500);
            $('#gt-right-column-open > div:last-child').animate({'opacity': 'toggle'}, 250, function() {
                $('#close-column-button').hide();
                setTimeout(function() {
                    $('#gt-center-column-wide').addClass('right-column-collapsed');
                    $('#open-column-button').show();
                }, 400);
            });
        });

        $('#open-column-button').on('click', function() {
            $('#gt-center-column-wide').removeClass('right-column-collapsed');
            $('#gt-right-column-open').animate({'width': '17%'}, 500);
            $('#open-column-button').hide();
            $('#close-column-button').show();
            $('#gt-right-column-open > div:last-child').animate({'opacity': 'toggle'}, 500);
        });


        var adjustRHColumnSize = function() {
            $('#gt-right-column-open').css('height', $('#gt-content-container').height() + 12);
        };

        adjustRHColumnSize();

        $(document).scroll(function() {
            adjustRHColumnSize();
        });
    }

    var init = function() {
        initAutoSuggestExample();
        initSearchField();
        initQuestionsPopup();
        initCommentssPopup();
        initSourcePopup();
        initSharePopup();
        initCenterPanel();
        initOverlays();
        initSorryMessage();
        initRightHandSideColumn();
    };

$(document).ready(init);
})();
