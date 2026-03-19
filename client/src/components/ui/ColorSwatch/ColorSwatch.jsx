function ColorSwatch({
  color,
  selected = false,
  className = "",
  ...props
}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full ${
        selected ? "size-[20px] border border-black bg-transparent" : "w-5 h-5"
      } ${className}`.trim()}
      aria-pressed={selected}
      {...props}
    >
      <span
        className={`rounded-full ${selected ? "size-[12px]" : "w-5 h-5"}`}
        style={{ backgroundColor: color }}
      />
    </button>
  );
}

export default ColorSwatch;