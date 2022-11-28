const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const authSchema = mongoose.Schema({




},{timestamps: true, versionKey: false});

const Auth=mongoose.model("Auth", authSchema);
module.exports=Auth;