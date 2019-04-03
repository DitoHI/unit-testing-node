const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const demo = require('./demo');

describe('demo', () => {
    context('add', () => {
        it('should add two numbers', () => {
            expect(demo.add(1,2)).to.equal(3);
        })
    });

    context('callback add', () => {
        it('should test the callback', (done) => {
            demo.addCallback(1, 2, (err, result) => {
                expect(err).to.not.exist;
                expect(result).to.equal(3);
                done();
            })
        })
    });

    context('test promise', () => {
        // it('should add with a promise', (done) => {
        //     demo.addPromise(1, 2).then(result => {
        //         expect(result).to.equal(3);
        //         done();
        //     }).catch(err => {
        //         console.log('caugh error');
        //         done(err);
        //     })
        // });

        // it('should test a promise with return', () => {
        //     return demo.addPromise(1, 2).then(result => {
        //         expect(result).to.equal(3);
        //     })
        // });

        it('should test promise with async wait', async function () {
            let result = await demo.addPromise(1, 2);
            expect(result).to.equal(3);
        });

        it('should test promise with chai as promised', async function () {
            await expect(demo.addPromise(1, 2)).to.eventually.equal(3);
        });
    });

    context('test doubles', () => {
        it('should spy on log', function () {
            let spy = sinon.spy(console, 'log');
            demo.foo();

            expect(spy.calledOnce).to.be.true;
            expect(spy).to.have.been.calledOnce;
            spy.restore();
        });
    })
});