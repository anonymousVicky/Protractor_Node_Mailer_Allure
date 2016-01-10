var cred = require('../configurations/credentials');
var obj = require('../configurations/object');

describe('google homepage', function () {
    it('should have the correct title', function () {
        browser.driver.get('https://google.com/'); //Assuming jenkins is running on localhost, port 8080
        var title = browser.driver.getTitle();
        expect(title).toEqual('Google');
    });


});

