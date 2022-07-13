// import cogoToast from 'cogo-toast';
import CountryList from "country-list-with-dial-code-and-flag";
import React, { Fragment, useEffect, useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [Ccode, setCcode] = useState([]);
  const [codeList, setcodeList] = useState([]);
  const [name, setName] = useState("");
  const [showNumber, setshowNumber] = useState(true)

  const [codeValue, setcodeValue] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  useEffect(() => {
    setCcode(CountryList);
    // console.log(CountryList);
  }, []);

  
  const filterSystem = (e) => {
    const keyword = e;

    if (keyword !== "") {
      const results = CountryList.filter((user) => {
        return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 || user.code.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
      setCcode(results);
    } else {
      setCcode(CountryList);
      // If the text field is empty, show all users
    }
    setName(keyword);
  };

  useEffect(() => {
    if (Ccode.length > 0) {
      const list = Ccode.map((n, i) => {
        if (i < 10) {
          return (
            <button
              id="myUL"
              onClick={(e) => setcodeValue(n.dial_code)}
              value={n.dial_code}
              className="mb-2 border_all w-100 py-2 px-2 bg-white text-dark btn d-flex justify-content-between"
              key={i}
              data-dismiss="modal"
              aria-label="Close"
            >
              <span className="" id="li">
                <span className="rounded-full mr-2">{n.flag}</span>
                <span id="a" className="">
                  {n.name}
                </span>
              </span>
              <span className="">{n.dial_code}</span>
            </button>
          );
        }
        return true;
      });
      setcodeList(list);
    }
  }, [Ccode]);

  return (
    <Fragment>
      <div className="signup_page blue_white container-fluid pt-5">
        <div className="siup_pg_innder d-flex flex-column justify-content-center py-3 col-lg-4 offset-lg-4 md mx-auto w-100 " style={{maxWidth:'550px',minWidth:'500px'}}>
          <div className="snd_inner bg-white px-3 pb-3 shadow_custom_fastResponder mb-5">
            <h1 className="d-flex justify-content-center pt-3 text-dark mb-0">
              SIGN IN
            </h1>
            <p className="d-flex justify-content-center align-items-center py-0 mt-0">
            Let's walk with us
            </p>
            <p className="text-center">
            New here?
              <a href="/signup" rel="noopener noreferrer" className="mx-2">
              Create an Account
              </a>
            </p>
            <div className='col-md-12 px-0 mx-0 bg-transparent'>
                <ul className="nav nav-tabs d-flex justify-content-end" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link px-4" id="email-tab" onClick={()=>setshowNumber(false)} data-toggle="tab" href="#email" role="tab" aria-controls="email" aria-selected="true">Email</a>
                    </li>
                    <li className="nav-item " role="presentation">
                        <a className="nav-link px-4 active" id="number-tab" onClick={()=>setshowNumber(true)} data-toggle="tab" href="#number" role="tab" aria-controls="number" aria-selected="false">Number</a>
                    </li>
                </ul>
            </div>
            <form action="" method="post" className="w-100 ">
              {showNumber && 
              <div className="d-block mb-0 d-md-flex w-100 h-full h-16">
                <div className="phone mb-1 h-full mr-1 w-20 h-16 pr-0 input-group">
                  <label htmlFor="Code" className="mt-0 label">
                    Code:
                  </label>
                  <button
                    data-toggle="modal"
                    data-target="#PhnCodeSelect"
                    type="button"
                    className="w-100 pt-3 pb-2 pl-0 h-full form-control dropdown-toggle"
                    required
                  >
                    {codeValue?codeValue:"+880"}
                  </button>
                </div>
                <div className="input-group w-100 h-full d-flex">
                  <div className="phone mb-1 w-100 h-full">
                    <label htmlFor="phone" className="mt-0 label">
                      Phone Number:
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      className="form-control py-3 pl-4 h-full placeholder"
                      required
                      value={PhoneNumber?PhoneNumber:""}
                      onChange={(e)=>setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>}
              {!showNumber &&
              <div className="email mb-0">
                <label htmlFor="email" className="mt-0 label">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-control py-3 pl-4 h-full placeholder"
                  required
                  value={Email?Email:""}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>}
              <div className="password mb-1 relative">
                <label htmlFor="password" className="mt-0 label">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`form-control py-3 pl-4  h-full placeholder `}
                  required
                  value={Password?Password:""}
                  onChange={(e)=>setPassword(e.target.value)}
                  id="id_password1"
                />
              </div>
              <div className="input-group mb-3">
                <div className="p-0 m-0 ">
                  <div className="input-group-text p-0 m-0 ">
                    <input
                      id="checkbox"
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                      className="m-0"
                    />
                  </div>
                </div>
                <label className="ml-2 checkbox" htmlFor="checkbox">
                  Remember Me
                </label>
                <a className='ml-auto border-0 text-forgt-pass' href="/forgetPassword" rel="noopener noreferrer">Forgot Password</a>
              </div>
              <div className="Submit my-3">
                <button
                  type="submit"
                  className="btn bg-dark w-100 py-3 text-2xl"
                >
                  Login
                </button>
              </div>
              <p className="my-2 text-center font-weight-bold">
                or sign in with
              </p>
              <div className="my-2">
                <a href="/" className="btn text-white w-100 py-3 singup-google">
                  <i className="fab text-xl fa-google mr-3 text-white"></i>{" "}
                  <span className="text-xl text-white">Login With Google</span>{" "}
                </a>
              </div>
              <div className="my-2">
                <a
                  href="/"
                  className="btn text-white w-100 py-3  singup-facebook"
                >
                  <i className="fab text-xl fa-facebook mr-3 text-white"></i>{" "}
                  <span className="text-xl text-white">
                    Login With Facebook
                  </span>
                </a>
              </div>
              <div className="my-2">
                <a
                  href="/"
                  className="btn text-white w-100 py-3  singup-twitter"
                >
                  <i className="fab fa-twitter text-xl mr-3 text-white"></i>{" "}
                  <span className="text-xl text-white">Login With Twitter</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal signup-modal fade"
        id="PhnCodeSelect"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <div className="modal-content p-4">
            <div className="modal-header text-dark">
              <h5 className="modal-title" id="exampleModalLabel">
                Select area code
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group has-search d-flex align-items-center border px-3">
                <span className="fa fa-search form-control-feedback "></span>
                <input
                  value={name ? name : ""}
                  onChange={(e) => filterSystem(e.target.value)}
                  type="search"
                  className="py-3 pl-4  h-full placeholder form-control Ccode-search border-0"
                  placeholder="Country Search "
                  autoFocus
                />
              </div>
              <div className="list-group list-group-flush ">{codeList}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
