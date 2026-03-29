import Button from "../Button/Button";
import CountdownItem from "../CountdownItem";

function SectionHeader({
  eyebrow,
  title,
  button,
  arrows,
  countdownItem,
  onPrev,
  onNext,
}) {
  return (
    <div className="mb-8 flex items-end justify-between w-full">
      <div className="flex gap-[87px]">
        <div className="flex items-end">
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
            <div className="flex items-end">
              <CountdownItem
                days={'03'}
                hours={23}
                minutes={19}
                seconds={56}
              />
            </div>
          )}
      </div>

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
                <Button icon="left" mode="icon" variant="primary" size="md" onClick={onPrev}/>
                <Button icon="right" mode="icon" variant="primary" size="md" onClick={onNext}/>
            </div>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;