import React from 'react'
import { connect } from 'react-redux'

// action
import { loginIn, loginOut } from '../actions'

// reduces( 放弃reducers根文件 即收集reducers的store, 又要暴露get方法: 有点臃肿 )
// import { getAuthState } from '../reducers'

// getters( 创造出getters方法， 目前是根文件收集. 只负责收集并且暴露 get方法 )
import { getAuthState } from '../getters'

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
