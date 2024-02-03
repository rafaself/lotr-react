import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';


function App() {

  const teams = [
    {
      title: 'Hobbits',
      primaryColor: '#527294',
      secondaryColor: '#9ABEDB',
    },
    {
      title: 'Humans',
      primaryColor: '#5A7D4B',
      secondaryColor: '#B9CCAA',
    },
    {
      title: 'Elves',
      primaryColor: '#803332',
      secondaryColor: '#C59A9A',
    },
    {
      title: 'Dwarves',
      primaryColor: '#6F4268',
      secondaryColor: '#C192B8',
    },
    {
      title: 'Mages',
      primaryColor: '#A66400',
      secondaryColor: '#F4DDB5',
    },
    {
      title: 'Orcs',
      primaryColor: '#8F4D00',
      secondaryColor: '#D9B186',
    },
    {
      title: 'Creatures',
      primaryColor: '#4C7D4A',
      secondaryColor: '#A3CFA2',
    }
  ];
  

  const [collaborators, setUser] = useState([
    {
      name: "Frodo",
      image: "https://i.pinimg.com/736x/a0/62/59/a062594c7197e8f2eacbd652b2df6fa8.jpg",
      description: "Um valente Hobbit que embarcou em uma jornada épica para destruir o Um Anel e salvar a Terra-média.",
      team: "Hobbits",
    },
    {
      name: "Gandalf",
      image: "https://tolkiengateway.net/w/images/thumb/4/42/Matt_Stewart_-_Gandalf_-_A_Light_in_the_Dark.jpg/640px-Matt_Stewart_-_Gandalf_-_A_Light_in_the_Dark.jpg",
      description: "Um poderoso Mago conhecido por sua sabedoria e habilidades místicas, desempenhou um papel vital na luta contra as forças das trevas.",
      team: "Mages",
    },
    {
      name: "Aragorn",
      image: "https://conteudo.imguol.com.br/c/entretenimento/dd/2018/05/17/viggo-mortensen-como-aragorn-na-trilogia-o-senhor-dos-aneis-1526603479172_v2_4x3.jpg",
      description: "Um habilidoso guerreiro humano, destinado a liderar Gondor na luta contra Sauron e restaurar a linhagem dos reis.",
      team: "Humans",
    },
    {
      name: "Legolas",
      image: "https://img.elo7.com.br/product/zoom/26F1F50/coroa-elfica-legolas-fantasia.jpg",
      description: "Um elfo habilidoso com arco e flecha, membro da Sociedade do Anel, que desempenhou um papel crucial na guerra contra Sauron.",
      team: "Elves",
    },
    {
      name: "Gimli",
      image: "https://conteudo.imguol.com.br/c/entretenimento/69/2022/11/23/john-rhys-davies-ator-de-gimli-em-o-senhor-dos-aneis-teve-alergia-a-maquiagem-durante-filmagens-da-trilogia-1669214325562_v2_4x3.jpg",
      description: "Um corajoso anão e grande guerreiro que se juntou à Sociedade do Anel para lutar contra as forças do mal.",
      team: "Dwarves",
    },
    {
      name: "Boromir",
      image: "https://conteudo.imguol.com.br/c/entretenimento/a0/2019/09/17/sean-bean-como-boromir-em-meme-famoso-de-o-senhor-dos-aneis-1568748745372_v2_1x1.jpg",
      description: "Um valente guerreiro de Gondor, cuja busca pelo poder do Um Anel o levou a desafios e sacrifícios.",
      team: "Humans",
    },
    {
      name: "Samwise",
      image: "https://miro.medium.com/v2/resize:fit:480/0*Vdms3aM_ChF40UBW.jpg",
      description: "Leal amigo de Frodo, um Hobbit corajoso que desempenhou um papel crucial na destruição do Um Anel e no retorno à paz.",
      team: "Hobbits",
    },
    {
      name: "Faramir",
      image: "https://i.pinimg.com/736x/b3/5e/d4/b35ed4f24618c76af33b12e389906ce5.jpg",
      description: "Irmão de Boromir, um capitão de Gondor conhecido por sua coragem e nobreza na luta contra as forças de Sauron.",
      team: "Humans",
    },
    {
      name: "Éowyn",
      image: "https://miro.medium.com/v2/resize:fit:548/1*Y3QrQE9rDOMa7KXJx0OY6Q.jpeg",
      description: "Princesa de Rohan, uma guerreira destemida que desafiou as expectativas e desempenhou um papel vital na Batalha dos Campos do Pelennor.",
      team: "Humans",
    },
    {
      name: "Gollum",
      image: "https://conteudo.imguol.com.br/c/entretenimento/e0/2020/05/08/o-personagem-gollum-em-o-hobbit-1588963748747_v2_900x506.png",
      description: "Uma criatura atormentada pelo Um Anel, que teve um papel ambíguo entre ajudar e prejudicar a Sociedade do Anel.",
      team: "Creatures",
    },
    {
      name: "Saruman",
      image: "https://i.pinimg.com/originals/8c/23/15/8c2315941b5746e026fb580fd454a9f0.jpg",
      description: "Um poderoso Mago que inicialmente era aliado, mas acabou se voltando para o lado sombrio em busca do poder do Um Anel.",
      team: "Mages",
    },
    {
      name: "Théoden",
      image: "https://i.pinimg.com/originals/f8/77/a0/f877a0acf4d6c7eb3ceeb6e11b8fa395.jpg",
      description: "Rei de Rohan, liderou seu povo na luta contra as forças de Saruman e Sauron, sacrificando-se pela liberdade.",
      team: "Humans",
    },
    {
      name: "Treebeard",
      image: "https://talesfromthecards.files.wordpress.com/2015/10/treebeard-art.jpg",
      description: "Um Ent, uma criatura antiga e sábia que liderou os Ents na destruição de Isengard durante a Guerra do Anel.",
      team: "Creatures",
    },
    {
      name: "Galadriel",
      image: "https://miro.medium.com/v2/resize:fit:1336/1*hVHUsRCwu5wj5NJymSYRGw.jpeg",
      description: "Rainha élfica de Lothlórien, uma das figuras mais poderosas e benevolentes da Terra-média.",
      team: "Elves",
    },
    {
      name: "Elrond",
      image: "https://middle-earth.xenite.org/files/2016/02/elrond.jpg",
      description: "Senhor élfico de Valfenda, conhecido por sua sabedoria e liderança durante eventos cruciais na história.",
      team: "Elves",
    },
    {
      name: "Uglúk",
      image: "https://i.ytimg.com/vi/Ao9PhasF7oY/hqdefault.jpg",
      description: "Líder orc que serviu Saruman, envolvido em missões militares durante a Guerra do Anel.",
      team: "Orcs",
    },
  ]);
  
  
  

  const onChange = (collaborator) => {
    setUser([...collaborators, collaborator])
  }

  return (
    <div className="App">

      <Banner />

      {
        teams.map(
          val => <Team
            key={val.title}
            title={val.title}
            primaryColor={val.primaryColor}
            secondaryColor={val.secondaryColor}
            collaborators={collaborators.filter(collaborator => collaborator.team === val.title)}
          />
        )
      }

      <Form teamsNames={teams.map(val => val.title)} onChange={value => onChange(value)} />

    </div>
  );
}

export default App;
