import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import our axios request to get all puzzles
import { indexPuzzle } from '../../api/puzzle'
import Spinner from 'react-bootstrap/Spinner'
class PuzzleIndex extends Component {
  constructor (props) {
    super(props)
    // keep track of the puzzles in state, initially we don't have puzzles
    this.state = {
      puzzles: null
    }
  }
  // once the component is created and inserted into the dom (mounted)
  componentDidMount () {
    // destructure our props
    const { msgAlert, user } = this.props
    // fetch all of our puzzles
    indexPuzzle(user)
      // set the puzzles state to the puzzles we got back in our response's data
      .then(res => this.setState({ puzzles: res.data.puzzles }))
      .then(() => msgAlert({
        heading: 'Loaded Puzzles Successfully',
        message: 'Viewing all puzzles. Click on one to see its page.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to load puzzles',
          message: 'Could not load puzzles with error:' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    // destructure the puzzles
    const { puzzles } = this.state
    // if we don't have any puzzles yet, show that we are loading them
    if (!puzzles) {
      return (
        <Spinner variant='primary' animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    console.log('puzzles:', puzzles)
    const puzzlesJsx = puzzles.map(puzzle => (
      // Create a link to each individual movie
      <Link to={`/puzzles/${puzzle._id}`} key={puzzle._id}>
        <li>
          {puzzle.name}
        </li>
      </Link>
    ))
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Puzzles</h3>
          <ul>
            {puzzlesJsx}
          </ul>
        </div>
      </div>
    )
  }
}
export default PuzzleIndex
