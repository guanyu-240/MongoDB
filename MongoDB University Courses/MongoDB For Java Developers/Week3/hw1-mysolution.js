var my_cursor = db.students.find({"scores.type": "homework"});
my_cursor.forEach(function(s){
  var scores_new = s.scores.sort(function(sc1, sc2){
    return sc1.score < sc2.score && sc1.type==="homework" && sc2.type==="homework"}); 
    scores_new.pop(); 
    db.students.update( { _id: s._id }, { $set: {scores: scores_new} } );
  });
