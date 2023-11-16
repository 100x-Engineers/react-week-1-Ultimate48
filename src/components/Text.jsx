import PropTypes from "prop-types";

function Text({
    children,
    text = "Add your text",
    size = "md",
    color = "neutral-1000",
    hoverColor, ...rest
  }){
  
    const base = "font-bold font-Inter leading-normal";
  
    const sizeStyles = {
      "sm": "text-sm",
      "md": "text-md",
      "lg": "text-lg",
    };
  
    const colorStyles = `text-${color}`
  
    const hover = `hover:text-${hoverColor}`
  
    const classes = `${base} ${sizeStyles[size]} ${colorStyles} ${hover}`;
  
    return(
      <p className={classes} {...rest}>
        {children || text}
      </p>
    );
  
  }

  Text.propTypes = {
    children : PropTypes.node,
    text : PropTypes.string.isRequired,
    size : PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
    color : PropTypes.string.isRequired,
    hoverColor : PropTypes.string,
  }

export default Text;