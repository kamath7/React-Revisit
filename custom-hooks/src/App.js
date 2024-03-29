import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/useHttp";
function App() {
  const [tasks, setTasks] = useState([]);
  const transformer = useCallback((tasksObj) => {
    const loadedTasks = [];

    for (const tasksKey in tasksObj) {
      loadedTasks.push({ id: tasksKey, text: tasksObj[tasksKey].text });
    }
    setTasks(loadedTasks);
  }, []);
  const { isLoading, error, sendReq: fetchTasks } = useHttp(transformer);

  useEffect(() => {
    fetchTasks({url: 'https://lalle-react-app-default-rtdb.firebaseio.com/tasks.json'});
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

// import React from 'react';
// import BackwardCounter from './components/BackwardCounter';
// import ForwardCounter from './components/ForwardCounter';

// function App() {
//   return (
//     <React.Fragment>
//       <ForwardCounter />
//       <BackwardCounter />
//     </React.Fragment>
//   );
// }

// export default App;
// const fetchTasks = async (taskText) => {
//   setIsLoading(true);
//   setError(null);
//   try {
//     const response = await fetch(
//       "https://lalle-react-app-default-rtdb.firebaseio.com//tasks.json"
//     );

//     if (!response.ok) {
//       throw new Error("Request failed!");
//     }

//     const data = await response.json();

//     const loadedTasks = [];

//     for (const taskKey in data) {
//       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
//     }

//     setTasks(loadedTasks);
//   } catch (err) {
//     setError(err.message || "Something went wrong!");
//   }
//   setIsLoading(false);
// };
