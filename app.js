const criaturas = [
    {
        id: 1, nome: "Tigre Florestal", altura: 1.2, habilidades: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla exercitationem possimus recusandae inventore earum, a dicta enim distinctio aliquam totam! Nihil velit accusamus eos corporis blanditiis ullam ipsum ea?", foto: "https://i.pinimg.com/564x/87/69/24/8769246b3dd2ebe4da9809183b3da1df.jpg"


    },
    {
        id: 2, nome: "Abobora Carnivora", altura: 0.5, habilidades: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla exercitationem possimus recusandae inventore earum, a dicta enim distinctio aliquam totam! Nihil velit accusamus eos corporis blanditiis ullam ipsum ea?", foto: "https://i.pinimg.com/564x/bf/45/c5/bf45c55f5891047203fb85b86817b493.jpg"


    },
    {
        id: 3, nome: "Escorpião Gigante", altura: 1.9, habilidades: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla exercitationem possimus recusandae inventore earum, a dicta enim distinctio aliquam totam! Nihil velit accusamus eos corporis blanditiis ullam ipsum ea?", foto: "https://i.pinimg.com/236x/00/4c/b5/004cb5a4829e1df625155dddc4792b53.jpg"


    },
    {
        id: 4, nome: "Lobo Florestal", altura: 1.3, habilidades: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla exercitationem possimus recusandae inventore earum, a dicta enim distinctio aliquam totam! Nihil velit accusamus eos corporis blanditiis ullam ipsum ea?", foto: "https://i.pinimg.com/564x/9e/0f/6e/9e0f6e9e53528b4ec9250e6fd55e7c96.jpg"


    }
]

const Sessão = document.querySelector('.listaMonstros');
const Botão = document.querySelector('.btn');

Botão.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

criaturas.forEach(criatura => {
    const divCriatura = document.createElement('div');

    const { nome, altura, habilidades, foto } = criatura;

    divCriatura.innerHTML = `
        <p>Nome: ${nome}</p>
        <p>Altura: ${altura}</p>
        <p>Habilidades: ${habilidades}</p>
        <img src="${foto}" alt="${nome}">
    `;

    Sessão.appendChild(divCriatura);
});

