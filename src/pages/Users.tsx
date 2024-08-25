import {useEffect, useState} from "react";
import TableRow from "../components/TableRow.tsx";

const Users = () => {

    const [users, setUsers] = useState<UserData[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://7fb1bd2c226142d8a5d468e7abacea07.weavy.io/api/users', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer wys_XGQXb5aptrAxM62WbNn4PADF64zr9K2C0Kc7`,
                },
            });

            if (response.ok){
                const res = await response.json();
                setUsers(res.data);
            }
        }
        fetchUsers();
    }, []);

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>UID</th>
                            <th>Name</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((value, index) => (
                            <TableRow data={value} key={index}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;
