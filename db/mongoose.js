var mongoose =require ('mongoose')

mongoose.Promise = global.Promise; 
mongoose.set('useCreateIndex', true);
mongoose.set( 'useFindAndModify', false)
mongoose.set('useUnifiedTopology', true )

const CONNECTION_URL = 'mongodb+srv://hashim:hmshashim@cluster0.vscyk.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
})

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected')
})
mongoose.connection.on('error', error => {
  console.log('Mongo connection has an error', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})