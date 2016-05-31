var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = require('../models/student')



/* GET users listing. */
router.get('/create', function (req, res) {
    var student = new Student({ name: 'ys', age: 12, gender: '男', birthday: new Date() });
    student.save();
    res.send('respond with a resource');
});

router.get('/list', function (req, res) {
    //Student.fetch(function (err, students) {
    //    if (err)
    //        console.log(error);
    //    console.log(students);
    //});
    Student.remove({ name: 'ys' }, function (err) {
        if (err) { console.log(err) }

        console.log('%s删除成功','文档');
    })
    res.send('respond with a resource');
});

module.exports = router;