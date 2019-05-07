const Datastore = require('nedb');
const db = new Datastore({filename: 'server/tmp/log.txt', autoload: true});


class LogWriter {
    write(doc) {
        db.insert(doc);
    }

};
export let logWriter = new LogWriter();
