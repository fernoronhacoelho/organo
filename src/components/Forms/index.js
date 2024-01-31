import { useState } from 'react';
import Botton from '../Botton';
import Dropdown from '../Dropdown';
import TextField from '../TextField';
import './Forms.css'

const Forms = (props) => {

    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [picture, setPicture] = useState('')
    const [team, setTeam] = useState('')
    

    const toSave = (event) => {
        event.preventDefault()
        props.toRegisteredCollaborator({
            name, 
            office, 
            picture, 
            team})
            setName('')
            setOffice('')
            setPicture('')
            setTeam('')
    }

    return(
        <section className='forms'>
            <form onSubmit={toSave}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <TextField 
                obrigatory={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                value={name}
                toChanged = {value => setName(value)}
                />
            <TextField 
                obrigatory={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                value={office}
                toChanged={value => setOffice(value)}
                />
            <TextField 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                value={picture}
                toChanged={value =>setPicture(value)}
                />
            <Dropdown 
                obrigatory={true} 
                label='Time' 
                itens={props.teams}
                value={team}
                toChanged={value =>setTeam(value)}
                />
            <Botton>Criar card</Botton>
            </form>
        </section>
    );
}

export default Forms