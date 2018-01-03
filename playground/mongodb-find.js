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
  // db.collection('Users').find().toArray().then((docs)=>{
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch todos', err);
  // })

  // db.collection('Users').find().count().then((docs)=>{
  //   console.log(`Todos count: ${docs}`);
  // }, (err)=>{
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Users').find({name:'Tal'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
  },(err)=>{
    console.log('Unable to fetch names', err);
  });

  client.close();
});
