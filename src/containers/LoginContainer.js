import React from 'react'
import { connect } from 'react-redux'

// action
import { loginIn, loginOut } from '../actions'
// reduces
import { getAuthState } from '../reducers'
// components
import Login from '../components/Login'

const LoginContainer = ({ authState }) => (
    <Login
        authState={ authState }
        onClickAuth={() => loginIn()}
        onClickOut={() => loginOut()}
    />
)

// 将 Store中的state 状态 映射到 组件内
const mapStateToProps = (state) => ({
    authState: getAuthState(state.auth)
})

// 使用 connect 包装一下
export default connect(
    mapStateToProps,
    { loginIn, loginOut }
)(LoginContainer)
