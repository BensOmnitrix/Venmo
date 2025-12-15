export const InputBox = ({
  label,
  onChange,
}: {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative w-90 mt-9">
      <input
        onChange={onChange}
        type="text"
        placeholder=" "
        className="
          peer
          h-15
          w-full
          border border-gray-400
          rounded-lg
          px-4 pt-5 pb-2
          text-md
          focus:outline-none
          focus:ring-1
          focus:ring-blue-500
        "
      />

      <label
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-sm
          pointer-events-none
          transition-all
          duration-200

          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-600

          peer-focus:top-3
          peer-focus:text-xs
          peer-focus:text-blue-600

          peer-[:not(:placeholder-shown)]:top-3
          peer-[:not(:placeholder-shown)]:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
};
