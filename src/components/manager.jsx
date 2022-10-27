import {useForm} from "react-hook-form";
import axios from "axios";


const Manager = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        axios.post("http://127.0.0.1:5000/employee", {
            name: data.name,
            position: 3,
            salary: data.salary,
            deals: data.deals,
            deal_bonus: data.deal_bonus
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
                <input {...register("name")} type="text" className="form-control" placeholder="Имя"/>
                <input {...register("salary")} type="text" className="form-control" placeholder="Оклад"/>
                <input {...register("deals")} type="text" className="form-control" placeholder="Количество сделок"/>
                <input {...register("deal_bonus")} type="text" className="form-control" placeholder="Бонус за сделку"/>
                <button onClick={() => onSubmit} className="btn btn-primary" type="submit">Отправить</button>
            </div>
        </form>
    )
};

export default Manager;