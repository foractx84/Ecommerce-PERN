function CountdownItem({
  days,
  hours,
  minutes,
  seconds,
  variant = "default",
  className = "",
}) {

  const formatValue = (value) => String(value).padStart(2, "0");

  const variants = {
    default:
      "flex flex-col items-start gap-[2px]",

    circle:
      "flex flex-col items-center justify-center w-[62px] h-[62px] rounded-full bg-white",
  };

  const labelStyles = {
    default:
      "font-['Poppins'] text-xs font-medium leading-[18px] text-black",

    circle:
      "font-['Poppins'] text-[11px] font-normal leading-none text-black",
  };

  const valueStyles = {
    default:
      "font-['Poppins'] text-[32px] font-bold leading-[30px] tracking-[0.04em] text-black",

    circle:
      "font-['Poppins'] text-base font-semibold leading-none text-black",
  };

  return (
    <div className={` ${className}`.trim()}>
      {variant === "default" && (
        <>
        <div className="flex gap-[17px]">
            <div className= {`${variants[variant]}`}>
                <span className={labelStyles.default}>Days</span>
                <span className={valueStyles.default}>{formatValue(days)}</span>
            </div>
            <div className={`flex flex-col items-center gap-[8px] pt-[26px]`}>
                <span className="w-[4px] h-[4px] rounded-full bg-[#E07575]" />
                <span className="w-[4px] h-[4px] rounded-full bg-[#E07575]" />
            </div>
            <div className= {`${variants[variant]}`}>
                <span className={labelStyles.default}>Hours</span>
                <span className={valueStyles.default}>{formatValue(hours)}</span>
            </div>
            <div className={`flex flex-col items-center gap-[8px] pt-[26px]`}>
                <span className="w-[4px] h-[4px] rounded-full bg-[#E07575]" />
                <span className="w-[4px] h-[4px] rounded-full bg-[#E07575]" />
            </div>
            <div className= {`${variants[variant]}`}>
                <span className={labelStyles.default}>Minutes</span>
                <span className={valueStyles.default}>{formatValue(minutes)}</span>
            </div>
            <div className={`flex flex-col items-center gap-[8px] pt-[26px]`}>
                <span className="w-[4px] h-[4px] rounded-full bg-[#E07575]" />
                <span className="w-[4px] h-[4px] rounded-full bg-[#E07575]" />
            </div>
            <div className= {`${variants[variant]}`}>
                <span className={labelStyles.default}>Seconds</span>
                <span className={valueStyles.default}>{formatValue(seconds)}</span>
            </div>
        </div>
        </>
      )}

      {variant === "circle" && (
        <>
            <div className="flex gap-[24px]">
                <div className= {`${variants[variant]}`}> 
                    <span className={labelStyles.circle}>Days</span>
                    <span className={valueStyles.circle}>{formatValue(days)}</span>
                </div>

                <div className= {`${variants[variant]}`}>     
                    <span className={labelStyles.circle}>Hours</span>
                    <span className={valueStyles.circle}>{formatValue(hours)}</span>
                </div>

                <div className= {`${variants[variant]}`}>
                    <span className={labelStyles.circle}>Minutes</span>
                    <span className={valueStyles.circle}>{formatValue(minutes)}</span>
                </div>

                <div className= {`${variants[variant]}`}>
                    <span className={labelStyles.circle}>Seconds</span>
                    <span className={valueStyles.circle}>{formatValue(seconds)}</span>
                </div>
            </div>
        </>
      )}
    </div>
  );
}

export default CountdownItem; 