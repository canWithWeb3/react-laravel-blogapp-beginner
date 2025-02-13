import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

const Datatable = ({ columns, data }) => {
    return (
		<DataTable
			columns={columns}
			data={data}
			pagination
		/>
	);

}

export default Datatable

Datatable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
}