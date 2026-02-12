import './CustomSelect.css'
import Select from "react-select";

export const CustomSelect = ({options,onChange,selectedOption}) => {
    return <Select options={options}
                   placeholder={'Выберите'}
                   classNamePrefix={'custom-select'}
                   noOptionsMessage={() => 'Не найдено'}
                   onChange={onChange}
                   defaultValue={selectedOption}
    />
}