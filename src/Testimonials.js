import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        

        <div>
          <img src="/images/fred.jpg" />
          
          <div className="myCarousel">
            <h3>Fred Balogun</h3>
            <h4>Customer</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas, sapien et laoreet malesuada, quam nisi posuere ante, bibendum lobortis ante felis ut orci. Fusce et ullamcorper ligula.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/shola.jpg" />
          <div className="myCarousel">
            <h3>Shola Daniels</h3>
            <h4>Vendor</h4>
            <p>
            Praesent viverra, nisl vel condimentum consectetur, risus urna ultrices metus, non viverra quam magna eget libero. Fusce porta laoreet massa quis dapibus. Nullam vel turpis finibus.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/vanessa.jpg" />
          <div className="myCarousel">
            <h3>Vanessa Chuks</h3>
            <h4>Customer</h4>
            <p>
            Suspendisse ultrices ultricies ligula ut facilisis. Praesent erat ante, elementum quis ex a, lobortis rutrum nisl. Quisque vehicula elit malesuada efficitur laoreet.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}