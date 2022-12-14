'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Device', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'devices': [
              {
                  'sid': 'UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'This is my device; there are many like it.',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'app': {
                      'target_sid': 'KAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'target_hash': null,
                      'date_targeted': '2021-01-01T12:34:56Z',
                      'update_status': 'up-to-date',
                      'update_error_code': 0,
                      'reported_sid': 'KAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'date_reported': '2021-01-01T12:34:56Z'
                  },
                  'logging': {
                      'enabled': true,
                      'date_expires': '2021-01-01T12:34:56Z'
                  },
                  'date_created': '2021-01-01T12:34:56Z',
                  'date_updated': '2021-01-01T12:34:56Z',
                  'url': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'device_configs': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Configs',
                      'device_secrets': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Secrets'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://microvisor.twilio.com/v1/Devices?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://microvisor.twilio.com/v1/Devices?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'devices'
          }
      };
      holodeck.mock(new Response(200, body));
      client.microvisor.v1.devices.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'devices': [
              {
                  'sid': 'UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'This is my device; there are many like it.',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'app': {
                      'target_sid': 'KAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'target_hash': null,
                      'date_targeted': '2021-01-01T12:34:56Z',
                      'update_status': 'up-to-date',
                      'update_error_code': 0,
                      'reported_sid': 'KAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'date_reported': '2021-01-01T12:34:56Z'
                  },
                  'logging': {
                      'enabled': true,
                      'date_expires': '2021-01-01T12:34:56Z'
                  },
                  'date_created': '2021-01-01T12:34:56Z',
                  'date_updated': '2021-01-01T12:34:56Z',
                  'url': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'device_configs': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Configs',
                      'device_secrets': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Secrets'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://microvisor.twilio.com/v1/Devices?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://microvisor.twilio.com/v1/Devices?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'devices'
          }
      };
      holodeck.mock(new Response(200, body));
      client.microvisor.v1.devices.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://microvisor.twilio.com/v1/Devices',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'devices': [
              {
                  'sid': 'UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'This is my device; there are many like it.',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'app': {
                      'target_sid': 'KAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'target_hash': null,
                      'date_targeted': '2021-01-01T12:34:56Z',
                      'update_status': 'up-to-date',
                      'update_error_code': 0,
                      'reported_sid': 'KAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'date_reported': '2021-01-01T12:34:56Z'
                  },
                  'logging': {
                      'enabled': true,
                      'date_expires': '2021-01-01T12:34:56Z'
                  },
                  'date_created': '2021-01-01T12:34:56Z',
                  'date_updated': '2021-01-01T12:34:56Z',
                  'url': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'device_configs': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Configs',
                      'device_secrets': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Secrets'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://microvisor.twilio.com/v1/Devices?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://microvisor.twilio.com/v1/Devices?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'devices'
          }
      };
      holodeck.mock(new Response(200, body));
      client.microvisor.v1.devices.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.microvisor.v1.devices.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://microvisor.twilio.com/v1/Devices';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'devices': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://microvisor.twilio.com/v1/Devices?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://microvisor.twilio.com/v1/Devices?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'devices'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.microvisor.v1.devices.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'devices': [
              {
                  'sid': 'UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'This is my device; there are many like it.',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'app': {
                      'target_sid': 'KAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'target_hash': null,
                      'date_targeted': '2021-01-01T12:34:56Z',
                      'update_status': 'up-to-date',
                      'update_error_code': 0,
                      'reported_sid': 'KAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'date_reported': '2021-01-01T12:34:56Z'
                  },
                  'logging': {
                      'enabled': true,
                      'date_expires': '2021-01-01T12:34:56Z'
                  },
                  'date_created': '2021-01-01T12:34:56Z',
                  'date_updated': '2021-01-01T12:34:56Z',
                  'url': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'device_configs': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Configs',
                      'device_secrets': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Secrets'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://microvisor.twilio.com/v1/Devices?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://microvisor.twilio.com/v1/Devices?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'devices'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.microvisor.v1.devices.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.microvisor.v1.devices('UVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'UVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://microvisor.twilio.com/v1/Devices/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'This is my device; there are many like it.',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'app': {
              'target_sid': 'KAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'target_hash': null,
              'date_targeted': '2021-01-01T12:34:56Z',
              'update_status': 'up-to-date',
              'update_error_code': 0,
              'reported_sid': 'KAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'date_reported': '2021-01-01T12:34:56Z'
          },
          'logging': {
              'enabled': true,
              'date_expires': '2021-01-01T12:34:56Z'
          },
          'date_created': '2021-01-01T12:34:56Z',
          'date_updated': '2021-01-01T12:34:56Z',
          'url': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'device_configs': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Configs',
              'device_secrets': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Secrets'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.microvisor.v1.devices('UVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.microvisor.v1.devices('UVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'UVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://microvisor.twilio.com/v1/Devices/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'sid': 'UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'UniqueName',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'app': {
              'target_sid': 'KAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'target_hash': null,
              'date_targeted': '2021-01-01T12:34:56Z',
              'update_status': 'pending',
              'update_error_code': 0,
              'reported_sid': null,
              'date_reported': '2021-01-01T12:34:56Z'
          },
          'logging': {
              'enabled': false,
              'date_expires': null
          },
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'device_configs': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Configs',
              'device_secrets': 'https://microvisor.twilio.com/v1/Devices/UVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Secrets'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.microvisor.v1.devices('UVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
