import BackButton from "@/components/BackButton";
import Card from "@/components/Card";
import CreateButton from "@/components/CreateButton";
import Layout from "@/components/Layout";
import QuillEditor from "@/components/QuillEditor";
import Button from "@/components/Button";
import { Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { randomInt } from "crypto";

const Forum = () => {
    interface Post{
        id: number,
        title: string,
        content: string,
        created_at: Date
    }
    const Posts: Post[] = [];
    const [posts, setPosts] = useState(Posts);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    function Postar(title: string, content: string){
        const postsTemp = posts;
        let post: Post = {
            id : Math.random(),
            title: title,
            content: content,
            created_at : new Date()
        }
        console.log(post);
        postsTemp.push(post);
        setPosts(postsTemp);
        setTitle("");
        setContent("");
    }


    return <Layout
        title="Tópico"
        buttons={[<BackButton />]}
    >
        <TextField
            label="Título"
            variant="outlined"
        //   fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <QuillEditor value={content} onChange={(e) => setContent(e)}

        />
        <Button
        style={
            {
                "backgroundColor": "darkblue",
                "marginTop": "1rem",
                "display": "flex",
                "justifyContent": "center",
                "width": "4rem"
            }}
        title="Postar"
        action={() => Postar(title, content)}
        ></Button>
        <Grid item xs={12}>
          {posts.map((post) => (
            <Paper key={post.id} style={{ padding: '16px', margin: '16px 0' }}>
              <h3>{post.title}</h3>
              {/* Render HTML content using dangerouslySetInnerHTML */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* <VideoEmbed content={post.content} /> */}
              <small>{post.created_at.toLocaleString()}</small>
              <Button
                style={
                    {
                        "backgroundColor": "darkblue",
                        "marginTop": "1rem",
                        "display": "flex",
                        "justifyContent": "center",
                        "width": "6rem"
                    }}
                    title="Responder" />
            </Paper>
          ))}
        </Grid>

    </Layout>
}

export default Forum;