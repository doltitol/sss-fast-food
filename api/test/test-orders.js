let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app/server');
let orders = require('../app/models/orders')
let should = chai.should();

chai.use(chaiHttp);


describe('Orders', () => {

    beforeEach((done) =>{
        let orders = {
		username: 'gstowe',
		email: 'gstowe@yahoo.com',
		phone: '08094567832',
		orderdesc: 'Club Sandwich, Green Dream Smoothie',
		totalPrice: '3200.00',
		date: '',
		status: 'COMPLETED'
        };
        done();
        
    });
    afterEach((done) => {
        done();
    });

  it('should list ALL Orders on /v1/orders GET', (done) => {
      chai.request(server)
      .get('/v1/orders')
      .end((err,res) =>{
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('orders');
          res.body.orders.should.be.a('array');
          res.body.orders[0].should.have.property('username');
          res.body.orders[0].should.have.property('email');
          res.body.orders[0].should.have.property('phone');
          res.body.orders[0].should.have.property('orderdesc');
          res.body.orders[0].should.have.property('totalPrice');
          res.body.orders[0].should.have.property('date');
          res.body.orders[0].should.have.property('status');
          res.body.orders[0].username.should.equal('gstowe');
          res.body.orders[0].email.should.equal('gstowe@yahoo.com');
          res.body.orders[0].phone.should.equal('08094567832');
          res.body.orders[0].orderdesc.should.equal('Club Sandwich, Green Dream Smoothie');
          res.body.orders[0].totalPrice.should.equal('3200.00');
          res.body.orders[0].date.should.equal('');
          res.body.orders[0].status.should.equal('COMPLETED');
          done();
      });
  });
  it('should list a SINGLE Order on /v1/orders/<id> GET', (done) => {
      let order = {
        id: 1,
		username: 'gstowe',
		email: 'gstowe@yahoo.com',
		phone: '08094567832',
		orderdesc: 'Club Sandwich, Green Dream Smoothie',
		totalPrice: '3200.00',
		date: "",
		status: 'COMPLETED'
      };
        chai.request(server)
        .get('/v1/orders/'+order.id)
        .end((err, res) =>{
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('orders');
            res.body.orders.should.be.a('object');
            res.body.orders.should.have.property('id');
            res.body.orders.should.have.property('username');
            res.body.orders.should.have.property('email');
            res.body.orders.should.have.property('phone');
            res.body.orders.should.have.property('orderdesc');
            res.body.orders.should.have.property('totalPrice');
            res.body.orders.should.have.property('date');
            res.body.orders.should.have.property('status');
            res.body.orders.id.should.equal(1);
            res.body.orders.username.should.equal('gstowe');
            res.body.orders.email.should.equal('gstowe@yahoo.com');
            res.body.orders.phone.should.equal('08094567832');
            res.body.orders.orderdesc.should.equal('Club Sandwich, Green Dream Smoothie');
            res.body.orders.totalPrice.should.equal('3200.00');
            res.body.orders.date.should.equal('');
            res.body.orders.status.should.equal('COMPLETED');
            done();
        });
  });
  it('should add a SINGLE Order on /v1/orders POST', (done) => {
      chai.request(server)
      .post('/v1/orders')
      .send({'username': 'gstowe','email': 'gstowe@yahoo.com'})
      .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should.be.a('string');
          done();
      });
  });
  it('should update a SINGLE Order on /v1/orders/<id> PUT', (done) => {
      chai.request(server)
      .get('/v1/orders')
      .end((err, res) =>{
          chai.request(server)
          .put('/v1/orders/'+res.body.orders.id)
          .send({'username': 'gstowe'})
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
  it('should delete a SINGLE Order on /v1/orders/<id> DELETE', (done) =>{
      chai.request(server)
      .get('/v1/orders')
      .end((err, res) => {
          chai.request(server)
          .delete('/v1/orders/'+res.body.orders[0].id)
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