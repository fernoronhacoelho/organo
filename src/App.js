import { useState } from 'react';
import Banner from './components/Banner/';
import Forms  from './components/Forms';
import Team  from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor:'#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-end',
      primaryColor:'#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor:'#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor:'#E06869',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor:'#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor:'#FF8A05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e gestão',
      primaryColor:'#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ]

  const[collaborators, setCollaborators] = useState([])

  const toNewCollaboratorAdd = (collaborator) =>{
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Forms teams={teams.map(team => team.name)} toRegisteredCollaborator={collaborator => toNewCollaboratorAdd(collaborator)}/>
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
        />)}
      <Footer/>
      
    </div>
  );
}

export default App;
