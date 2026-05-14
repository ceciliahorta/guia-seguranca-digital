var CHAPTER4_PAGES = [
  /* ─── Capítulo 4 – Overview ─────────────────────────────────────── */
  {
    id: 'privacidade',
    html: `<section class="page" id="page-privacidade">
  <span class="page-label">CAPÍTULO 4</span>
  <h1 class="hero-title">Privacidade Digital</h1>
  <p class="hero-subtitle">Proteger informações pessoais é um direito e uma responsabilidade — especialmente no ambiente online.</p>

  <div class="info-box">
    <span class="info-box-icon">🔐</span>
    <div>
      <strong>A regra de ouro do mundo digital</strong>
      <p>A privacidade online é a capacidade de controlar quem tem acesso às nossas informações, fotos, localização e hábitos de navegação. Tudo que fazemos online deixa um rastro chamado "pegada digital". A regra fundamental: <strong>o que cai na internet, fica na internet</strong></p>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Tópicos deste capítulo</h2>
    <div class="cards-grid">
      <div class="topic-card clickable" onclick="navigateTo('privacidade-41')">
        <div class="card-icon icon-blue">🌐</div>
        <h3>4.1 O que é privacidade na internet?</h3>
        <p>O conceito de pegada digital e como construir uma presença online consciente e segura.</p>
      </div>
      <div class="topic-card clickable" onclick="navigateTo('privacidade-42')">
        <div class="card-icon icon-orange">📸</div>
        <h3>4.2 Cuidado ao postar fotos e vídeos</h3>
        <p>Metadados, geolocalização e o que observar antes de compartilhar qualquer imagem online.</p>
      </div>
      <div class="topic-card clickable" onclick="navigateTo('privacidade-43')">
        <div class="card-icon icon-teal">⚙️</div>
        <h3>4.3 Configurações de privacidade</h3>
        <p>Como ajustar perfis, seguidores e permissões em redes sociais para minimizar riscos.</p>
      </div>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('riscos-33')">← Anterior<br /><small>3.3 Dependência digital</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('privacidade-41')">Próximo<br /><small>4.1 O que é privacidade na internet?</small> →</button>
  </div>
</section>`
  },

  /* ─── 4.1 O que é privacidade na internet? ───────────────────────── */
  {
    id: 'privacidade-41',
    html: `<section class="page" id="page-privacidade-41">
  <nav class="breadcrumb">
    <span class="bc-item bc-link" onclick="navigateTo('apresentacao')">Início</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-link" onclick="navigateTo('privacidade')">Privacidade Digital</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">O que é privacidade na internet?</span>
  </nav>
  <span class="page-label chapter-tag">Capítulo 4.1</span>

  <div class="hero-section">
    <div class="hero-text">
      <h1 class="hero-title">O que é privacidade na internet?</h1>
      <p>A privacidade online é a capacidade de controlar quem tem acesso às nossas informações, fotos, localização e hábitos de navegação. Tudo que fazemos online deixa um rastro chamado "pegada digital".</p>
    </div>
    <div class="hero-illustration">
      <img src="assets/images/privacy_concept.svg" alt="Olho com cadeado representando privacidade e pegada digital" class="hero-img" />
    </div>
  </div>

  <div class="security-box">
    <p class="security-box-title">O que compõe a pegada digital?</p>
    <div class="security-practices">
      <div class="practice-item"><div class="practice-icon">❤️</div><span>Curtidas e comentários</span></div>
      <div class="practice-item"><div class="practice-icon">📷</div><span>Fotos postadas</span></div>
      <div class="practice-item"><div class="practice-icon">🔍</div><span>Pesquisas feitas</span></div>
      <div class="practice-item"><div class="practice-icon">📍</div><span>Localizações acessadas</span></div>
      <div class="practice-item"><div class="practice-icon">📝</div><span>Dados de cadastro</span></div>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Por que crianças são especialmente vulneráveis?</h2>
    <p>Para crianças e adolescentes, a noção de privacidade pode ser abstrata. Eles tendem a acreditar que, se estão postando algo para "amigos", aquela informação está segura.</p>
    <p>Assim como na vida real não compartilhamos tudo com qualquer pessoa, no mundo digital também é importante saber o que pode ou não ser exposto. Muitas vezes, ao criar contas ou jogar online, as crianças compartilham informações sem perceber os riscos envolvidos.</p>
  </div>

  <div class="content-section">
    <h2 class="section-title">Hábitos para desenvolver desde cedo</h2>
    <ul class="checklist green">
      <li>Questionar antes de fornecer dados: "Preciso mesmo fornecer essa informação?"</li>
      <li>Perguntar: "Quem pode ver isso que estou compartilhando?"</li>
      <li>Entender que mesmo uma foto apagada pode ter sido salva por outra pessoa ou pelo servidor da plataforma.</li>
      <li>Reconhecer que dados pessoais são valiosos para empresas e, infelizmente, para criminosos.</li>
      <li>Compreender que nem todo momento precisa ser compartilhado — a privacidade protege a individualidade.</li>
    </ul>
  </div>

  <div class="tips-list">
    <p class="tips-list-title">💡 Dicas para Pais e Responsáveis</p>
    <ul class="checklist blue">
      <li>Explique que postar algo na internet é como colar um cartaz no mural da escola: qualquer pessoa que passar por ali poderá ver, tirar uma foto e mostrar para outros.</li>
      <li>Converse sobre como uma postagem feita hoje pode ser vista por um futuro professor ou empregador daqui a dez anos.</li>
      <li>Deixe claro que dados como endereço, número de telefone e nome da escola são informações que pertencem apenas ao círculo íntimo da família e nunca devem ser públicas.</li>
    </ul>
  </div>

  <div class="tip-box">
    <div class="tip-icon-wrap">🔐</div>
    <div>
      <strong class="tip-title">Pensar antes de clicar</strong>
      <p>Ensinar a criança a pensar antes de compartilhar é o primeiro e mais importante passo da educação em privacidade digital.</p>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('privacidade')">← Anterior<br /><small>Capítulo 4 – Visão geral</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('privacidade-42')">Próximo<br /><small>4.2 Cuidado ao postar fotos e vídeos</small> →</button>
  </div>
</section>`
  },

  /* ─── 4.2 Cuidado ao postar fotos e vídeos ───────────────────────── */
  {
    id: 'privacidade-42',
    html: `<section class="page" id="page-privacidade-42">
  <nav class="breadcrumb">
    <span class="bc-item bc-link" onclick="navigateTo('apresentacao')">Início</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-link" onclick="navigateTo('privacidade')">Privacidade Digital</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">Cuidado ao postar fotos e vídeos</span>
  </nav>
  <span class="page-label chapter-tag">Capítulo 4.2</span>

  <div class="hero-section">
    <div class="hero-text">
      <h1 class="hero-title">Cuidado ao postar fotos e vídeos</h1>
      <p>Compartilhar imagens faz parte da experiência digital, mas é preciso entender que, uma vez publicado, o conteúdo escapa do controle de quem postou. Uma imagem pode ser copiada, modificada e replicada para um público muito maior do que o planejado.</p>
    </div>
    <div class="hero-illustration">
      <img src="assets/images/photo_safety.svg" alt="Câmera com triângulo de aviso sobre cuidados ao postar fotos" class="hero-img" />
    </div>
  </div>

  <div class="quote-box">
    <span class="quote-icon">📍</span>
    <p><strong>A questão dos metadados:</strong> Câmeras de smartphones salvam automaticamente as coordenadas de GPS na imagem. Se as configurações não estiverem ajustadas, a localização exata de onde a foto foi tirada pode ser extraída por qualquer pessoa com conhecimentos básicos de informática.</p>
  </div>

  <div class="content-section">
    <h2 class="section-title">O que observar antes de compartilhar</h2>
    <p>É necessário desenvolver um "olhar clínico" para identificar elementos perigosos no fundo das imagens:</p>
    <div class="alert-box">
      <p class="alert-box-title">⚠️ Elementos que revelam informações sensíveis</p>
      <ul class="checklist red">
        <li><strong>Identificadores escolares:</strong> uniformes e logotipos revelam onde a criança passa a maior parte do dia.</li>
        <li><strong>Fachadas e endereços:</strong> detalhes da arquitetura ou placas de rua facilitam a localização da residência.</li>
        <li><strong>Interior da casa:</strong> expor objetos de valor ou a disposição dos cômodos pode atrair a atenção de criminosos.</li>
        <li><strong>Rotinas:</strong> postar fotos sempre no mesmo local e horário permite a previsão de movimentos.</li>
      </ul>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">A exposição da imagem e do comportamento</h2>
    <p>Na busca por popularidade, muitos jovens acabam se expondo de maneira inadequada. O que parece uma "dança inofensiva" pode ser visto de forma diferente por adultos mal-intencionados. Vídeos em quartos ou banheiros dão uma falsa sensação de privacidade, mas expõem a intimidade a desconhecidos.</p>
  </div>

  <div class="tips-list">
    <p class="tips-list-title">💡 Dicas para Pais e Responsáveis</p>
    <ul class="checklist blue">
      <li>Antes de postar, foque apenas no fundo da imagem por 5 segundos. Se houver algo pessoal ou revelador, não poste ou use filtros para borrar.</li>
      <li>Poste as fotos do passeio somente quando já estiver em casa, impedindo que saibam sua localização exata no momento.</li>
      <li>Pergunte à criança: "Você faria essa dança ou usaria essa roupa em cima de um palco na praça para todos verem?" Se a resposta for não, não deve ser postado.</li>
      <li>Explique que o corpo e a imagem são bens preciosos e não devem ser usados como moeda de troca por curtidas.</li>
      <li>Nunca compartilhe imagens de terceiros sem autorização — o respeito à privacidade alheia é fundamental.</li>
    </ul>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('privacidade-41')">← Anterior<br /><small>4.1 O que é privacidade na internet?</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('privacidade-43')">Próximo<br /><small>4.3 Configurações de privacidade</small> →</button>
  </div>
</section>`
  },

  /* ─── 4.3 Configurações de privacidade ───────────────────────────── */
  {
    id: 'privacidade-43',
    html: `<section class="page" id="page-privacidade-43">
  <nav class="breadcrumb">
    <span class="bc-item bc-link" onclick="navigateTo('apresentacao')">Início</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-link" onclick="navigateTo('privacidade')">Privacidade Digital</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">Configurações de privacidade</span>
  </nav>
  <span class="page-label chapter-tag">Capítulo 4.3</span>

  <div class="hero-section">
    <div class="hero-text">
      <h1 class="hero-title">Configurações de privacidade em redes sociais</h1>
      <p>Orientar a criança sobre o uso da internet é apenas o primeiro passo. É indispensável garantir que as ferramentas digitais estejam corretamente configuradas, pois muitas plataformas deixam perfis visíveis para o público geral por padrão.</p>
    </div>
    <div class="hero-illustration">
      <img src="assets/images/privacy_settings.svg" alt="Engrenagem de configurações com cadeado de privacidade" class="hero-img" />
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">Perfil privado</h2>
    <p>A configuração fundamental para menores é o <strong>Perfil Privado</strong>. Ele garante que apenas pessoas aprovadas pela criança — e supervisionadas pelos responsáveis — acessem fotos e vídeos, impedindo que desconhecidos monitorem sua rotina.</p>
  </div>

  <div class="content-section">
    <h2 class="section-title">Controle de dados e interações</h2>
    <ul class="checklist green">
      <li><strong>Desativar a localização (GPS):</strong> revogue a permissão de acesso ao GPS do aparelho pelos aplicativos.</li>
      <li><strong>Restrição de contato:</strong> configure a conta para que apenas "Amigos" possam comentar ou enviar mensagens diretas, reduzindo chances de cyberbullying.</li>
      <li><strong>Ocultar informações sensíveis:</strong> proteja dados como número de telefone, e-mail e localização exata.</li>
      <li><strong>Gerenciamento de seguidores:</strong> aceitar solicitações apenas de pessoas que a criança conhece na vida real. Revisem periodicamente a lista para remover perfis suspeitos.</li>
    </ul>
  </div>

  <div class="tips-list">
    <p class="tips-list-title">💡 Dicas Práticas para Pais e Responsáveis</p>
    <ul class="checklist blue">
      <li>Reserve um tempo para explorar o menu "Configurações > Privacidade" de cada app (Instagram, TikTok, Roblox). Ajuste o público das publicações para "Apenas Amigos".</li>
      <li>Ative o 2FA em todas as contas. Essa camada extra impede acessos não autorizados mesmo em caso de vazamento de senhas.</li>
      <li>Utilize recursos como "Pareamento Familiar" ou "Central da Família", que permitem supervisionar o tempo de tela sem invadir conversas privadas.</li>
      <li>Sempre que a criança demonstrar interesse por um novo app ou jogo, pesquise: "Como configurar privacidade no [Nome do App]" e "Riscos do [Nome do App] para crianças".</li>
    </ul>
  </div>

  <div class="tip-box">
    <div class="tip-icon-wrap">🔍</div>
    <div>
      <strong class="tip-title">10 minutos = maior ato de cuidado</strong>
      <p>Na era da informação, a negligência digital muitas vezes vem da falta de pesquisa. Dedicar dez minutos para entender como uma nova ferramenta funciona é um dos maiores atos de cuidado que você pode ter com a segurança da criança.</p>
    </div>
  </div>

  <div class="page-nav">
    <button class="nav-btn nav-btn-prev" onclick="navigateTo('privacidade-42')">← Anterior<br /><small>4.2 Cuidado ao postar fotos e vídeos</small></button>
    <button class="nav-btn nav-btn-next" onclick="navigateTo('uso-saudavel')">Próximo<br /><small>5. Uso Saudável da Tecnologia</small> →</button>
  </div>
</section>`
  }
];
