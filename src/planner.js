function toggleDarkMode() { document.documentElement.classList.toggle('dark'); const body = document.body; if (document.documentElement.classList.contains('dark')) { body.style.backgroundImage = "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 1000%27%3E%3Cg %3E%3Ccircle fill=%27%23330055%27 cx=%2750%27 cy=%270%27 r=%2750%27/%3E%3Cg fill=%27%233a015d%27 %3E%3Ccircle cx=%270%27 cy=%2750%27 r=%2750%27/%3E%3Ccircle cx=%27100%27 cy=%2750%27 r=%2750%27/%3E%3C/g%3E%3Ccircle fill=%27%23410165%27 cx=%2750%27 cy=%27100%27 r=%2750%27/%3E%3Cg fill=%27%2348026e%27 %3E%3Ccircle cx=%270%27 cy=%27150%27 r=%2750%27/%3E%3Ccircle cx=%27100%27 cy=%27150%27 r=%2750%27/%3E%3C/g%3E%3Ccircle fill=%27500376%27 cx=%2750%27 cy=%27200%27 r=%2750%27/%3E%3Cg fill=%2757047e%27 %3E%3Ccircle cx=%270%27 cy=%27250%27 r=%2750%27/%3E%3Ccircle cx=%27100%27 cy=%27250%27 r=%2750%27/%3E%3C/g%3E%3Ccircle fill=%275f0587%27 cx=%2750%27 cy=%27300%27 r=%2750%27/%3E%3Cg fill=%2767068f%27 %3E%3Ccircle cx=%270%27 cy=%27350%27 r=%2750%27/%3E%3Ccircle cx=%27100%27 cy=%27350%27 r=%2750%27/%3E%3C/g%3E%3Ccircle fill=%276f0798%27 cx=%2750%27 cy=%27400%27 r=%2750%27/%3E%3Cg fill=%277707a0%27 %3E%3Ccircle cx=%270%27 cy=%27450%27 r=%2750%27/%3E%3Ccircle cx=%27100%27 cy=%27450%27 r=%2750%27/%3E%3C/g%3E%3Ccircle fill=%278008a9%27 cx=%2750%27 cy=%27500%27 r=%2750%27/%3E%3Cg fill=%278909b1%27 %3E%3Ccircle cx=%270%27 cy=%27550%27 r=%2750%27/%3E%3Ccircle cx=%27100%27 cy=%27550%27 r=%2750%27/%3E%3C/g%3E%3Ccircle fill=%279109ba%27 cx=%2750%27 cy=%27600%27 r=%2750%27/%3E%3Cg fill=%279a09c3%27 %3E%3Ccircle cx=%270%27 cy=%27650%27 r=%2750%27/%3E%3Ccircle cx=%27100%27 cy=%27650%27 r=%2750%27/%3E%3C/g%3E%3Ccircle fill=%27a309cb%27 cx=%2750%27 cy=%27700%27 r=%2750%27/%3E%3Cg fill=%27ad09d4%27 %3E%3Ccircle cx=%270%27 cy=%27750%27 r=%2750%27/%3E%3Ccircle cx=%27100%27 cy=%27750%27 r=%2750%27/%3E%3C/g%3E%3Ccircle fill=%27b608dc%27 cx=%2750%27 cy=%27800%27 r=%2750%27/%3E%3Cg fill=%27c007e5%27 %3E%3Ccircle cx=%270%27 cy=%27850%27 r=%2750%27/%3E%3Ccircle cx=%27100%27 cy=%27850%27 r=%2750%27/%3E%3C/g%3E%3Ccircle fill=%27c905ee%27 cx=%2750%27 cy=%27900%27 r=%2750%27/%3E%3Cg fill=%27d303f6%27 %3E%3Ccircle cx=%270%27 cy=%27950%27 r=%2750%27/%3E%3Ccircle cx=%27100%27 cy=%27950%27 r=%2750%27/%3E%3C/g%3E%3Ccircle fill=%27D0F%27 cx=%2750%27 cy=%271000%27 r=%2750%27/%3E%3C/g%3E%3C/svg%3E')"; body.style.backgroundAttachment = "fixed"; body.style.backgroundSize = "contain"; } else { body.style.backgroundImage = "none"; } }

// Adicione o manipulador de eventos submit
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    taskList.appendChild(newTask);
    taskInput.value = '';
});


