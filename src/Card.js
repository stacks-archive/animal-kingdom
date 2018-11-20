import React, { Component } from 'react'
import './Card.css'


class Card extends Component {

  render() {
    const selected = this.props.selected
    const path = this.props.path
    const item = this.props.item
    const select = this.props.select
    return (
      <div
        className={`card ${selected ? 'border-primary' : ''}`}
        onClick={(e) => select(e, item)}
      >
      <img className="card-img-top" src={`${path}${item.id}.jpg`} alt={item.name} />
      <div className="card-body">
        <h4 className="card-title">{item.name}</h4>
        <p className="card-text">{item.superpower}</p>
        <button className='btn btn-primary btn-block' disabled={selected}>{ selected ? 'Selected' : 'Select' }</button>
      </div>
    </div>
    )
  }
}

export default Card
