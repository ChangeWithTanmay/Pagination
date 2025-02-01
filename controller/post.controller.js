import Post from "../model/post.model.js";

export const creatPost = async(req, res) =>{
    try {
        const postData = new Post(req.body);

        if(!postData){
            return res.status(404).json({
                message: "Post Data not found."
            })
        }

        const saveData = await postData.save();
        res.status(200).json(saveData);


    } catch (error) {
        res.status(500).json({error: error})
    }
}

export  const posts = async(req, res)=>{
    try {
        // page code data in string from, I need int data that is resion use parseInt()
        // page = "1" we need: 1 || 1

        const page = parseInt(req.query.page) || 1;
        const perPage = 3;
        // Method -> count total post.
        const totalPost = Post.countDocuments();
        // 
        const totalPage = Math.ceil(totalPost / perPage);


        if(page > totalPage){
            return res.status(404).json({message: "page not found" })
        }

        const posts = await Post.find()
        .skip((page-1)*perPage)
        .limit(3)
        .exec();

        res.status(200).json({posts, totalPage, page})

    } catch (error) {
        res.status(500).json({error: error})
    }
}