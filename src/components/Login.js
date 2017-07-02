import React from 'react'

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.authenticate = this.authenticate.bind(this)
    }
    // 鉴定事件
    authenticate () {
        // setTimeout(console.log('登录'), 2000)
        // let timedCount = function () {
        //     console.log(this)
        // }
        setTimeout(() => {
            // console.log(this.props)
            this.props.onClickAuth()
        }, 500)
    }
    // 需要更新
    componentWillReceiveProps (nextProps) {
        console.log('props更新')
        console.log(nextProps.value)
    }
    render () {
        const { authState, onClickOut } = this.props
        return (
            <p>
                Clicked: { authState ? (
                    <b> 登录A </b>
                ) : (
                    <b> 未登录B </b>
                )}
                {/* 登录 */}
                <button onClick={ this.authenticate }>
                    检验登录
                </button>
                {/* 退出 */}
                <button onClick={ onClickOut }>
                    退出
                </button>
            </p>
        )
    }
}

export default Login