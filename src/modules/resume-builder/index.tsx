import React from 'react';
import { IResumeBuilder } from './interface';
import { RouteProps } from 'react-router-dom';
import '../../assets/styles/ResumeBuilder.scss';

type ResumeBuilderState = IResumeBuilder;

class ResumeBuilder extends React.Component<RouteProps, ResumeBuilderState> {
    constructor(props) {
        super(props);
        this.state = {
            personal: {
                first_name: '',
                last_name: '',
                location: '',
            },
            educations: null,
            experiences: null,
        }
    }
    render() {
        return (
            <div className="builder">
                
            </div>
        );
    }
}

export default ResumeBuilder;
