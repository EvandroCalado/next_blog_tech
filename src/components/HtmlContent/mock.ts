export default `
<h1>React</h1><p>React é uma biblioteca JavaScript de código aberto, mantida pelo Facebook, que é amplamente usada no desenvolvimento de interfaces de usuário. Com sua arquitetura baseada em componentes, o React permite criar interfaces reutilizáveis e escaláveis   de forma eficiente. Neste texto, vamos explorar os principais conceitos e recursos do React, incluindo seus principais benefícios e alguns exemplos de código.</p><h1>Conceitos Básicos do React</h1><h2>Componentes</h2><p>Componentes são o bloco fundamental do React. Eles podem ser pensados como pequenos pedaços de código que encapsulam uma parte da interface do usuário. Cada componente pode ter seu próprio estado, propriedades e métodos, o que torna o código mais modular e reutilizável. Os componentes podem ser compostos em hierarquias mais complexas para criar interfaces de usuário completas.</p><p><img src="https://res.cloudinary.com/dnhsdenji/image/upload/v1679625771/pexels_realtoughcandycom_11035471_127960d6fa.jpg" alt="react-logo" srcset="https://res.cloudinary.com/dnhsdenji/image/upload/v1679625771/thumbnail_pexels_realtoughcandycom_11035471_127960d6fa.jpg 234w,https://res.cloudinary.com/dnhsdenji/image/upload/v1679625771/small_pexels_realtoughcandycom_11035471_127960d6fa.jpg 500w," sizes="100vw"></p><p>Por exemplo, podemos criar um componente simples que renderiza um título em negrito:</p>

<pre><code class="language-javascript">
import * as Styled from './styles';
import HtmlContent from '../HtmlContent';

export type FooterProps = {
  footerHtml: string;
};

const Footer = ({ footerHtml }: FooterProps) => {
  return (
    &ltStyled.Container&gt
    &ltHtmlContent html={footerHtml} /&gt
    &lt/Styled.Container&gt
  );
};

export default Footer;

</code></pre>

<p>Neste exemplo, o componente Title recebe um objeto props que contém o texto do título e o renderiza em negrito usando o elemento h1.</p><h2>JSX</h2><p>O React utiliza uma extensão de sintaxe JavaScript chamada JSX para criar elementos de interface do usuário. O JSX permite que os desenvolvedores escrevam código HTML semelhante em aparência ao HTML real dentro do JavaScript. O compilador do React transforma esse código JSX em código JavaScript padrão que pode ser interpretado pelo navegador.</p><p>Por exemplo, podemos criar um componente que renderiza uma lista de itens usando JSX:</p>

<pre><code class="language-javascript">
import React from 'react';

function List(props) {
  return (
    &lt;ul&gt;
     {props.items.map((item) =&gt; (
       &lt;li key={item.id}&gt;{item.text}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
 );
};

export default List;
</code></pre>

<p>Neste exemplo, o componente List recebe um objeto props que contém uma matriz de itens a serem renderizados. O JSX é usado para criar uma lista de itens, onde cada item é representado por um elemento li.</p><p><img src="https://res.cloudinary.com/dnhsdenji/image/upload/v1679626497/pexels_realtoughcandycom_11035380_d3c431dd33.jpg" alt="pexels-realtoughcandycom-11035380.jpg" srcset="https://res.cloudinary.com/dnhsdenji/image/upload/v1679626496/thumbnail_pexels_realtoughcandycom_11035380_d3c431dd33.jpg 234w,https://res.cloudinary.com/dnhsdenji/image/upload/v1679626497/small_pexels_realtoughcandycom_11035380_d3c431dd33.jpg 500w," sizes="100vw"></p><h2>Estado</h2><figure class="image image_resized image-style-side" style="width:38.08%;"><img src="https://res.cloudinary.com/dnhsdenji/image/upload/v1679625771/pexels_realtoughcandycom_11035471_127960d6fa.jpg" alt="react-logo" srcset="https://res.cloudinary.com/dnhsdenji/image/upload/v1679625771/thumbnail_pexels_realtoughcandycom_11035471_127960d6fa.jpg 234w,https://res.cloudinary.com/dnhsdenji/image/upload/v1679625771/small_pexels_realtoughcandycom_11035471_127960d6fa.jpg 500w," sizes="100vw"></figure><p>O estado é uma das características mais importantes do React. Ele permite que os componentes armazenem e gerenciem dados internamente. Quando o estado de um componente é alterado, o React atualiza automaticamente a interface do usuário para refletir essas mudanças.</p><p>Por exemplo, podemos criar um componente simples que exibe um contador e permite que o usuário o aumente clicando em um botão:</p><p>O estado é uma das características mais importantes do React. Ele permite que os componentes armazenem e gerenciem dados internamente. Quando o estado de um componente é alterado, o React atualiza automaticamente a interface do usuário para refletir essas mudanças.</p>

<pre><code class="language-javascript">
import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);

function handleClick() {
    setCount(count + 1);
  }

  return (
      &lt;div&gt;
        &lt;p&gt;Contador: {count}&lt;/p&gt;
        &lt;button onClick={handleClick}&gt;Incrementar&lt;/button&gt;
      &lt;/div&gt;
  );
}

export default Counter;
      </code></pre>

<p>Neste exemplo, o componente Counter usa o hook useState do React para armazenar o estado do contador. Quando o usuário clica no botão "Incrementar", a função handleClick é chamada, atualizando o estado do contador e forçando o React a atualizar a interface do usuário.</p><ul><li>Use State</li><li>Use Effect</li><li>Use Callback</li><li>Use Memo</li><li>Use Ref</li><li>Use Context</li><li>Use Reducer</li></ul><h2>Benefícios do React</h2><h3>Reutilização de Código</h3><p>Uma das maiores vantagens do React é sua abordagem baseada em component</p><figure class="table"><table style="border-style:solid;"><thead><tr><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Title 1</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Title 1</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Title 1</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Title 1</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Title 1</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Title 1</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Title 1</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Title 1</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Title 1</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Title 1</th></tr><tr><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th></tr><tr><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th></tr><tr><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th><th style="border:2px solid hsl(0, 0%, 90%);height:40px;padding:5px 15px;text-align:center;width:100px;">Item</th></tr></thead></table></figure><figure class="media"><oembed url="https://www.youtube.com/watch?v=mHuUASWQij4"></oembed></figure>
`;
