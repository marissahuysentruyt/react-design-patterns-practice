export const Button = ({ size, text, color, ...props}) => {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px", 
        fontSize: size === "large" ? "1.5rem" : "1rem",
        backgroundColor: color,
      }} {...props}
    >
      {text}
    </button>
  )
}

export const DangerButton = props => {
  return (
    <Button color="#f542ce" {...props}/>
  )
};

export const SuccessButton = props => {
  return (
    <Button color="#8dfcc7" {...props} size="large"/>
  )
}
