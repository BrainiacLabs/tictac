export default class Board {
    constructor(state = new Array(9)) {
        this.state = state;
    }
    insert(symbol, position) {
        if (position > 8 || this.state[position]) return false; //Cell is either occupied or does not exist
        this.state[position] = symbol;
        return true;
    }
    isEmpty() {
        return this.state.every(cell => !cell);
    }
    isFull() {
        return this.state.every(cell => cell);
    }
    getAvailableMoves() {
        const moves = [];
        this.state.forEach((cell, index) => {
            if (!cell) moves.push(index);
        });
        return moves;
    }
    isTerminal() {
        //Return False if board in empty
        if (this.isEmpty()) return false;
        //Checking Horizontal Wins
        if (this.state[0] == this.state[1] && this.state[0] == this.state[2] && this.state[0]) {
            return {
                'winner': this.state[0],
                'direction': 'H',
                'row': 1
            };
        }
        if (this.state[3] == this.state[4] && this.state[3] == this.state[5] && this.state[3]) {
            return {
                'winner': this.state[3],
                'direction': 'H',
                'row': 2
            };
        }
        if (this.state[6] == this.state[7] && this.state[6] == this.state[8] && this.state[6]) {
            return {
                'winner': this.state[6],
                'direction': 'H',
                'row': 3
            };
        }
        //Checking Vertical Wins
        if (this.state[0] == this.state[3] && this.state[0] == this.state[6] && this.state[0]) {
            return {
                'winner': this.state[0],
                'direction': 'V',
                'row': 1
            };
        }
        if (this.state[1] == this.state[4] && this.state[1] == this.state[7] && this.state[1]) {
            return {
                'winner': this.state[1],
                'direction': 'V',
                'row': 2
            };
        }
        if (this.state[2] == this.state[5] && this.state[2] == this.state[8] && this.state[2]) {
            return {
                'winner': this.state[2],
                'direction': 'V',
                'row': 3
            };
        }
        //Checking Diagonal Wins
        if (this.state[0] == this.state[4] && this.state[0] == this.state[8] && this.state[0]) {
            return {
                'winner': this.state[0],
                'direction': 'D',
                'row': 1
            };
        }
        if (this.state[2] == this.state[4] && this.state[2] == this.state[6] && this.state[2]) {
            return {
                'winner': this.state[2],
                'direction': 'D',
                'row': 2
            };
        }
        //If no winner but the board is full, then it's a draw
        if (this.isFull()) {
            return {
                'winner': 'draw'
            };
        }

        //return false otherwise
        return false;
    }
}