# TODO - JavaScript

## Catálogo

- Botão de editar herói: botão vai levar para a tela /cadastro/{id}
- Botão de excluir herói: botão vai tirar herói da lista de hérois e recarregarrer a tela
- Toda vez que carregar a página, vamos ler os heróis do site e exibi-los na tela
- Filtrar heróis de acordo com seleção dos poderes

```html
<a href="/catalogo/1"></a>
```

## Cadastro/Edição de Herói

- Ao carregar a página, determinar se é cadastro ou edição:  
  Para isso, observar se a url atual contém algo depois de catalogo/{id?}
  Se for edição, preencher campos do formulário com os dados do herói
- Ao clicar em Salvar, devemos criar ou atualizar o herói preenchido no formulário
