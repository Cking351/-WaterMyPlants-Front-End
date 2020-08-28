import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import AxiosWithAuth from '../components/AxiosWithAuth';


const Login = props => {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const history = useHistory();

    const hahdleSubmit = (e) => {
        e.preventDefault();
        // axios
        AxiosWithAuth()
          .post(
            "https://cking-watermyplants.herokuapp.com/login",
            `grant_type=password&username=${form.username}&password=${form.password}`,
            {
              headers: {
                // btoa is converting our client id/client secret into base64
                Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((res) => {
            // console.log(res.data);
            localStorage.setItem("token", res.data.access_token);
            props.history.push("/plants");
          });
      };

      return(
          <div>
              <form onSubmit={hahdleSubmit}>
                  <input 
                    type='text'
                    placeholder='username'
                    onChange={(event) => setForm({...form, username: event.target.value})}
                  />
                  <input 
                  type='password'
                  placeholder='password'
                  onChange={(event) => setForm({...form, password: event.target.value})}
                  />
                  <button>Login</button>
              </form>
          </div>
      )
}

export default Login