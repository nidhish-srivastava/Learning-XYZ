import jwt from 'jsonwebtoken'
import {db} from '../index'

export const getPosts = (req,res)=>{
    const {cat} = req.query
    const q = cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts"
    db.query(q,[cat],(err,data)=>{
        if(err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}

export const getPost = (req,res)=>{
    const {id} = req.params
    const q = "SELECT p.id,`username`,`title`,`desc`,p.img,u.img AS userImg,`cat`,`date` FROM users u JOIN posts p ON u.id=p.id WHERE p.id = ?"
    db.query(q,[id],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data[0]);
    })
}

export const addPost = (req,res) =>{
    const {title,desc,img,cat,date,id} = req.body
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("not authenticated")
    jwt.verify(token,"jwtkey",(err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid")
        const q = "INSERT INTO posts(`title`, `desc`,`img`,`cat`,`date`,`uui`) VALUES (?) "
    const values = [title,desc,img,cat,date,id]
    db.query(q,[values],(err,data)=>{
        if (err) return res.status(500).json(err);
        return res.json("Post has been created.");
    })
    })
}

export const deletePost = (req,res) =>{
    const token = req.cookies.access_token
    if(!token) return res.status(401).send(`NOt autheticated`)
    
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    const postId = req.params.id

    const q = "DELETE FROM posts WHERE `id`=? AND `uid` = ?"
    db.query(q,[postId,userInfo.id],(err,data)=>{
        if (err) return res.status(403).json("You can delete only your post!");
        return res.json("Post has been deleted!");
    })
  })

}


export const updatePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const postId = req.params.id;
      const q =
        "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";
  
      const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];
  
      db.query(q, [...values, postId, userInfo.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Post has been updated.");
      });
    });
  };