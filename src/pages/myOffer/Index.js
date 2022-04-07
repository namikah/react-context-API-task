import React from "react";
import "./index.css";

function Index() {
  return (
    <div id="my-offer">
      <div class="container">
        <h2>My offer</h2>
        <div class="row">
          <div class="col-3">
            <div>
              <i class="fas fa-camera"></i>
              <h4>Photography</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, hic.
              </p>
            </div>
          </div>
          <div class="col-3">
            <div>
              <i class="fas fa-tools"></i>
              <h4>Web design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, hic.
              </p>
            </div>
          </div>
          <div class="col-3">
            <div>
              <i class="fas fa-laptop"></i>
              <h4>Web development</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, hic.
              </p>
            </div>
          </div>
          <div class="col-3">
            <div>
              <i class="fas fa-mobile-alt"></i>
              <h4>Mobile apps</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, hic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
