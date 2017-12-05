import React, { Component } from 'react'
import back from './static/ico/back.png'
import next from './static/ico/next.png'

export default class SecondForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      withFacebook: false,
      withVk: false,
      withTwitter: false,
      withOk: false,
      facebook_input: '',
      vk_input: '',
      twitter_input: '',
      ok_input: '',
    }
  }

  onChekboxChange = e => this.setState({ [e.target.name]: !this.state[e.target.name] })

  onInputChange = e => this.setState({ [e.target.name]: e.target.value })

  nextForm = () => {
    const { withFacebook, facebook_input, withVk, vk_input, withTwitter, twitter_input, withOk, ok_input }=this.state
    const social = {};
    withFacebook && facebook_input && (social.facebook = facebook_input);
    withVk && vk_input && (social.vk = vk_input);
    withTwitter && twitter_input && (social.twitter = twitter_input);
    withOk && ok_input && (social.ok = ok_input);
    this.props.saveValue('social', social);
    this.props.nextForm();
  };

  render() {
    const { renderFormsNumbers } = this.props
    const { withFacebook, withVk, withTwitter, withOk }=this.state;
    return (
      <div className="center_wrapper">
        {renderFormsNumbers()}
        <p className='form__name'>3.Отметьте социальные сети</p>
        <div className="checkboxes_inputs_wrapper">
          <div className="checkboxes">
            <div onClick={this.onChekboxChange} className="input_social">
              <input type='checkbox'
                     name='withFacebook'
                     onChange={this.onChekboxChange}
              />
              <label >Facebook</label>
            </div>
            <div className="input_social">
              <input type='checkbox'
                     name='withVk'
                     onChange={this.onChekboxChange}
              />
              <label>Вконтакте</label>
            </div>
            <div className="input_social">
              <input type='checkbox'
                     name='withTwitter'
                     onChange={this.onChekboxChange}
              />
              <label>Twitter</label>
            </div>
            <div className="input_social">
              <input type='checkbox'
                     name='withOk'
                     onChange={this.onChekboxChange}
              />
              <label>Одноклассники</label>
            </div>
          </div>

          <div className="inputes">
            <input type='text'
                   className={`input_social input_social_text ${!withFacebook && 'notvisible'}`}
                   value={this.state.facebook_input}
                   name='facebook_input'
                   onChange={this.onInputChange}/>

            <input type='text'
                   className={`input_social input_social_text ${!withVk && 'notvisible'}`}
                   name='vk_input'
                   value={this.state.vk_input}
                   onChange={this.onInputChange}/>
            <input type='text'
                   className={`input_social input_social_text ${!withTwitter && 'notvisible'}`}
                   name='twitter_input'
                   value={this.state.twitter_input}
                   onChange={this.onInputChange}/>
            <input type='text'
                   className={`input_social input_social_text ${!withOk && 'notvisible'}`}
                   name='ok_input'
                   value={this.state.ok_input}
                   onChange={this.onInputChange}/>
          </div>
        </div>

        <div className="button_wrapper">
          <div name="prev"
               className="button prev__button"
               onClick={this.props.prevForm}>
            <img className="icon" src={back}/>
            <span>Предыдущий</span>
          </div>
          <div name="next"
               className="button next__button"
               onClick={this.nextForm}>
            <span>Следующий</span>
            <img className="icon" src={next}/>
          </div>
        </div>
      </div>
    )

  }
}