import React from 'react'
import PropTypes from 'prop-types'

export default function dropDownInput(
    {inputField = "INPUT",
    options, 
    borderColor = "neutral-500",
    focusColor = "twitterblue-default",
    textColor = "neutral-50",
    font = "medium",
    size = "md",
    width = "full",
    ...rest}
) {
    const widthStyles = {
        "full": "w-full",
        "auto": "w-auto",
        [width]: `w-${width}`,
    };

    const base = `${widthStyles[width]} rounded border px-3 py-4 pt-2`;

    const borderClasses = `border border-solid border-${borderColor} focus-within:border-${focusColor}`;
  
    const sizeStyles = {
      "sm": "text-sm",
      "md": "text-md",
      "lg": "text-lg",
      "xs": "text-xs",
      "xl": "text-xl",
    };

    
  
    const legendClasses = `${sizeStyles[size]} font-${font} not-italic leading-normal text-${textColor} group-focus:text-${focusColor}`;

    const selectClasses = `${widthStyles[width]} bg-neutral-1000 text-${textColor} placeholder:text-${borderColor} focus:outline-none`;
  
    const classes = `${base} ${borderClasses}`;

  return (
    <>
    <fieldset className= {classes} {...rest}>
        <legend className={legendClasses}>
            <div class="px-1">{inputField}</div>
        </legend>
        <select placeholder={inputField} className={selectClasses}>
            {options.map(option => {
                return <option>{option}</option>
            })}
        </select>
    </fieldset>
    </>
  )
}


dropDownInput.propTypes = {
    inputField : PropTypes.string.isRequired, 
    options : PropTypes.array.isRequired,
    textColor : PropTypes.string,
    borderColor : PropTypes.string,
    focusColor : PropTypes.string,
    font : PropTypes.oneOf(["light", "medium", "bold"]),
    size : PropTypes.oneOf(["sm", "md", "lg", "xs", "xl"]),
    width : PropTypes.oneOf(["full", "auto"]) || PropTypes.number,
}
