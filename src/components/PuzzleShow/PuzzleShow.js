import React, { Component } from 'react'
import { puzzleShow, deletePuzzle, updatePuzzle } from '../../api/puzzle'
import Spinner from 'react-bootstrap/Spinner'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class PuzzleShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      puzzle: '',
      target: '',
      solution: '',
      id: ''
    }
  }
  componentDidMount () {
    const { user, msgAlert, match } = this.props
    puzzleShow(match.params.id, user)
      .then(res => this.setState({
        name: res.data.puzzle.name,
        puzzle: res.data.puzzle.puzzle,
        target: res.data.puzzle.target,
        solution: res.data.puzzle.solution,
        id: res.data.puzzle._id
      }))
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

  onDelete = event => {
    event.preventDefault()

    const { msgAlert, history } = this.props

    deletePuzzle(this.state.id, this.props.user)
      // .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Delete',
        message: 'Puzzle Deleted Succesfully',
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ puzzle: null })
        msgAlert({
          heading: 'Delete Failed with error: ' + error.message,
          message: 'Puzzle not deleted',
          variant: 'danger'
        })
      })
  }

  onUpdate = event => {
    event.preventDefault()

    const { msgAlert, history } = this.props
    updatePuzzle(this.state.id, this.state, this.props.user)
      // .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Update',
        message: 'Puzzle Updated Succesfully',
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ puzzle: null })
        msgAlert({
          heading: 'Update Failed with error: ' + error.message,
          message: 'Puzzle not updated',
          variant: 'danger'
        })
      })
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleNameChange = event => this.setState({
    name: event.target.value
  })

  render () {
    const { name, puzzle, target, solution } = this.state
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
          <h3>Puzzle Maker</h3>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Puzzle Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                name="puzzle.name"
                placeholder="Puzzle Name"
                onChange={this.handleNameChange}
              />
            </Form.Group>
            <Form.Group controlId="puzzle">
              <Form.Label>Puzzle</Form.Label>
              <Form.Control
                required
                name="puzzle.puzzle"
                value={puzzle}
                placeholder="Puzzle"
                type="text"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="target">
              <Form.Label>Target Number</Form.Label>
              <Form.Control
                required
                name="target"
                value={target}
                placeholder="Target Number"
                type="text"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="solution">
              <Form.Label>Puzzle Solution</Form.Label>
              <Form.Control
                required
                name="solution"
                value={solution}
                placeholder="Solution"
                type="text"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button onClick={this.onDelete}>
            Delete Puzzle
            </Button>
            {' '}
            <Button onClick={this.onUpdate}>
            Update Puzzle
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}
export default withRouter(PuzzleShow)
