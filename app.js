let amigos = [];

// nome na lista
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome && !amigos.includes(nome)) {
    amigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
  } else {
    alert("Nome já adicionado!");
  }
}

// lista
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// pares
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para sortear!");
    return;
  }

  let sorteio = [...amigos];
  sorteio.sort(() => Math.random() - 0.5);

  // Garante que ninguém tire a si mesmo
  for (let i = 0; i < amigos.length; i++) {
    if (amigos[i] === sorteio[i]) {
      const j = (i + 1) % amigos.length;
      [sorteio[i], sorteio[j]] = [sorteio[j], sorteio[i]];
    }
  }

  // resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  
  amigos.forEach((amigo, i) => {
    const li = document.createElement("li");
    li.textContent = `${amigo} ➝ ${sorteio[i]}`;
    resultado.appendChild(li);
  });
}
