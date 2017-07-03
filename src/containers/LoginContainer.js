import React from 'react'
import { connect } from 'react-redux'

// action
import { loginIn, loginOut } from '../actions'
// reduces
import { getAuthState } from '../reducers'
// components
import Login from '../components/Login'

const LoginContainer = ({ authState, loginIn, loginOut }) => (
    <Login
        authState={ authState }
        onClickAuth={() => loginIn(authState)}
        onClickOut={() => loginOut(authState)}
    />
)

// 将 Store中的state 状态 映射到 组件内
const mapStateToProps = (state) => ({
    authState: getAuthState(state)
})

// 使用 connect 包装一下
export default connect(
    mapStateToProps,
    { loginIn, loginOut }
)(LoginContainer)
