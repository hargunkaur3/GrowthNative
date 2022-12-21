const mqtt = require('mqtt');
const redis = require('redis');

//connect to mqtt client
const client = mqtt.connect('mqtt://localhost:1883');

//connect to redis client
const redisClient = redis.createClient();

//listen to mqtt messages
client.on('message', (topic, message) => {
  const messageObj = JSON.parse(message.toString());
  //save the data to redis
  redisClient.hset('students', messageObj.rollNo, messageObj);
});

//subscribe to mqtt topic
client.subscribe('typing_speed');