const mongoose = require('mongoose'); // gives us interface to mongodb and maps models directly to db

var Interviewer = mongoose.model('Interviewer', {
    name: { type: String, required: true },
    level: { type: String, required: false },
    skills: [{ type: String }],
    office: { type: String, required: false },
    status: { type: String, required: false }
})

// export the model schema. whenever someone 'requires' this component, pass it back to them
module.exports = Interviewer;