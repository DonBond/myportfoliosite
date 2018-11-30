import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class ExamsPassed extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.ExamMessage}</p>
                </Cell >
                <Cell col={6}>
                    <h4 style={{marginTop:'0px'}}>{this.props.Examhead}</h4>
                    <p>{this.props.Exam1}</p>
                    <p>{this.props.Exam2}</p>
                    <p>{this.props.Exam3}</p>
                    <p>{this.props.Exam4}</p>
                </Cell>
            </Grid>
        )
    }
}

export default ExamsPassed;