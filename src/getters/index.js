// 创造出的getters 方法根 = ( 后期将整个getters继续分 )=> 单个模块的 state获取
import * as fromAuth from '../reducers/auth'

const getAuth = state => fromAuth.getAuth(state.auth)

export const getAuthState = state =>
    getAuth(state)
