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
    interface Post {
        id: number,
        title: string,
        content: string,
        openEditor: boolean,
        responses: string[],
        created_at: Date
    }
    const Posts: Post[] = [];
    const [posts, setPosts] = useState(Posts);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [responseContent, setResponseContent] = useState("");
    const [response, setResponse] = useState<boolean>(false);


    function Responder(postId: number, content: string) {

    }

    function Postar(title: string, content: string) {
        const postsTemp = posts;
        let post: Post = {
            id: Math.random(),
            title: title,
            content: content,
            openEditor: false,
            responses: [],
            created_at: new Date()
        }
        console.log(post);
        postsTemp.push(post);
        setPosts(postsTemp);
        setTitle("");
        setContent("");
    }

    const Editor = <QuillEditor value={responseContent} onChange={(e) => setResponseContent(e)} />
    const ResponseButton =
        function toggleResponseEditorAndButton() {
            setResponse(!response);
        }

    function responseEditor(id: number) {
        var postsTemp = posts.map(c => {
            if (c.id === id)
                c.openEditor = true;
            return c;
        }
        );
        setPosts(postsTemp);
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
            style={{ marginBottom: "10px" }}
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
            {posts.length > 0 && posts.toReversed().map((post) => (
                <Paper key={post.id} style={{ padding: '16px', margin: '16px 0' }}>
                    <h3>{post.title}</h3>
                    {/* Render HTML content using dangerouslySetInnerHTML */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    {post.responses.toReversed().map(res =>
                        <div dangerouslySetInnerHTML={{ __html: res }} />
                    )

                    }

                    {/* <VideoEmbed content={post.content} /> */}
                    <small>{post.created_at.toLocaleString()}</small>
                    {!post.openEditor &&
                        <Button key={post.id}
                            style={
                                {
                                    "backgroundColor": "darkblue",
                                    "marginTop": "1rem",
                                    "display": "flex",
                                    "justifyContent": "center",
                                    "width": "6rem"
                                }}
                            title="Responder"
                            action={() => responseEditor(post.id)}
                        />
                        || (post.openEditor &&
                            <div>
                                {Editor}
                                <Button style={{ "backgroundColor": "darkblue", "marginTop": "1rem", "display": "flex", "justifyContent": "center", "width": "4rem" }} title="Postar" action={() => Responder(post.id, responseContent)} ></Button>;
                            </div>

                        )

                    }

                </Paper>

            ))}
        </Grid>

    </Layout>
}

export default Forum;