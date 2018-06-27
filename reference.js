const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/data_assoication_app2");

const postSchema = mongoose.Schema({
    title : String,
    content: String
});
const Post = mongoose.model("Post", postSchema);

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});
const User = mongoose.model("User", userSchema);

// User.create({name : "Vijay", email: "vijay@devarakonda.in"},function(err, user){
//     if(err){console.log(err)}
//     else{
//         console.log(user);
//     }
// });

// Post.create({title: "Pelli chupulu", content: "Love story"}, function(err, post){
//     if(err){console.log(err);}
//     else{ 
//         User.findOne({name: "Vijay"}, function(err, foundedUser){
//             if(err){ console.log(err);}
//             else{
//                 foundedUser.posts.push(post);
//                 foundedUser.save(function(err, user ){
//                     console.log(user);

//                 })
//             }
//         });    
//     }
// });