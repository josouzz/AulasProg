let TAREFAS = [];

let contadorDeTarefas = 0;

function addTarefa() {
  contadorDeTarefas++;
  const inputTarefa = document.getElementById("input-nova-tarefa");
  if (inputTarefa.value === "") {
    alert("Digite a tarefa antes de adicioná-la.");
    return;
  }
  TAREFAS.push({id: contadorDeTarefas, tarefa: inputTarefa.value});
  inputTarefa.value = "";
  exibeTarefas()
}

function mudaTarefa(id, novaTarefa) {
  const indiceTarefa = TAREFAS.findIndex((t) => t.id === id);
  TAREFAS[indiceTarefa].tarefa = novaTarefa;
  exibeTarefas()
}

function removeTarefa(id) {
  const novaLista = TAREFAS.filter( (tarefa) => tarefa.id !== id );
  TAREFAS = novaLista;
  exibeTarefas()
}

function exibeTarefas() {
  const listaOrdenada = document.getElementById("lista-de-tarefas");
  listaOrdenada.innerHTML = "";
  TAREFAS.forEach( ( tarefa ) => {
    const item = document.createElement("li");
    item.innerHTML = tarefa.tarefa;
    addIconeMudaTarefa(item, tarefa);
    addIconeExluiTarefa(item, tarefa);
    listaOrdenada.appendChild(item);
  });
}

function addIconeExluiTarefa(item, tarefa) {
  const conteinerIconeExclui = document.createElement("div");
  conteinerIconeExclui.classList.add("conteiner-icon");
  conteinerIconeExclui.id = "icone-exclui";
  const iconeExclui = document.createElement("i");
  iconeExclui.classList.add("fas", "fa-trash");
  conteinerIconeExclui.appendChild(iconeExclui);
  conteinerIconeExclui.onclick = () => { removeTarefa(tarefa.id) };
  item.appendChild(conteinerIconeExclui);
}

function addIconeMudaTarefa(item, tarefa) {
  const conteinerIconeAltera = document.createElement("div");
  conteinerIconeAltera.classList.add("conteiner-icon");
  conteinerIconeAltera.id = "icone-muda";
  const iconeAltera = document.createElement("i");
  iconeAltera.classList.add("fas", "fa-pencil-alt");
  conteinerIconeAltera.appendChild(iconeAltera);
  conteinerIconeAltera.onclick = () => { 
    toggleEscondeTarefas();
    exibeInputAlteracaoTarefa(tarefa);
  };
  item.appendChild(conteinerIconeAltera);
}

function toggleEscondeTarefas() {
  const listaOrdenada = document.getElementById("lista-de-tarefas");
  listaOrdenada.classList.toggle("hidden");
}

function exibeInputAlteracaoTarefa(tarefa) {
  const conteinerTarefas = document.getElementById("conteiner-tarefas");
  const conteinerInputAltera = document.createElement("div");
  conteinerInputAltera.id = "conteiner-input-altera"
  const inputAltera = document.createElement("input");
  inputAltera.type = "text";
  inputAltera.id = "input-altera";
  inputAltera.value = tarefa.tarefa;
  inputAltera.placeholder = "Altere a sua tarefa."
  conteinerInputAltera.appendChild(inputAltera);
  conteinerInputAltera.appendChild(addIconeValidaMudanca(tarefa));
  conteinerInputAltera.appendChild(addIconeDesfazMudanca());
  conteinerTarefas.appendChild(conteinerInputAltera);
}

function addIconeValidaMudanca(tarefa) {
  const conteinerIconeValida = document.createElement("div");
  conteinerIconeValida.classList.add("conteiner-icon");
  conteinerIconeValida.id = "icone-valida";
  const iconeValida = document.createElement("i");
  iconeValida.classList.add("fas", "fa-check");
  conteinerIconeValida.appendChild(iconeValida);
  conteinerIconeValida.onclick = () => { 
    const inputAltera = document.getElementById("input-altera");
    mudaTarefa(tarefa.id, inputAltera.value || tarefa.tarefa);
    document.getElementById("conteiner-input-altera").remove();
    toggleEscondeTarefas();
  };
  return conteinerIconeValida;
}

function addIconeDesfazMudanca() {
  const conteinerIconeDesfaz = document.createElement("div");
  conteinerIconeDesfaz.classList.add("conteiner-icon");
  conteinerIconeDesfaz.id = "icone-desfaz";
  const iconeDesfaz = document.createElement("i");
  iconeDesfaz.classList.add("fas", "fa-times");
  conteinerIconeDesfaz.appendChild(iconeDesfaz);
  conteinerIconeDesfaz.onclick = () => { 
    document.getElementById("conteiner-input-altera").remove();
    toggleEscondeTarefas();
  };
  return conteinerIconeDesfaz;
}
