import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client'
import './Tako.scss'
//import { Task } from './Scenes';

const Tako = () => {
  const [tasks, setTasks] = React.useState([])
  const [input, setInput] = React.useState("")
  const [column, setColumn] = React.useState([])
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime(), //unique value each time its run
      text: input,
      completed: false,
    }

    setTasks([...input].concat(newTask))
    setInput("")
  }
  function deleteTask(id) {
    const updatedTasks = [...tasks].filter((e) => e.id !== id)
    setTasks(updatedTasks);
  }

  // setup: a linked list (leaf list) of linked lists; value of leaf based on position on screen
  // displays task boxes (leafs) with list of tasks (linked list)
  // can add new box on rightmost side
  // can add new task at the top or by pressing "+" button at the end of each leaf (after linked list)
 
  class LeafList{
    constructor() {
      this.head = null;
      this.size = 0;
    }
    insert(data){
      let leaf = new Leaf(data);
      let current;

      if (!this.head){
        this.head= leaf;
      } else {
        current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = leaf;
      }
      this.size++;
    }
    removeAt(index) {
      if (index > 0 && index > this.size) {
        return;
      }
      let current = this.head;
      let previous;
      let count = 0;
      if (index == 0){
        this.head = current.next;
      } else {
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.size--;
    }
    clearList(){
      this.head = null;
      this.size = 0;
    }
  }
  class Leaf{
    constructor(value, name ="To Do", left = null, right = null){
      this.value = value;
      this.name = name;
      this.list = new LinkedList();
      this.left = left;
      this.right = right;
    }
    changeName(newName){
      this.name = newName;
    }
  }
  class LinkedList{
    constructor() {
      this.head = null;
      this.size = 0;
    }
    insert(data){
      let node = new Node(data);
      let current;

      if (!this.head){
        this.head= node;
      } else {
        current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.size++;
    }
    removeAt(index) {
      if (index > 0 && index > this.size) {
        return;
      }
      let current = this.head;
      let previous;
      let count = 0;
      if (index == 0){
        this.head = current.next;
      } else {
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.size--;
    }
    clearList(){
      this.head = null;
      this.size = 0;
    }
    getItems() {
      let current = this.head;
      const array = []
      while(current){
        array.push(current)
        current = current.next
      }
    }
  }
  class Node{
    constructor(name="", content="", next = null) {
      this.name = name;
      this.content = content;
      this.next = next;
    }
  }

  return (
    <section className='Tako'>
      <div>Tako: Task Management</div>
      <div className='Input'>
        <form onSubmit={handleSubmit}>
          <label>Start a new task: 
            <input 
            type = "text"
            placeholder='Refactor to .NET 7'
            onChange={(e) => setInput(e.target.value)}
            value = {input}
            />
          </label>
          <button className='app_Tako-button' type="submit">Takoff!</button>
        </form>
      </div>
      {tasks.forEach((e) => <div key={e.id}>
        <div>{e.text} <button onClick={() => deleteTask(e.id)}>X</button></div>
        
        </div> 
         )}
      <section className='DisplayContent'>
        <LeafList Kanban>
          <Leaf Backlog></Leaf>
          <Leaf InProgress></Leaf>
          <Leaf Done></Leaf>
        </LeafList>
      </section>
      
    </section>
  )
}

export default Tako