import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { SelectField, OptionFormat } from 'lib/components/form/SelectField';
import { TextField } from 'lib/components/form/TextField';

interface Props {
    countries: Array<OptionFormat>
    onSubmit: any;
    submit: any;
    success: boolean;
    initForm: () => void;
    resetForm: () => void;

    //redux-form properties
    handleSubmit?: any;
    pristine?: any;
    submitting?: any;
    error?: any;
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
                    {error && <p className="bg-danger" style={{ padding: 15 }}>Some errors have occured. Please check the fields bellow.</p>}
                    {success && <p className="bg-success" style={{ padding: 15 }}>Saved successfully.</p>}
                    <TextField
                        label="Name"
                        name="name"
                        type="text"
                        className="form-control form-control input-sm"
                        placeholder="(eg. Akiko Takeda)"
                        required={true}
                        error={{
                            isError: error && error.hasOwnProperty('name'),
                            message: error && error.hasOwnProperty('name') && error.name
                        }}
                    />
                    <TextField
                        label="Birthdate"
                        type="date"
                        name="birthdate"
                        className="form-control form-control input-sm"
                        placeholder="(eg. 1984-12-30)"
                        required={true}
                        error={{
                            isError: error && error.hasOwnProperty('birthDate'),
                            message: error && error.hasOwnProperty('birthDate') && error.name
                        }}
                    />
                    <TextField
                        label="E-Mail"
                        type="email"
                        name="email"
                        className="form-control form-control input-sm"
                        placeholder="(eg. akiko.takeda@email.com)"
                        required={true}
                        error={{
                            isError: error && error.hasOwnProperty('email'),
                            message: error && error.hasOwnProperty('email') && error.name
                        }}
                    />
                    <TextField
                        label="Phone"
                        type="text"
                        name="phone"
                        className="form-control form-control input-sm"
                        placeholder="(eg. +81-80111111)"
                        helpText="Number format: +CountryCode-XXXXX (e.g. +1-6507668756)"
                        required={true}
                        error={{
                            isError: error && error.hasOwnProperty('phone'),
                            message: error && error.hasOwnProperty('phone') && error.name
                        }}
                    />
                    <SelectField
                        required={true}
                        name='nationality'
                        options={countries}
                        placeholder='Select or type...'
                        label="Nationality"
                        className="form-control form-control input-sm"
                        multi={false}
                        error={{
                            isError: error && error.hasOwnProperty('nationality'),
                            message: error && error.hasOwnProperty('nationality') && error.name
                        }}
                    />
                    <SelectField
                        required={true}
                        name='holidayDestinations'
                        options={countries}
                        placeholder='Select or type...'
                        multi={true}
                        label="Preferred holiday destionations"
                        className="form-control form-control input-sm"
                        helpText="Multiple destinations possible"
                        error={{
                            isError: error && error.hasOwnProperty('holidayDestinations'),
                            message: error && error.hasOwnProperty('holidayDestinations') && error.name
                        }}
                    />
                    <div className="form-group">
                        <button onClick={resetForm} className="btn btn-sm btn-default">Reset form</button>
                        <button onClick={submit} disabled={submitting} className="btn btn-sm btn-primary pull-right">Save</button>
                    </div>
                </form>
                {/** Don't put into the form, otherwhise it will trigger submit after initialization */}
                <button onClick={initForm} className="btn btn-sm btn-default">Init form</button>
            </div>
        );
    }
}

export default reduxForm({
    form: 'Form'
})<any>(FormView);


