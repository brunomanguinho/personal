const experiencias = 
[
    {
        empresa: "Hospital Evangélico da Bahia",
        cargo: "Controller/Gerente Financeiro",
        inicio: new Date(2013, 0, 1),
        fim: new Date(2022, 7, 1)
    },
    {
        empresa: "GRUPO DeVry - Pós Graduação",
        cargo: "Professor Finanças",
        inicio: new Date(2013, 7, 1),
        fim: new Date(2015, 0, 1)
    },
    {
        empresa: "Grupo Leme",
        cargo: "Controller",
        inicio: new Date(2008, 10, 1),
        fim: new Date(2013, 0, 1)
    },
    {
        empresa: "Peval S.A./Inorcal/Pedreiras Valéria (Grupo Odebrecht)",
        cargo: "Gerente Administrativo Econômico e Financeiro",
        inicio: new Date(1978, 0, 1),
        fim: new Date(2008, 0, 1)
    }
]

const formacoes = 
[
    {tipo: "Graduação", curso: "Ciências Econômicas", instituicao: "Universidade Int. Tiradentes", certificado: ""},
    {tipo: "Pós-Graduação", curso: "MBA Gestão Contábil, Perícia, Auditoria e Controladoria", instituicao: "UNINTER", certificado: ""},
    {tipo: "Pós-Graduação", curso: "Docência do Ensino Superior", instituicao: "UNINTER", certfificado: ""}
]

const propostas = 
[
    {descricao: `Supervisionar o fechamento mensal e preparar o reporte das demonstrações 
                 financeiras e outros relatórios operacionais internos e para a matriz;`},
    {descricao: `Preparar o forecast das Demonstrações Financeiras (Balanço, Demonstração de
                 Resultados do Exercício e Mapa de Fluxos de Caixa);`},
    {descricao: `Coordenar e preparar o orçamento da planta local, garantir um acompanhamento entre
                os valores realizados (actual), os valores estimados (forecast) e os valores orçados
                (budget), identificando e analisando as variações e comunicando os fatores de desvio à
                alta gestão bem como as respetivas ações recomendadas a seguir;`},
    {descricao: `Desenvolver e acompanhar as métricas de resultado e KPIs da área;`},
    {descricao: `Analisar todas as operações e indicadores de rentabilidade de cliente, realizar análises
                 de cost breakdown e recomendar as adequadas evoluções de pricing;`},
    {descricao: `Assegurar a contabilização adequada das operações, de acordo com os princípios
                locais e requisitos estatutárias;`},
    {descricao: `Realizar análises de projetos de investimento (savings e payback) para suportar a alta-
                 gestão e a matriz nas decisões de investimento;`},
    {descricao: `Reconciliar o inventário físico e manter a acuracidade das transações de
                 movimentação em todos os inventários;`},
    {descricao: `Responder à auditoria financeira anual;`},
    {descricao: `Atuar juntamente com o CFO, alta-direção e gestores para explicar os resultados,
                 promover melhorias, identificar ineficiências e liderar o desenvolvimento de
                 modelização financeira e a realização de outras análises spot.`},
    {descricao: `Suportar o desenvolvimento dos procedimentos de controle entre a área financeira e as
                 demais áreas da empresa.`},
    {descricao: `Monitorar todas as atividades para garantir um compliance com os procedimentos
                 corporativos definidos.`},
    {descricao: `Negociações com Bancos (Comerciais e de Fomento), e Sindicatos;`},
    {descricao: `Amplos conhecimentos de Excel/Word/Power Point;`},
    {descricao: `Inglês Intermediário.`}
]

module.exports = {experiencias, formacoes, propostas};