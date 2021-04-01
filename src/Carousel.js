import { Component } from "react";

class Carousel extends Component {
  state = { active: 0 };
  static defaultProps = {
    images: ["https://loremflickr.com/320/240"],
  };

  handleIndexClick = (e) => {
    this.setState({ active: +e.target.dataset.index });
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              src={photo}
              alt="animal thumbnail"
              key={photo}
              className={index === active ? "active" : ""}
              data-index={index}
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
