var CHAPTER2_PAGES = [
  /* ─── Capítulo 2 – Overview ─────────────────────────────────────── */
  {
    id: 'beneficios',
    html: `<section class="page" id="page-beneficios">
  <span class="page-label">CAPÍTULO 2</span>
  <h1 class="hero-title">Benefícios da Tecnologia para Crianças</h1>
  <p class="hero-subtitle">A internet, usada com consciência e orientação, pode ser uma poderosa aliada no desenvolvimento infantil.</p>

  <div class="info-box">
    <span class="info-box-icon">🤍</span>
    <div>
      <strong>Tecnologia como aliada</strong>
      <p>A tecnologia faz parte do mundo em que as crianças estão crescendo. Restringir totalmente o acesso pode gerar curiosidade pelo proibido e limitar importantes oportunidades de aprendizado. Quando utilizada de forma orientada e equilibrada, a internet pode se tornar uma grande aliada no desenvolvimento infantil.</p>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Tópicos deste capítulo</h2>
    <div class="cards-grid">
      <div class="topic-card clickable" onclick="navigateTo('beneficios-21')">
        <div class="card-icon icon-green">🌱</div>
        <h3>2.1 Desenvolvimento pessoal</h3>
        <p>Como a internet estimula a criatividade, o pensamento lógico e a autonomia das crianças.</p>
      </div>
      <div class="topic-card clickable" onclick="navigateTo('beneficios-22')">
        <div class="card-icon icon-blue">🌍</div>
        <h3>2.2 Comunicação e culturas</h3>
        <p>O impacto da conexão digital nas relações sociais e no contato com diferentes realidades do mundo.</p>
      </div>
      <div class="topic-card clickable" onclick="navigateTo('beneficios-23')">
        <div class="card-icon icon-teal">📚</div>
        <h3>2.3 Tecnologia para educação</h3>
        <p>Plataformas, apps e recursos que tornam o aprendizado mais dinâmico, interativo e envolvente.</p>
      </div>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('fundamentos-14')">← Anterior<br /><small>1.4 Como identificar riscos</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('beneficios-21')">Próximo<br /><small>2.1 Desenvolvimento pessoal</small> →</button>
  </div>
</section>`
  },

  /* ─── 2.1 Desenvolvimento pessoal ───────────────────────────────── */
  {
    id: 'beneficios-21',
    html: `<section class="page" id="page-beneficios-21">
  <nav class="breadcrumb">
    <span class="bc-item bc-link" onclick="navigateTo('apresentacao')">Início</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-link" onclick="navigateTo('beneficios')">Benefícios da Tecnologia</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">Desenvolvimento pessoal</span>
  </nav>
  <span class="page-label chapter-tag">Capítulo 2.1</span>

  <div class="hero-section">
    <div class="hero-text">
      <h1 class="hero-title">Como a internet ajuda no desenvolvimento pessoal</h1>
      <p>Quando utilizada de forma orientada e equilibrada, a internet pode contribuir para o aprendizado, a criatividade, a curiosidade e a construção do pensamento próprio da criança.</p>
    </div>
    <div class="hero-illustration">
      <img src="assets/images/family_digital.png" alt="Criança explorando o mundo digital com orientação" class="hero-img" />
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">O que a criança pode fazer com a internet</h2>
    <p>A tecnologia oferece experiências que estimulam diferentes aspectos do desenvolvimento infantil:</p>
    <div class="examples-grid cols-3">
      <div class="example-card">
        <div class="example-icon">🌍</div>
        <h3>Explorar o mundo</h3>
        <p>Ferramentas como o Google Earth permitem visitar lugares e museus virtualmente, estimulando a curiosidade.</p>
      </div>
      <div class="example-card">
        <div class="example-icon">🎮</div>
        <h3>Desenvolver lógica</h3>
        <p>Jogos como Minecraft e Roblox desenvolvem noções de geometria, gestão de recursos e lógica de programação.</p>
      </div>
      <div class="example-card">
        <div class="example-icon">🎨</div>
        <h3>Expressar criatividade</h3>
        <p>Ferramentas de edição permitem criar desenhos, stop motions e histórias em quadrinhos digitais.</p>
      </div>
    </div>
  </div>

  <div class="highlight-box">
    <div class="highlight-box-icon">🚲</div>
    <div>
      <p>A tecnologia é como uma bicicleta: se você proibir a criança de usá-la por medo de quedas, ela nunca aprenderá a se equilibrar. O papel dos pais é agir como "rodinhas de apoio", oferecendo orientação até que ela desenvolva autonomia para navegar com segurança no mundo digital.</p>
    </div>
  </div>

  <div class="tips-list">
    <p class="tips-list-title">💡 Dicas para Pais e Responsáveis</p>
    <ul class="checklist blue">
      <li>Em vez de deixar a criança sozinha com o tablet, proponha desafios: "Vamos descobrir como fazer um avião de papel?" ou "Qual é o animal mais rápido do mundo?"</li>
      <li>Pergunte o que ela aprendeu durante um jogo ou peça que explique como funciona uma ferramenta que descobriu — isso estimula a comunicação e o pensamento lógico.</li>
      <li>Escolham juntos aplicativos ou canais educativos, analisando se são adequados e discutindo o que pode ser aprendido com eles.</li>
      <li>Incentive o uso da tecnologia para desenvolver talentos: apps de música, desenho ou criação podem ajudar a criança a explorar seus interesses.</li>
    </ul>
  </div>

  <div class="tip-box">
    <div class="tip-icon-wrap">🌱</div>
    <div>
      <strong class="tip-title">Autonomia gradual</strong>
      <p>O objetivo é que a criança passe do papel de consumidora passiva para o de exploradora ativa — aprendendo a usar a tecnologia com propósito e responsabilidade.</p>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('beneficios')">← Anterior<br /><small>Capítulo 2 – Visão geral</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('beneficios-22')">Próximo<br /><small>2.2 Comunicação e culturas</small> →</button>
  </div>
</section>`
  },

  /* ─── 2.2 Comunicação e culturas ────────────────────────────────── */
  {
    id: 'beneficios-22',
    html: `<section class="page" id="page-beneficios-22">
  <nav class="breadcrumb">
    <span class="bc-item bc-link" onclick="navigateTo('apresentacao')">Início</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-link" onclick="navigateTo('beneficios')">Benefícios da Tecnologia</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">Comunicação e culturas</span>
  </nav>
  <span class="page-label chapter-tag">Capítulo 2.2</span>

  <div class="hero-section">
    <div class="hero-text">
      <h1 class="hero-title">Comunicação, conexão e contato com diferentes culturas</h1>
      <p>A internet ampliou significativamente as formas de comunicação, permitindo que crianças e adolescentes se conectem com pessoas de diferentes lugares, culturas e realidades.</p>
    </div>
    <div class="hero-illustration">
      <img src="assets/images/global_communication.svg" alt="Globo conectado com mensagens de diferentes culturas" class="hero-img" />
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Como a conexão digital beneficia</h2>
    <p>Por meio de jogos online, redes sociais e plataformas educativas, a criança pode trocar experiências, compartilhar ideias e desenvolver novas formas de pensar. Esse contato com a diversidade favorece a empatia, o respeito e a compreensão pelo outro — habilidades essenciais tanto no ambiente digital quanto na vida real.</p>
    <p>Além disso, a comunicação digital fortalece vínculos já existentes, como amizades e relações familiares, especialmente quando há distância. Também incentiva o trabalho em equipe, a colaboração e a resolução de problemas em grupo.</p>
  </div>

  <div class="security-box">
    <p class="security-box-title">O contato com diferentes culturas traz benefícios como:</p>
    <div class="security-practices">
      <div class="practice-item"><div class="practice-icon">🤝</div><span>Combater preconceitos desde cedo</span></div>
      <div class="practice-item"><div class="practice-icon">🗣️</div><span>Aprender idiomas de forma prática</span></div>
      <div class="practice-item"><div class="practice-icon">💬</div><span>Desenvolver pensamento crítico</span></div>
      <div class="practice-item"><div class="practice-icon">🌐</div><span>Ampliar horizontes culturais</span></div>
    </div>
  </div>

  <div class="quote-box">
    <span class="quote-icon">🌍</span>
    <p>Embora a internet possibilite o contato com pessoas desconhecidas, é fundamental que isso aconteça com orientação. O objetivo não é proibir essas interações, mas ensinar a criança a reconhecer limites e agir com segurança.</p>
  </div>

  <div class="tips-list">
    <p class="tips-list-title">💡 Dicas para Pais e Responsáveis</p>
    <ul class="checklist blue">
      <li>Explore interesses da criança, pesquisando juntos a origem de jogos, desenhos ou conteúdos que ela consome.</li>
      <li>Reforce que as regras de respeito e educação da vida real também se aplicam ao ambiente online.</li>
      <li>Incentive a empatia, perguntando como ela se sentiria em determinadas situações digitais.</li>
      <li>Apresente conteúdos que mostrem diferentes culturas e realidades, estimulando a curiosidade e o diálogo.</li>
    </ul>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('beneficios-21')">← Anterior<br /><small>2.1 Desenvolvimento pessoal</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('beneficios-23')">Próximo<br /><small>2.3 Tecnologia para educação</small> →</button>
  </div>
</section>`
  },

  /* ─── 2.3 Tecnologia para educação ──────────────────────────────── */
  {
    id: 'beneficios-23',
    html: `<section class="page" id="page-beneficios-23">
  <nav class="breadcrumb">
    <span class="bc-item bc-link" onclick="navigateTo('apresentacao')">Início</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-link" onclick="navigateTo('beneficios')">Benefícios da Tecnologia</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">Tecnologia para educação</span>
  </nav>
  <span class="page-label chapter-tag">Capítulo 2.3</span>

  <div class="hero-section">
    <div class="hero-text">
      <h1 class="hero-title">Uso da tecnologia para educação</h1>
      <p>A tecnologia pode ser uma grande aliada no processo de aprendizagem, tornando o estudo mais dinâmico, interativo e envolvente. Quando bem orientado, o uso da internet deixa de ser apenas entretenimento.</p>
    </div>
    <div class="hero-illustration">
      <img src="assets/images/education_technology.svg" alt="Tablet com livro digital e capelo de formatura" class="hero-img" />
    </div>
  </div>

  <div class="info-box">
    <span class="info-box-icon">📚</span>
    <div>
      <strong>Variedade de formatos</strong>
      <p>Enquanto métodos tradicionais se limitam ao texto e imagens estáticas, a tecnologia permite o uso de vídeos, áudios, simulações e interatividade. Isso favorece diferentes estilos de aprendizagem, tornando o processo mais eficiente e personalizado.</p>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Exemplos de situações práticas</h2>
    <div class="examples-grid cols-3">
      <div class="example-card">
        <div class="example-icon">🔭</div>
        <h3>Curiosidade respondida</h3>
        <p>Ao surgir a dúvida "por que o céu é azul?", os pais podem buscar vídeos ou simulações que expliquem o fenômeno de forma visual e simples.</p>
      </div>
      <div class="example-card">
        <div class="example-icon">🎯</div>
        <h3>Aprendizado lúdico</h3>
        <p>Aplicativos que transformam conteúdos escolares em desafios ou jogos tornam o aprendizado mais leve, incentivando a prática sem sensação de obrigação.</p>
      </div>
      <div class="example-card">
        <div class="example-icon">🛠️</div>
        <h3>Conhecimento aplicado</h3>
        <p>Tutoriais que ensinam a criar objetos, realizar experiências ou preparar receitas conectam o aprendizado digital com o mundo real.</p>
      </div>
    </div>
  </div>

  <div class="tips-list">
    <p class="tips-list-title">💡 Dicas para Pais e Responsáveis</p>
    <ul class="checklist blue">
      <li>Estimule a curiosidade, pesquisando junto com a criança sempre que surgir uma dúvida — esse hábito de pesquisa é uma habilidade valiosa para toda a vida.</li>
      <li>Incentive o uso de plataformas alinhadas aos interesses da criança, como programação, idiomas, arte ou ciência.</li>
      <li>Proponha momentos em que a criança compartilhe o que aprendeu, fortalecendo a autonomia e a confiança.</li>
      <li>Equilibre o consumo de entretenimento com conteúdo educativo, introduzindo gradualmente materiais que ensinem de forma leve e interessante.</li>
    </ul>
  </div>

  <div class="tip-box">
    <div class="tip-icon-wrap">🎓</div>
    <div>
      <strong class="tip-title">Tecnologia + orientação = aprendizado poderoso</strong>
      <p>A chave não está na ferramenta em si, mas em como ela é utilizada. Com acompanhamento, qualquer plataforma pode se tornar um aliado do desenvolvimento.</p>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('beneficios-22')">← Anterior<br /><small>2.2 Comunicação e culturas</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('riscos')">Próximo<br /><small>3. Riscos da Internet</small> →</button>
  </div>
</section>`
  }
];
