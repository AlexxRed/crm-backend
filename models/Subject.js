const { Schema, model } = require("mongoose");

const subjectSchema = new Schema(
    {
        subject: {
        type: String,
        },
        private: {
            type: Boolean
        },
        price: { any: [] },
    },
    { versionKey: false, timestamps: true },
);

const Subject = model('subject', subjectSchema);

module.exports = Subject;