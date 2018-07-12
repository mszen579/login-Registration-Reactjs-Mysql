//register-controller.js

var Cryptr = require('cryptr');
var express = require("express");
var connection = require('./../models/dbConnection'); //to connect to the models
cryptr = new Cryptr('myTotalySecretKey');

module.exports.register = function (req, res) {
    var today = new Date();
    var encryptedString = cryptr.encrypt(req.body.password);
    var users = {
        "name": req.body.name,
        "email": req.body.email,
        "password": encryptedString,
        "created_at": today,
        "updated_at": today
    }
    connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            res.json({
                status: true,
                data: results,
                message: 'user registered sucessfully'
            })
        }
    });
}

//Here I used cryptr module to store encrypted password in the database. If you want to use cryptr you need to do npm install cryptr.
