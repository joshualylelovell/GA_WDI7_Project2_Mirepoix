var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipe');

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

function authenticate(req, res, next) {
  if(!req.isAuthenticated()) {
    res.redirect('/');
  }
  else {
    next();
  }
}

// INDEX
router.get('/', authenticate, function(req, res, next) {
  var recipes = global.currentUser.recipes;
  res.render('recipes/index', { recipes: recipes, message: req.flash() });
});

// NEW
router.get('/new', authenticate, function(req, res, next) {
  var recipe = {
    title:         '',
    description:   '',
    website:       '',
    ingredients:   '',
    directions:    '',
    notes:         '',
    rating:        ''
  };
  res.render('recipes/new', { recipe: recipe, message: req.flash() });
});

// SHOW
router.get('/:id', authenticate, function(req, res, next) {
  var recipe = currentUser.recipes.id(req.params.id);
  if (!recipe) return next(makeError(res, 'Document not found', 404));
  res.render('recipes/show', { recipe: recipe, message: req.flash() } );
});

// CREATE
router.post('/', authenticate, function(req, res, next) {
  var recipe = {
    title: req.body.title,
    description: req.body.description,
    website: req.body.website,
    ingredients: req.body.ingredients,
    directions: req.body.directions,
    notes: req.body.notes,
    rating: req.body.rating
  };
  currentUser.recipes.push(recipe);
  currentUser.save()
  .then(function() {
    res.redirect('/recipes');
  }, function(err) {
    return next(err);
  });
});

// EDIT
router.get('/:id/edit', authenticate, function(req, res, next) {
  var recipe = currentUser.recipes.id(req.params.id);
  if (!recipe) return next(makeError(res, 'Document not found', 404));
  res.render('recipes/edit', { recipe: recipe, message: req.flash() } );
});

// UPDATE
router.put('/:id', authenticate, function(req, res, next) {
  var recipe = currentUser.recipes.id(req.params.id);
  if (!recipe) return next(makeError(res, 'Document not found', 404));
  else {
    recipe.title = req.body.title;
    recipe.description = req.body.description;
    recipe.website = req.body.website;
    recipe.ingredients = req.body.ingredients;
    recipe.directions = req.body.directions;
    recipe.notes = req.body.notes;
    recipe.rating = req.body.rating;
    currentUser.save()
    .then(function(saved) {
      res.redirect('/recipes');
    }, function(err) {
      return next(err);
    });
  }
});

// DESTROY
router.delete('/:id', authenticate, function(req, res, next) {
  var recipe = currentUser.recipes.id(req.params.id);
  if (!recipe) return next(makeError(res, 'Document not found', 404));
  var index = currentUser.recipes.indexOf(recipe);
  currentUser.recipes.splice(index, 1);
  currentUser.save()
  .then(function(saved) {
    res.redirect('/recipes');
  }, function(err) {
    return next(err);
  });
});

module.exports = router;
