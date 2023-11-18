import PropTypes from "prop-types";

function Text({
    children,
    text = "Add your text",
    size = "md",
    color = "neutral-1000",
    font,
    hoverColor, ...rest
  }){
  
    const base = "font-Inter leading-normal";
  
    const sizeStyles = {
      "sm": "text-sm",
      "md": "text-md",
      "lg": "text-lg",
      "2xl": "text-2xl",
      "xs" : "text-xs",
      [size]: `text-${size}`,
    };
  
    const colorStyles = `text-${color}`
  
    const hover = `hover:text-${hoverColor}`
  
    const classes = `${base} text-${size} ${colorStyles} ${hover} font-${font}`;
  
    return(
      <p className={classes} {...rest}>
        {children || text}
      </p>
    );
  
  }

  Text.propTypes = {
    children : PropTypes.node,
    text : PropTypes.string.isRequired,
    size : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
    font : PropTypes.string,
    hoverColor : PropTypes.string,
  }

export default Text;