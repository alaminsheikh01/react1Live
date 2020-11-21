import React, { useState } from 'react'



const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg:"",
    })

    const InputEvent =(event) =>{
        const {name, value} =event.target;
        setData((preVal) =>{
            return {
                ...preVal,
                [name]:value,
            }
        })
    }
    const fromsubmit =(e) =>{
        e.preventDefalut();
        alert(`${data.fullname}`);
    }

    return (<>
        <div className="my-5">
            <h1 className="text-center"> Contact Us</h1>
        </div>

        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">

                    <form onSubmit={fromsubmit}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">FullName</label>
                            <input type="text" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter your name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Phone number</label>
                            <input type="number" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}
                            placeholder="Enter phone number" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="name@example.com" />
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message here</label>
                            <textarea class="form-control"
                             id="exampleFormControlTextarea1" 
                             name="msg"
                             value={data.msg}
                             onChange={InputEvent}
                             rows="3"></textarea>
                        </div>
                        <div className="col-12 text-center">
                            <button className="btn btn-outline-primary" type="submit">
                                Submit from
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
<div style={{height:"70px"}}></div>

    </>)
}

export default Contact;