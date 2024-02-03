import Collaborators from "../Collaborators";
import "./Team.css"

const Team = (props) => {
    return (
        <section className="team" style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderBottomColor: props.primaryColor }}>{props.title}</h3>

            <div className="collaborators">
                {props.collaborators.map((val, index) => <Collaborators key={index} data={val} />)}
            </div>

        </section>
    )
}

export default Team;