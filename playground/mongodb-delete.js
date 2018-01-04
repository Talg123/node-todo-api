const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{

  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Users').deleteMany({name: 'Tal'}).then((result)=>{
  //   console.log(result.result.n);
  // })

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a4dc0c5b440732b22c28a62')}).then((result)=>{
    console.log(result);
  })

  client.close();
});
