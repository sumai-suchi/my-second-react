import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// import Dodo from './Dodo'

import Actor from './Actor'

import Singers from './Singers'

function App() {
  
   const Actors=['sreyaghosha','sonunigam','atifaslam','arijitsingh']



  const singers=[
    {Id:1, name:'sharukh khan', age:60},
    {Id:2, name:'Salman khan', age:79},
  {Id:3, name:'Rohit dubey', age:28},
  {Id:4, name:'kajol', age:4}
  ]


  return (
    
    <>
       
      <h1>Vite + React</h1>



      <Actor name='jon ren'></Actor>
      {
        singers.map(actor => <Singers singer={actor}></Singers>)
      }

      {
        Actors.map(singer => <Actor name={singer}></Actor>)
      }

     
      {/* <Dodo task="Read and learn" isDone={false}></Dodo>
      <Dodo task="Understand concept" isDone={true}></Dodo>
      <Dodo task="then apply it" isDone={false}></Dodo> */}
       {/* <Device name='laptop'price='20000' ></Device>
       <Device name='mobile'price='7000' ></Device>
       <Device name='computer'price='10000' ></Device>
      <Person></Person>
      <Student grade='seven' score='55'></Student>
      <Student grade='five' score='90'></Student>
      <Student grade='eight' score='70'></Student>
      <Hello></Hello>    
      <DeveloperStyle></DeveloperStyle>  */}
      
    </>
  )
}

function Device(props)
{
  return (
    <h3>This device is: {props.name} and price is {props.price}</h3>
  )
}


function Person()
{
  const age=25;
  const money=20;
  const person={name:'sakib',age:12}
  return <h3>I am {person.name} with age {age +
     money}</h3>
}
function Hello()
{
  return <p>hello word</p>
}

function DeveloperStyle()
{
    const developer={
      padding:'30px',
      border:'2px solid black',
      background:'brown',
      maxWidth:'400px',
      margin:'0px auto'


    }
    return (
      <div style={developer}>
        <h3>hello</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus iste harum repellat nemo? Voluptatibus autem doloribus ea rerum consequatur asperiores, amet dolorum molestias, iste consequuntur, eligendi commodi eaque expedita?</p>
      </div>
    )
}

function Student({grade,score})
{
  return (
    <div className='student'>
      <h3>This is a student </h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}
export default App
