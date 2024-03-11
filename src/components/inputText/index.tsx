interface InputTextProps {
  label: string;
  placeholder: string;
}

export const InputText = ({ label, placeholder }: InputTextProps) => {
  return (
    <>
      <label className="text-black-500 text-base font-bold">
        {label}
        <div>
          <input
            className="rounded-md px-8 py-4 w-80 mt-2 border-2 border-black text-black"
            type="text"
            placeholder={placeholder}
            aria-label=""
            required
          />
        </div>
      </label>
    </>
  );
};

