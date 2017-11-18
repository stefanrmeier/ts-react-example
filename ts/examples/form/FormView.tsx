import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { SelectField, OptionFormat } from 'lib/components/form/SelectField';
import { TextField } from 'lib/components/form/TextField';
import { RadioField, ValueFormat} from 'lib/components/form/RadioField'

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
                <form onSubmit={handleSubmit} noValidate>
                    {error && <p className="alert alert-danger" style={{ padding: 15 }}>Some errors have occured. Please check the fields bellow.</p>}
                    {success && <p className="alert alert-success" style={{ padding: 15 }}>Saved successfully.</p>}
                    <TextField
                        label="Name"
                        name="name"
                        type="text"
                        className="form-control input-sm"
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
                        className="form-control input-sm"
                        placeholder="(eg. 1984-12-30)"
                        required={true}
                        error={{
                            isError: error && error.hasOwnProperty('birthdate'),
                            message: error && error.hasOwnProperty('birthdate') && error.birthdate
                        }}
                    />
                    <TextField
                        label="E-Mail"
                        type="email"
                        name="email"
                        className="form-control input-sm"
                        placeholder="(eg. akiko.takeda@email.com)"
                        required={true}
                        error={{
                            isError: error && error.hasOwnProperty('email'),
                            message: error && error.hasOwnProperty('email') && error.email
                        }}
                    />
                    <RadioField
                        label="Gender"
                        name="gender"
                        className="form-check form-check-inline checkbox-inline-fix"
                        values={[{value: 'f', label: 'F'}, {value: 'm', label: 'M'}]}
                        required={true}
                        error={{
                            isError: error && error.hasOwnProperty('gender'),
                            message: error && error.hasOwnProperty('gender') && error.name
                        }}
                    />
                    <TextField
                        label="Phone"
                        type="text"
                        name="phone"
                        className="form-control input-sm"
                        placeholder="(eg. +81-80111111)"
                        helpText="Number format: +CountryCode-XXXXX (e.g. +1-6507668756)"
                        required={true}
                        error={{
                            isError: error && error.hasOwnProperty('phone'),
                            message: error && error.hasOwnProperty('phone') && error.phone
                        }}
                    />
                    <SelectField
                        required={true}
                        name='nationality'
                        options={countries}
                        placeholder='Select or type...'
                        label="Nationality"
                        className="form-control input-sm"
                        multi={false}
                        error={{
                            isError: error && error.hasOwnProperty('nationality'),
                            message: error && error.hasOwnProperty('nationality') && error.nationality
                        }}
                    />
                    <SelectField
                        required={true}
                        name='holidayDestinations'
                        options={countries}
                        placeholder='Select or type...'
                        multi={true}
                        label="Preferred holiday destionations"
                        className="form-control input-sm"
                        helpText="Multiple destinations possible"
                        error={{
                            isError: error && error.hasOwnProperty('holidayDestinations'),
                            message: error && error.hasOwnProperty('holidayDestinations') && error.holidayDestinations
                        }}
                    />
                    <div className="form-group">
                        <button onClick={submit} disabled={submitting || pristine} className="btn btn-sm btn-primary pull-right">Save</button>
                    </div>
                </form>
                {/** Don't put into the form, otherwhise it will trigger submit after initialization */}
                <button onClick={resetForm} className="btn btn-sm btn-secondary" style={{marginRight: 15}}>Reset form</button>
                <button onClick={initForm} className="btn btn-sm btn-secondary">Init form</button>
            </div>
        );
    }
}

export default reduxForm({
    form: 'Form'
})<any>(FormView);


