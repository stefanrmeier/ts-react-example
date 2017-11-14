import * as React from 'react';
import { connect } from 'react-redux';
import { SubmissionError, submit, reset, initialize } from 'redux-form'
import { SelectFormFieldFormat } from 'lib/components/SelectFormField';

import { Countries } from './DummyData';

import FormView from './FormView'

interface Props extends React.Props<any> {
    //from redux
    submitForm?: (formName: string) => void;
    resetForm?: (formName: string) => void;
    updateForm?: (formName: string, data: FormData) => void;
}

interface State {
    success: boolean;
}

interface FormData {
    name: string;
    birthDate: string;
    email: string;
    phone: string;
    nationality: string;
    holidayDestinations: string;
}

class FormController extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            success: false
        }
    }

    initForm = () => {
        const formData: FormData = {
            name: 'FirstName LastName',
            birthDate: '1990-10-01',
            email: 'test@test.com',
            phone: '+81-8055554444',
            nationality: 'JPN',
            holidayDestinations: 'CHN,IND'
        }

        this.props.updateForm("Form", formData);
    }

    resetForm = () => {
        const formData: FormData = {
            name: null,
            birthDate: null,
            email: null,
            phone: null,
            nationality: null,
            holidayDestinations: null
        }
        //Ñeeds only to be used if form has been initialized previously
        this.props.updateForm("Form", formData);
        this.props.resetForm("Form");
    }

    handleSubmit = (values: FormData) => {
        //Simulate call to server
        const serverPromise = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve();
            }, 250);
        })

        //Promise for redux-form
        const formPromise = new Promise((resolve, reject) => {
            serverPromise.then(() => {
                this.setState({
                    success: true
                })
                resolve('success'); //trigger onSubmitSuccess on the form
            }).catch((error: any) => {
                reject(new SubmissionError({ _error: error })); //trigger onSubmitFail on the form
            });
        });

        return formPromise;
    }
    submitForm = () => {
        this.props.submitForm('Form');
    }
    render() {
        const countries: any = Countries.map((v: any) => {
            return { key: v.id, id: v.id, value: v.id, label: v.label };
        });

        return (
            <FormView
                countries={countries}
                success={this.state.success}
                onSubmit={this.handleSubmit}
                submit={this.submitForm}
                initForm={this.initForm}
                resetForm={this.resetForm} />
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        submitForm: (formName: string) => dispatch(submit(formName)),
        resetForm: (formName: string) => dispatch(reset(formName)),
        updateForm: (formName: string, data: FormData) => dispatch(initialize(formName, data, false)),
    };
};

export default connect<any, any, any>(() => { return {} }, mapDispatchToProps)(FormController);
