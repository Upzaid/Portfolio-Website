import React, {useEffect, useState} from 'react'

export default function GameOfLife (){
    
    const [columns, setColumns] = useState(50)
    const [rows, setRows] = useState(50)
    const [grid, setGrid] = useState([])

    useEffect(()=>{
        setGrid(createGrid(rows, columns))
    }, [])

    const createGrid = (rows, columns) =>{
        let board = []

        for (let i = 0; i < rows; i++){
            let row = []
            for (let j = 0; j < columns; j++){
                row.push({
                    value: 0,
                    row: i,
                    column: j
                })
            }
            board.push(row)
        }
        return board
    }
    
    const changeCell = (i, j) =>{
        const newGrid = [...grid]
        newGrid[i][j].value === 0 ?  newGrid[i][j].value = 1 : newGrid[i][j].value = 0
        setGrid(newGrid);
    }

    const countNeighbors = (board, row, column) =>{
        let sum = 0
        const Rows = parseInt(rows)
        const Columns = parseInt(columns)
        for (let i = -1; i <= 1 ; i++){
            for (let j = -1; j <= 1 ; j++){
                sum += board[(row + i + Rows)%Rows][(column + j + Columns)%Columns].value
            }
        }
        
        sum -= board[row][column].value
        
        return sum
    } 

    const life = (board) =>{
        
        const newGrid = []

        for (let i = 0; i < board.length; i++){
            const newRow = []
            for (let j = 0; j < board[i].length; j++){
                const neighbors = countNeighbors(board, i, j)
                if (board[i][j].value === 0 && (neighbors === 3)){
                    newRow.push({
                        value: 1,
                        row: i,
                        column: j
                    })
                }else if(board[i][j].value === 1 && (neighbors < 2 || neighbors > 3)){
                    newRow.push({
                        value: 0,
                        row: i,
                        column: j
                    })
                }else{
                    newRow.push({
                        value: board[i][j].value,
                        row: i,
                        column: j
                    })
                }
            }
            newGrid.push(newRow)
        }
        return newGrid
    }

    // Inline Styles for the Grid

    const rowStyle = {
        display: 'flex'
    }

    const cellStyleInactive = {
        backgroundColor: '#fff',
        height: '10px',
        width: '10px',
        border: '1px solid #999',
    }

    const cellStyleActive ={
        backgroundColor: '#444',
        height: '10px',
        width: '10px',
        border: '1px solid #999'
    }

    const gridStyle ={
        width: '80vw',
        display: 'grid',
        justifyContent: 'center',
        padding: "30px"
    }

    return(
        <div className='container'>
            <div className='content'>
                <label >Rows</label>
                <input min='1' max='30' type="number" onChange={e=> setRows(e.target.value)}/>
                <label >Columns</label>
                <input min='1' max='30' type="number" onChange={e=> setColumns(e.target.value)}/>
                <br />
                <button onClick={()=>setGrid(createGrid(rows, columns))}>Generate Board</button>
                <button onClick={()=> {
                    setGrid(life(grid))
                    }}>Next Generation</button>
                <div style={gridStyle}>
                    {grid.map((row, i) =>{
                        return(
                            <div key={i}className="cell" style={rowStyle}>
                                {row.map(cell=>{
                                    return(
                                        <div 
                                            key={`${cell.row} ${cell.column}`}
                                            className="cell" style={cell.value === 0 ? cellStyleInactive : cellStyleActive } 
                                            onDragLeave={()=> changeCell(cell.row, cell.column)}
                                            onClick={()=> changeCell(cell.row, cell.column)}>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}