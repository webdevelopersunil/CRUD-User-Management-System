const Customer = require('../models/Customer');
const mongoose = require('mongoose');


/**
 * GET/
 * Homepage
 */
exports.homepage = async (req, res) => {    //async function for database stuff

    const locals = {
        title: "Node Js",
        description: "User Management System"
    }

    res.render('index', locals);
}


/**
 * GET/
 * New Customer Form
 */
exports.addCustomer = async (req, res) => {    //async function for database stuff

    const locals = {
        title: "Add New Customer",
        description: "User Management System"
    }

    res.render('customer/add', locals);
}


/**
 * POST/
 * Create New Customer
 */
exports.postCustomer = async (req, res) => {    //async function for database stuff

    console.log(req.body);

    const newCustomer = new Customer({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,
        email: req.body.email,
        details: req.body.details

    });

    try {

        await Customer.create(newCustomer);
        res.redirect('/');

    } catch (err) {
        console.log(err);
    }
}