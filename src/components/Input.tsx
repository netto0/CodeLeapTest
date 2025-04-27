interface iProps {
    label: string;
    placeholder: string;
    handleChange?: any;
    value?: string;
}

export default function Input({label, placeholder, value, handleChange}: iProps){
    return (
        <div className="flex flex-col gap-1">
        <label className="font-normal">{label}</label>
        <input maxLength={40} type="text" value={value} className="rounded-lg border border-[#777777] px-2 py-1 w-full text-sm placeholder:text-[#CCCCCC]" placeholder={placeholder} onChange={(e) => handleChange(e)}/>
        </div>
    )
}