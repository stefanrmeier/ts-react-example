import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { SelectFormField, SelectFormFieldFormat } from 'lib/components/SelectFormField';

interface Props {
    countries: SelectFormFieldFormat
    onSubmit: any;
    submit: any;
    success: boolean;
    initForm: () => void;
    resetForm: () => void;

    //redux-form properties
    handleSubmit?: any;
    pristine?: any;
    submitting?: any;
    error?: string;
}

class FormView extends React.Component<Props, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { countries, submit, initForm, resetForm, error, success, handleSubmit, pristine, submitting } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    {error && <p className="bg-danger" style={{ padding: 15 }}>{error}</p>}
                    {success && <p className="bg-success" style={{ padding: 15 }}>Saved successfully.</p>}
                    <div className="form-group required">
                        <label className="control-label" htmlFor="name">Name</label>
                        <Field component="input" type="text" required={true} name="name" className="form-control form-control input-sm" placeholder="(eg. Akiko Takeda)" />
                    </div>
                    <div className="form-group required">
                        <label className="control-label" htmlFor="birthDate">Birthdate</label>
                        <Field component="input" type="date" required={true} name="birthDate" className="form-control form-control input-sm" placeholder="(eg. 1984-12-30)" />
                    </div>
                    <div className="form-group required">
                        <label className="control-label" htmlFor="email">Email</label>
                        <Field component="input" type="email" required={true} name="email" className="form-control form-control input-sm" placeholder="(eg. akiko.takeda@email.com)" />
                    </div>

                    <div className="form-group required">
                        <label className="control-label" htmlFor="phone">Phone</label>
                        <Field component="input" type="text" required={true} name="phone" className="form-control form-control input-sm" placeholder="(eg. +81-80111111)" />
                        <span className="help-block">Number format: +CountryCode-XXXXX (e.g. +1-6507668756)</span>
                    </div>
                    <div className="form-group required">
                        <label className="control-label" htmlFor="nationality">Nationality</label>
                        <Field
                            required={true}
                            name='nationality'
                            options={countries}
                            component={SelectFormField}
                            placeholder='Select or type...'
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="holidayDestinations">Preferred holiday destionations</label>
                        <Field
                            required={true}
                            name='holidayDestinations'
                            options={countries}
                            component={SelectFormField}
                            joinValues={true}
                            delimiter={','}
                            placeholder='Select or type...'
                            multi={true}
                        />
                        <span className="help-block">Multiple destinations possible</span>
                    </div>
                    <div className="form-group">
                        <button onClick={initForm} className="btn btn-sm btn-default">Init form</button>
                        <button onClick={resetForm} className="btn btn-sm btn-default">Reset form</button>
                        <button onClick={submit} disabled={submitting} className="btn btn-sm btn-primary pull-right">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'Form',
    onSubmitSuccess: (result, dispatch, props) => {
        console.log('result');
        console.log(result);
        console.log('dispatch');
        console.log(dispatch);
        console.log('props');
        console.log(props);
        //this.props.reset(this.props.navigation.key)
    }
})<any>(FormView);


