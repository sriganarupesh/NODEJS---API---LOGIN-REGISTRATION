const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Tid: String,
    Tname: String,
    Tage: String,
    Taddress: String,
    Tphone: String,
    Tdob: String,
    Temail: String,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_active:  { type: Boolean, default: false },
    created_at:  { type: Boolean, default: false },    
    last_update:  { type: Boolean, default: false }
}, {
    timestamps: true//to monitor the data in/
});

module.exports = mongoose.model('Topper', UserSchema);