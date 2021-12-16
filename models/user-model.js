const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');

const saltRounds = 10;

const UserSchema = new mongoose.Schema({

    //REQUIRED:
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    //NOT REQUIRED:
    estado  : { type: Boolean, default: true },
    score   : { type: Number, default: 0}

});

//funcion que permite crear password
UserSchema.pre('save',function(next){
    if(this.isNew || this.isModified('password')){
        const document=this;
        bcrypt.hash(document.password, saltRounds,(err, hashedPassword)=>{
            if(err){
                next(err);
            }else{
                document.password=hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});

//funcion que compara password creado
UserSchema.methods.isCorrectPassword=function(password,callback){
    bcrypt.compare(password, this.password,function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err,same);
        }
    });
}


//Exportación del modelo
module.exports = mongoose.model('User', UserSchema);