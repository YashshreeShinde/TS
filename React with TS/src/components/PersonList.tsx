type PersonListProps={
    names:{
        first:string,
        last:string
    }[]
}

const PersonList=(props:PersonListProps)=>{
    return(
        <div>
            {props.names.map((item)=>{
                return (
                    <h2 key={item.first}>{item.first} {item.last}</h2>
                )
            })}
        </div>
    )
}

export default PersonList;