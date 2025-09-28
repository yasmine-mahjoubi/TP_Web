// -----------------------------
// TP2 : Application To-Do List
// -----------------------------

// Sélecteurs DOM
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearAll");
const searchInput = document.getElementById("searchInput");
const taskList = document.getElementById("taskList");
const counters = document.getElementById("stats");

// Tableau des tâches (objet : { texte, terminee })
let tasks = [];

// Charger depuis localStorage
window.onload = () => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
  }
};

// Sauvegarder dans localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Ajouter une tâche
function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  tasks.push({ texte: text, terminee: false });
  input.value = "";
  saveTasks();
  renderTasks();
}

// Supprimer une tâche
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Terminer/Annuler une tâche
function toggleTask(index) {
  tasks[index].terminee = !tasks[index].terminee;
  saveTasks();
  renderTasks();
}

// Réafficher la liste
function renderTasks(filter = "") {
  taskList.innerHTML = "";

  tasks
    .filter(task => task.texte.toLowerCase().includes(filter.toLowerCase()))
    .forEach((task, index) => {
      const li = document.createElement("li");
      if (task.terminee) li.classList.add("completed");

      // Texte
      const span = document.createElement("span");
      span.textContent = task.texte;

      // Boutons
      const doneBtn = document.createElement("button");
      doneBtn.textContent = task.terminee ? "↩️" : "✔️";
      doneBtn.className = "done action";
      doneBtn.onclick = () => toggleTask(index);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑️";
      deleteBtn.className = "delete action";
      deleteBtn.onclick = () => deleteTask(index);

      const actions = document.createElement("div");
      actions.appendChild(doneBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(actions);
      taskList.appendChild(li);
    });

  updateCounters();
}

// Mise à jour du compteur
function updateCounters() {
  const total = tasks.length;
  const done = tasks.filter(t => t.terminee).length;
  const pending = total - done;
  counters.textContent = `Tâches totales: ${total} | Terminées: ${done} | En cours: ${pending}`;
}

// Tout supprimer
function clearAllTasks() {
  if (confirm("Voulez-vous vraiment supprimer toutes les tâches ?")) {
    tasks = [];
    saveTasks();
    renderTasks();
  }
}

// Événements
addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearAllTasks);

input.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

searchInput.addEventListener("input", e => {
  renderTasks(e.target.value);
});
