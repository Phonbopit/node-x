var request = require('supertest');
var app = require('../app.js');
var expect = require('chai').expect;

describe('GET "/"', function() {

  it('page exist', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('response content', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(body).to.contain('Node.js + Express.js');
        done();
      });
  });

});
