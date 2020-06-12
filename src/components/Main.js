import React, { Component } from "react";

export default class Main extends Component {
  state = {};

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <div className="base">
          <div className="container">
            <section class="team-section text-center my-5">
              <h2
                class="h1-responsive font-weight-bold my-5"
                style={{ color: "white" }}
              >
                Our amazing team
              </h2>

              <p
                class="white-text w-responsive mx-auto mb-5"
                style={{ color: "white" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi,
                veritatis totam voluptas nostrum quisquam eum porro a pariatur
                veniam.
              </p>

              <div class="row">
                <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                      class="rounded-circle z-depth-1"
                      alt="Sample avatar"
                    />
                  </div>
                  <h5
                    class="font-weight-bold mt-4 mb-3"
                    style={{ color: "white" }}
                  >
                    Anna Williams
                  </h5>
                  <p class="text-uppercase blue-text">
                    <strong style={{ color: "white" }}>Graphic designer</strong>
                  </p>
                  <p style={{ color: "white" }}>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci sed quia non numquam modi
                    tempora eius.
                  </p>
                  <ul class="list-unstyled mb-0">
                    <a class="p-2 fa-lg fb-ic">
                      <i class="fab fa-facebook-f blue-text"> </i>
                    </a>

                    <a class="p-2 fa-lg tw-ic">
                      <i class="fab fa-twitter blue-text"> </i>
                    </a>

                    <a class="p-2 fa-lg ins-ic">
                      <i class="fab fa-instagram blue-text"> </i>
                    </a>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                      class="rounded-circle z-depth-1"
                      alt="Sample avatar"
                    />
                  </div>
                  <h5 class="font-weight-bold mt-4 mb-3">John Doe</h5>
                  <p class="text-uppercase blue-text">
                    <strong style={{ color: "white" }}>Web developer</strong>
                  </p>
                  <p style={{ color: "white" }}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem ipsa accusantium doloremque rem laudantium totam
                    aperiam.
                  </p>
                </div>

                <div class="col-lg-3 col-md-6 mb-md-0 mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      class="rounded-circle z-depth-1"
                      alt="Sample avatar"
                    />
                  </div>
                  <h5
                    class="font-weight-bold mt-4 mb-3"
                    style={{ color: "white" }}
                  >
                    Maria Smith
                  </h5>
                  <p class="text-uppercase blue-text">
                    <strong style={{ color: "white" }}>Photographer</strong>
                  </p>
                  <p style={{ color: "white" }}>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim est fugiat nulla id
                    eu laborum.
                  </p>
                  <ul class="list-unstyled mb-0"></ul>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                      class="rounded-circle z-depth-1"
                      alt="Sample avatar"
                    />
                  </div>
                  <h5
                    class="font-weight-bold mt-4 mb-3"
                    style={{ color: "white" }}
                  >
                    Tom Adams
                  </h5>
                  <p class="text-uppercase blue-text">
                    <strong style={{ color: "white" }}>
                      Backend developer
                    </strong>
                  </p>
                  <p style={{ color: "white" }}>
                    Perspiciatis repellendus ad odit consequuntur, eveniet earum
                    nisi qui consectetur totam officia voluptates perferendis
                    voluptatibus aut.
                  </p>
                  <ul class="list-unstyled mb-0"></ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
