const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Shero';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});



describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Shero';
        var latitude = '50';
        var longitude = '13';
        var usr = 'http://www.google.com/maps?q=50,13';
        
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});