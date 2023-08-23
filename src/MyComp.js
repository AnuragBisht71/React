// Functional Component

// let MyComp = () => {
//     return (
//         <div>
//             <h1>This is my first react app!!!</h1>
//             <p>Some other html</p>
//             <ul>
//                 <li>Home</li>
//                 <li>Service</li>
//                 <li>Contact</li>
//             </ul>
//         </div>
//     )
// }

// Class Component

import React from "react";

class MyComp extends React.Component {

    state = {
        someNumber: 0,
    };

    render = () => {

        console.log("Rendered function executed");

        return (
            <div>
                {/* <h1>This is a Class Based Component</h1> */}

                <button onClick={() => {
                    this.setState({ someNumber: this.state.someNumber + 1 });
                }}>Increment</button>

                <button onClick={() => {
                    this.setState({ someNumber: this.state.someNumber - 1 });
                }}>Decrement</button>

                <h1>{this.state.someNumber}</h1>
            </div>
        )
    }
}

export default MyComp;