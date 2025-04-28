import React from "react";

const Contact = () => {
    

    return (
      <div class="container">
                    <h1 className="my-4">Contact</h1>
        <form>
            <div class="form-group">
            <label>
                Name:
                <input class="form-control"
                    type="text"
                    name="Name"
                    
                    required
                />
            </label>
            </div>
            <div class="form-group">

            <label>
                Email:
                <input class="form-control"
                    type="text"
                    name="Email"
                    
                    required
                />
            </label>
            </div>
            <div class="form-group">

            <label>
                Phone Number:
                <input class="form-control"
                    type="number"
                    name="Number"
                    
                    required
                />
            </label>
            </div>
            <div class="form-group">

            <label>
                Massage:
                <textarea class="form-control"
                    name="Massage"
                    
                    required
                />
            </label>
            </div>
            
            <div class="form-group">

            <button class="btn-dark" type="button" >
                Send
            </button>
            </div>
        </form>
        </div>
    );
};

export default Contact;
