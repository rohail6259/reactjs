import React, { Component } from "react";
import { addPostData, updatePostData, getPostById } from "../services/posts";

class Form extends Component {
  state = {
    data: {
      title: "",
      description: "",
    },
  };

  async componentDidMount() {
    const postId = this.props.match.params.id;
    if (postId === "new") return;

    const { data: result } = await getPostById(postId);
    let data = { ...this.state.data };
    data.title = result[0].title;
    data.description = result[0].description;
    this.setState({ data });
  }

  handleTitleChange = (e) => {
    const data = { ...this.state.data };
    data.title = e.target.value;
    this.setState({ data });
  };

  handleDescriptionChange = (e) => {
    const data = { ...this.state.data };
    data.description = e.target.value;
    this.setState({ data });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const values = { ...this.state.data };
    const postId = this.props.match.params.id;
    console.log(values, postId);
    if (postId === "new") await addPostData(values);
    else await updatePostData(values, postId);

    this.props.history.replace("/posts");
  };

  render() {
    const { title, description } = this.state.data;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <h1 className="mb-5">Post Form.</h1>
            <form className="col-12" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={this.handleTitleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={this.handleDescriptionChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
