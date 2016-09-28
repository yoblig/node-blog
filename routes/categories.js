var express = require('express');
var router = express.Router();
var mongo = require("mongodb");
var db = require("monk")('localhost/nodeblog');

/* GET Posts listing. */
router.get('/add', function(req, res, next) {
        res.render('addcategory', {
            'title':'Add Category'
        });
});

router.post('/add', function(req, res, next){
    var category = req.body.name;
    
    var categories = db.get('categories');
    categories.insert({'name': category}, function(err, category){
        req.flash('Success', 'Category Addes');
        res.location('/');
        res.redirect('/');
    });
});


module.exports = router;
