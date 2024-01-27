// a state which takes input from user,function for setting the input
// The user input is object,not a string

import { create } from "zustand";

// When user clicks on add,it shud be added to the array of objects
// a state for all the tasks which is array of obj
// function for setting the the array state when we click on add

export const useTodoStore = create((set) => ({
  task: {
    id : 1,
    title: "",
    completed: false,
  },
  setTask: (e) => set((state) => ({
    task : {
        ...state.task,
        [e.target.name] : e.target.value,
    }
  }
  )
  ),
  tasks : [],
  addTask : ()=>set((state)=>({
      task : {
          ...state.task,
          id : state.task.id+1,
      },
    tasks : [...state.tasks,state.task]
  })),
  clearTaskInput : ()=>set((state)=>({task : {
    ...state.task,
    title : ""
  }})),
toggleIsComplete: (taskId) => set((state) => ({
  tasks: state.tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  ),
})),
deleteTask : (taskId)=>set((state)=>({
    tasks : state.tasks.filter((task)=>task.id != taskId),
    task : {
        ...state.task,
        id : state.task.id-1,
    },
}))
}));

//* If i try updating the same stae two times in a function,it wont work,thats why i created two different functions for this task(one called addTask(which includes adding the id then the user updated input obj),2nd function for clearing the task input)

function Todo() {
    const task = useTodoStore((state)=>state.task)
    const setTask = useTodoStore((state)=>state.setTask)
    const addTask = useTodoStore((state)=>state.addTask)
    const tasks = useTodoStore((state)=>state.tasks)
    const clearTaskInput = useTodoStore((state)=>state.clearTaskInput)
    const toggleIsComplete = useTodoStore((state)=>state.toggleIsComplete)
    const deleteTask = useTodoStore((state)=>state.deleteTask)

    console.log(tasks);
    const addTaskHandler = ()=>{
        addTask()
        clearTaskInput()
    }
  return <div>
    <input type="text" name="title" placeholder="Enter task..." value={task.title} onChange={setTask} />
    <button onClick={addTaskHandler}>Add</button>
    {tasks.map((e,i)=>(
        <div key={e?.id}>
            <h2 style={{textDecoration : `${e.completed? "line-through" : ""}`}}>
            {e?.id} . {e.title}
            </h2>
            <input type="checkbox" checked={e.completed} onChange={()=>toggleIsComplete(e.id)} />
            <button onClick={()=>deleteTask(e.id)}>Delete</button>
            <hr />
            </div>
    ))}
  </div>;
}

export default Todo;
