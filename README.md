

O desafio é o seguinte:

Usando a API do GitHub, liste todos os projetos do GitHub da elasticsearch por ordem de "estrelas" de forma decrescente

No clique desses projetos, você deve mostrar:
- nome do projeto
- numero de stars
- numero de forks

Além da lista dos commits, paginados de 20 em 20.
Com um botão no rodapé para que sejam carregados mais 20 a cada clique. Esconder o botão quando não houver mais commits a serem carregados.
Quando dentro de um projeto, a URL e o conteúdo da página devem ser modificados sem que a página seja recarregada.

A aplicação inteira deve ser desenvolvida apenas com HTML, CSS e JS. Fique a vontade para usar frameworks, mas fique atento com o peso da aplicação.

O layout deve ocupar a tela toda. Tanto horizontalmente quanto verticalmente.
O layout anexado deve ficar centralizado, e o restante de tela que sobrar a esquerda deve ser preenchido com a cor azul e a direita com a cor branca.

URLs do projeto
- / : lista com todos os projetos
- /{nomedoprojeto} : detalhes do projeto


Esse projeto foi gerado com [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

Run `grunt` for building and `grunt serve` for preview.

Running `grunt test` will run the unit tests with karma.
