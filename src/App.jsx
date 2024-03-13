import Header from './components/Header';
import Post from './components/Post';
import style from './App.module.css';
import Sidebar from './components/Sidebar';

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl:
          'https://www.shutterstock.com/shutterstock/photos/1554086789/display_1500/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg',
        name: 'Alice Silva',
        role: 'Nutricionista',
      },
      content: [
        {
          type: 'paragraph',
          content:
            'Hoje quero compartilhar uma dica importante sobre alimentação saudável: não pule o café da manhã! É a refeição mais importante do dia e fornece energia para enfrentar as atividades.',
        },
        {
          type: 'paragraph',
          content:
            'Certifique-se de incluir proteínas, fibras e gorduras saudáveis em seu café da manhã para uma nutrição equilibrada. Um bom exemplo é um smoothie de frutas com aveia e sementes.',
        },
        {
          type: 'paragraph',
          content:
            'Lembre-se: alimentação saudável é essencial para uma vida saudável. Se precisar de mais dicas, estou à disposição para ajudar!',
        },
      ],
    },
    {
      id: 2,
      author: {
        avatarUrl:
          'https://t3.ftcdn.net/jpg/01/97/11/64/360_F_197116416_hpfTtXSoJMvMqU99n6hGP4xX0ejYa4M7.jpg',
        name: 'Carlos Mendes',
        role: 'Personal Trainer',
      },
      content: [
        {
          type: 'paragraph',
          content:
            'Bom dia pessoal! Quero compartilhar uma dica de treino para fortalecer os músculos das costas: remada com barra.',
        },
        {
          type: 'paragraph',
          content:
            'Este exercício é excelente para trabalhar os músculos das costas, ombros e braços. Lembre-se de manter a postura correta e usar um peso adequado para evitar lesões.',
        },
        {
          type: 'paragraph',
          content:
            'Adicione a remada com barra ao seu treino e sinta a diferença na sua força e postura!',
        },
      ],
    },
    {
      id: 3,
      author: {
        avatarUrl:
          'https://www.byrdie.com/thmb/amY4kyqUvWpmB3rvM0aVcfeKhog=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txpc8538098My9300_Medium_3514456-6a99366137974ec9969128c3466d343b.jpg',
        name: 'Elena Rodrigues',
        role: 'Estilista',
      },
      content: [
        {
          type: 'paragraph',
          content:
            'Olá fashionistas! Quero compartilhar uma tendência que está bombando nas passarelas: estampas florais!',
        },
        {
          type: 'paragraph',
          content:
            'As estampas florais estão em alta nesta temporada e são perfeitas para adicionar um toque de frescor e feminilidade ao seu guarda-roupa.',
        },
        {
          type: 'paragraph',
          content:
            'Experimente incorporar estampas florais em vestidos, blusas ou até mesmo em acessórios para um visual moderno e elegante!',
        },
      ],
    },
    {
      id: 4,
      author: {
        avatarUrl:
          'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710288000&semt=ais',
        name: 'Lucas Oliveira',
        role: 'Psicólogo',
      },
      content: [
        {
          type: 'paragraph',
          content:
            'Hoje quero falar sobre a importância do autocuidado para a saúde mental. É fundamental reservar um tempo para cuidar de si mesmo e recarregar as energias.',
        },
        {
          type: 'paragraph',
          content:
            'Praticar atividades relaxantes, como meditação, ioga ou simplesmente tirar um tempo para fazer o que você gosta, pode ajudar a reduzir o estresse e melhorar o bem-estar emocional.',
        },
        {
          type: 'paragraph',
          content:
            'Lembre-se: cuidar de si mesmo não é egoísmo, é uma parte essencial de manter uma boa saúde mental. Priorize o seu bem-estar!',
        },
      ],
    },
    {
      id: 5,
      author: {
        avatarUrl:
          'https://i.pinimg.com/736x/d6/a9/57/d6a957f1d8045c9c973c12bf5968326f.jpg',
        name: 'Maria Santos',
        role: 'Dermatologista',
      },
      content: [
        {
          type: 'paragraph',
          content:
            'Bom dia! Quero compartilhar uma dica rápida para cuidar da sua pele neste verão: use protetor solar todos os dias!',
        },
        {
          type: 'paragraph',
          content:
            'A exposição ao sol sem proteção pode causar danos à pele, incluindo queimaduras solares, envelhecimento precoce e até mesmo câncer de pele. Certifique-se de aplicar protetor solar com FPS adequado e reaplicar conforme necessário.',
        },
        {
          type: 'paragraph',
          content: 'Proteja sua pele e desfrute do verão com segurança!',
        },
      ],
    },
  ];

  return (
    <div className={style.container}>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              url={post.author.avatarUrl}
              name={post.author.name}
              role={post.author.role}
              tittle={post.content[0].content}
              paragraph1={post.content[1].content}
              paragraph2={post.content[2].content}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
