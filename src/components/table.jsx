import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPostData, deletePostData } from "../services/posts";

class Table extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const { data: posts } = await getPostData();
    this.setState({ posts });
  }

  handleUpdate = (id) => {
    console.log(id);
  };

  handleDelete = async (post) => {
    const _posts = [...this.state.posts];
    const posts = _posts.filter((p) => p._id !== post._id);
    this.setState({ posts });
    await deletePostData(post._id);
  };

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <h1 className="mt-5 mb-3">Random Posts.</h1>
            <div className="col-12 p-0 mb-3">
              <Link to="/create/new">
                <button className="btn btn-lg btn-secondary text-white">Create</button>
              </Link>
            </div>
            <table className="bg-white table-bordered mb-5 w-100">
              <tbody>
                {posts.map((post) => (
                  <tr key={post._id}>
                    <td className="p-3">{post.title}</td>
                    <td className="p-3">{post.description}</td>
                    <td className="p-3 text-center">
                      <Link to={`/create/${post._id}`}>
                        <button
                          className="btn btn-success"
                          onClick={() => this.handleUpdate(post._id)}
                        >
                          Update
                        </button>
                      </Link>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(post)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
