let List = (props) => {

    return (

        <ul>

            {
                props.tasks.map((el) => {
                    return <li>{el}
                        {/* <button
                            onClick={() => {

                                let currTaskArr = this.state.tasks;

                                let filteredTaskArr = currTaskArr.filter((element) => {
                                    return element != el;
                                })

                                this.setState({
                                    tasks: filteredTaskArr
                                });

                            }}>Delete
                        </button> */}
                    </li>;
                })
            }

        </ul>

    )

}

export default List;
