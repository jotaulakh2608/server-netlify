import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const userSchema = mongoose.Schema({
    name:String,
    email:String
})

autoIncrement.initialize(mongoose.connection)
user.plugin(autoIncrement.plugin, 'user')

const user = mongoose.model('user', userSchema)

export default user