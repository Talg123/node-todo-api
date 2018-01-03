const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{

  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Some text',
  //   completed: false
  // },(err, result)=>{
  //   if(err ){
  //     return console.log('Could not add to DB', err);
  //   }
  // console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.collection('Users').insertOne({
    name: 'Gal',
    age: 28,
    location: 'Israel'
  },(err, result)=>{
    if(err){
      return console.log('Unable to add', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});
