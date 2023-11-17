import React from 'react'
import PropTypes from 'prop-types'

export default function inputField(
    {inputField = "INPUT", 
    inputType = "text",
    textColor = "neutral-50",
    borderColor = "neutral-500",
    focusColor = "twitterblue-default",
    font = "medium",
    size = "md",
    width = "auto",
    ...rest}
) {

  const base = "flex items-center self-stretch rounded border border-solid border-neutral-500 px-3 py-4 pt-2";

  const borderClasses = `border-${borderColor} focus-within:border-${focusColor}`;

  const sizeStyles = {
    "sm": "text-sm",
    "md": "text-md",
    "lg": "text-lg",
    "xs": "text-xs",
    "xl": "text-xl",
  };

  const widthStyles = {
    "full": "w-full",
    "auto": "w-auto",
    [width]: `w-${width}`,
  };


  const legendClasses = `text-xs font-${font} not-italic leading-normal text-${textColor} group-focus:text-${focusColor}`;

  const inputClasses = `w-full bg-transparent text-${textColor} placeholder:text-${borderColor} focus:outline-none`;

  const classes = `${base} ${borderClasses} ${sizeStyles[size]}`;

  console.log(classes);

  return (
    <>
    <fieldset className= {classes} {...rest}>
        <legend className={legendClasses}>
            <div className="px-2">{inputField}</div>
        </legend>
        <input type={inputType} placeholder={inputField} className={inputClasses} />
    </fieldset>
    </>
  )
}

inputField.propTypes = {
    inputField : PropTypes.string.isRequired, 
    inputType : PropTypes.oneOf(["text", "email", "password", "number", "date", "time", "datetime-local", "search", "url", "tel", "month", "week", "color", "range"]).isRequired,
    textColor : PropTypes.string,
    borderColor : PropTypes.string,
    focusColor : PropTypes.string,
    font : PropTypes.oneOf(["light", "medium", "bold"]),
    size : PropTypes.oneOf(["sm", "md", "lg", "xs", "xl"]),
    width : PropTypes.oneOf(["full", "auto"]) || PropTypes.number,
}
