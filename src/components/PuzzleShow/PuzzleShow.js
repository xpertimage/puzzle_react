import React, { Component } from 'react'
import { puzzleShow } from '../../api/puzzle'
import Spinner from 'react-bootstrap/Spinner'
import { withRouter } from 'react-router-dom'
class PuzzleShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      puzzle: null
    }
  }
  componentDidMount () {
    const { user, msgAlert, match } = this.props
    puzzleShow(match.params.id, user)
      .then(res => this.setState({ puzzle: res.data.puzzle }))
      .then(() => msgAlert({
        heading: 'Loaded Puzzle Successfully',
        message: 'The puzzle is now displayed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to load puzzle.',
          message: 'Could not load puzzle with error:' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { puzzle } = this.state
    if (!puzzle) {
      return (
        <Spinner variant='primary' animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>{puzzle.name}</h3>
          <h4>{puzzle.puzzle}</h4>
          <h4>{puzzle.target}</h4>
          <h4>{puzzle.solution}</h4>
        </div>
      </div>
    )
  }
}
export default withRouter(PuzzleShow)
