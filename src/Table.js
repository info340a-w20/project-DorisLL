import React from 'react';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import './css/WebpageStyle.css'

// // Import firebase and StyledFirebaseAuth
// import firebase from "firebase";
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import LogIn from './LogIn';

// // Configure Firebase (get configuration from Firebase Console)
// const firebaseConfig = {
//   apiKey: "AIzaSyDZRrWIFCCG5zDIR1xU9SpuPG6PNs6NuJg",
//   authDomain: "info430-flu-website.firebaseapp.com",
//   databaseURL: "https://info430-flu-website.firebaseio.com",
//   projectId: "info430-flu-website",
//   storageBucket: "info430-flu-website.appspot.com",
//   messagingSenderId: "508636748505",
//   appId: "1:508636748505:web:668dedbd0f2166156dfcc8",
//   measurementId: "G-KBV16ZWHT6"
// };





const styles = theme => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0px !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.Component {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 52,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={headerProps =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}
const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

const allrows = require('./data/csvjson.json');

export class ReactVirtualizedTable extends React.Component {
  constructor(props) {
    super(props)
    this.setState({
      input: ''
    });
    // this.allLocations = firebase.database.ref("locations")
    // this.allLocations.on('value', )
  }

  upDateInputValue () { // Save the selected zip from props (passing in from VaccinePage) and save as state
    let propsValue = this.props.zip
    this.setState({
        input: propsValue
    })
  }


  render() {
    let rows = [];
    let wants =  this.props.zip; 
    for (var i = 0; i < allrows.length; i++) {
      let SingleRow = allrows[i];
      if (SingleRow.ZIP == wants) {
        rows.push(SingleRow);
      }
    }
    let widthAvg =  window.innerWidth / 6;
    return (
      <Paper style={{ height: 200, width: '100%' }}>
        <VirtualizedTable
          rowCount={rows.length}
          rowGetter={({i, index }) => rows[index]}
          columns={[
            {
              width: widthAvg,

              label: 'Name',
              dataKey: 'Name',
            },
            {
              width: widthAvg,
              label: 'Address',
              dataKey: 'Address',
            },
            {
              width: widthAvg,
              label: 'City',
              dataKey: 'City',
            },
            {
              width: widthAvg,
              label: 'Latitude',
              dataKey: 'Latitude',
              numeric: true,
            },
            {
              width: widthAvg,
              label: 'Longitude',
              dataKey: 'Longitude',
              numeric: true,
            },
            {
              width: widthAvg,
              label: 'ZIP',
              dataKey: 'ZIP',
              numeric: true,
            },
          ]}
        />
      </Paper>
    );
  }
}