import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postTitle:{
        type: String,
        require: true,
    },
    postDescription:{
        type: String,
        require: true,
    },
    postImage:{
        type: String,
        require: true,
    },
},{
    timestamps: true,
})


export default mongoose.model("Post", postSchema);