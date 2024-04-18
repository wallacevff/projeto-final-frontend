import BackButton from "@/components/BackButton";
import Card from "@/components/Card";
import CreateButton from "@/components/CreateButton";
import CreateForumTopicForm from "@/components/CreateForumTopicForm";
import Layout from "@/components/Layout";
import ModalCreateForumTopic from "@/components/ModalCreateForumTopic";
import Link from "next/link";
import { Topic } from "@/types/dataTypes/Topic";
import { useEffect, useState } from "react";
import { randomUUID } from "crypto";
import { title } from "process";
const crypto = require('crypto');



const Forum = () => {
    const [showModal, setShowModal] = useState("n");
    const toggleModal = () => {
        if (showModal === "y") setShowModal("n");
        if (showModal === "n") setShowModal("y");
    }
    const inicialTopicArray: Topic[] = [];
    const [topics, setTopics] = useState(inicialTopicArray);



    const AddTopic = (title: string) => {
        ;
        let topicsTemp = topics;
        let topicTemp: Topic = {
            Id: crypto.randomBytes(20).toString('hex'),
            Title: title,
            Author: "Wallace Vidal"
        }
        topicsTemp.push(topicTemp);
        setTopics(topicsTemp);
        toggleModal();
    }


    return <Layout
        title="Forum"
        buttons={[<BackButton key={"back-1"}/>, <CreateButton style={{
            marginLeft: "0.8rem"
        }}
            action={toggleModal}
            key={"create-1"}
        />]}
    >
        <ModalCreateForumTopic
            showDialog={showModal}
            closeDialog={toggleModal}
            title={"Criar Tópico"}
        >
            <CreateForumTopicForm
                createAction={AddTopic}
                cancelAction={toggleModal}
            />
        </ModalCreateForumTopic>

        {
            topics.map((t: Topic) =>
                <Link href={`/forum/${t.Id}`} key={t.Id}>
                    <Card title={`Topico ${t.Id}`}>
                        <h3>Descrição: {t.Title}</h3>
                        <h2>Criado por: {t.Author}</h2>
                    </Card>
                </Link>
            )
        }

    </Layout>
}

export default Forum;