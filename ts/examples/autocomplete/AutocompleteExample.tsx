import * as React from 'react';
import Autocomplete from 'lib/components/AutocompleteSelect';
import {List, fromJS} from 'immutable';

interface Props {
}

const dummy = [{
    'id': 1, 
    'text': 'Option1',
    'active': true
   }, {
    'id': 2,
    'text': 'Option2',
    'active': false
   }, {
    'id': 3,
    'text': 'Option3',
    'active': false
   }];

class AutocompleteExample extends React.Component<Props, any> {
	constructor(props: any) {
		super(props);
    }

	render() {
        const values = fromJS(dummy);
		return (
			<div>
                 <Autocomplete save={() => {}} label='test' values={values}/>
            </div>
		);
	}
}

export default AutocompleteExample;


