const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/data_assoication_app");

const postSchema = mongoose.Schema({
    title : String,
    content: String
});
const Post = mongoose.model("Post", postSchema);

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema]
});
const User = mongoose.model("User", userSchema);



// const newUser = new User({
//     name: "Mahesh Babu",
//     email: "charlie@brown.edu"
// });
// newUser.posts.push({
//     title:"Srimanthudu",
//     content: "Blocbuster - Must watch movie"
// });

// newUser.save(function(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });
// const newPost = new Post({
//     title: "Apples",
//     content: "There so tasty"
// });
// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// });
User.findOne({name: "Mahesh Babu"}, function(err, user){
    if(err)
    {
        console.log(err);
    }else{
        user.posts.push({
            title : "Athadu",
            content: "Family thriller 200Days movie"
        });
        user.save(function(err, userData){
            if(err){
                console.log(err);
            }else{
                console.log(userData);
            }
        });
    }
})