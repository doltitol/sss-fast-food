'use strict'
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app/server');
let menu = require('../app/models/menu')
let should = chai.should();

chai.use(chaiHttp);


describe('Menu', () => {

    beforeEach((done) => {
        let menu = {
            foodname: 'Club Sandwich',
            foodImg: 'Club Sandwich.png',
            foodPrice: '1600.00',
            foodCat: 'SANDWICHES'
        };
            done();
        
    });
    afterEach((done)=>{
        done();
    });

  it('should list ALL Menu on /v1/menu GET', (done) => {
      chai.request(server)
      .get('/v1/menu')
      .end((err,res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('menu');
          res.body.menu.should.be.a('array');
          res.body.menu[0].should.have.property('foodname');
          res.body.menu[0].should.have.property('foodImg');
          res.body.menu[0].should.have.property('foodPrice');
          res.body.menu[0].should.have.property('foodCat');
          res.body.menu[0].foodname.should.equal('Club Sandwich');
          res.body.menu[0].foodImg.should.equal('Club Sandwich.png');
          res.body.menu[0].foodPrice.should.equal('1600.00');
          res.body.menu[0].foodCat.should.equal('SANDWICHES');
          done();
      });
  });
  it('should list a SINGLE Menu Item on /v1/menu/<id> GET', (done) => {
      let menuitem = {
        id: 1,
		foodname: 'Club Sandwich',
		foodImg: 'Club Sandwich.png',
		foodPrice: '1600.00',
		foodCat: 'SANDWICHES'
      };
        chai.request(server)
        .get('/v1/menu/'+menuitem.id)
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('menu');
            res.body.menu.should.be.a('object');
            res.body.menu.should.have.property('id');
            res.body.menu.should.have.property('foodname');
            res.body.menu.should.have.property('foodImg');
            res.body.menu.should.have.property('foodPrice');
            res.body.menu.should.have.property('foodCat');
            res.body.menu.id.should.equal(1);
            res.body.menu.foodname.should.equal('Club Sandwich');
            res.body.menu.foodImg.should.equal('Club Sandwich.png');
            res.body.menu.foodPrice.should.equal('1600.00');
            res.body.menu.foodCat.should.equal('SANDWICHES');
            done();
        });
  });
  it('should add a SINGLE Menu Item on /v1/menu POST', (done) => {
      chai.request(server)
      .post('/v1/menu')
      .send({'foodname': 'Club Sandwich', 'foodImg': 'Club Sandwich.png'})
      .end((err, res) =>{
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should.be.a('string');
          done();
      });
  });
  it('should update a SINGLE Menu Item on /v1/menu/<id> PUT', (done) => {
      chai.request(server)
      .get('/v1/menu')
      .end((err, res) =>{
          chai.request(server)
          .put('/v1/menu/'+res.body.menu.id)
          .send({'foodname': 'Club Sandwich'})
          .end((error, response) =>{
              response.should.have.status(201);
              response.should.be.json;
              response.body.should.be.a('object');
              response.body.should.have.property('message');
              response.body.message.should.be.a('string');
              done();
          });
      });
  } );
  it('should delete a SINGLE Menu Item on /v1/menu/<id> DELETE', (done) =>{
      chai.request(server)
      .get('/v1/menu')
      .end((err, res) =>{
          chai.request(server)
          .delete('/v1/menu/'+res.body.menu[0].id)
          .end((error, response) => {
              response.should.have.status(204);
              response.headers = {
      'content-type': 'application/json'
    };
              response.should.be.json;
              response.body.should.be.a('object');
              done();
          });
      });
  });
});