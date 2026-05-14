var CHAPTER3_PAGES = [
  /* ─── Capítulo 3 – Overview ─────────────────────────────────────── */
  {
    id: 'riscos',
    html: `<section class="page" id="page-riscos">
  <span class="page-label">CAPÍTULO 3</span>
  <h1 class="hero-title">Riscos da Internet</h1>
  <p class="hero-subtitle">Conhecer os perigos é o primeiro passo para preveni-los. A proteção mais eficaz começa com a informação.</p>

  <div class="info-box">
    <span class="info-box-icon">⚠️</span>
    <div>
      <strong>Atenção sem alarmismo</strong>
      <p>O objetivo não é gerar medo, mas preparar pais e filhos para reconhecer e reagir adequadamente às situações de risco. A criança que conhece os perigos e sabe a quem recorrer está muito mais protegida.</p>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Tópicos deste capítulo</h2>
    <div class="cards-grid">
      <div class="topic-card clickable" onclick="navigateTo('riscos-31')">
        <div class="card-icon icon-orange">👤</div>
        <h3>3.1 Contato com desconhecidos</h3>
        <p>Entenda como pessoas mal-intencionadas agem online e como proteger seus filhos.</p>
      </div>
      <div class="topic-card clickable" onclick="navigateTo('riscos-32')">
        <div class="card-icon icon-red">😔</div>
        <h3>3.2 Cyberbullying</h3>
        <p>Como identificar, prevenir e agir diante do bullying virtual e seus impactos emocionais.</p>
      </div>
      <div class="topic-card clickable" onclick="navigateTo('riscos-33')">
        <div class="card-icon icon-purple">📱</div>
        <h3>3.3 Dependência digital</h3>
        <p>Os mecanismos que tornam o uso excessivo difícil de controlar e como criar equilíbrio.</p>
      </div>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('beneficios-23')">← Anterior<br /><small>2.3 Tecnologia para educação</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('riscos-31')">Próximo<br /><small>3.1 Contato com desconhecidos</small> →</button>
  </div>
</section>`
  },

  /* ─── 3.1 Contato com desconhecidos ─────────────────────────────── */
  {
    id: 'riscos-31',
    html: `<section class="page" id="page-riscos-31">
  <nav class="breadcrumb">
    <span class="bc-item bc-link" onclick="navigateTo('apresentacao')">Início</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-link" onclick="navigateTo('riscos')">Riscos da Internet</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">Contato com desconhecidos</span>
  </nav>
  <span class="page-label chapter-tag">Capítulo 3.1</span>

  <div class="hero-section">
    <div class="hero-text">
      <h1 class="hero-title">Contato com desconhecidos</h1>
      <p>O risco não está no ato de se comunicar, mas na dificuldade em verificar a real identidade e as intenções de quem está do outro lado da tela. No mundo digital, pessoas mal-intencionadas podem usar perfis falsos e técnicas de persuasão — conhecidas como engenharia social — para ganhar confiança.</p>
    </div>
    <div class="hero-illustration">
      <img src="assets/images/unknown_contact.svg" alt="Escudo protegendo de contato com desconhecidos online" class="hero-img" />
    </div>
  </div>

  <div class="info-box">
    <span class="info-box-icon">👤</span>
    <div>
      <strong>O problema não é conversar — é não poder verificar</strong>
      <p>Muitas vezes, a criança acredita estar conversando com alguém da mesma idade devido a interesses em comum, como um jogo ou um filme. O papel dos pais é ensinar que, enquanto a confiança não for estabelecida por meios seguros, é necessário manter cautela e privacidade.</p>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Sinais de alerta e comportamentos suspeitos</h2>
    <div class="alert-box">
      <p class="alert-box-title">⚠️ Fique atento a estes comportamentos</p>
      <ul class="checklist red">
        <li>Quando o desconhecido pede que a conversa não seja compartilhada com os pais ou responsáveis.</li>
        <li>Pedidos para sair de um ambiente moderado (chat de um jogo) para um ambiente privado (aplicativos de mensagens).</li>
        <li>Promessas de "moedas virtuais", itens raros em jogos ou presentes físicos em troca de fotos ou informações pessoais.</li>
        <li>Questionamentos sobre a rotina da casa, horários em que os pais estão fora ou o endereço da escola.</li>
      </ul>
    </div>
  </div>

  <div class="tips-list">
    <p class="tips-list-title">💡 Dicas para Pais e Responsáveis</p>
    <ul class="checklist blue">
      <li>Explique que interagir em um fórum de estudos com amigos da escola é diferente de aceitar solicitações de estranhos em redes sociais abertas.</li>
      <li>Use a analogia: a internet é como a rua de casa — podemos ser educados com as pessoas, mas não as convidamos para entrar no nosso quarto sem que nossos pais as conheçam primeiro.</li>
      <li>A criança deve saber que pode contar o que acontece <strong>sem medo de ser castigada ou de ter a internet cortada</strong>. O acolhimento é a melhor ferramenta de proteção.</li>
      <li>Auxilie a criança a configurar perfis como "privados" e a utilizar avatares em vez de fotos reais em plataformas de jogos.</li>
    </ul>
  </div>

  <div class="tip-box">
    <div class="tip-icon-wrap">🏠</div>
    <div>
      <strong class="tip-title">O acolhimento protege mais do que a proibição</strong>
      <p>Quando a criança sabe que pode conversar abertamente sobre o que vê online, ela busca ajuda antes que uma situação se agrave. Punição imediata faz com que ela esconda informações importantes.</p>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('riscos')">← Anterior<br /><small>Capítulo 3 – Visão geral</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('riscos-32')">Próximo<br /><small>3.2 Cyberbullying</small> →</button>
  </div>
</section>`
  },

  /* ─── 3.2 Cyberbullying ──────────────────────────────────────────── */
  {
    id: 'riscos-32',
    html: `<section class="page" id="page-riscos-32">
  <nav class="breadcrumb">
    <span class="bc-item bc-link" onclick="navigateTo('apresentacao')">Início</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-link" onclick="navigateTo('riscos')">Riscos da Internet</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">Cyberbullying</span>
  </nav>
  <span class="page-label chapter-tag">Capítulo 3.2</span>

  <div class="hero-section">
    <div class="hero-text">
      <h1 class="hero-title">Cyberbullying</h1>
      <p>O cyberbullying é a prática de utilizar tecnologias de comunicação para agredir, humilhar, intimidar ou perseguir uma pessoa de forma repetitiva. O ambiente digital trouxe agravantes que tornam a situação mais complexa do que o bullying presencial.</p>
    </div>
    <div class="hero-illustration">
      <img src="assets/images/cyberbullying_prevention.svg" alt="Mão de stop bloqueando mensagens agressivas no celular" class="hero-img" />
    </div>
  </div>

  <div class="security-box">
    <p class="security-box-title">O que torna o cyberbullying diferente</p>
    <div class="security-practices">
      <div class="practice-item"><div class="practice-icon">📢</div><span>Alcance — vista por centenas rapidamente</span></div>
      <div class="practice-item"><div class="practice-icon">♾️</div><span>Permanência — difícil de apagar totalmente</span></div>
      <div class="practice-item"><div class="practice-icon">🏠</div><span>Onipresença — invade até o ambiente doméstico</span></div>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Como identificar o cyberbullying</h2>
    <p>Muitas vezes a agressão começa disfarçada de "brincadeira". É fundamental ensinar a criança a identificar quando o limite foi ultrapassado:</p>
    <div class="alert-box">
      <p class="alert-box-title">⚠️ Formas comuns de cyberbullying</p>
      <ul class="checklist red">
        <li>Deixar a criança de fora de grupos de mensagens ou atividades online de forma sistemática para isolá-la.</li>
        <li>Espalhar mentiras ou informações privadas para causar constrangimento.</li>
        <li>Ataques constantes em fotos, vídeos ou chats de jogos.</li>
        <li>Criar stickers, memes ou montagens com o objetivo de ridicularizar o colega.</li>
      </ul>
    </div>
  </div>

  <div class="tips-list">
    <p class="tips-list-title">💡 Dicas para Pais e Responsáveis</p>
    <ul class="checklist blue">
      <li>A criança precisa saber que pode contar o que está acontecendo sem o medo de "perder o celular". Muitas vítimas silenciam por medo de punição.</li>
      <li>Reforce: se você não diria algo pessoalmente, não escreva online. Ser um "espectador" que ri ou compartilha a agressão também é uma forma de bullying.</li>
      <li>Caso o cyberbullying ocorra, a orientação é: <strong>não revidar, bloquear o agressor e registrar tudo</strong> (prints de telas e links). Esses registros são provas essenciais para intervenção escolar ou legal.</li>
      <li>Fique atento se a criança apresentar tristeza repentina após o uso do celular, irritabilidade ou desânimo para ir à escola ou interagir com amigos.</li>
    </ul>
  </div>

  <div class="quote-box">
    <span class="quote-icon">💭</span>
    <p>Diferente de um ataque hacker ao sistema (que visa dados), o cyberbullying ataca o "sistema emocional". Como a criança está em fase de formação de identidade, essas agressões digitais podem ter reflexos profundos na vida real.</p>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('riscos-31')">← Anterior<br /><small>3.1 Contato com desconhecidos</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('riscos-33')">Próximo<br /><small>3.3 Dependência digital</small> →</button>
  </div>
</section>`
  },

  /* ─── 3.3 Dependência digital ────────────────────────────────────── */
  {
    id: 'riscos-33',
    html: `<section class="page" id="page-riscos-33">
  <nav class="breadcrumb">
    <span class="bc-item bc-link" onclick="navigateTo('apresentacao')">Início</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-link" onclick="navigateTo('riscos')">Riscos da Internet</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">Dependência digital</span>
  </nav>
  <span class="page-label chapter-tag">Capítulo 3.3</span>

  <div class="hero-section">
    <div class="hero-text">
      <h1 class="hero-title">Dependência digital e uso excessivo</h1>
      <p>Diferente de outros riscos, a dependência digital não vem de um "vilão" específico. Redes sociais e jogos utilizam mecanismos de recompensa instantânea que estimulam a liberação de dopamina no cérebro, tornando o desapego difícil — especialmente para crianças em desenvolvimento.</p>
    </div>
    <div class="hero-illustration">
      <img src="assets/images/digital_dependency.svg" alt="Criança com celular e relógio mostrando uso excessivo de telas" class="hero-img" />
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Como o uso excessivo acontece</h2>
    <p>Vídeos curtos utilizam "gatilhos de curiosidade" e "recompensas variáveis" — conteúdos projetados para nunca dar um ponto final à experiência. O cérebro da criança busca constantemente o próximo vídeo em busca de uma nova dose de dopamina.</p>
    <p>O uso excessivo ocorre quando o tempo online começa a substituir atividades essenciais do mundo físico. Quando o equilíbrio é perdido, o desenvolvimento pode ser afetado no sono, na alimentação e na interação social presencial.</p>
  </div>

  <div class="content-section">
    <h2 class="section-title">Sinais de alerta</h2>
    <div class="alert-box">
      <p class="alert-box-title">⚠️ Observe estes comportamentos</p>
      <ul class="checklist red">
        <li>Reações de raiva ou ansiedade extrema quando o tempo de uso termina ou quando não há conexão disponível.</li>
        <li>Atividades que a criança antes amava perdem a graça comparadas ao celular.</li>
        <li>A criança passa o tempo "offline" pensando ou falando apenas sobre o que vai fazer quando estiver "online".</li>
        <li>Dificuldade para dormir devido ao uso de telas à noite, ou queda nas notas escolares.</li>
      </ul>
    </div>
  </div>

  <div class="tips-list">
    <p class="tips-list-title">💡 Dicas para Pais e Responsáveis</p>
    <ul class="checklist blue">
      <li>Crie regras claras como "nada de celular durante as refeições" ou "telas desligadas uma hora antes de dormir". Isso ajuda o cérebro da criança a descansar e valoriza o contato familiar.</li>
      <li>As crianças aprendem pelo exemplo. Se os pais estão constantemente no celular durante o lazer, a criança entenderá que esse é o comportamento padrão.</li>
      <li>Em vez de focar apenas no número de horas, foque no que está sendo feito. Uma hora criando um desenho digital é diferente de uma hora "rolando" vídeos aleatórios.</li>
      <li>Ensine a criança a perceber quando está assistindo vídeos "no automático" sem nem saber o que viu no vídeo anterior.</li>
      <li>Incentive atividades fora das telas que estimulem os sentidos e a criatividade. O equilíbrio acontece quando a criança percebe que o mundo real oferece descobertas tão fascinantes quanto o digital.</li>
    </ul>
  </div>

  <div class="tip-box">
    <div class="tip-icon-wrap">⚖️</div>
    <div>
      <strong class="tip-title">Foco na qualidade, não apenas na quantidade</strong>
      <p>O objetivo não é cortar o acesso, mas construir uma relação consciente com a tecnologia — onde a criança usa a tela com propósito, e não no "piloto automático".</p>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('riscos-32')">← Anterior<br /><small>3.2 Cyberbullying</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('privacidade')">Próximo<br /><small>4. Privacidade Digital</small> →</button>
  </div>
</section>`
  }
];
