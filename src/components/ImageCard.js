import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    // referentie maken voor elke image
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    // je moet luisteren naar of de afbeelding geladen is, anders krijg je 0 terug
    // afbeelding is nog niet gedownload
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  // Arrow functie, anders kun je niet bij this.
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    // delen door 10 want 10px is de hoogte van de rij in CSS. Dus hier bereken je hoeveel rijen 1 div inneemt.
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { alt_description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
