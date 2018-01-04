const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{

  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({_id: new ObjectID("5a4b22cc01be9645d4e7ec0f")},{$set: { name: 'Tal' }, $inc: {age: 2 } }, {returnNewDocument: true}).then((res)=>{
    console.log(res);
  })

  client.close();
});
