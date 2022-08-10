
const LoginForm = () => {
    return(
       <>
       <div className="blank"></div>
        <form>
            <div className="login">
                <div className='loginCon'>
                    <span>이메일</span>
                    <input className='noInfo' name="email" id="email" type="email" placeholder="" aria-required="false" maxLength="100" aria-invalid="true"></input>
                    
                </div>
                <div className='loginCon'>
                    <span>비밀번호</span>
                    <input name="password" id="password" type="password" placeholder="" aria-required="false" maxLength="100" aria-invalid="true"></input>
                </div>
            </div>
            <div className="login">
            <button type="button" className="btn btn-outline-light" style={{margin:'1%'}}>로그인</button>
            </div>
        </form>
       </>


    )
}

export default LoginForm
