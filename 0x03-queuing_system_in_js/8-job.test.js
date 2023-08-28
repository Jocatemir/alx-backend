const createPushNotificationsJobs = require('./8-job');
const kue = require('kue');

const queue = kue.createQueue();
const { expect } = require('chai');

describe('createPushNotificationsJobs', () => {
    before(() => queue.testMode.enter());
    afterEach(() => queue.testMode.clear());
    after(() => queue.testMode.exit());

    it('displays an error message if jobs is not an array', () => {
        const job = {
            phoneNumber: '4153518780',
            message: 'This is the code 1234 to verify your account',
        };
        expect(() => createPushNotificationsJobs(job, queue)).to.throw(Error, 'Jobs is not an array');
    });

