import "./Signup.scss"

export default function Signup() {
   return(
    <div className="sign-up-wrap">
        <div className="sign-heading">
        Sign up and get exclusive special deals
        </div>
        <div className="sign-up-box">
          <div>
            <input type="text" placeholder="Name"/>
          </div>
          <div>
            <button>Sign Up</button>
          </div>
        </div>
    </div>
   )
}