function adicionartarefa(){
    const tarefa = document.getElementById('nova');
    const tarefaTexto = tarefa.value;

    if(tarefaTexto === '') {
        alert('Por favor, digite uma tarefa');
        return;
    }

    const li = document.createElement('li');
    li.textContent = tarefaTexto;

    li.onclick = function(){
    this.classlist.togle ('completed');
    };
            
        
    document.getElementById('lista').appendChild(li);
    tarefa.value = '';//ira limpar o campo de entrada
}
