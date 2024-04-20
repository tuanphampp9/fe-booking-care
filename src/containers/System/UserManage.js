import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddUserService, handleDeleteUserService, handleEditUserService, handleGetAllUsersService } from '../../services/userService';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';
import ModalEditUser from './ModalEditUser';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listUsers: [],
            isOpenModalAdd: false,
            isOpenModalEdit: false,
            infoUser: {}
        };
    }

    async componentDidMount() {
        await this.handleGetAllUsers();
    }

    handleGetAllUsers = async () => {
        const res = await handleGetAllUsersService();
        if (res.status === 200) {
            this.setState({
                listUsers: res.data.users
            });
        }
    }
    handleOpenModalAdd = () => {
        this.setState({
            isOpenModalAdd: true
        })
    }
    handleCloseModalAdd = () => {
        this.setState({
            isOpenModalAdd: false
        })
    }
    handleCloseModalEdit = () => {
        this.setState({
            isOpenModalEdit: false
        })
    }
    handleAddNewUser = async (data) => {
        try {
            const res = await handleAddUserService(data);
            if (res.status === 200) {
                await this.handleGetAllUsers();
                this.handleCloseModalAdd();
                emitter.emit('EVENT_CLEAR_MODAL_DATA');
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    handleDeleteUser = async (user) => {
        try {
            const res = await handleDeleteUserService(user.id);
            if (res.status === 200) {
                await this.handleGetAllUsers();
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    handleOpenModalEdit = (user) => {
        this.setState({
            isOpenModalEdit: true,
            infoUser: user
        })
    }
    handleEditUser = async (data) => {
        try {
            const res = await handleEditUserService(data.id, data);
            if (res.status === 200) {
                await this.handleGetAllUsers();
                this.handleCloseModalEdit();
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    render() {
        return (
            <div className="users-container">
                <div className="title text-center">
                    Quản lý người dùng
                </div>
                <button className='btn btn-primary px-3 mx-4'
                    onClick={() => this.handleOpenModalAdd()}>
                    <i className="fas fa-plus"></i> Thêm người dùng
                </button>
                <div className="users-table mt-4 px-4">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr className='table-info'>
                                <th scope="col">STT</th>
                                <th scope="col">Email</th>
                                <th scope="col">Họ</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Địa chỉ</th>
                                <th scope="col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.listUsers.length > 0 &&
                                this.state.listUsers.map((user, index) => {
                                    return (<tr key={index}>
                                        <td >{index + 1}</td>
                                        <td >{user.email}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <button type="button" className="btn btn-warning w-25"
                                                onClick={() => this.handleOpenModalEdit(user)}><i className="far fa-edit"></i></button>
                                            <button type="button" className="btn btn-danger w-25"
                                                onClick={() => this.handleDeleteUser(user)}><i className="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>)
                                })}
                        </tbody>
                    </table>
                </div>
                <ModalUser
                    isOpen={this.state.isOpenModalAdd}
                    onCloseModal={this.handleCloseModalAdd}
                    size='lg'
                    onAddNewUser={this.handleAddNewUser}
                />
                {this.state.isOpenModalEdit && <ModalEditUser
                    isOpen={this.state.isOpenModalEdit}
                    onCloseModal={this.handleCloseModalEdit}
                    size='lg'
                    infoUser={this.state.infoUser}
                    onEditUser={this.handleEditUser}
                />}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
