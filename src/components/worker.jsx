import {useForm} from "react-hook-form";
import axios from "axios";


const Worker = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        axios.post("http://127.0.0.1:5000/employee", {
            name: data.name,
            position: 2,
            hours_worked: data.hours_worked,
            overtime: data.overtime,
            hourly_rate: data.hourly_rate
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
                <input {...register("name")} type="text" className="form-control" placeholder="Имя"/>
                <input {...register("hours_worked")} type="text" className="form-control"
                       placeholder="Отработанные часы"/>
                <input {...register("overtime")} type="text" className="form-control" placeholder="Переработка"/>
                <input {...register("hourly_rate")} type="text" className="form-control"
                       placeholder="Почасовая ставка"/>
                <button onClick={() => onSubmit} className="btn btn-primary" type="submit">Отправить</button>
            </div>
        </form>
    );
};

export default Worker;