const { Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    name: {
        type:String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    }
},{
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals:true
    }
})

UsuarioSchema.virtual('tareas', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

module.exports = model('Usuario',UsuarioSchema)