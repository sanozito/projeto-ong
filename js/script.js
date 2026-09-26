// Ponto principal da SPA: todas as telas são renderizadas dentro desta div.
const app = document.getElementById('app');
const CADASTROS_STORAGE_KEY = 'maosQueTransformam.cadastros';
const THEME_STORAGE_KEY = 'maosQueTransformam.theme';

const views = {
    inicio: {
        title: 'Mãos que Transformam - Início',
        content: `
            <section id="apresentacao">
                <h2>Sobre a ONG</h2>

                <p>
                    A Mãos que Transformam é uma organização não governamental
                    dedicada a promover ações sociais e contribuir para uma
                    sociedade mais justa e solidária.
                </p>

                <p>
                    Desenvolvemos projetos de apoio à comunidade, campanhas de
                    arrecadação e ações realizadas com a participação de voluntários.
                </p>

                <img
                    src="img/OngEmAcao.png"
                    alt="Voluntários da ONG realizando uma ação social"
                    width="600"
                >
            </section>

            <section id="objetivos">
                <h2>O que fazemos</h2>

                <article>
                    <h3>Ações sociais</h3>
                    <p>
                        Desenvolvemos ações para auxiliar pessoas e famílias
                        que necessitam de apoio.
                    </p>
                </article>

                <article>
                    <h3>Campanhas de doação</h3>
                    <p>
                        Organizamos campanhas para arrecadar alimentos,
                        roupas, materiais e recursos financeiros.
                    </p>
                </article>

                <article>
                    <h3>Voluntariado</h3>
                    <p>
                        Incentivamos a participação de pessoas interessadas
                        em contribuir com seu tempo e suas habilidades.
                    </p>
                </article>
            </section>

            <section id="contato">
                <h2>Entre em contato</h2>

                <p><strong>E-mail:</strong> contato@maosquetransformam.org</p>
                <p><strong>Telefone:</strong> (11) 0000-0000</p>
                <p><strong>Endereço:</strong> São Paulo - SP</p>
            </section>
        `
    },
    projetos: {
        title: 'Mãos que Transformam - Projetos',
        content: `
            <section id="projetos">
                <h2>Projetos da ONG</h2>

                <p>
                    Conheça nossas principais iniciativas e descubra como
                    você pode fazer parte delas.
                </p>
            </section>

            <section id="doacoes">
                <h2>Doações</h2>

                <article>
                    <h3>Campanha de alimentos</h3>

                    <p>
                        Arrecadamos alimentos não perecíveis para montar
                        cestas destinadas às famílias atendidas pela ONG.
                    </p>

                    <ul>
                        <li>Arroz</li>
                        <li>Feijão</li>
                        <li>Macarrão</li>
                        <li>Óleo</li>
                        <li>Produtos de higiene</li>
                    </ul>
                </article>

                <article>
                    <h3>Doação financeira</h3>

                    <p>
                        As contribuições financeiras ajudam a manter os
                        projetos e ampliar o atendimento da organização.
                    </p>

                    <p>
                        Para obter informações sobre como contribuir,
                        entre em contato conosco.
                    </p>
                </article>
            </section>

            <section id="voluntariado">
                <h2>Voluntariado</h2>

                <article>
                    <h3>Como ser voluntário</h3>

                    <p>
                        Pessoas interessadas podem participar das ações
                        sociais, campanhas e atividades desenvolvidas pela ONG.
                    </p>
                </article>

                <article>
                    <h3>Formas de participação</h3>

                    <ul>
                        <li>Participar de campanhas de arrecadação;</li>
                        <li>Auxiliar na organização de eventos;</li>
                        <li>Contribuir com habilidades profissionais;</li>
                        <li>Participar das ações comunitárias.</li>
                    </ul>
                </article>

                <article>
                    <h3>Quero ser voluntário</h3>

                    <p>
                        Para demonstrar interesse em participar,
                        acesse nossa página de cadastro.
                    </p>

                    <button class="nav-link inline-link" data-page="cadastro" type="button">Realizar cadastro</button>
                </article>
            </section>
        `
    },
    cadastro: {
        title: 'Mãos que Transformam - Cadastro',
        content: `
            <section class="cadastro-shell">
                <div class="cadastro-card">
                    <div class="text-center mb-4">
                        <h2 class="mb-2">Cadastro de voluntário</h2>
                        <p class="mb-0">
                            Preencha seus dados para demonstrar interesse em participar
                            das ações da Mãos que Transformam.
                        </p>
                    </div>

                    <form id="cadastro-form" class="cadastro-form" action="#" method="post" novalidate>
                        <fieldset class="border p-3 p-md-4 mb-4">
                            <legend class="px-2">Dados pessoais</legend>

                            <div class="mb-3">
                                <label class="form-label" for="nome">Nome completo:</label>
                                <input class="form-control" type="text" id="nome" name="nome">
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="email">E-mail:</label>
                                <input class="form-control" type="email" id="email" name="email">
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="nascimento">Data de nascimento:</label>
                                <input class="form-control" type="date" id="nascimento" name="nascimento">
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="cpf">CPF:</label>
                                <input class="form-control" type="text" id="cpf" name="cpf" placeholder="000.000.000-00" inputmode="numeric" maxlength="14">
                            </div>

                            <div class="mb-0">
                                <label class="form-label" for="telefone">Telefone:</label>
                                <input class="form-control" type="text" id="telefone" name="telefone" placeholder="(00) 00000-0000" inputmode="numeric" maxlength="15">
                            </div>
                        </fieldset>

                        <fieldset class="border p-3 p-md-4 mb-4">
                            <legend class="px-2">Endereço</legend>

                            <div class="mb-3">
                                <label class="form-label" for="endereco">Endereço:</label>
                                <input class="form-control" type="text" id="endereco" name="endereco">
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="cidade">Cidade:</label>
                                <input class="form-control" type="text" id="cidade" name="cidade">
                            </div>

                            <div class="row g-3">
                                <div class="col-md-4">
                                    <label class="form-label" for="estado">Estado:</label>
                                    <input class="form-control" type="text" id="estado" name="estado" maxlength="2" placeholder="SP">
                                </div>
                                <div class="col-md-8">
                                    <label class="form-label" for="cep">CEP:</label>
                                    <input class="form-control" type="text" id="cep" name="cep" placeholder="00000-000" inputmode="numeric" maxlength="9">
                                </div>
                            </div>
                        </fieldset>

                        <fieldset class="border p-3 p-md-4 mb-4">
                            <legend class="px-2">Interesse no voluntariado</legend>

                            <div class="mb-3">
                                <label class="form-label" for="area">Área de interesse:</label>
                                <select class="form-select" id="area" name="area">
                                    <option value="">Selecione uma opção</option>
                                    <option value="campanhas">Campanhas de arrecadação</option>
                                    <option value="eventos">Eventos</option>
                                    <option value="acoes">Ações comunitárias</option>
                                    <option value="administrativo">Área administrativa</option>
                                </select>
                            </div>

                            <div class="mb-0">
                                <label class="form-label" for="mensagem">Conte um pouco sobre como gostaria de contribuir:</label>
                                <textarea class="form-control" id="mensagem" name="mensagem" rows="5" cols="40"></textarea>
                            </div>
                        </fieldset>

                        <div class="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                            <button type="button" class="btn btn-primary" data-action="submit">Enviar cadastro</button>
                            <button type="reset" class="btn btn-outline-secondary">Limpar</button>
                        </div>
                    </form>

                    <div id="cadastro-historico" class="cadastro-history" aria-live="polite"></div>
                </div>
            </section>
        `
    }
};

