import React, { Component } from 'react';
import Cell from './Cell.jsx';
import '../styles/Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board (5)
 * - ncols: number of cols of board (5)
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
	static defaultProps = {
		nrows: 5,
		ncols: 5,
		chanceLightStartsOn: 0.25
	};
	constructor(props) {
		super(props);

		// TODO: set initial state
		this.state = {
			hasWon: false,
			board: this.createBoard()
		};
	}

	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */

	createBoard() {
		// TODO: create array-of-arrays of true/false values

		// we're generating random true and false values based on 'this.props.chanceLightStartsOn'
		let board = [];

		for (let y = 0; y < this.props.nrows; y++) {
			let row = [];

			// loop through
			for (let x = 0; x < this.props.ncols; x++) {
				// add random true and false values into 'row'
				row.push(Math.random() < this.props.chanceLightStartsOn);
			}

			// add the rows into the board
			board.push(row);
		}

		return board;
	}

	/** handle changing a cell: update board & determine if winner */

	flipCellsAround(coord) {
		let { ncols, nrows } = this.props;
		let board = this.state.board;
		let [ y, x ] = coord.split('-').map(Number);

		// helper function
		function flipCell(y, x) {
			// if this coord is actually on board, flip it

			if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
				board[y][x] = !board[y][x];
			}
		}

		// TODO: flip this cell and the cells around it
		flipCell(y, x);
		// flip surrounding cells
		flipCell(y, x - 1); // flip left cell
		flipCell(y, x + 1); // flip right cell
		flipCell(y - 1, x); // flip below cell
		flipCell(y + 1, x); // flip above cell

		// win when every cell is turned off
		// TODO: determine is the game has been won
		let hasWon = board.every((row) => row.every((cell) => !cell));

		this.setState({
			board: board,
			hasWon: hasWon
		});
	}

	/** Render game board or winning message. */

	render() {
		// if the game is won, just show a winning msg & render nothing else
		// TODO
		// make table board
		// TODO

    if (this.state.hasWon) {
      return <h1>You Won!</h1>
    }

		let tableBoard = [];
		for (let y = 0; y < this.props.nrows; y++) {
			let row = [];
			for (let x = 0; x < this.props.ncols; x++) {
				// create coord for key
				let coord = `${y}-${x}`;
				row.push(
					<Cell
						key={coord}
						isLit={this.state.board[y][x]}
						flipCellsAroundMe={() => this.flipCellsAround(coord)}
					/>
				);
			}
			tableBoard.push(<tr key={y}>{row}</tr>);
		}

		return (
      <>
        <table className="Board">
          <tbody>{tableBoard}</tbody>
        </table>
      </>
		);
	}
}

export default Board;
