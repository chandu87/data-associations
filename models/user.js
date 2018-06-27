const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});
module.exports = mongoose.model("User", userSchema);
