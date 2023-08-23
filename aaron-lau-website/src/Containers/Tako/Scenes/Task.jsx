import React, { Component } from 'react'
import { useState } from 'react';
import './Task.scss'

const Priority = Enum({
  Highest: 5,
  High: 4,
  Medium: 3,
  Low: 2,
  Lowest: 1
})

const Status = Enum({
  Backlog: 'BACKLOG',
  ToDo: 'TO DO',
  InProgress: 'IN PROGRESS',
  Blocked: 'BLOCKED',
  Review: 'READY FOR REVIEW',
  Done: 'DONE'
})

export default class Task extends React.Component {
  constructor(Title = 'New task...', prior = Priority.Medium, Description = '', stat = Status.Backlog) {
    this.title = Title
    this.priority = prior
    this.description = Description
    this.status = stat
  }
  

  render(){
    return (
      <div className='task'>
        <div className='header'>
        <nav className='title'>{this.props.Title}</nav>
        <nav className='priority'>{this.props.Priority}</nav>
        </div>
        <div className='body'>
          <button className='status'>{this.props.Status}</button>
          <div>
            <p className='description'>{this.props.description}</p>
          </div>
        </div>
      </div>
    )
  }
}