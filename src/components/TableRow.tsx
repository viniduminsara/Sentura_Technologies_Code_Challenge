import {Link} from "react-router-dom";

interface TableRowProps {
    data: UserData;
}

const TableRow = ({ data }: TableRowProps) => {

    return (
        <tr>
            <th>{data.uid}</th>
            <td>{data.display_name}</td>
            <td>
                <Link to={`/user/${data.id}`} className='btn btn-primary btn-sm'>
                    Details
                </Link>
            </td>
        </tr>
    )
}

export default TableRow;
