import PropTypes from "prop-types";

function Button({
    children,
    variant = "default", 
    text="Add your text", 
    size = "md",
    width = "auto", 
    marginY = "0", marginX = "0", 
    disabled = false, 
    bg_color = "neutral-50",
    hoverColor = "neutral-50",
    exClasses,
    ...rest
  }){
  
    const base = "py-2 px-6 rounded-full shadow-standard backdrop-blur-xl";
  
    const sizeStyles = {
      "sm": "text-sm",
      "md": "text-md",
      "lg": "text-lg",
    };
  
    const widthStyles = {
      "full": "w-full",
      "auto": "w-auto",
      [width]: `w-${width}`,
    };
  
    const marginYStyle = `my-${marginY}`;
  
    const marginXStyle = `mx-${marginX}`;
  
  
    const variantStyles = {
      "default": `bg-${bg_color} hover:bg-${hoverColor}`,
      "outline": "bg-transparent border border-solid border-buttonstroke",
    };
  
    const isDisabled = disabled ? "bg-neutral-500 cursor-not-allowed" : "";
  
    const classes = `${base} ${sizeStyles[size]} w-${width}  ${marginXStyle} ${marginYStyle} ${exClasses} ${variantStyles[variant]} ${isDisabled}`;

    console.log(classes);
  
    return(
      <button className={classes} {...rest}>
        {children || text}
      </button>
    );
}

Button.propTypes = {
    children : PropTypes.node,
    variant : PropTypes.oneOf(["default", "outline"]).isRequired,
    text : PropTypes.string, 
    size : PropTypes.oneOf(["sm", "md", "lg"]), 
    width : PropTypes.oneOf(["full", "auto"]),
    marginY : PropTypes.number, 
    marginX : PropTypes.number, 
    disabled : PropTypes.bool,
}

export default Button;