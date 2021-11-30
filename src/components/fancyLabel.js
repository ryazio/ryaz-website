function fancyLabel(props) {
  
  const style = {
    background: `linear-gradient(90deg, ${props.colorA} 0%, ${props.colorB} 100%)`
  }

  return (
    <>
      <div class="ff-brandon-light fancy-label" style={style}>
        {props.text}
      </div>
      </>
  )
}

export default fancyLabel;