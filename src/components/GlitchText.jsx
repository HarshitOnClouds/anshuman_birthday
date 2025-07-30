const GlitchText = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
}) => {
  const inlineStyles = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows ? "-5px 0 red" : "none",
    "--before-shadow": enableShadows ? "5px 0 cyan" : "none",
  };

  // Use a simpler approach with direct CSS class
  const baseClasses = "text-white text-[clamp(3rem,7vw,3rem)] font-black relative mx-auto select-none cursor-pointer";
  
  if (!enableOnHover) {
    // Use the direct CSS class approach for continuous glitch
    return (
      <div 
        style={inlineStyles} 
        data-text={children} 
        className={`${baseClasses} glitch-element ${className}`}
      >
        {children}
      </div>
    );
  } else {
    // Hover-only version (keeping original logic)
    const pseudoClasses = 
      "after:content-[''] after:absolute after:top-0 after:left-[10px] after:text-white after:bg-[#060010] after:overflow-hidden after:opacity-0 " +
      "before:content-[''] before:absolute before:top-0 before:left-[-10px] before:text-white before:bg-[#060010] before:overflow-hidden before:opacity-0 " +
      "hover:after:content-[attr(data-text)] hover:after:opacity-100 hover:after:[text-shadow:var(--after-shadow)] hover:after:animate-glitch-after " +
      "hover:before:content-[attr(data-text)] hover:before:opacity-100 hover:before:[text-shadow:var(--before-shadow)] hover:before:animate-glitch-before";

    return (
      <div style={inlineStyles} data-text={children} className={`${baseClasses} ${pseudoClasses} ${className}`}>
        {children}
      </div>
    );
  }
};

export default GlitchText;
