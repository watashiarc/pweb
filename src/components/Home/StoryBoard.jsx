/**
 * CodePen: http://codepen.io/aderaaij/pen/RPZbbN
 */
class StoryBoard extends React.Component {
  componentDidMount() {
    // we set visibility:hidden in the CSS to avoid an initial flash - make them visible now, but the from() tweens are going to essentially hide them anyway because their stroke position/length will be 0.
    TweenLite.set(".will-animate", {
      visibility: "visible"
    });

    //  Timeline Sequence
    var tl = new TimelineLite();

    tl
      .add('action')
      .from('#chat-bubble__bubble', .3, {
        y: '+=50',
        opacity: 0
      })
      .from('#chat-bubble__question-mark', .3, {
        transformOrigin: "center",
        scale: 0
      })
      .add('arrows')
      .from('#arrow-up', .3, {
        y: '+=10',
        x: '-=10',
        opacity:0
      }, 'arrows')
      .add('devices')
      .from("#phone", .2, {
        y: '-=50',
        opacity: 0
      })
      .add('logos')
      .from('#phone__logo', .3, {
        transformOrigin: "center",
        scale: 0
      })
      .from('#cart', .3, {
        x: '-=50',
        opacity: 0
      }, 'action+=.3')
      .from('#arrow-down', .3, {
        y: '-=10',
        x: '-=10',
        opacity:0
      }, 'arrows')
      .from('#screen', .3, {
        opacity:0,
        y: '+=20'
      }, 'devices')
      .from('#hipchat', .3, {
        transformOrigin: "center",
        scale: 0
      }, 'logos');

    // lazy rendering (a performance optimization) can cause the initial render to be delayed by 1 tick, causing the logo to be visible for a brief moment, so we force a render here immediately. Another option would be to set lazy:false on the tween(s), but this is easier/faster.
    TweenLite.render();
  }
  
  render() {
    return (
      <svg id="app-icons" viewBox="165.9 298.5 270 147">
        <Phone />
        <PhoneLogo />
        <Screen />
         <g id="cart" className='will-animate'>
            <path fill="#34C8F2" d="M333.7,334.9c-2,0-3.7,1.7-3.7,3.7s1.7,3.7,3.7,3.7s3.7-1.7,3.7-3.7S335.8,334.9,333.7,334.9z M333.7,340.6 		c-1.2,0-2-0.9-2-2c0-1.2,0.9-2,2-2c1.2,0,2,0.9,2,2C335.8,339.7,334.9,340.6,333.7,340.6z" />
            <path fill="#34C8F2" d="M350.4,334.9c-2,0-3.7,1.7-3.7,3.7s1.7,3.7,3.7,3.7c2,0,3.7-1.7,3.7-3.7S352.4,334.9,350.4,334.9z 		 M350.4,340.6c-1.2,0-2-0.9-2-2c0-1.2,0.9-2,2-2c1.2,0,2,0.9,2,2C352.5,339.7,351.5,340.6,350.4,340.6z" />
            <path fill="#34C8F2" d="M355.1,311.6L355.1,311.6h-4.6c-0.4,0-0.8,0-1,0h-6.7h-6.6c-0.4-0.1-0.8,0-1,0h-4.6h-0.1 		c-1.7,0.4-3.1,1.5-3.8,2.8l-3.2-13.7c-0.1-0.4-0.4-0.4-0.8-0.4h-6.9c-0.4,0-0.8,0.4-0.8,0.8s0.4,0.8,0.8,0.8h6.3l6,25.5v-0.1 		c0.4,2.3,2.2,3.9,4.4,4.3c0.1,0,0.2,0,0.3,0.1h0.1h0.5v-0.8l0.1,0.8l9.4-0.1l9.4,0.1v-0.8l0.1,0.8h0.5h0.1c0.1,0,0.2-0.1,0.3-0.1 		c2.3-0.4,4-2.1,4.4-4.4l1.8-9.2C360,315.1,358.1,312.2,355.1,311.6z M357.8,317.7l-1.8,9.2c-0.3,1.6-1.5,2.8-3.1,3.1h-0.1 		c-0.1,0-0.1,0-0.1,0l-9.8-0.1l-9.8,0.1c-0.1,0-0.1,0-0.1,0h-0.1c-1.6-0.3-2.8-1.5-3.1-3.1l-1.8-9.2c-0.4-2,0.9-4.1,3-4.5h4.5 		c0.2,0,0.4,0,0.8,0h6.7l6.8-0.1c0.2,0,0.4,0,0.8,0h4.4C356.9,313.6,358.2,315.7,357.8,317.7z"
               />
         </g>
        <ChatBubble />
        <HipChat />
        <path id='arrow-up' fill="#4691f6" d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z"></path>
         <path  className='will-animate' fill="#34C8F2" d="M233.2,371l-0.2-0.3l-0.1,0.1c-0.2-0.1-0.4-0.1-0.7,0l-7.6,3.4l0.6,1.3l6.3-2.8 	c-4.7,22.8-27.6,35.3-27.8,35.4l-0.7,0.4l0.7,1.3l0.7-0.4c0.2-0.1,23.5-12.9,28.5-36.1l3.2,5l1.2-0.8L233.2,371z" />
         <path id='arrow-down' className='will-animate' fill="#34C8F2" d="M394.4,365.5l-0.2,0.3l-0.1-0.1c-0.2,0.1-0.4,0.1-0.7,0l-7.6-3.4l0.6-1.3l6.3,2.8 	c-4.7-22.8-27.6-35.3-27.8-35.4l-0.7-0.4l0.7-1.3l0.7,0.4c0.2,0.1,23.5,12.9,28.5,36.1l3.2-5l1.2,0.8L394.4,365.5z" />
      </svg>
    );
  }
}

