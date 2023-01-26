type StylingProps= {
    styles: React.CSSProperties
  }
  
  export const Style = (props: StylingProps) => {
    return (
      <div style={props.styles}>
        Hi !
      </div>
    )
  }