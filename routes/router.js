const router = require("express").Router();

const TodoSchema = require("../schema/todo_schema");

router.get("/",async(req,res)=>{

    const allItems = await TodoSchema.find();

    res.render("index",{items:allItems});
})

router.post("/add/todo",(req,res)=>{
    const {add} = req.body;
    
    const newItem = new TodoSchema({list_item:add})

    newItem.save().then(()=>{
        console.log("Successfully Added!");
        res.redirect("/");
    }).catch((err)=>{
        console.log(err);
    });

})

router.get('/delete/item/:_id',(req,res)=>{
    const {id} = req.params;
    TodoSchema.deleteOne({id}).then(()=>{
        console.log("Successfully Deleted");
        res.redirect("/");
    }).catch((err)=>{
        console.log(err);
    });
})


module.exports = router;