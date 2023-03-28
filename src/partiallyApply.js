export const partiallyApply = (Component, partialProps) => {
  return props => (
    <Component {...partialProps} {...props} />
  )
}

export const Button = ({ size, text, color, ...props}) => {
  return (
    <button
      style={{
        padding: size === "large" ? "2rem" : "0.5rem", 
        fontSize: size === "large" ? "1.5rem" : "1rem",
        backgroundColor: color
      }} {...props}
    >
      {text}
    </button>
  )
}

export const WarningButton = partiallyApply(Button, { color: "#ffcc40", size: "large",});
export const DarkButton = partiallyApply(Button, { color: "#878484" });
