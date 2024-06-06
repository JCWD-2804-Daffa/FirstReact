import {FC} from "react"

interface ImputProps {
    id: string;
    type: string;
    name: string;
    vale: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const Input: FC<ImputProps> = ({
    id,
    type,
    name,
    vale,
    onChange,
    placeholder,
}) => {
    return (
        <div className="mb-4">
            <input
                id={id}
                type={type}
                name={name}
                value={vale}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 border rounder-lg focus:ountline-none"
            />
        </div>
    );
};

export default Input;