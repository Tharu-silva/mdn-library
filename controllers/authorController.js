const Author = require('../models/author')


// Display a list of all authors
// Middleware that will handle a get req catalog/author router
// Display list of all Authors.
exports.author_list = function(req, res, next) {
  Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('author_list', { title: 'Author List', author_list: list_authors });
    });
};
// Display the detail page for a specific Author
// Middleware that will handle a get req on the catalog/author/:id
exports.author_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Author detail ${res.params.id}`)
}

//Handles a get req on the route catalog/author/create
exports.author_create_get = (req,res) => {
  res.send('NOT IMPLEMENTED: Author create GET');
}

//Handles a post req on the route catalog/author/create
exports.author_create_post = (req,res) => {
  res.send('NOT IMPLEMENTED: Author create POST');
}

//Handles a get req on catalog/author/delete
exports.author_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete GET');
}

//Handles a post req on the catalog/author/delete
exports.author_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

//Handles a get req on the catalog/author/update
exports.author_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update GET');
};

//Handles a post req on the catalog/author/update\
exports.author_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update POST');
};