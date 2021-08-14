const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = Number(process.env.SALTROUNDS) || 5;

const {
    ObjectId
} = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    userRole: {
        type: String,
        required: true,
        enum: {
            values: ['Agent', 'Client'],
            message: '{VALUE} is not supported'
        }

    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [4, 'Username must be at least 4 characters long!'],
        // validate: {
        //     validator: function (v) {
        //         return /[a-zA-Z0-9]+/g.test(v);
        //     },
        //     message: props => `${props.value} must contains only latin letters and digits!`
        // },
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [4, 'Password must be at least 4 characters long!'],
        validate: {
            validator: function (v) {
                return /[a-zA-Z0-9]+/g.test(v);
            },
            message: props => `${props.value} must contains only latin letters and digits!`
        },
    },
    offers: [{
        type: ObjectId,
        ref: "Offer"
    }],
    booked: [{
        type: ObjectId,
        ref: "Offer"
    }]
});

userSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }
}

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                next(err);
            }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    next(err);
                }
                this.password = hash;
                next();
            })
        })
        return;
    }
    next();
});

module.exports = mongoose.model('User', userSchema);