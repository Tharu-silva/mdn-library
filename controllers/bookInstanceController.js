const BookInstance = require('../models/bookinstance');

// Display list of all BookInstances.
// Handles a get req on the catalog/bookinstance
exports.bookinstance_list = (req, res) => {
  BookInstance.find({})
  .populate('book')
  .exec(function (err, bookInstance_list) {
    if (err) { return next(err); }
    //Successful, so render
    res.render('book_instances', { title: 'Book Instance List', bookinstance_list: bookInstance_list });
  });
};

// Display detail page for a specific BookInstance.
// Handles a get req on the catalog/bookinstance
exports.bookinstance_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
};

// Display BookInstance create form on GET.
// // Handles a get req on the catalog/bookinstance/create
exports.bookinstance_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
// Handles a post req on the catalog/bookinstance/create
exports.bookinstance_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: BookInstance create POST');
};

// Display BookInstance delete form on GET.
// Handles a get req on the catalog/bookinstance/delete
exports.bookinstance_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
// Handles a post req on the catalog/bookinstance/delete
exports.bookinstance_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
// Handles a get req on the catalog/bookinstance/update
exports.bookinstance_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
// Handles a post req on the catalog/bookinstance/update
exports.bookinstance_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: BookInstance update POST');
};
