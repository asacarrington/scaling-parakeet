$(document).ready(function () {
    console.log("ready!");

    ga('send', {
        hitType: 'event',
        eventCategory: 'Videos',
        eventAction: 'play',
        eventLabel: 'Fall Campaign'
    });

    ga('send', {
        hitType: 'social',
        socialNetwork: 'Facebook',
        socialAction: 'like',
        socialTarget: 'http://myownpersonaldomain.com'
    });

    ga('send', 'screenview', {
        'screenName': 'Home'
    });

    console.log("yea!");


});