function ColorSwatch({ color, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-6 h-6 rounded-full transition-all cursor-pointer ${
        selected
          ? 'border-2 ring-2 ring-offset-2 ring-black'
          : 'border border-gray-300 hover:border-gray-400'
      }`}
      style={{ backgroundColor: color.code }}
      aria-label={`Select color ${color.code}`}
      title={color.code}
    />
  );
}

export default ColorSwatch;