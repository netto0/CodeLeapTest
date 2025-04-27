interface iProps {
    label: string;
    placeholder: string;
    handleChange?: any;
    value?: string;
}

export default function TextArea({label, placeholder, value, handleChange}: iProps){
    return (
        <div className="flex flex-col gap-1">
        <label className="font-normal">{label}</label>
        <textarea maxLength={590} value={value} className="rounded-lg resize-none border border-[#777777] px-2 py-1 w-full h-24 text-sm placeholder:text-[#CCCCCC]" placeholder={placeholder} onChange={(e) => handleChange(e)}/>
        </div>
    )
}