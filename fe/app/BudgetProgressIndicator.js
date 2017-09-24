import React from "react";

export default class BudgetProgressIndicator extends React.Component {

  constructor() {
    super();
    // Placing
    this.state ={
      curAmountShowing: false,

    }
  }

  mouseOut() {
    this.setState({curAmountShowing: false});
  }

  mouseIn() {
    this.setState({curAmountShowing: true});
  }

  getProgressBarWidth() {
    let percent = this.props.used / this.props.total;
    return (percent * 100) + "%";
  }

  render() {
    let budgetProcessIndicatorStyle = {
      maxWidth: '700px',
      paddingTop: '25px'
    };

    let budgetNameStyle = {
      fontSize: '20px'
    };

    let progressStyle = {
      width: '400px',
      marginBottom: '0'
    };

    let progressBarStyle = {
      width: this.getProgressBarWidth(),
      cursor: 'pointer',
      backgroundColor: this.props.color
    };

    let progressWrapperStyle = {
      display: 'flex',
      alignItems: 'center'
    };

    let totalAmountStyle = {
      fontSize: '15px',
      paddingLeft: '3px'
    };

    let curAmountStyle = {
      display: this.state.curAmountShowing ? 'inline-block' : 'none',
      zIndex: '-1'
    };

    console.log("renderings");
    return (
      <div className='budget-progress-indicator' style={budgetProcessIndicatorStyle}>
        <div className='budget-name' style={budgetNameStyle}>{this.props.name}</div>
        <div className='progress-wrapper' style={progressWrapperStyle}>
          <div className="progress" style={progressStyle}>
            <div key="blah" className="progress-bar" role="progressbar" style={progressBarStyle}
                  onMouseOver={this.mouseIn.bind(this)}
                  onMouseOut={this.mouseOut.bind(this)}>
              <span className="curAmount" style={curAmountStyle}>${this.props.used}</span>
            </div>
          </div>
          <div className="totalAmount" style={totalAmountStyle}>${this.props.total}</div>
        </div>
      </div>
    );
  }
}