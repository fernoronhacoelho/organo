import Collaborator from '../Collaborator';
import './Team.css';


const Team = (props) => {
    return(
        props.collaborators.length > 0 && <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div>
                {props.collaborators.map(collaborator => <Collaborator background={props.primaryColor} key={collaborator.name} name={collaborator.name} office={collaborator.office} picture={collaborator.picture} />)}
            </div>
        </section>
        //ternário > no lugar do && e no final :'' 
    )
}

export default Team