function maskCPF(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);

    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;

    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

function maskPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);

    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 11) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

function maskCEP(value) {
    const digits = value.replace(/\D/g, '').slice(0, 8);

    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

function isValidCPF(value) {
    const digits = value.replace(/\D/g, '');

    if (digits.length !== 11 || /^([0-9])\1{10}$/.test(digits)) {
        return false;
    }

    let firstDigit = 0;
    let secondDigit = 0;

    for (let index = 0; index < 9; index += 1) {
        firstDigit += Number(digits[index]) * (10 - index);
        secondDigit += Number(digits[index]) * (11 - index);
    }

    firstDigit = (firstDigit * 10) % 11;
    firstDigit = firstDigit === 10 ? 0 : firstDigit;
    secondDigit += firstDigit * 2;
    secondDigit = (secondDigit * 10) % 11;
    secondDigit = secondDigit === 10 ? 0 : secondDigit;

    return firstDigit === Number(digits[9]) && secondDigit === Number(digits[10]);
}

function resetValidationState(form) {
    form.querySelectorAll('input, select, textarea').forEach(clearFieldFeedback);
}

function clearFieldFeedback(field) {
    const feedback = document.getElementById(`${field.id}-feedback`);

    field.setCustomValidity('');
    field.setAttribute('aria-invalid', 'false');
    field.classList.remove('is-invalid');
    field.classList.remove('is-valid');

    if (feedback) {
        feedback.remove();
    }
}

function setFieldFeedback(field, message) {
    let feedback = document.getElementById(`${field.id}-feedback`);

    field.setCustomValidity(message);
    field.setAttribute('aria-invalid', 'true');
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');

    if (!feedback) {
        feedback = document.createElement('div');
        feedback.id = `${field.id}-feedback`;
        feedback.className = 'invalid-feedback';
        field.parentElement.appendChild(feedback);
    }

    feedback.textContent = message;
}

function getCadastroHistory() {
    const storedHistory = localStorage.getItem(CADASTROS_STORAGE_KEY);

    if (!storedHistory) {
        return [];
    }

    try {
        const history = JSON.parse(storedHistory);
        return Array.isArray(history) ? history : [];
    } catch {
        localStorage.removeItem(CADASTROS_STORAGE_KEY);
        return [];
    }
}

function saveCadastro(cadastro) {
    const history = getCadastroHistory();
    history.push(cadastro);
    localStorage.setItem(CADASTROS_STORAGE_KEY, JSON.stringify(history));
}

function removeCadastro(index) {
    const history = getCadastroHistory();

    if (!Number.isInteger(index) || index < 0 || index >= history.length) {
        return;
    }

    if (!window.confirm('Deseja remover este cadastro?')) {
        return;
    }

    history.splice(index, 1);
    localStorage.setItem(CADASTROS_STORAGE_KEY, JSON.stringify(history));
    renderCadastroHistory();
}

function escapeHTML(value) {
    const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return String(value ?? '').replace(/[&<>"']/g, (character) => entities[character]);
}

function renderCadastroDetail(index) {
    const cadastro = getCadastroHistory()[index];

    if (!cadastro) {
        renderView('cadastro');
        return;
    }

    const areaLabels = {
        campanhas: 'Campanhas de arrecadação',
        eventos: 'Eventos',
        acoes: 'Ações comunitárias',
        administrativo: 'Área administrativa'
    };
    const field = (label, id, value, type = 'text') => `
        <div class="mb-3">
            <label class="form-label" for="${id}">${label}</label>
            <input class="form-control" type="${type}" id="${id}" value="${escapeHTML(value)}" readonly>
        </div>`;

    views.cadastroDetalhe = {
        title: `Mãos que Transformam - Cadastro de ${cadastro.nome}`,
        content: `
            <section class="cadastro-shell">
                <div class="cadastro-card">
                    <div class="text-center mb-4">
                        <h2 class="mb-2">Análise do cadastro</h2>
                        <p class="mb-0">Os dados abaixo estão disponíveis somente para consulta.</p>
                    </div>

                    <form class="cadastro-form cadastro-detail-form">
                        <fieldset class="border p-3 p-md-4 mb-4">
                            <legend class="px-2">Dados pessoais</legend>
                            ${field('Nome completo:', 'detalhe-nome', cadastro.nome)}
                            ${field('E-mail:', 'detalhe-email', cadastro.email, 'email')}
                            ${field('Data de nascimento:', 'detalhe-nascimento', cadastro.nascimento, 'date')}
                            ${field('CPF:', 'detalhe-cpf', cadastro.cpf)}
                            ${field('Telefone:', 'detalhe-telefone', cadastro.telefone)}
                        </fieldset>

                        <fieldset class="border p-3 p-md-4 mb-4">
                            <legend class="px-2">Endereço</legend>
                            ${field('Endereço:', 'detalhe-endereco', cadastro.endereco)}
                            ${field('Cidade:', 'detalhe-cidade', cadastro.cidade)}
                            <div class="row g-3">
                                <div class="col-md-4">${field('Estado:', 'detalhe-estado', cadastro.estado)}</div>
                                <div class="col-md-8">${field('CEP:', 'detalhe-cep', cadastro.cep)}</div>
                            </div>
                        </fieldset>

                        <fieldset class="border p-3 p-md-4 mb-4">
                            <legend class="px-2">Interesse no voluntariado</legend>
                            <div class="mb-3">
                                <label class="form-label" for="detalhe-area">Área de interesse:</label>
                                <select class="form-select" id="detalhe-area" disabled>
                                    <option selected>${escapeHTML(areaLabels[cadastro.area] || cadastro.area || 'Não informado')}</option>
                                </select>
                            </div>
                            <div class="mb-0">
                                <label class="form-label" for="detalhe-mensagem">Como gostaria de contribuir:</label>
                                <textarea class="form-control" id="detalhe-mensagem" rows="5" readonly>${escapeHTML(cadastro.mensagem)}</textarea>
                            </div>
                        </fieldset>

                        <button type="button" class="btn btn-outline-secondary" data-action="back-cadastros">Voltar aos cadastros</button>
                    </form>
                </div>
            </section>`
    };

    renderView('cadastroDetalhe');
    document.querySelector('[data-action="back-cadastros"]')?.addEventListener('click', () => renderView('cadastro'));
}

function renderCadastroHistory() {
    const historyContainer = document.getElementById('cadastro-historico');

    if (!historyContainer) {
        return;
    }

    const history = getCadastroHistory();
    historyContainer.replaceChildren();

    if (history.length === 0) {
        return;
    }

    const title = document.createElement('h3');
    title.textContent = 'Cadastros registrados neste navegador';
    historyContainer.appendChild(title);

    const list = document.createElement('ul');
    history.forEach((cadastro, index) => {
        const item = document.createElement('li');
        const details = document.createElement('span');
        details.textContent = `${cadastro.nome} - ${cadastro.email} - ${cadastro.enviadoEm}`;

        const analyzeButton = document.createElement('button');
        analyzeButton.type = 'button';
        analyzeButton.className = 'btn btn-sm btn-outline-primary';
        analyzeButton.textContent = 'Analisar';
        analyzeButton.addEventListener('click', () => renderCadastroDetail(index));

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.className = 'btn btn-sm btn-outline-danger';
        removeButton.textContent = 'Remover';
        removeButton.setAttribute('aria-label', `Remover cadastro de ${cadastro.nome}`);
        removeButton.addEventListener('click', () => removeCadastro(index));

        item.append(details, analyzeButton, removeButton);
        list.appendChild(item);
    });

    historyContainer.appendChild(list);
}

function validateField(field) {
    const value = field.value.trim();
    const digits = value.replace(/\D/g, '');
    const fieldId = field.id;
    let message = '';

    if (!value) {
        message = 'Este campo é obrigatório.';
    } else if (fieldId === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = 'Digite um e-mail válido.';
    } else if (fieldId === 'nascimento' && Number.isNaN(Date.parse(value))) {
        message = 'Digite uma data válida.';
    } else if (fieldId === 'nascimento' && new Date(`${value}T00:00:00`) > new Date()) {
        message = 'A data de nascimento não pode estar no futuro.';
    } else if (fieldId === 'cpf' && !isValidCPF(value)) {
        message = 'Digite um CPF válido com 11 números.';
    } else if (fieldId === 'telefone' && ![10, 11].includes(digits.length)) {
        message = 'Digite um telefone com 10 ou 11 números.';
    } else if (fieldId === 'cep' && digits.length !== 8) {
        message = 'Digite um CEP com 8 números.';
    } else if (fieldId === 'estado' && !/^[A-Z]{2}$/.test(value)) {
        message = 'Digite a sigla do estado com 2 letras.';
    }

    if (message) {
        setFieldFeedback(field, message);
        return false;
    }

    field.setCustomValidity('');
    field.setAttribute('aria-invalid', 'false');
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    return true;
}

function validateForm(form) {
    const fields = form.querySelectorAll('input, select, textarea');
    let isValid = true;

    fields.forEach((field) => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    return isValid;
}

function applyMasks(form) {
    const masks = {
        cpf: maskCPF,
        telefone: maskPhone,
        cep: maskCEP,
        estado: (value) => value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 2)
    };

    Object.entries(masks).forEach(([id, mask]) => {
        const field = form.querySelector(`#${id}`);
        if (!field) return;

        field.addEventListener('input', (event) => {
            event.target.value = mask(event.target.value);
            clearFieldFeedback(event.target);
        });
    });

    form.querySelectorAll('input, select, textarea').forEach((field) => {
        field.addEventListener('input', () => clearFieldFeedback(field));
        field.addEventListener('change', () => clearFieldFeedback(field));
    });
}

function renderView(pageName) {
    // Seleciona a view solicitada ou volta para a tela inicial se o nome for inválido.
    const page = views[pageName] || views.inicio;

    // Manipulação do DOM: troca todo o conteúdo da div principal sem recarregar a página.
    document.title = page.title;
    app.innerHTML = page.content;

    // Atualiza visualmente o botão correspondente à página atualmente renderizada.
    const navButtons = document.querySelectorAll('.nav-link');
    navButtons.forEach((button) => {
        const isActive = button.dataset.page === pageName;
        button.classList.toggle('active', isActive);
    });

    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.checked = false;
    }

    const currentHash = '#' + pageName;
    if (window.location.hash !== currentHash) {
        history.replaceState(null, '', currentHash);
    }

    // Liga novamente os eventos dos elementos que acabaram de ser inseridos no DOM.
    const inlineLink = document.querySelector('.inline-link');
    if (inlineLink) {
        inlineLink.addEventListener('click', () => renderView('cadastro'));
    }

    const form = document.getElementById('cadastro-form');
    if (form) {
        form.noValidate = true;
        resetValidationState(form);
        applyMasks(form);
        renderCadastroHistory();

        const existingFeedback = document.getElementById('form-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        const submitButton = form.querySelector('[data-action="submit"]');
        if (submitButton) {
            submitButton.addEventListener('click', () => {
                if (!validateForm(form)) {
                    return;
                }

                const cadastro = Object.fromEntries(new FormData(form).entries());
                cadastro.enviadoEm = new Date().toLocaleString('pt-BR');
                saveCadastro(cadastro);

                const existingFeedback = form.querySelector('#form-feedback');
                if (existingFeedback) {
                    existingFeedback.remove();
                }

                const feedback = document.createElement('p');
                feedback.id = 'form-feedback';
                feedback.className = 'form-feedback visible';
                feedback.setAttribute('aria-live', 'polite');
                feedback.textContent = 'Cadastro enviado com sucesso! Obrigado pelo interesse em fazer parte da ONG.';
                form.appendChild(feedback);

                form.reset();
                resetValidationState(form);
                renderCadastroHistory();
            });
        }
    }
}

function applyTheme(isDarkMode) {
    document.body.classList.toggle('dark-mode', isDarkMode);

    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
        return;
    }

    themeToggle.setAttribute('aria-pressed', String(isDarkMode));
    themeToggle.textContent = isDarkMode ? 'Modo claro' : 'Modo escuro';
}

function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    applyTheme(savedTheme === 'dark');

    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        const isDarkMode = !document.body.classList.contains('dark-mode');
        localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
        applyTheme(isDarkMode);
    });
}

function initNavigation() {
    // Intercepta a navegação: os botões não abrem outra página, apenas chamam renderView().
    const buttons = document.querySelectorAll('.nav-link');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            renderView(button.dataset.page);
        });
    });

    // Recupera a rota atual da URL e renderiza a primeira view da aplicação.
    const initialPage = window.location.hash.replace('#', '') || 'inicio';
    renderView(initialPage in views ? initialPage : 'inicio');
}

// Aguarda o HTML inicial existir antes de consultar elementos e registrar eventos.
document.addEventListener('DOMContentLoaded', initNavigation);
document.addEventListener('DOMContentLoaded', initTheme);