const baseUrl = "https://crudcrud.com/api/0d051c39a9a14241b217d3d3c50c943e/tasks";

export const createTask = newTask => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json;utc-8",
        },
        body: JSON.stringify(newTask),
    }).then((response) => {
        if (!response.ok) {
            throw new Error("faild to create task");
        }
    });
};
export const fetchTasksList = () => {
    return fetch(baseUrl)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(taskList =>
            taskList.map(({ _id, ...task }) => ({
                    id: _id,
                    ...task,
                })),
            );
};

export const updateTask = (id, taskData) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json;utc-8",
        },
        body: JSON.stringify(taskData),
    }).then((response) => {
        if (!response.ok) {
            throw new Error("faild to create task");
        }
    });
};

export const deleteTask = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
    }).then((response) => {
        if (!response.ok) {
            throw new Error("faild to create task");
        }
    });
};

