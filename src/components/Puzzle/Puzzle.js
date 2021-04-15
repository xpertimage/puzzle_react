import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createPuzzle } from '../../api/puzzle'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class PuzzleMaker extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      puzzle: '',
      target: '',
      solution: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onPuzzleMaker = event => {
    event.preventDefault()

    // const { msgAlert, history, setUser } = this.props
    const { msgAlert, history } = this.props
    console.log('props.user.token:', this.props.user.token)
    createPuzzle(this.state, this.props.user.token)
      // .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Puzzle Maker',
        message: 'puzzle saved',
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ name: '', puzzle: '', target: '', solution: '' })
        msgAlert({
          heading: 'Puzzle Maker Failed with error: ' + error.message,
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { name, target, puzzle, solution } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Puzzle Maker</h3>
          <Form onSubmit={this.onPuzzleMaker}>
            <Form.Group controlId="name">
              <Form.Label>Puzzle Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={name}
                placeholder="Enter puzzle name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="puzzle">
              <Form.Label>Puzzle</Form.Label>
              <Form.Control
                required
                name="puzzle"
                value={puzzle}
                type="text"
                placeholder="Puzzle"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="target">
              <Form.Label>Target Number</Form.Label>
              <Form.Control
                required
                name="target"
                value={target}
                type="text"
                placeholder="Target Number"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="solution">
              <Form.Label>Puzzle Solution</Form.Label>
              <Form.Control
                required
                name="solution"
                value={solution}
                type="text"
                placeholder="Solution"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(PuzzleMaker)
