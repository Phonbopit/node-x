var request = require('supertest');
var app = require('../app.js');
var expect = require('chai').expect;

describe('GET "/"', function() {

  it('route / exist', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('response / content', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.text).to.contain('Node.js + Express.js');
        done();
      });
  });

});

describe('GET "/me"', function() {

  it('route /me exist', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('response "/me" content', function(done) {
    request(app)
      .get('/me')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        } else {
          expect(res.text).to.contain('Chai');
          done();
        }
      });
  });

});
