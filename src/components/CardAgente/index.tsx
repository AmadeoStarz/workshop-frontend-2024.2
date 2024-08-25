import Image from "next/image"
import "./agent.style.css"

interface AgentProps{
    
        role:{
            displayName: string
        }
        displayName: string
        abilities: {
            displayIcon: string
            displayName: string
        }[]
        fullPortrait: string
        description: string
    
}
export const CardAgente = (agent: AgentProps) =>(
   

   <a href="#" className="Agentes">
   <div className="texto">
    
    <p>{agent.role.displayName}</p>
    <strong>{agent.displayName}</strong>
   </div>
   <ul className="habilidades">
    {agent.abilities.map(ability =>(
        <li key={ability.displayName}>
            <Image src={ability.displayIcon} width={36} height={36} alt={"Icone habilidade" + ability.displayName}/>
        </li>
    ))}
   
   </ul>
  
   <div className="Fundo">
   
   <span style={{ backgroundImage: `url(${agent.fullPortrait})` }}></span>
   
   </div>
   <span></span>
   <div className="hover-cube-container">
      <div className="cube">
        <div className="description">
          <p>{agent.description}</p>
        </div>
        </div>
      </div>
   </a>

)