var CHAPTER1_PAGES = [
  /* ─── Capítulo 1 – Overview ─────────────────────────────────────── */
  {
    id: 'fundamentos',
    html: `<section class="page" id="page-fundamentos">
  <span class="page-label">CAPÍTULO 1</span>
  <h1 class="hero-title">Fundamentos da Segurança Digital</h1>
  <p class="hero-subtitle">Compreenda os conceitos básicos para proteger dados, dispositivos e contas no ambiente online.</p>

  <div class="info-box">
    <span class="info-box-icon">🛡️</span>
    <div>
      <strong>Por que isso importa?</strong>
      <p>Segurança digital é o conjunto de práticas, ferramentas e cuidados utilizados para proteger dados, dispositivos e contas no ambiente online. Para crianças e adolescentes, aprender isso desde cedo é fundamental para uma vida digital segura.</p>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Tópicos deste capítulo</h2>
    <div class="cards-grid">
      <div class="topic-card clickable" onclick="navigateTo('fundamentos-11')">
        <div class="card-icon icon-green">🔍</div>
        <h3>1.1 O que é segurança digital?</h3>
        <p>Entenda o conceito, sua importância e as práticas essenciais para o dia a dia.</p>
      </div>
      <div class="topic-card clickable" onclick="navigateTo('fundamentos-12')">
        <div class="card-icon icon-blue">🗂️</div>
        <h3>1.2 Proteção de dados pessoais</h3>
        <p>Saiba quais dados são sensíveis e como evitar expô-los a pessoas mal-intencionadas.</p>
      </div>
      <div class="topic-card clickable" onclick="navigateTo('fundamentos-13')">
        <div class="card-icon icon-orange">🔑</div>
        <h3>1.3 Importância de senhas seguras</h3>
        <p>Como criar e gerenciar senhas fortes e utilizar verificação em duas etapas.</p>
      </div>
      <div class="topic-card clickable" onclick="navigateTo('fundamentos-14')">
        <div class="card-icon icon-red">⚠️</div>
        <h3>1.4 Como identificar riscos</h3>
        <p>Reconheça sites falsos, links suspeitos e golpes antes de ser vítima.</p>
      </div>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('apresentacao')">← Anterior<br /><small>Apresentação do Guia</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('fundamentos-11')">Próximo<br /><small>1.1 O que é segurança digital?</small> →</button>
  </div>
</section>`
  },

  /* ─── 1.1 O que é segurança digital? ────────────────────────────── */
  {
    id: 'fundamentos-11',
    html: `<section class="page" id="page-fundamentos-11">
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <span class="bc-item bc-link" onclick="navigateTo('apresentacao')">Início</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-link" onclick="navigateTo('fundamentos')">Fundamentos da Segurança Digital</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">O que é segurança digital?</span>
  </nav>

  <span class="page-label chapter-tag">Capítulo 1.1</span>

  <div class="hero-section">
    <div class="hero-text">
      <h1 class="hero-title">O que é segurança digital?</h1>
      <p>A segurança digital é o conjunto de práticas, ferramentas e cuidados utilizados para proteger seus dados, dispositivos e contas no ambiente online.</p>
      <p>Ela envolve tudo o que fazemos para evitar problemas como roubo de informações, invasão de contas, golpes na internet e vazamento de dados pessoais.</p>
    </div>
    <div class="hero-illustration">
      <img src="assets/images/security_laptop.png" alt="Laptop com escudo de segurança digital" class="hero-img" />
    </div>
  </div>

  <div class="security-box">
    <p class="security-box-title">A segurança digital está em:</p>
    <div class="security-practices">
      <div class="practice-item"><div class="practice-icon">🔑</div><span>Criar senhas fortes</span></div>
      <div class="practice-item"><div class="practice-icon">🚫</div><span>Não clicar em links suspeitos</span></div>
      <div class="practice-item"><div class="practice-icon">📱</div><span>Verificação em dois fatores</span></div>
      <div class="practice-item"><div class="practice-icon">⚙️</div><span>Manter apps atualizados</span></div>
      <div class="practice-item"><div class="practice-icon">🛡️</div><span>Proteger informações pessoais</span></div>
    </div>
  </div>

  <div class="quote-box">
    <span class="quote-icon">ℹ️</span>
    <p>No mundo digital, informação é poder. Proteger seus dados é proteger sua identidade.</p>
  </div>

  <div class="content-section why-section">
    <div class="why-text">
      <h2 class="section-title">Por que isso é importante?</h2>
      <p>Muitas ações que fazemos na internet deixam rastros: dados cadastrais, fotos, mensagens, localizações e preferências. Essas informações podem ser usadas de forma indevida se não forem protegidas.</p>
      <p>Quando praticamos a segurança digital, garantimos mais privacidade, tranquilidade e proteção para nós e para quem está ao nosso redor.</p>
      <p>Além disso, ela garante que suas informações estejam seguras mesmo em caso de perda de dispositivos, roubo ou ataques virtuais.</p>
    </div>
    <div class="why-illustration">
      <img src="assets/images/family_digital.png" alt="Família usando tecnologia com segurança" class="why-img" />
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Exemplos do dia a dia</h2>
    <div class="examples-grid">
      <div class="example-card"><div class="example-icon">📶</div><h3>Evitar Wi-Fi público</h3><p>Redes abertas podem ser usadas para interceptar dados.</p></div>
      <div class="example-card"><div class="example-icon">✉️</div><h3>Desconfiar de mensagens estranhas</h3><p>E-mails que pedem dados ou oferecem prêmios podem ser golpes.</p></div>
      <div class="example-card"><div class="example-icon">⬇️</div><h3>Baixar de fontes confiáveis</h3><p>Aplicativos fora das lojas oficiais podem conter vírus.</p></div>
      <div class="example-card"><div class="example-icon">👁️</div><h3>Cuidar do que compartilha</h3><p>Fotos, rotinas e localização podem revelar mais do que deveriam.</p></div>
    </div>
  </div>

  <div class="tip-box">
    <div class="tip-icon-wrap">🛡️</div>
    <div>
      <strong class="tip-title">Dica importante</strong>
      <p>Segurança digital não é apenas sobre tecnologia, mas também sobre atitudes conscientes e responsáveis no ambiente online.</p>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('fundamentos')">← Anterior<br /><small>Capítulo 1 – Visão geral</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('fundamentos-12')">Próximo<br /><small>1.2 Proteção de dados pessoais</small> →</button>
  </div>
</section>`
  },

  /* ─── 1.2 Proteção de dados pessoais ────────────────────────────── */
  {
    id: 'fundamentos-12',
    html: `<section class="page" id="page-fundamentos-12">
  <nav class="breadcrumb">
    <span class="bc-item bc-link" onclick="navigateTo('apresentacao')">Início</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-link" onclick="navigateTo('fundamentos')">Fundamentos da Segurança Digital</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">Proteção de dados pessoais</span>
  </nav>
  <span class="page-label chapter-tag">Capítulo 1.2</span>

  <div class="hero-section">
    <div class="hero-text">
      <h1 class="hero-title">Proteção de dados pessoais</h1>
      <p>Informações como nome, endereço, telefone, escola, fotos e localização podem parecer inofensivas, mas, quando expostas, podem ser utilizadas de forma indevida por pessoas mal-intencionadas.</p>
    </div>
    <div class="hero-illustration">
      <img src="assets/images/data_protection.svg" alt="Escudo protegendo dados pessoais" class="hero-img" />
    </div>
  </div>

  <div class="info-box">
    <span class="info-box-icon">🗂️</span>
    <div>
      <strong>Crianças são mais vulneráveis</strong>
      <p>Crianças e adolescentes muitas vezes não conseguem identificar os riscos ao compartilhar informações na internet. Por isso, é essencial que aprendam, desde cedo, a importância de proteger seus dados e entender que nem tudo deve ser divulgado online.</p>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">O que pode acontecer quando dados são expostos?</h2>
    <p>Quando dados pessoais são expostos, um atacante pode utilizá-los de diversas maneiras prejudiciais:</p>
    <div class="alert-box">
      <p class="alert-box-title">⚠️ Principais riscos</p>
      <ul class="checklist red">
        <li><strong>Contato com desconhecidos:</strong> que podem se passar por outras pessoas para ganhar confiança.</li>
        <li><strong>Golpes e fraudes:</strong> utilizando informações para enganar ou manipular a vítima.</li>
        <li><strong>Roubo de identidade:</strong> onde alguém utiliza os dados para se passar pela criança.</li>
        <li><strong>Exposição indevida:</strong> compartilhamento de fotos ou informações sem consentimento.</li>
        <li><strong>Rastreamento de localização:</strong> colocando em risco a segurança física da criança.</li>
      </ul>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Hábitos essenciais a desenvolver</h2>
    <ul class="checklist green">
      <li>Não compartilhar informações pessoais com desconhecidos online.</li>
      <li>Evitar divulgar dados em redes sociais de forma pública.</li>
      <li>Nunca informar o nome da escola, rotina diária ou localização em tempo real.</li>
      <li>Sempre contar com a orientação de pais ou responsáveis ao usar a internet.</li>
      <li>Questionar antes de cadastrar-se: "Essa plataforma realmente precisa dessas informações?"</li>
    </ul>
  </div>

  <div class="tips-list">
    <p class="tips-list-title">💡 Dicas para Pais e Responsáveis</p>
    <ul class="checklist blue">
      <li>Explique, por exemplos concretos, que divulgar o nome da escola ou a rotina pode facilitar o contato de pessoas mal-intencionadas.</li>
      <li>Compartilhar fotos ou dados pessoais pode ser usado por terceiros para enganar, manipular ou até se passar pela criança.</li>
      <li>Quando a orientação acontece de forma aberta e acolhedora, a criança desenvolve mais consciência sobre o que compartilha.</li>
      <li>Revise periodicamente quais dados estão visíveis nos perfis que a criança usa.</li>
    </ul>
  </div>

  <div class="tip-box">
    <div class="tip-icon-wrap">🤝</div>
    <div>
      <strong class="tip-title">O diálogo é a melhor proteção</strong>
      <p>Mais do que evitar riscos, a proteção de dados pessoais contribui para formar usuários mais conscientes, responsáveis e preparados para utilizar a tecnologia de forma segura ao longo da vida.</p>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('fundamentos-11')">← Anterior<br /><small>1.1 O que é segurança digital?</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('fundamentos-13')">Próximo<br /><small>1.3 Importância de senhas seguras</small> →</button>
  </div>
</section>`
  },

  /* ─── 1.3 Importância de senhas seguras ──────────────────────────── */
  {
    id: 'fundamentos-13',
    html: `<section class="page" id="page-fundamentos-13">
  <nav class="breadcrumb">
    <span class="bc-item bc-link" onclick="navigateTo('apresentacao')">Início</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-link" onclick="navigateTo('fundamentos')">Fundamentos da Segurança Digital</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">Importância de senhas seguras</span>
  </nav>
  <span class="page-label chapter-tag">Capítulo 1.3</span>

  <div class="hero-section">
    <div class="hero-text">
      <h1 class="hero-title">Importância de senhas seguras</h1>
      <p>As senhas funcionam como uma "chave de acesso" a dados importantes: redes sociais, e-mails, jogos e aplicativos. O uso de senhas fracas ou repetidas pode comprometer toda a segurança digital.</p>
    </div>
    <div class="hero-illustration">
      <img src="assets/images/password_security.svg" alt="Cadeado e chave representando segurança de senhas" class="hero-img" />
    </div>
  </div>

  <div class="security-box">
    <p class="security-box-title">Riscos de senhas fracas ou repetidas</p>
    <div class="security-practices">
      <div class="practice-item"><div class="practice-icon">🔓</div><span>Invasão de contas pessoais</span></div>
      <div class="practice-item"><div class="practice-icon">📷</div><span>Roubo de fotos e mensagens</span></div>
      <div class="practice-item"><div class="practice-icon">🎭</div><span>Golpes usando sua conta</span></div>
      <div class="practice-item"><div class="practice-icon">❌</div><span>Perda de acesso à conta</span></div>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Como criar uma senha segura</h2>
    <p>Senhas simples como "123456" ou datas de nascimento são facilmente descobertas. Além disso, utilizar a mesma senha em diferentes contas aumenta ainda mais o risco: se uma for invadida, todas as outras também podem ser acessadas.</p>
    <ul class="checklist green">
      <li>Utilize uma combinação de letras maiúsculas e minúsculas, números e símbolos.</li>
      <li>Evite informações pessoais óbvias como nome, aniversário ou sequências simples.</li>
      <li>Crie senhas diferentes para cada conta.</li>
      <li>Nunca compartilhe suas senhas com outras pessoas, nem com amigos próximos.</li>
      <li>Use geradores de senhas para criar combinações fortes.</li>
      <li>Armazene senhas em locais seguros, como um gerenciador de senhas confiável.</li>
    </ul>
  </div>

  <div class="quote-box">
    <span class="quote-icon">🔐</span>
    <p><strong>Verificação em dois fatores (2FA):</strong> Mesmo que um atacante tenha acesso à sua senha, ele ainda precisará de um segundo fator — como biometria, reconhecimento facial ou código enviado ao celular — para concluir o acesso. Isso reduz significativamente as chances de invasão.</p>
  </div>

  <div class="tips-list">
    <p class="tips-list-title">💡 Dicas para Pais e Responsáveis</p>
    <ul class="checklist blue">
      <li>Oriente sobre a importância de manter as senhas em sigilo — nem mesmo os pais precisam saber a senha das contas dos filhos.</li>
      <li>Ajude na criação das primeiras senhas seguras, ensinando o raciocínio por trás delas.</li>
      <li>Ative o 2FA em todas as contas que a família utiliza.</li>
      <li>Explique que compartilhar senhas, mesmo com amigos próximos, é um risco grave, especialmente em caso de conflitos interpessoais.</li>
    </ul>
  </div>

  <div class="tip-box">
    <div class="tip-icon-wrap">🔑</div>
    <div>
      <strong class="tip-title">Dica importante</strong>
      <p>Esse cuidado simples pode evitar diversos problemas e contribui para uma experiência muito mais segura no ambiente digital para toda a família.</p>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('fundamentos-12')">← Anterior<br /><small>1.2 Proteção de dados pessoais</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('fundamentos-14')">Próximo<br /><small>1.4 Como identificar riscos</small> →</button>
  </div>
</section>`
  },

  /* ─── 1.4 Como identificar riscos ───────────────────────────────── */
  {
    id: 'fundamentos-14',
    html: `<section class="page" id="page-fundamentos-14">
  <nav class="breadcrumb">
    <span class="bc-item bc-link" onclick="navigateTo('apresentacao')">Início</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-link" onclick="navigateTo('fundamentos')">Fundamentos da Segurança Digital</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">Como identificar riscos</span>
  </nav>
  <span class="page-label chapter-tag">Capítulo 1.4</span>

  <div class="hero-section">
    <div class="hero-text">
      <h1 class="hero-title">Como identificar riscos</h1>
      <p>Assim como na vida real, o ambiente digital também apresenta riscos que exigem atenção. É importante desenvolver o senso crítico para identificar possíveis ameaças e saber como agir diante delas.</p>
    </div>
    <div class="hero-illustration">
      <img src="assets/images/risk_identification.svg" alt="Lupa identificando sinais de risco digital" class="hero-img" />
    </div>
  </div>

  <div class="security-box">
    <p class="security-box-title">Principais riscos no ambiente digital</p>
    <div class="security-practices">
      <div class="practice-item"><div class="practice-icon">🌐</div><span>Sites falsos</span></div>
      <div class="practice-item"><div class="practice-icon">🔗</div><span>Links suspeitos</span></div>
      <div class="practice-item"><div class="practice-icon">📲</div><span>Apps não confiáveis</span></div>
      <div class="practice-item"><div class="practice-icon">📞</div><span>Golpes por mensagens</span></div>
      <div class="practice-item"><div class="practice-icon">👤</div><span>Desconhecidos online</span></div>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Sinais de que algo não é seguro</h2>
    <div class="alert-box">
      <p class="alert-box-title">⚠️ Fique atento a estes sinais</p>
      <ul class="checklist red">
        <li>Erros de escrita ou aparência estranha em sites e mensagens.</li>
        <li>Promessas muito vantajosas ou urgentes ("clique agora", "última chance").</li>
        <li>Solicitação de informações pessoais ou senhas.</li>
        <li>Links desconhecidos ou encurtados que escondem o destino real.</li>
        <li>Perfis com poucas informações ou comportamento suspeito.</li>
      </ul>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Como reduzir os riscos</h2>
    <ul class="checklist green">
      <li>Verifique se o site começa com <strong>https</strong> antes de inserir dados — esse tipo de conexão utiliza criptografia para proteger as informações transmitidas.</li>
      <li>Utilize apenas lojas oficiais (App Store, Google Play) para baixar aplicativos.</li>
      <li>Não clique em links desconhecidos recebidos por mensagem ou e-mail.</li>
      <li>Nunca compartilhe informações pessoais ou senhas.</li>
      <li>Confirme a veracidade de mensagens ligando diretamente para a empresa ou pessoa.</li>
    </ul>
  </div>

  <div class="tips-list">
    <p class="tips-list-title">💡 Dicas para Pais e Responsáveis</p>
    <ul class="checklist blue">
      <li>Ensine, por meio de exemplos, como identificar comportamentos e situações suspeitas — isso desenvolve o senso crítico da criança.</li>
      <li>Alerte para situações comuns como anúncios com ofertas "boas demais para ser verdade", por exemplo, um jogo pago sendo oferecido gratuitamente por links desconhecidos.</li>
      <li>Oriente a criança a não baixar arquivos de fontes desconhecidas e sempre pedir ajuda a um adulto ao se deparar com algo estranho.</li>
      <li>Incentive que a criança compartilhe dúvidas e experiências online — quando ela se sente segura para conversar, as chances de proteção aumentam significativamente.</li>
    </ul>
  </div>

  <div class="tip-box">
    <div class="tip-icon-wrap">🧠</div>
    <div>
      <strong class="tip-title">Senso crítico como proteção</strong>
      <p>A criança que aprende a questionar o que vê online está muito mais protegida do que aquela que apenas segue regras sem compreendê-las.</p>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('fundamentos-13')">← Anterior<br /><small>1.3 Importância de senhas seguras</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('beneficios')">Próximo<br /><small>2. Benefícios da Tecnologia</small> →</button>
  </div>
</section>`
  }
];
