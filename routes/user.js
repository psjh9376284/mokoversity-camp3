
/*
 * GET users listing.
 */
var scores = [];

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.save = function(req, res){
  scores.push(req.query.score);
  console.log("Your scores:" + scores);
};