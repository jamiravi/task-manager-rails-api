const API = "http://localhost:3000/api/v1";

/* ================= USERS ================= */

function loadUsers() {
  fetch(`${API}/users`)
    .then(res => res.json())
    .then(users => {
      const div = document.getElementById("users");
      div.innerHTML = "";

      users.forEach(user => {
        div.innerHTML += `
          <div class="card">
            <h3>${user.name}</h3>
            <small>${user.email}</small>

            <div>
              <input id="task-${user.id}" placeholder="New task" />
              <button class="btn-add" onclick="createTask(${user.id})">Add</button>
            </div>

            <div id="tasks-${user.id}"></div>

            <div class="actions">
              <button class="btn-edit" onclick="editUser(${user.id}, '${user.name}', '${user.email}')">Edit</button>
              <button class="btn-delete" onclick="deleteUser(${user.id})">Delete</button>
            </div>
          </div>
        `;

        loadTasks(user.id);
      });
    });
}

function createUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  fetch(`${API}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: { name, email } })
  }).then(() => loadUsers());
}

function editUser(id, name, email) {
  const newName = prompt("Name:", name);
  const newEmail = prompt("Email:", email);

  fetch(`${API}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: { name: newName, email: newEmail } })
  }).then(() => loadUsers());
}

function deleteUser(id) {
  if (!confirm("Delete user?")) return;

  fetch(`${API}/users/${id}`, { method: "DELETE" })
    .then(() => loadUsers());
}

/* ================= TASKS ================= */

function loadTasks(userId) {
  fetch(`${API}/users/${userId}/tasks`)
    .then(res => res.json())
    .then(tasks => {
      const div = document.getElementById(`tasks-${userId}`);
      div.innerHTML = "";

      tasks.forEach(task => {
        div.innerHTML += `
          <div class="task">
            <span class="${task.completed ? "completed" : ""}">
              ${task.title}
            </span>

            <div>
              <button onclick="toggleTask(${task.id}, ${!task.completed})">
                ✔
              </button>
              <button onclick="deleteTask(${task.id})">❌</button>
            </div>
          </div>
        `;
      });
    });
}

function createTask(userId) {
  const input = document.getElementById(`task-${userId}`);
  const title = input.value;

  fetch(`${API}/users/${userId}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: { title } })
  }).then(() => {
    input.value = "";
    loadTasks(userId);
  });
}

function toggleTask(taskId, completed) {
  fetch(`${API}/tasks/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: { completed } })
  }).then(() => loadUsers());
}

function deleteTask(taskId) {
  fetch(`${API}/tasks/${taskId}`, { method: "DELETE" })
    .then(() => loadUsers());
}

/* ================= START ================= */

loadUsers();
