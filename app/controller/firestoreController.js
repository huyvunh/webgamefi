var firestoreDB = require('../../config/Database/firestoreDatabase/firestore');
const moment = require('moment-timezone');
const tele = require('../../app/telegramBot/tele');

exports.dataUser = async () => {

    let body = req.body;
    console.log(body)
    const name = body['name'], createdAtTimestmap = body['currentDate'];

    try {

        const currentDate = moment.tz(new Date(), 'Asia/Ho_Chi_Minh').unix();
        const currentCreatedAt = moment.unix(currentDate).tz('Asia/Ho_Chi_Minh').format('MM/DD/YYYY HH:mm:ss',)
        const id = 'USER-' + currentDate;
        let newStudent = {
            id: id,
            name: name,
            createdAt: currentCreatedAt,
            createdAtTimestmap: currentDate
        }
        await firestoreDB.collection('Students').doc(id).set(newStudent);

        return res.status(200).json({
            status: 200, message: 'Create User Success!'
        })

    } catch (error) {
        return res.status(400).json({
            status: 400, message: 'Request fail!'
        })
    }
};
