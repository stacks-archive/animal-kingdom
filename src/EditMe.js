import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EditMe.css'
import Card from './Card'
import { ANIMALS, TERRITORIES, ME_FILENAME } from './constants'

class EditMe extends Component {

  constructor(props) {
    super(props)
    this.selectAnimal = this.selectAnimal.bind(this)
    this.selectTerritory = this.selectTerritory.bind(this)

    this.state = {
      selectedAnimal: false,
      selectedTerritory: false
    }
    
    this.loadMe = this.loadMe.bind(this)

  }

  componentWillMount() {
    this.loadMe()
  }

  loadMe() {
    if(this.props.me) {
        this.setState({selectedAnimal: true, selectedTerritory: true})
      } else {
        this.setState({selectedAnimal: false, selectedTerritory: false})
      }
  }
  

  selectAnimal(e, animal) {
    e.preventDefault()
    this.setState({selectedAnimal: true})
    this.props.saveMe(Object.assign({}, this.props.me, { animal }))
  }

  selectTerritory(e, territory) {
    e.preventDefault()
    this.setState({selectedTerritory: true})
    this.props.saveMe(Object.assign({}, this.props.me, { territory }))
  }


  render() {
    const me = this.props.me
    let myAnimal = null
    let myTerritory = null
    if (me) {
      myAnimal = this.props.me.animal
      myTerritory = this.props.me.territory
    }
    const selectedAnimal = this.state.selectedAnimal 
    const selectedTerritory = this.state.selectedTerritory
    const completed = selectedAnimal && selectedTerritory
    const username = this.props.username

    return (
      <div className="EditMe container">
      <h2>Your animal persona</h2>
      <p>You are the ruler of your kingdom! Pick your animal persona and its home!</p>
        <h3>Select your animal</h3>
        <div className="row card-deck">
        { ANIMALS.map((animal, index) => {
          const selected = myAnimal && myAnimal.id === animal.id
          return (
            <Card path='/animals/' key={index} item={animal} select={this.selectAnimal} selected={selected} />
                )
          })
        }
        </div>
        <h3 className="select-territory">Select your territory</h3>
        <div className="card-deck">
        { TERRITORIES.map((territory, index) => {
          const selected = myTerritory && myTerritory.id === territory.id
          return (
            <Card path='/territories/' key={index} item={territory} select={this.selectTerritory} selected={selected} />
                )
          })
        }
        </div>
        <div className="container row">
          <div className="col-lg-12 done">
            <p>
              <Link to={completed?`/kingdom/${username}`:`/me`} 
                    className="btn btn-primary">Done</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}


export default EditMe
