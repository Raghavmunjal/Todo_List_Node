const mongoose =  require ("mongoose");

const TodoSchema = new mongoose.Schema({

    list_item:{
        type:String,
        required:true,
    },

})

module.exports = new mongoose.model("items",TodoSchema);