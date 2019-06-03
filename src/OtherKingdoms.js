import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { UserSession } from 'blockstack'
import { appConfig, OTHER_KINGDOMS } from './constants'
import { loadRuler, loadSubjects } from './utils'

class OtherKingdoms extends Component {

  constructor(props) {
    super(props)
    this.state = {
      kingdoms: []
    }
    this.userSession = new UserSession({ appConfig })
    this.resolveKingdoms = this.resolveKingdoms.bind(this)
  }

  componentWillMount() {
    this.resolveKingdoms()
  }

  resolveKingdoms() {
    const kingdoms = this.state.kingdoms
    OTHER_KINGDOMS.map((kingdom, index) => {
      return loadRuler(this.userSession, kingdom.ruler, kingdom.app)
      .then(ruler => {
        kingdoms[index] = {
          ruler: {
            username: kingdom.ruler,
            data: ruler
          },
          subjects: [],
          app: kingdom.app
        }

        this.setState({ kingdoms })
        return loadSubjects(this.userSession, kingdom.ruler, kingdom.app)
        .then(subjects => {
            kingdoms[index].subjects = subjects
            this.setState({ subjects })
        })
        .catch(error => {
          console.log('problem loading subjects')
          console.log(error)
          kingdoms[index].subjects = []
          kingdoms[index].error = true
          this.setState({ kingdom })
        })
      })
      .catch((error) => {
        console.log('ruler not found')
        console.log(error)
        kingdoms[index] = {
          error: true,
          ruler: {
            username: kingdom.ruler,
            data: null,
          },
          subjects: [],
          app: kingdom.app
        }
      })
    })
  }

  render() {
    const kingdoms = this.state.kingdoms
    return (
      <div className="OtherKingdoms container">
          <h2>Other kingdoms</h2>
          <div className="list-group">
          {kingdoms.length === 0 ?
            <div
              className="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Loading other kingdoms...</h5>
              </div>
              <p class="mb-1">&nbsp;</p>
            </div>
            :
            <div>
            {kingdoms.map((kingdom, index) => {
              const protocol = kingdom.app.split('//')[0]
              const hostname = kingdom.app.split('//')[1]
              const planet = kingdom.app
              const ruler = kingdom.error ? '' : kingdom.ruler
              const data = ruler ? ruler.data : ''
              const animal = data ? data.animal : ''
              if (kingdom.error) {
                return (
                  <div
                    className="list-group-item list-group-item-action flex-column align-items-start"
                    key={index}
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{ kingdom.ruler.username }'s kingdom can't be reached</h5>
                    </div>
                    <p class="mb-1">Is the planet { planet } under siege?</p>
                  </div>
                )
              } else {
                return (
                  <Link
                    className="list-group-item list-group-item-action flex-column align-items-start"
                    to={`/kingdom/${protocol}/${hostname}/${kingdom.ruler.username}`}
                    key={index}
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{ kingdom.ruler.username } the { animal ? animal.name : '' }'s kingdom</h5>
                      <span class="badge badge-primary badge-pill" title="Subjects">{ kingdom.subjects.length }</span>
                    </div>
                    <p class="mb-1">From planet { planet }</p>
                  </Link>
                )
              }
            })}
            </div>
          }
          </div>
      </div>
    );
  }
}

export default OtherKingdoms
