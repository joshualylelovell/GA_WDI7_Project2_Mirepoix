var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
  title:         { type: String,  required: true },
  description:   String,
  website:       String,
  ingredients:   { type: String, required: true},
  directions:    String,
  notes:         String,
  rating:        Number,
  img:           String
  },
  { timestamps: true }  // createdAt, updatedAt
);

function date2String(date) {
  var options = {
    weekday: 'long', year: 'numeric', month: 'short',
    day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
  };
  return date.toLocaleDateString('en-US', options);
}

RecipeSchema.methods.getCreatedAt = function() {
  return date2String(this.createdAt);
};

RecipeSchema.methods.getUpdatedAt = function() {
  return date2String(this.updatedAt);
};

module.exports = mongoose.model('Recipe', RecipeSchema);
