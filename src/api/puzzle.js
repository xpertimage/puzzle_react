import apiUrl from '../apiConfig'
import axios from 'axios'

// Create a puzzle
export const createPuzzle = (puzzle, token) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/puzzles',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: {
      puzzle: {
        name: puzzle.name,
        puzzle: puzzle.puzzle,
        target: puzzle.target,
        solution: puzzle.solution
      }
    }
  })
}

// Index - see all of one user's puzzles
export const indexPuzzle = (user) => {
  return axios({
    url: apiUrl + '/puzzles',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// Destroy a puzzle
export const deletePuzzle = (id, user) => {
  return axios({
    url: apiUrl + '/puzzles' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const updatePuzzle = (id, puzzle, user) => {
  return axios({
    url: apiUrl + '/puzzles',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      puzzle: {
        name: puzzle.name,
        puzzle: puzzle.puzzle,
        target: puzzle.target,
        solution: puzzle.solution
      }
    }
  })
}

export const puzzleShow = (id, user) => {
  return axios({
    url: `${apiUrl}/puzzles/` + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
