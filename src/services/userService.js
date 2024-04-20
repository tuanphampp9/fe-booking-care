import axios from "../axios"

export const handleLogin = async (email, password) => {
    return await axios.post("/api/login", { email, password })
}

export const handleGetAllUsersService = async () => {
    return await axios.get("/api/get-all-users")
}

export const handleAddUserService = async (data) => {
    return await axios.post("/api/create-new-user", data);
}
export const handleDeleteUserService = async (id) => {
    return await axios.delete(`/api/delete-user/${id}`);
}
export const handleEditUserService = async (id, data) => {
    return await axios.put(`/api/edit-user/${id}`, data);
}