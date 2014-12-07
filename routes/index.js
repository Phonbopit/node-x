var index = function(req, res) {
  console.log(__dirname);
  res.render('default', {
    title: 'This is default route'
  });
};

var me = function(req, res) {
  res.send('Chai');
};

var badRoute = function(req, res) {
  res.send("Bad Route! :(");
};

module.exports = {
  index: index,
  me: me,
  badRoute: badRoute
}