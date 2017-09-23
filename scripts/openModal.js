planing = {
    title: 'Planejamento Estratégico',
    content: 'Planejar estrategicamente significa compatibilizar as oportunidades oferecidas pelo ambiente externo às condições internas, favoráveis ou não, da empresa, de modo a satisfazer seus objetivos futuros, ou seja, ver onde a empresa está, para onde ela quer ir e como chegar. Portanto, esses três quesitos são fundamentais para um planejamento dar certo.',
    icon: 'fa fa-gamepad'
}

mkContent = {
    title: 'Marketing de Conteúdo',
    content: 'Marketing de conteúdo é a criação e distribuição de conteúdo em vários formatos para atrair e reter consumidores. Mas o marketing de conteúdo engloba variáveis mais complexas, relacionadas principalmente à profundidade do conhecimento que a empresa tem do seu consumidor. Devido à sua importância, o marketing de conteúdo não pode ser visto como uma atividade isolada e esporádica, de responsabilidade do “departamento de marketing”, ele deve ser praticado diariamente e constar no planejamento estratégico da empresa.',
    icon: 'fa fa-pencil-square-o'
}

mkSearch = {
    title: 'Marketing de Busca',
    content: 'O marketing de busca, também conhecido como SEM – Search Engine Marketing, é o segmento do marketing digital que tem como foco estratégias e ferramentas de divulgação em ferramentas de busca como Google, Yahoo e Bing. O objetivo maior de qualquer estratégia de search marketing é conseguir a maior exposição possível nos rankings dos sites de busca seja através do processo de otimização de sites ou através de programas como o Google AdWords, os anúncios no Google.',
    icon: 'fa fa-search'
}

bi = {
    title: 'Inteligência de Negócios',
    content: 'Business Intelligence, inteligência de negócios, ou inteligência empresarial refere-se ao processo de coleta, organização, análise, compartilhamento e monitoração de informações que oferecem suporte a gestão de negócios. É o conjunto de teorias, metodologias, processos, estruturas e tecnologias que transformam grande quantidade de dados brutos em informação útil para tomadas de decisões estratégicas. É um método que visa ajudar as empresas a tomar as decisões inteligentes, mediante dados e informações recolhidas pelos diversos sistemas de informação.',
    icon: 'fa fa-lightbulb-o'
}

visualIdentity = {
    title: 'Identidade Visual',
    content: 'Identidade visual é a imagem da sua empresa. Ela é formada pelo conjunto de símbolos que a sua marca projeta através de elementos como logotipo, tipografia, cores, imagens, ilustrações, etc. A identidade visual se aplica a qualquer material de comunicação que a sua empresa lance no mercado, ou seja, é uma das partes que integram todo o composto de marketing de uma organização, passando pela promoção da marca da empresa, pela comunicação interna (institucional), e pelos materiais gráficos e virtuais sobre produtos e serviços, a comunicação “promocional”.',
    icon: 'fa fa-id-card'
}

brandManage = {
    title: 'Gestão de Marcas',
    content: 'A marca é um organismo vivo, que evolui constantemente. A gestão da marca atua continuamente na análise dessas mudanças e das percepções que elas provocam nos diferentes públicos que se relacionam com a marca, ou seja, está relacionada com o entendimento da marca pelo mercado. Este processo pode envolver, após os diagnósticos da marca, as seguintes etapas: Plataforma de marca, Gestão de stakeholders, Gestão dos pontos de contato da marca, Gestão da identidade da marca. Um trabalho de gestão de marcas pode ser tanto pontual, quanto contínuo.',
    icon: 'fa fa-bar-chart'
}

mkSensorial = {
    title: 'Marketing Sensorial',
    content: 'É mais uma das maravilhosas estratégias de marketing que analisa o comportamento do cliente e suas emoções e visa criar um vínculo emocional entre o produto ou serviço e o consumidor, e para isso utiliza diferentes formas. O ideal no Marketing sensorial é que o ambiente se mantenha propicio ao tema, utilizando sempre estes sentidos naturais para que o ambiente se torne agradável ao tema proposto.',
    icon: 'fa fa-sign-language'
}

socialNetwork = {
    title: 'Redes Sociais',
    content: 'Redes Sociais são estruturas sociais virtuais compostas por pessoas e/ou organizações, conectadas por um ou vários tipos de relações, que partilham valores e objetivos comuns na internet. Outra característica interessante das redes sociais é a facilidade da democratização e compartilhamento das informações, de conhecimento e interesses entre as pessoas, além de fomentar o networking e ser uma ferramenta que auxilia as empresas em processos de seleção.',
    icon: 'fa fa-share-alt'
}

function openModal(el) {
    switch (el.target.id) {
        case 'planejamento':
            genModal(planejamento);
            break;
        case 'mkContent':
            genModal(mkContent);
            break;
        case 'socialNetwork':
            genModal(socialNetwork);
            break;
        case 'mkSensorial':
            genModal(mkSensorial);
            break;
        case 'brandManage':
            genModal(brandManage);
            break;
        case 'visualIdentity':
            genModal(visualIdentity);
            break;
        case 'bi':
            genModal(bi);
            break;
        case 'mkSearch':
            genModal(mkSearch);
            break;
        case 'planing':
            genModal(planing);
            break;
    }
}

function genModal(objData) {
    $('#modal').modal({ backgrop: true, keyboard: true, focus: true, show: true });
    $('#modal').on('show.bs.modal', function(e) {
        $('#modal').find('h5.modal-title').text(objData.title);
        $('#modal').find('p.modal-body-content').text(objData.content);
        $('#modal').find('i#header-icon').removeClass();
        $('#modal').find('i#header-icon').addClass(objData.icon);
    });
    $('#modal').modal('show');
}
