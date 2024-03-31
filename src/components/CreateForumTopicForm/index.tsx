import { ButtonGroup, TextField } from "@mui/material";
import CreateForumTopicFormCSS from "./CreateForumTopicForm.module.css";
import Button from "../Button";
import QuillEditor from "../QuillEditor";
import { useState } from "react";

const CreateForumTopicForm = (props: any) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    return <div className={CreateForumTopicFormCSS.FormGroup}>
        <TextField
            label="Título"
            variant="outlined"
            //   fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginBottom: "10px" }}
        />

        <ButtonGroup style={{ marginTop: "20px" }}>
            <Button title="Criar" style={{
                backgroundColor: "blue"
            }}
                action={() => props.createAction(title)}
            />
            <Button title="Cancelar" style={{
                marginLeft: "10px",
                backgroundColor: "red"
            }}
                action={() => props.cancelAction()}
            />
        </ButtonGroup>
    </div>
}

export default CreateForumTopicForm;