function CategoryCard({ icon: Icon, title, active = false }) {
  return (
    <article
      className={`flex min-w-[170px] min-h-[145px] cursor-pointer flex-col items-center justify-center rounded border transition ${
        active
          ? 'border-red-500 bg-red-500 text-white'
          : 'border-black/20 bg-transparent text-black hover:border-red-400'
      }`}
    >
      <div className="mb-4">
        <Icon size={40} strokeWidth={1} />
      </div>

      <h3 className="text-base font-medium">
        {title}
      </h3>
    </article>
  );
}

export default CategoryCard;