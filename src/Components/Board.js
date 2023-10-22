import React from 'react';

const Board = (props) => {

    const data = props.getState();

    // variables
    const boardSize = 6;
    let rows = [];
    let count = 0

    // utility method
    const getNumber = () => {
        let newCount = count
        count ++;
        return newCount
    }

    // passing id to parent handleClick function
    const passId = (e) => {
        let id = e.target.id
        props.onClick(id);
    }

    //choose colour for cell based on answer
    const paintCell = (number, i, j) => {
        //const data = props.getState();
        if(data.correctIds.indexOf(number.toString()) >= 0) {
            return <td key={`${i}${j}`} id={number} onClick={passId} className="correctCell"></td>
        }
        if(data.wrongIds.indexOf(number.toString()) >= 0) {
            return <td key={`${i}${j}`} id={number} onClick={passId} className="wrongCell"></td>
        } else return <td key={`${i}${j}`} id={number} onClick={passId}></td>
    }

    // create board
    for (let i = 0; i < boardSize; i++) {
        let cell = []
        for (let j = 0; j < boardSize; j++) {
            let number = getNumber();
            cell.push(paintCell(number, i, j));
        }
        rows.push(<tr key={i}>{cell}</tr>)
    }
    return (
        <table className="board">
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default Board