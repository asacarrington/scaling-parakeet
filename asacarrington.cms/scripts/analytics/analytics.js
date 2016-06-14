$(document).ready(function () {

    initializeGA();

    $(".social-track").on("click", function () {
        ga('send', {
            hitType: 'social',
            socialNetwork: $(this).data("social-network"),
            socialAction: $(this).data("social-action"),
            socialTarget: $(this).data("social-target")
        });
    });

    $(".event-track").on("click", function () {
        ga('send', {
            hitType: 'event',
            eventCategory: $(this).data("event-category"),
            eventAction: $(this).data("event-action"),
            eventLabel: $(this).data("event-lable")
        });
    });

    function TriggerPageView() {
        ga('send', {
            hitType: 'pageview',
            page: location.pathname,
            location: 'MyLocation',
            title: 'myTItle'
        });
    }

    function TriggerScreenView() {
        ga('send', 'screenview', {
            'screenName': 'Home'
        });
    }

    function initializeGA() {
        ga('create', 'UA-79172520-1', 'auto');
        TriggerPageView();
    }

});