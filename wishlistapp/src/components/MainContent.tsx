import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskSnack from "./TaskSnack";

function MainContent() {
  const defaultMainState = {
    openAdded: false,
    openDeleted: false,
    content: "",
  }
  const [task, setTask] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [mainState, setMainState] = useState(defaultMainState);

  const onTaskChange = (e) => {
    setTask(e.target.value);
  };

  const onAddTaskClickHandler = () => {
    if (!task || task === "") {
      return;
    }
    setToDoList([...toDoList, { task: task, id: uuid(), isChecked: false }]);
    setTask("");
    handleAddedOpen(task);
  };

  const onDeleteTaskHandler = (id) => {
    let task = toDoList.filter((item) => item.id === id)
    const deletedTask = task.length > 0 ? task[0].task : ""
    const updatesToDoList = toDoList.filter((item) => item.id !== id);
    setToDoList(updatesToDoList);
    handleDeletedOpen(deletedTask);
  };

  const onTaskCheckedHandler = (id) => {
    const updatesToDoList = toDoList.map((item) => item.id === id ? {...item, isChecked: !item.isChecked} : item);
    console.log(updatesToDoList);
    setToDoList(updatesToDoList);
  }

  const handleAddedOpen = (task) => {
    setMainState({...mainState, openAdded: true, content: task + " Task added!"});
  }

  const handleDeletedOpen = (task) => {
    setMainState({...mainState, openDeleted: true, content: task + " Task deleted!"});
  }

  const handleAddedClose = () => {
    setMainState({...mainState, openAdded: false});
  }

  const handleDeletedClose = () => {
    setMainState({...mainState, openDeleted: false});
  }


  return (
    <Container
      sx={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          <TextField
            value={task}
            label="Enter ToDo task"
            variant="outlined"
            onChange={onTaskChange}
            required
          />
          <Button
            onClick={onAddTaskClickHandler}
            variant="contained"
          ><AddIcon />
          </Button>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          {toDoList?.length > 0 &&
            toDoList.map((task) => (
                <Stack key={task.id} direction="row" spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
                  <Checkbox onClick={() => onTaskCheckedHandler(task.id)} size="medium" color="primary"/>
                  <Typography variant="h5" className={ task.isChecked ? "strike-through": ""} >{task.task}</Typography>
                  <Button onClick={() => onDeleteTaskHandler(task.id)}>
                    <DeleteIcon fontSize="medium" />
                  </Button>
                </Stack>
            ))}
          {toDoList?.length === 0 ? (
            <Typography variant="h5">No tasks!</Typography>
          ) : (
            <></>
          )}
        </Stack>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TaskSnack content={mainState.content} severity="success" open={mainState.openAdded} handleClose={handleAddedClose} />
        <TaskSnack content={mainState.content} severity="error" open={mainState.openDeleted} handleClose={handleDeletedClose} />
      </Stack>
    </Container>
  );
}

export default MainContent;
