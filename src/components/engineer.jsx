import {useForm} from "react-hook-form";
import axios from "axios";


const Engineer = () => {
    const {register, handleSubmit} = useForm({});
    const onSubmit = (data) => {
        axios.post("http://127.0.0.1:5000/employee", {
            name: data.name,
            position: 1,
            salary: data.salary,
            bonus: data.bonus
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
                <input {...register("name")} type="text" className="form-control" placeholder="Имя"/>
                <input {...register("salary")} type="text" className="form-control" placeholder="Оклад"/>
                <input {...register("bonus")} type="text" className="form-control" placeholder="Премия"/>
                <button onClick={() => onSubmit} className="btn btn-primary" type="submit">Отправить</button>
            </div>
        </form>
    );
};

export default Engineer;