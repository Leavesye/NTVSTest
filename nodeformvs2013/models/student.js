var mongoose = require('mongoose');
var StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    birthday:Date
});

// 静态方法
StudentSchema.statics = {
    fetch: function (cb) { 
        return this
            .find({})
            .exec(cb);
    },
    findById: function (id,cb) { 
        return this.findone({_id:id}).exec(cb)
    },
    delete: function (id, cb) { 
        return this.remove({ _id: id }).exec(cb);
    }
};

var Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