class Phone extends React.Component {
  render() {
    return (
      <g id='phone' className='will-animate'>
          <path fill="#34C8F2" d="M246.6,302.9h-26.8c-2.5,0-4.4,2-4.4,4.4v51.9c0,2.4,2,4.4,4.4,4.4h26.8c2.5,0,4.4-2,4.4-4.4v-51.9 C251.1,304.8,249,302.9,246.6,302.9z M219.8,305.1h26.8c1.2,0,2.3,0.9,2.3,2.1v2.7h-31.3v-2.7C217.6,306.1,218.5,305.1,219.8,305.1 		z M248.8,312.1v36.4h-31.3v-36.4H248.8z M246.6,361.2h-26.8c-1.2,0-2.3-0.9-2.3-2.1v-8.4h31.3v8.4 		C248.8,360.3,247.8,361.2,246.6,361.2z"
             />
          <circle fill="#34C8F2" cx="233.2" cy="355.6" r="3.4" />
       </g>
       
    );
  }
}

class PhoneLogo extends React.Component {
  render() {
    return (
      <path id="phone__logo" className='will-animate' fill="#34C8F2" d="M244.8,328.6c0-5.2-5.2-9.5-11.6-9.5c-6.4,0-11.6,4.2-11.6,9.5c0,4.7,4.1,8.6,9.7,9.3 				c0.4,0.1,0.9,0.2,1,0.6c0.1,0.3,0.1,0.7,0.1,1c0,0-0.1,0.8-0.1,1c-0.1,0.3-0.2,1.2,1,0.7c1.2-0.5,6.7-3.9,9.2-6.8l0,0 				C244,332.6,244.8,330.7,244.8,328.6z M228.6,331.7h-2.3c-0.4,0-0.6-0.3-0.6-0.6v-4.7c0-0.4,0.3-0.6,0.6-0.6 				c0.4,0,0.6,0.3,0.6,0.6v4h1.7c0.4,0,0.6,0.3,0.6,0.6C229.3,331.4,229,331.7,228.6,331.7z M231,331.1c0,0.4-0.3,0.6-0.6,0.6 				c-0.4,0-0.6-0.3-0.6-0.6v-4.7c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6V331.1z M236.6,331.1c0,0.3-0.1,0.5-0.4,0.6 				c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4-0.1-0.5-0.2l-2.4-3.2v2.8c0,0.4-0.3,0.6-0.6,0.6c-0.4,0-0.6-0.3-0.6-0.6v-4.7 				c0-0.3,0.1-0.5,0.4-0.6c0.1,0,0.1,0,0.2,0c0.2,0,0.4,0.1,0.5,0.2l2.4,3.2v-2.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6 				V331.1z M240.3,328.2c0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6h-1.7v1.1h1.7c0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6 				H238c-0.4,0-0.6-0.3-0.6-0.6v-2.3l0,0l0,0v-2.3c0-0.4,0.3-0.6,0.6-0.6h2.3c0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6h-1.7v1.1 				h1.7V328.2z"
          />
    );
  }
}

