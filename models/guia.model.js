const mongoose = require("mongoose")
const {Schema}= mongoose

const GuiaSchema=new Schema(
    {
        username: String,
        fecha:Date,
        largo:Number,
        ancho:Number,
        alto:Number,
        peso:Number,
        dir_recogida:Number,
        ciudad_recogida:String,
        nombre_des:String,
        nit_des:String,
        dir_des:String,
        ciudad_des:String,
        estado:String
    }
);

const GuiaModel=mongoose.model("guias",GuiaSchema);
module.exports=GuiaModel