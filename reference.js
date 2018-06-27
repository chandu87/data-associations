const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/data_assoication_app2");
const User = require("./models/user");
const Post = require("./models/post");


// User.create({name : "Vijay", email: "vijay@devarakonda.in"},function(err, user){
//     if(err){console.log(err)}
//     else{
//         console.log(user);
//     }
// });

// Post.create({title: "Taxi wala", content: "Suspense"}, function(err, post){
//     if(err){console.log(err);}
//     else{ 
//         User.findOne({name: "Vijay"}, function(err, foundedUser){
//             if(err){ console.log(err);}
//             else{
//                 foundedUser.posts.push(post);
//                 foundedUser.save(function(err, user ){
//                     // console.log(user);

//                 })
//             }
//         });    
//     }
// });

User.findOne({name: "Vijay"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});