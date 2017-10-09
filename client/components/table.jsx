import React from 'react';
import { 
	Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn

} from 'material-ui/Table';
class DataTable extends React.Component{
	render(){
		return (
			<Table

			>
    <TableBody
displayRowCheckbox = {false}
    >
      <TableRow>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>

    </TableBody>
  </Table>
		)
	}
}
export default DataTable;