import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, ButtonGroup } from 'reactstrap';
import { emitter } from '../../utils/emitter';
class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            gender: 1
        }
        this.listenToEmitter();
    }
    listenToEmitter = () => {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                address: '',
            })
        })
    }
    handleChangeInput = (key, e) => {
        this.setState({
            [key]: e.target.value
        })
    }
    handleValidateInput = () => {
        let keyName = '';
        const keyInputs =
            ['firstName',
                'lastName',
                'email',
                'password',
                'address',
            ]
        for (let i = 0; i < keyInputs.length; i++) {
            if (!this.state[keyInputs[i]]) {
                keyName = keyInputs[i];
                break;
            }
        }
        return keyName
    }
    handleAddUser = () => {
        const isCheckValidateInput = this.handleValidateInput();
        if (isCheckValidateInput) {
            alert(isCheckValidateInput);
        } else {
            this.props.onAddNewUser(this.state)
        }
    }
    toggle = () => {
        this.props.onCloseModal()
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={this.toggle} {...this.props}>
                    <ModalHeader toggle={this.toggle}>Thêm mới người dùng</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 form-group">
                                    <label htmlFor="">
                                        Email
                                    </label>
                                    <Input
                                        type='email'
                                        onChange={(e) => this.handleChangeInput('email', e)}
                                        value={this.state.email} />
                                </div>
                                <div className="col-6 form-group">
                                    <label htmlFor="">
                                        Mật khẩu
                                    </label>
                                    <Input
                                        type='password'
                                        onChange={(e) => this.handleChangeInput('password', e)}
                                        value={this.state.password} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 form-group">
                                    <label htmlFor="">
                                        Họ
                                    </label>
                                    <Input
                                        type='text'
                                        onChange={(e) => this.handleChangeInput('firstName', e)}
                                        value={this.state.firstName} />
                                </div>
                                <div className="col-6 form-group">
                                    <label htmlFor="">
                                        Tên
                                    </label>
                                    <Input
                                        type='text'
                                        onChange={(e) => this.handleChangeInput('lastName', e)}
                                        value={this.state.lastName} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 form-group">
                                    <label htmlFor="">
                                        Địa chỉ
                                    </label>
                                    <Input
                                        type='text'
                                        onChange={(e) => this.handleChangeInput('address', e)}
                                        value={this.state.address} />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="">
                                    Giới tính
                                </label>
                                <ButtonGroup
                                    className='d-flex'>
                                    <Button
                                        color='primary'
                                        onClick={() => this.setState({ gender: 0 })}
                                        active={this.state.gender === 0}>
                                        Nữ
                                    </Button>
                                    <Button
                                        color='primary'
                                        onClick={() => this.setState({ gender: 1 })}
                                        active={this.state.gender === 1}>
                                        Nam
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle} className='px-4'>
                            Huỷ
                        </Button>
                        <Button color="primary" onClick={this.handleAddUser} className='px-4'>
                            Thêm
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ModalUser