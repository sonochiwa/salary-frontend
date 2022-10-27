import axios from "axios";
import {useEffect, useState} from "react";
import Engineer from "../components/engineer";
import Worker from "../components/worker";
import Manager from "../components/manager";


const Database = () => {
    const [database, setDatabase] = useState([]);
    const [activeTab, setActiveTab] = useState("tab1");

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/database')
            .then(response => setDatabase(response.data));
    });

    const handleTab1 = () => {
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        setActiveTab("tab2");
    };
    const handleTab3 = () => {
        setActiveTab("tab3");
    };
    const deleteEmployee = (event) => {
        axios.delete(`http://127.0.0.1:5000/employee/${event}`);
    };

    return (
        <>
            <div className="container my-5">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
                            onClick={handleTab1}>
                            Инженер
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
                            onClick={handleTab2}>
                            Рабочий
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "tab3" ? "active" : ""}`}
                            onClick={handleTab3}>
                            Менеджер по продажам
                        </button>
                    </li>
                </ul>

                <div className="py-3">
                    {activeTab === "tab1" && <Engineer/>}
                    {activeTab === "tab2" && <Worker/>}
                    {activeTab === "tab3" && <Manager/>}
                </div>

                <table className="table table-bordered table-striped my-3">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Имя</th>
                        <th>Должность</th>
                        <th>Начислено</th>
                        <th>Дата начисления</th>
                        <th className="text-center">Удалить</th>
                    </tr>
                    </thead>
                    <tbody>

                    {database.map((row, index) =>
                        <tr key={row.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{row.name}</td>
                            {row.position === 1 && <td>Инженер</td>}
                            {row.position === 2 && <td>Рабочий</td>}
                            {row.position === 3 && <td>Менеджер</td>}
                            <td>{row.salary}</td>
                            <td>{row.date}</td>
                            <td className="text-center" style={{cursor: 'pointer'}}
                                onClick={() => deleteEmployee(row.id)}>
                                ❌
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Database;