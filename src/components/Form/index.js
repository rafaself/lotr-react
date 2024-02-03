import { useState } from 'react';
import Button from '../Button';
import SelectField from '../SelectField';
import TextField from '../TextField';
import "./Form.css"

const Form = (props) => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")

    const save = (event) => {
        event.preventDefault()
        props.onChange({name,description,image,team})
    }

    return (
        <section className="my-form">
            <form onSubmit={save}>
                <h2 style={{textAlign: "center"}}>Adicionar personagem</h2>

                <TextField 
                    type="text"
                    title="Nome" 
                    placeholder="Digite o seu nome" 
                    required={true} 
                    value={name} 
                    onChange={value => setName(value)} 
                />

                <TextField 
                    type="text"
                    title="Descrição" 
                    placeholder="Digite a descrição" 
                    required={true}  
                    value={description} 
                    onChange={value => setDescription(value)} 
                />

                <TextField 
                    type={"url"}
                    title="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    required={true}  
                    value={image} 
                    pattern="https?://.+"
                    onChange={value => setImage(value)} 
                />

                <SelectField 
                    label="Times" 
                    itens={props.teamsNames}
                    value={team}
                    onChange={value => setTeam(value)}
                />

                <div className="btn-content">
                    <Button>
                        Criar
                    </Button>
                </div>

            </form>
        </section>
    )
}

export default Form;