const chai = require('chai')
const chaiHttp = require('chai-http')
const sinon = require('sinon')
const expect = chai.expect
const pathModel = require('../models/pathModel')
const app = require('../server')

chai.use(chaiHttp)


describe('Path API', () => {
  let sandbox
  let requester

  before(() => {
    requester = chai.request(app).keepOpen()
  })

  after(() => {
    requester.close()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('GET /api/paths', () => {
    it('should return status 200', async () => {
      const res = await requester.get('/api/paths')
      expect(res).to.have.status(200)
    })

    it('should return all paths', async () => {
      // Setup
      const mockPaths = [
        { id: 1, description: 'ホームディレクトリ', path: '/home/user' },
        { id: 2, description: 'ドキュメントフォルダ', path: '/home/user/documents' },
      ]

      sandbox.stub(pathModel, 'findAll').resolves(mockPaths)

      // Execute
      const res = await requester.get('/api/paths')

      // Assert
      expect(res.body).to.deep.equal(mockPaths)
    })

    it('should return status 500 when there is a server error', async () => {
      sandbox.stub(pathModel, 'findAll').rejects(new Error('Database Error'))

      const res = await requester.get('/api/paths')

      expect(res).to.have.status(500)
      expect(res.body).to.have.property('error', 'Failed to get paths')
    })
  })


  describe('POST /api/paths', () => {
    it('should return status 201', async () => {
      // Setup
      const newPath = {description:'Test Path',path:'/test/path'};
      const mockResponse = { id: 3, ...newPath };

      sandbox.stub(pathModel, 'create').resolves(mockResponse)

      // Execute
      const res = await requester
        .post('/api/paths')
        .send(newPath);

      // Assert
      expect(res).to.have.status(201);
      expect(res.body).to.deep.equal(mockResponse);
    });

    it('should return status 500', async () => {
      const newPath = {description:'Test Path',path:'/test/path'};
      sandbox.stub(pathModel, 'create').rejects(new Error('Database Error'))

      const res = await requester
        .post('/api/paths')
        .send(newPath)

      expect(res).to.have.status(500)
      expect(res.body).to.have.property('error', 'Failed to create paths')
    });
  });

  describe('DELETE /api/paths/:id', () => {
    it('should return status 204', async () => {
      // Setup
      const mockId =1;
      
      sandbox.stub(pathModel, 'deleteById').resolves()

      // Execute
      const res = await requester
        .delete('/api/paths/${mockId}')

      // Assert
      expect(res).to.have.status(204);
    });

    it('should return status 500', async () => {
      const mockId =1;

      sandbox.stub(pathModel, 'deleteById').rejects(new Error('Database Error'))

      const res = await requester
        .delete('/api/paths/${mockId}')

      expect(res).to.have.status(500)
      expect(res.body).to.have.property('error', 'Failed to delete paths')
    });
  });


})
