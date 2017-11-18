import * as React from 'react';

class Layout extends React.Component<any, any> {
	constructor(props:any) {
		super(props);
	}
	
	render() {
		return (
			<div style={{ minWidth: '100%' }}>
					{ this.props.children  }
			</div>
		);
	}
}

export default Layout;
