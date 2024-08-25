import {useState} from "react";
import {useNavigate} from "react-router-dom";

const CreateUser = () => {
    const [uid, setUid] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const createUser = async () => {
        const response = await fetch(`https://7fb1bd2c226142d8a5d468e7abacea07.weavy.io/api/users`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer wys_XGQXb5aptrAxM62WbNn4PADF64zr9K2C0Kc7`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uid,
                name,
                email,
                phone_number: phoneNumber,
            }),
        });

        if (response.ok) {
            navigate("/users");
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="my-4">
                        <label className="block text-left">UID</label>
                        <input
                            type="text"
                            value={uid}
                            onChange={(e) => setUid(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>
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
                    <button onClick={createUser} className="btn btn-secondary">Create User</button>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;
