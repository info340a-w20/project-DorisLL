import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import './css/WebpageStyle.css'

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
      // paddingRight: theme.direction === 'rtl' ? '0px !important' : undefined,
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
  }

  upDateInputValue () { // Save the selected zip from props (passing in from VaccinePage) and save as state
    let propsValue = this.props.zip
    this.setState({
        input: propsValue
    })
  }


  render() {
    let rows = [];
    let wants =  this.props.zip; //Q: how to pass the value from two-layers deeper to here?
    for (var i = 0; i < allrows.length; i++) {
      let SingleRow = allrows[i];
      if (SingleRow.ZIP == wants) {
        rows.push(SingleRow);
      }
    }
    return (
      <Paper style={{ height: 200, width: '100%' }}>
        <VirtualizedTable
          rowCount={rows.length}
          rowGetter={({i, index }) => rows[index]}
          columns={[
            {
              width: '180',
              label: 'Name',
              dataKey: 'Name',
            },
            {
              width: '160',
              label: 'Address',
              dataKey: 'Address',
            },
            {
              width: '100',
              label: 'City',
              dataKey: 'City',
            },
            {
              width: '100',
              label: 'Latitude',
              dataKey: 'Latitude',
              numeric: true,
            },
            {
              width: '100',
              label: 'Longitude',
              dataKey: 'Longitude',
              numeric: true,
            },
            {
              width: '100',
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










// import React from 'react';
// import './css/WebpageStyle.css'

// const data = require('./data/csvjson.json')
// let headers = ['Name', 'Address', 'City', 'Latitude', 'Longitude', 'ZIP']
// export class TableDisplay extends React.Component {

//   createTable () {
//     let table = document.createElement('table');
//     })
//   }

// render () {
//   let headRow = document.createElement('tr');

//   headers.forEach(header => {
//     let header = document.createElement('th');
//     let textNode = document.createTextNode(header);
//     header.appendChild()
  
//   return (
//     <table>


//     </table>
//   )
// }
// }













// import React from 'react';
// import './css/WebpageStyle.css'

// const data = require('./data/LocArray.json')

// this.props.input <-- inputZip
// export class TableDisplay extends React.Component {
//   constructor(props) {
//     super(props)
//     // this.state = {
//     //   selectedData:[]
//     // };

//   };

//   render() {
//     let selectedZip = this.props.input;
//     let Singlerow = '';
//     let SelectedRows = [];
//     for(var i = 0; i < data.length; i++) {
//       Singlerow = data[i];
//       let rowZip = Singlerow[5];
//       if (rowZip === selectedZip) {
//         SelectedRows.push(Singlerow);
//       }
//     }
//     SelectedRows.forEach(row => {
            
//     })  
  
//     return (
//       <table>
//         <thead>
//           <th>Name</th>
//           <th>Address</th>
//           <th>City</th>
//           <th>Latitude</th>
//           <th>Longitude</th>
//           <th>ZIP</th>
//       </thead>
//         <tbody>
//           SelectedRows.forEach(row => {

//           })          

//         </tbody>
//       </table>
//     )
//   }
// }