class Screen extends React.Component {
  render() {
    return (
       <g id="screen" className='will-animate'>
          <path fill="#34C8F2" d="M430.6,373.6h-70c-2.3,0-4.2,1.9-4.2,4.2v46.5c0,2.3,1.9,4.2,4.2,4.2h33.9v12.9H384c-0.6,0-1.1,0.5-1.1,1.1 	c0,0.6,0.5,1.1,1.1,1.1h23c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1h-10.3v-12.9h33.9c2.3,0,4.2-1.9,4.2-4.2v-46.5 	C434.9,375.5,433,373.6,430.6,373.6z M432.7,424.3c0,1.1-0.9,2-2,2h-70c-1.1,0-2-0.9-2-2v-46.5c0-1.1,0.9-2,2-2h70c1.1,0,2,0.9,2,2 	V424.3z"
             />
       </g>
    );
  }
}

class ChatBubble extends React.Component {
  render() {
    return (
      <g id='chat-bubble'>
          <path id='chat-bubble__bubble' className='will-animate' fill="#34C8F2" d="M189,409.7h-16.5c-3,0-5.5,2.5-5.5,5.5v13.1v1.7v2.5c0,3,2.5,5.5,5.5,5.5h13.4l4.6,5.5 		c0.1,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3-0.1c0.3-0.1,0.5-0.4,0.5-0.8v-4.9h1.2c3,0,5.5-2.5,5.5-5.5v-17.2c0-3-2.5-5.5-5.5-5.5 		h-2.5L189,409.7L189,409.7z M196.9,432.4c0,2.1-1.7,3.9-3.9,3.9h-1.9c-0.4,0-0.8,0.4-0.8,0.8v3.5l-3.4-4c-0.1-0.2-0.4-0.3-0.7-0.3 		h-13.8c-2.1,0-3.9-1.7-3.9-3.9v-2.5v-1.7v-13.1c0-2.1,1.7-3.9,3.9-3.9H189h1.7h2.5c2.1,0,3.9,1.7,3.9,3.9L196.9,432.4L196.9,432.4z 	"
             />
          <path id='chat-bubble__question-mark' className='will-animate' fill="#34C8F2" d="M181.5,428.5c0-1.1,0.1-1.9,0.3-2.5c0.2-0.6,0.7-1.2,1.5-2c0.3-0.4,0.6-0.7,0.9-1c0.4-0.5,0.7-0.9,0.9-1.4 		c0.2-0.4,0.3-0.9,0.3-1.6c0-0.7-0.1-1.3-0.5-1.9c-0.4-0.6-0.9-0.9-1.7-0.9c-1.2,0-1.9,0.4-2.3,1.2c-0.2,0.4-0.3,0.7-0.4,1.2 		s-0.1,0.9-0.1,1.4h-1.8c-0.1-1.4,0.3-2.6,0.9-3.6c0.7-1,1.8-1.5,3.4-1.6c1.4,0,2.5,0.4,3.2,1.1c0.8,0.7,1.2,1.7,1.2,3.1 		c0,0.7-0.1,1.3-0.3,1.8s-0.4,1-0.8,1.4c-0.3,0.4-0.7,0.8-1.1,1.2s-0.8,0.9-1.2,1.5c-0.1,0.2-0.3,0.5-0.4,0.7 		c-0.1,0.6-0.1,1.2-0.1,1.9C183.4,428.5,181.5,428.5,181.5,428.5z M181.5,432.3v-2.2h2v2.2H181.5z" />
      </g>
    );
  }
}

