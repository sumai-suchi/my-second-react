// export default function Dodo({task,isDone})
// {
//     return (
//         <h3> {task} </h3>
//     )
// }
//* props are readonly we can not change the value of it* /
// if we destructure the value which is passed by then we can also change the value of it




//conditional rendering option:1
// export default function Dodo({task,isDone})
// {
//   if(isDone === true)
//   {
//     return <li>Work done:{task}</li>
    
//   }
//   else
//   {
//     return <li>Working on:{task}</li>
//   }
// }

// Conditional rendering Option:2
// export default function Dodo({task,isDone})
// {
//   if(isDone === true)
//   {
//     return <li>Work done:{task}</li>
    
//   }
  
//     return <li>Working on:{task}</li>
  
// }

// Conditional rendering by ternary Operator

// export default function Dodo({task,isDone})
// {
//     return (
//         <li>{task} : {isDone ?"done":"work on"}</li>
//     )
// }

// conditional 4 &&
// export default function Dodo({task,isDone})
// {
//     return (
//         <li>{task} : {isDone && "done"}</li>
//     )
// }

//option 5 ||
// export default function Dodo({task,isDone})
// {
//     return (
//         <li>{task} : {isDone || "done"}</li>
//     )
// }