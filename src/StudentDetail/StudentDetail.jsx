import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const StudentDetail = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({});
    useEffect(() => {
        fetch("http://localhost:8080/students/" + id).then(response => response.json()).then((body) => {
            setStudent(body)
        })
    }, [])

    return (
        <div>
            <h1>Student detail</h1>
            <table className="table table-light table-bordered">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{student.firstName} {student.lastName}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{student.gender}</td>
                    </tr>
                    <tr>
                        <th>House</th>
                        <td>{student.house}</td>
                    </tr>
                    <tr>
                        <th>Year</th>
                        <td>{student.year}</td>
                    </tr>
                </tbody>
            </table>
            <nav><Link to={'/'}>Back to student list</Link> 
            <Link to={"/students/" + id + "/edit"}>Edit Harry Potter</Link>
            </nav>
        </div>
    );
};