class HipChat extends React.Component {
  render() {
    return (
      <g id="hipchat">
          <path id="hipchat__smile" fill="#34C8F2" d="M376.7,402.7c0-0.1-0.1-0.2-0.2-0.2c-0.1,0-0.1,0-0.1,0.1c-0.7,0.6-1.7,1.1-3.1,1.1l0,0 			c-1.3,0-2.3-0.5-3.1-1.1c-0.1,0-0.1-0.1-0.1-0.1c-0.1,0-0.2,0.1-0.2,0.3c0,0.1,0.1,0.2,0.1,0.3c0.4,0.6,1.5,1.5,3.3,1.5l0,0 			c1.7,0,2.9-0.9,3.3-1.5C376.6,403,376.7,402.8,376.7,402.7z" />
          <path id="hipchat__chat" fill="#34C8F2" d="M378.4,407.1c-0.4-0.2-0.9-0.7-1.1-1.2c-0.1-0.1,0-0.2,0.1-0.3c1.3-1,2.1-2.5,2.1-4.1c0-3-2.8-5.5-6.3-5.5 			c-3.5,0-6.3,2.5-6.3,5.5s2.8,5.5,6.3,5.5c0.4,0,0.9-0.1,1.3-0.1c0.1,0,0.2,0,0.3,0.1c0.9,0.5,2.2,0.9,3.3,0.9 			c0.4,0,0.5-0.2,0.5-0.4C378.7,407.3,378.6,407.2,378.4,407.1z M376.8,406.5L376.8,406.5c0,0.1,0,0.1-0.1,0.1 			c-0.3,0-1.3-0.5-1.8-0.9c-0.1-0.1-0.1-0.1-0.3-0.1c-0.4,0.1-0.9,0.1-1.3,0.1c-2.9,0-5.2-2-5.2-4.4c0-2.4,2.3-4.4,5.2-4.4 			s5.2,2,5.2,4.4c0,1.5-0.9,2.7-2.1,3.5c-0.1,0.1-0.1,0.1-0.1,0.3C376.2,405.5,376.5,406.2,376.8,406.5z" />
          <path fill="#34C8F2" d="M403.2,398.4c0.6,0,1.4,0.1,2.1,0.2c0.1,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.1l0.1-1.2 			c0-0.1-0.1-0.2-0.2-0.3c-0.7-0.1-1.6-0.3-2.4-0.3c-2.3,0-3.4,0.9-3.4,2.8v4.2c0,1.9,1.2,2.8,3.4,2.8c0.8,0,1.7-0.1,2.4-0.3 			c0.1,0,0.2-0.1,0.2-0.3l-0.1-1.2c0-0.1-0.1-0.1-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.1c-0.7,0.1-1.5,0.2-2.1,0.2 			c-1.1,0-1.5-0.4-1.5-1.3v-3.6C401.6,398.8,402.1,398.4,403.2,398.4" />
          <path fill="#34C8F2" d="M388.3,396.7h-1.5c-0.1,0-0.2,0.1-0.2,0.2v3.6h-3.3v-3.6c0-0.1-0.1-0.2-0.2-0.2h-1.5 			c-0.1,0-0.2,0.1-0.2,0.2v9c0,0.1,0.1,0.2,0.2,0.2h1.5c0.1,0,0.2-0.1,0.2-0.2v-3.7h3.3v3.7c0,0.1,0.1,0.2,0.2,0.2h1.5 			c0.1,0,0.2-0.1,0.2-0.2v-9C388.5,396.9,388.5,396.7,388.3,396.7" />
          <path fill="#34C8F2" d="M415.9,399.1c-0.7,0-1.6,0.1-2.3,0.3c-0.1,0-0.2,0.1-0.1,0.3l0.1,1c0,0.1,0.1,0.1,0.1,0.1 			c0.1,0.1,0.1,0.1,0.2,0.1c0.6-0.1,1.2-0.1,1.7-0.1c1,0,1.2,0.2,1.2,0.9v0.6h-1.5c-1.5,0-2.1,0.6 -2.1,2c0,1.4,0.7,2.1,1.9,2.1 			c0.7,0,1.4-0.2,2-0.5l0.1,0.2c0,0.1,0.1,0.1,0.2,0.1h1.2c0.1,0,0.2-0.1,0.2-0.2v-4.4C418.8,399.8,418,399.1,415.9,399.1 			 M416.8,403.7v0.9c-0.2,0.1-0.7,0.3-1.2,0.3c-0.4,0-0.6-0.1-0.6-0.6s0.1-0.6,0.6-0.6L416.8,403.7L416.8,403.7z" />
          <path fill="#34C8F2" d="M423.7,404.9c0-0.1-0.1-0.1-0.1-0.1c-0.1-0.1-0.1-0.1-0.2,0c-0.2,0.1-0.5,0.1-0.7,0.1 			c-0.4,0-0.5-0.1-0.5-0.5v-3.5h1.4c0.1,0,0.2-0.1,0.2-0.2v-1.1c0-0.1-0.1-0.2-0.2-0.2h-1.4v-1.7c0-0.1,0-0.1-0.1-0.2 			c-0.1-0.1-0.1-0.1-0.2-0.1l-1.5,0.2c-0.1,0-0.2,0.1-0.2,0.2v1.5h-0.8c-0.1,0-0.2,0.1-0.2,0.2v1.1c0,0.1,0.1,0.2,0.2,0.2h0.8v3.7 			c0,1.2,0.7,1.9,2,1.9c0.4,0,1-0.1,1.5-0.2c0.1-0.1,0.1-0.1,0.1-0.3L423.7,404.9z" />
          <path fill="#34C8F2" d="M391.5,399.3H390c-0.1,0-0.2,0.1-0.2,0.2v6.5c0,0.1,0.1,0.2,0.2,0.2h1.5c0.1,0,0.2-0.1,0.2-0.2v-6.5 			C391.7,399.3,391.5,399.3,391.5,399.3" />
          <path fill="#34C8F2" d="M391.5,396.5H390c-0.1,0-0.2,0.1-0.2,0.2v1.4c0,0.1,0.1,0.2,0.2,0.2h1.5c0.1,0,0.2-0.1,0.2-0.2v-1.4 			C391.7,396.6,391.5,396.5,391.5,396.5" />
          <path fill="#34C8F2" d="M391.5,399.3H390c-0.1,0-0.2,0.1-0.2,0.2v6.5c0,0.1,0.1,0.2,0.2,0.2h1.5c0.1,0,0.2-0.1,0.2-0.2v-6.5 			C391.7,399.3,391.5,399.3,391.5,399.3" />
          <path fill="#34C8F2" d="M396.5,399.1c-0.7,0-1.5,0.2-2.1,0.7l-0.1-0.4c0-0.1-0.1-0.1-0.2-0.1H393c-0.1,0-0.2,0.1-0.2,0.2v9.3 			c0,0.1,0.1,0.2,0.2,0.2h1.5c0.1,0,0.2-0.1,0.2-0.2v-2.5c0.6,0.1,1.2,0.1,1.7,0.1c1.5,0,2.3-0.9,2.3-2.5v-2.3 			C398.7,399.6,397.5,399.1,396.5,399.1 M396.8,401.5v2.4c0,0.6-0.2,0.8-0.7,0.8s-1.1-0.1-1.4-0.1v-3.3c0.3-0.3,0.9-0.6,1.5-0.6 			C396.6,400.8,396.8,401,396.8,401.5" />
          <path fill="#34C8F2" d="M410.9,399.1c-0.7,0-1.6,0.2-2.4,0.6v-3c0-0.1-0.1-0.2-0.2-0.2h-1.5c-0.1,0-0.2,0.1-0.2,0.2v9.3 			c0,0.1,0.1,0.2,0.2,0.2h1.5c0.1,0,0.2-0.1,0.2-0.2v-4.5c0.5-0.3,1.2-0.5,1.7-0.5c0.3,0,0.4,0.1,0.4,0.4v4.6c0,0.1,0.1,0.2,0.2,0.2 			h1.5c0.1,0,0.2-0.1,0.2-0.2v-4.8C412.5,399.8,411.9,399.1,410.9,399.1" />
      </g>
    );
  }
}

export default StoryBoard;