import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import purple from '@material-ui/core/colors/purple';


const useStyles = makeStyles((theme) => createStyles({
    table: {
        minWidth: 650,
      },
    tableHead: {
        backgroundColor: purple['A100'],
    }
}));


function TableComponent(props) {

    const {headerList, rows} = props;

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                <TableRow>
                    {headerList.map((item, index) => (
                        <TableCell align="center" key={index}>{item}</TableCell>
                    ))}
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={index}>
                        {Object.keys(row).map(function (key, index) {
                            return (
                                <TableCell align="center" key={index}>{row[key]}</TableCell>
                            );
                        })}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableComponent;



