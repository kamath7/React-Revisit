import { useState } from "react";
import useHttp from "../../hooks/useHttp";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  const { isLoading, error, sendReq } = useHttp(createTask);

  const enterTaskHandler = async (taskText) => {
    sendReq({
      url: "https://lalle-react-app-default-rtdb.firebaseio.com/tasks.json",

      method: "POST",
      body: JSON.stringify({ text: taskText }),
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        text: taskText,
      },
    });
    createTask.bind(null, taskText);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
