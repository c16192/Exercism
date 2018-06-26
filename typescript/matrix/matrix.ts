class Matrix {
    public rows: number[][] = [];
    public columns: number[][] = [];
    constructor(matrixString: string) {
        let rows: string[] = matrixString.split('\n');
        for(let row of rows){
            this.rows.push(row.split(' ').map((s)=>parseInt(s)));
        }
        for(let i = 0; i < rows[0].length; i++){
            let column: number[] = [];
            for(let j = 0; j < this.rows.length; j++){
                column.push(this.rows[j][i]);
            }
            this.columns.push(column);
        }
    }
}

export default Matrix
