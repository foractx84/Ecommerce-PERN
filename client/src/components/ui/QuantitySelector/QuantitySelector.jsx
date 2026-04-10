function QuantitySelector({
  value = 1,
  onChange,
  min = 1,
  max = 99,
  className = '',
}) {
  const options = Array.from(
    { length: max - min + 1 },
    (_, index) => min + index
  );

  return (
    <select
      value={value}
      onChange={onChange}
      className={`h-[44px] w-[72px] rounded border border-black/20 bg-white px-3 text-sm text-black focus:outline-none ${className}`}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {String(option).padStart(2, '0')}
        </option>
      ))}
    </select>
  );
}

export default QuantitySelector;