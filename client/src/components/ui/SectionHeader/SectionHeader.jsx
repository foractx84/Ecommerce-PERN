import Button from "../Button/Button";
import CountdownItem from "../CountdownItem";

function SectionHeader({
  eyebrow,
  title,
  button,
  arrows,
  countdownItem,
}) {
  return (
    <div className="mb-8 flex items-end justify-between w-full">
      <div className="flex ">
        <div>
          {eyebrow && (
            <div className="mb-4 flex items-center gap-3">
              <span className="h-8 w-4 rounded bg-red-500"></span>
              <span className="text-sm font-semibold text-red-500">
                {eyebrow}
              </span>
            </div>
          )}

          {title && (
            <h2 className="text-3xl font-semibold tracking-tight text-black">
              {title}
            </h2>
          )}
        </div>
      </div>
        {countdownItem && (
          <CountdownItem days={'03'} hours={23} minutes={19} seconds={56} />
        )}

      <div className="flex items-center gap-3">
        {button && (
          <div className="flex items-center gap-1">
            <Button mode="text" variant="primary" size="md">
              View All
            </Button>
          </div>
        )}
        {arrows && (
            <div className="flex items-center gap-1">
                <Button icon="left" mode="icon" variant="primary" size="md" />
                <Button icon="right" mode="icon" variant="primary" size="md" />
            </div>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;