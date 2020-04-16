import React from 'react';
import { connect } from 'react-redux';

const BtnPressActionCreator = () => {
    
    return { type:'NEW_QUOTE'}
} 


const Dashboard = (props) => {
    document.getElementsByTagName('body')[0].style.backgroundColor = props.color;
    document.getElementsByTagName('body')[0].style.color = props.color;
    return(
        <div id='quote-box' className={props.class}>
            <p id='text'> {props.quote.quote} </p>
            <span id='author'> - {props.quote.author}</span>
            <div>
                <button id='new-quote' onClick={() => props.newquote()} style={{backgroundColor: props.color}}> New Quote </button>

                <a id="tweet-quote" href='https://twitter.com/intent/tweet?' className='btn'>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>

                <a href='https://www.tumblr.com/widgets/share/tool?' className='btn'>
                    <i className="fa fa-tumblr" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );

}

const mapStateToProps = ( state ) => {
    return {
        quote: state.quote,
        color: state.color,
        class: state.className
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        newquote: () => { dispatch(BtnPressActionCreator())}
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
