import React, {Component} from 'react';
import back from './static/ico/back.png'


export default class FourthForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            highlightedImage: 'no',
            isDogSelected: ''
        }
    }

    onImageClick = (id, e) => {
        const clickedImage = e.target.src.match((/[\w\.]*(jpg)/))[0];
        console.log(e.target.src,)
        const dogClicked = clickedImage.indexOf('dog') != -1;
        (id == this.state.highlightedImage) ? this.setState({
                highlightedImage: 'no',
                isDogSelected: '',
            }) :
            this.setState({
                highlightedImage: id,
                isDogSelected: dogClicked
            })
    }


    createName = src => src == this.state.highlightedImage

    nextForm = () => {
        if (this.state.highlightedImage != 'no' && !this.state.isDogSelected) {
            this.props.saveValue('selectedImage', this.state.highlightedImage);
            this.props.nextForm();
        }
    };

    render() {
        const {images}=this.props;
        return (
            <div>
                <div className="center_wrapper">
                    {this.props.renderFormsNumbers()}
                    <p className='form__name '> 4.Выберете любимого котика</p>
                </div>

                <div className="container">
                    <div className="images_wrapper">
                        { images.map(
                            (value, id) => {
                                return <img src={value} alt='cat1' key={id}
                                            className={`image ${this.createName(id) && 'highlight'}`}
                                            onClick={this.onImageClick.bind(this, id)}/>
                            })
                        }
                        <p className={`wrong_image__error_message ${!this.state.isDogSelected && 'notvisible'}`}>
                            Вы вибрали собачку, а надо котика
                        </p>
                    </div>
                </div>

                <div className="button_wrapper center_wrapper ">
                    <div name="prev"
                         className="button prev__button"
                         onClick={this.props.prevForm}>
                            <img className="icon" src={back}/>
                            <span>Предыдущий</span>
                    </div>
                    <div name="next"
                         className="button end__button"
                         onClick={this.nextForm}
                         disabled={this.state.isDogSelected}>
                            <span>Завершить</span>
                    </div>
                </div>

            </div>

        )

    }
}