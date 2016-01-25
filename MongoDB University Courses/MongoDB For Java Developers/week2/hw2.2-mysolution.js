var mycursor = db.grades.find({'type':'homework'}).sort({'student_id':1, 'score':1});
while (mycursor.hasNext()) { 
    cur = mycursor.next(); 
    if (sid != cur['student_id']) {
        db.grades.remove({'_id':cur['_id']})  
    } 
    sid=cur['student_id'];   
}
