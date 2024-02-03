import "./Collaborators.css"

const Collaborators = (props) => {
    return (
    <div className='collaborator'> 
        <div className='my-header'>
            <img src={props.data.image} alt="" />
        </div>
        <div className='my-footer'>
            <h4>{props.data.name}</h4>
            <h5>{props.data.description}</h5>
        </div>
    </div>
    )
}


export default Collaborators;