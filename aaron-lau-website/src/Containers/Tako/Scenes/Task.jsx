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
  constructor(Title, prior = Priority.Medium, Description = '', stat = Status.Backlog) {
    this.title = Title
    this.priority = prior
    this.description = Description
    this.status = stat
  }
  SetStatus(newStatus){
    switch(newStatus) {
      case 'BACKLOG':
        this.status = Status.Backlog;
        return null;
      case 'TO DO':
        this.status = Status.ToDo;
        return null;
      case 'IN PROGRESS':
        this.status = Status.InProgress;
        return null;
      case 'BLOCKED':
        this.status = Status.Blocked;
        return null;
      case 'READY FOR REVIEW':
        this.status = Status.Review;
        return null;
      case 'DONE':
        this.status = Status.Done;
        return null;
      default:
        return null;
    } 
  }
  SetTitle(Title){
    this.title = Title;
    return null;
  }
  SetDescription(Description){
    this.description = Description;
    return null;
  }
  SetPriority(newPriority){
    switch(newPriority){
      case 'HIGHEST':
        this.priority = Priority.Highest;
        return null;
      case 'HIGH':
        this.priority = Priority.High;
        return null;
      case 'MEDIUM':
        this.priority = Priority.Medium;
        return null;
      case 'LOW':
        this.priority
    }
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