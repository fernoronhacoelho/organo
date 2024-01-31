import './Collaborator.css'

const Collaborator = ({name, picture, office, background}) => {
    return(
        <div className='collaborator'>
            <div className='header' style={{backgroundColor: background}}>
                <img src={picture} alt={name}/>
            </div>
            <div className='footerCollaborator'>
                <h4>{name}</h4>
                <h5>{office}</h5>
            </div>
        </div>
    )
}
export default Collaborator