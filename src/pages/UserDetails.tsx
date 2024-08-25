import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UserDetails = () => {
    const { uid } = useParams<{ uid: string }>();
    const [user, setUser] = useState<UserData>();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const fetchUser = async () => {
        const response = await fetch(`https://7fb1bd2c226142d8a5d468e7abacea07.weavy.io/api/users/${uid}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer wys_XGQXb5aptrAxM62WbNn4PADF64zr9K2C0Kc7`,
            },
        });

        if (response.ok) {
            const res = await response.json();
            setUser(res);
            setName(res.name);
            setEmail(res.email);
            setPhoneNumber(res.phone_number);
        }
    };

    const updateUser = async () => {
        const response = await fetch(`https://7fb1bd2c226142d8a5d468e7abacea07.weavy.io/api/users/${uid}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer wys_XGQXb5aptrAxM62WbNn4PADF64zr9K2C0Kc7`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone_number: phoneNumber,
            }),
        });

        if (response.ok) {
            const res = await response.json();
            setUser(res);
        }
    };

    const deleteUser = async () => {
        const response = await fetch(`https://7fb1bd2c226142d8a5d468e7abacea07.weavy.io/api/users/${uid}/trash`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer wys_XGQXb5aptrAxM62WbNn4PADF64zr9K2C0Kc7`,
            },
        });

        if (response.ok) {
            navigate("/users"); // Redirect to the users list or another page after deletion
        }
    };

    useEffect(() => {
        fetchUser();
    }, [uid]);

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{user?.display_name}</h1>
                    <div className="my-4">
                        <label className="block text-left">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="my-4">
                        <label className="block text-left">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="my-4">
                        <label className="block text-left">Telephone</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <button onClick={updateUser} className="btn btn-secondary">Update</button>
                    <button onClick={deleteUser} className="btn btn-accent ml-2">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
