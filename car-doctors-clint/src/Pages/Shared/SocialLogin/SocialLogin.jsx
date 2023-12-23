import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const handelGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handelGoogleLogin} className="btn btn-circle btn-outline">
                    G
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;