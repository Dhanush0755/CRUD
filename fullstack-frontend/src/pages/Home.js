import axios from "axios";
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";

function Home() {

    const {id} = useParams();

    const [users, setUsers] = useState([]);
    
    useEffect(()=> {
       loadUsers();
    }, []);

    const loadUsers = async ()=> {
        const res = await axios.get("http://localhost:8080/users");
        setUsers(res.data);
    }

    const deleteUser = async (id)=> {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=> (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/viewuser/${user.id}`} className="btn btn-primary mx-2">View</Link>
                                        <Link to={`/edituser/${user.id}`} className="btn btn-outline-primary mx-2">Edit</Link>
                                        <button onClick={()=> deleteUser(user.id)} className="btn btn-danger mx-2">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>  
        </div>
    )
}

export default Home
