let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app/server');
let users = require('../app/models/users')
let should = chai.should();

chai.use(chaiHttp);


describe('Users', () => {

    beforeEach((done) =>{
        let users = {
        fullname: 'Sarah Tower',
		username: 'stower',
		email1: 'stower@gmail.com',
		phonenum: '08093456789',
		address1: '5, crow street',
		address2: 'off Benson Street',
		city: 'Surulere',
		postcode: '',
		state: 'Lagos',
		country: 'Nigeria',
		usercat: 'USER'
        };
            done();
        
    });
    afterEach((done) =>{
        done();
    });

  it('should list ALL Users on /v1/users GET', (done) => {
      chai.request(server)
      .get('/v1/users')
      .end((err,res) =>{
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('users');
          res.body.users.should.be.a('array');
          res.body.users[0].should.have.property('fullname');
          res.body.users[0].should.have.property('username');
          res.body.users[0].should.have.property('email1');
          res.body.users[0].should.have.property('phonenum');
          res.body.users[0].should.have.property('address1');
          res.body.users[0].should.have.property('address2');
          res.body.users[0].should.have.property('city');
          res.body.users[0].should.have.property('postcode');
          res.body.users[0].should.have.property('state');
          res.body.users[0].should.have.property('country');
          res.body.users[0].should.have.property('usercat');
          res.body.users[0].fullname.should.equal('Sarah Tower');
          res.body.users[0].username.should.equal('stower');
          res.body.users[0].email1.should.equal('stower@gmail.com');
          res.body.users[0].phonenum.should.equal('08093456789');
          res.body.users[0].address1.should.equal('5, crow street');
          res.body.users[0].address2.should.equal('off Benson Street');
          res.body.users[0].city.should.equal('Surulere');
          res.body.users[0].postcode.should.equal('');
          res.body.users[0].state.should.equal('Lagos');
          res.body.users[0].country.should.equal('Nigeria');
          res.body.users[0].usercat.should.equal('USER');
          done();
      });
  });
  it('should list a SINGLE user on /v1/users/<id> GET', (done) => {
      let user = {
          id: 1,
        fullname: 'Sarah Tower',
		username: 'stower',
		email1: 'stower@gmail.com',
		phonenum: '08093456789',
		address1: '5, crow street',
		address2: 'off Benson Street',
		city: 'Surulere',
		postcode: '',
		state: 'Lagos',
		country: 'Nigeria',
		usercat: 'USER'
      };
        chai.request(server)
        .get('/v1/users/'+user.id)
        .end((err, res) =>{
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('users');
            res.body.users.should.be.a('object');
            res.body.users.should.have.property('id');
            res.body.users.should.have.property('fullname');
            res.body.users.should.have.property('username');
            res.body.users.should.have.property('email1');
            res.body.users.should.have.property('phonenum');
            res.body.users.should.have.property('address1');
            res.body.users.should.have.property('address2');
            res.body.users.should.have.property('city');
            res.body.users.should.have.property('postcode');
            res.body.users.should.have.property('state');
            res.body.users.should.have.property('country');
            res.body.users.should.have.property('usercat');
            res.body.users.id.should.equal(1);
            res.body.users.fullname.should.equal('Sarah Tower');
            res.body.users.username.should.equal('stower');
            res.body.users.email1.should.equal('stower@gmail.com');
            res.body.users.phonenum.should.equal('08093456789');
            res.body.users.address1.should.equal('5, crow street');
            res.body.users.address2.should.equal('off Benson Street');
            res.body.users.city.should.equal('Surulere');
            res.body.users.postcode.should.equal('');
            res.body.users.state.should.equal('Lagos');
            res.body.users.country.should.equal('Nigeria');
            res.body.users.usercat.should.equal('USER');
            done();
        });
  });
  it('should add a SINGLE user on /v1/users POST', (done)=> {
      chai.request(server)
      .post('/v1/users')
      .send({'fullname': 'Tom Smith', 'username': 'tsmith'})
      .end((err, res) =>{
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should.be.a('string');
          done();
      });
  });
  it('should update a SINGLE user on /v1/users/<id> PUT', (done) => {
      chai.request(server)
      .get('/v1/users')
      .end((err, res) =>{
          chai.request(server)
          .put('/v1/users/'+res.body.users.id)
          .send({'fullname':'Sarah Smith'})
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
  it('should delete a SINGLE user on /v1/users/<id> DELETE', (done) =>{
      chai.request(server)
      .get('/v1/users')
      .end((err, res) =>{
          chai.request(server)
          .delete('/v1/users/'+res.body.users[0].id)
          .end((error, response) =>{
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