import { Link } from 'react-router-dom';

function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-3 text-sm text-black/50">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-3">
              {item.href && !isLast ? (
                <Link to={item.href} className="transition hover:text-black">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-black' : ''}>{item.label}</span>
              )}

              {!isLast && <span>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;