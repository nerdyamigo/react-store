import React from 'react';

class AdsdFishForm extends React.Component {
	render () {
		return (
			<form className="fish-edit">
			<input type="text" placeholder="Fish Name" />
			<input type="text" placeholder="Fish Price" />
			 <select>
				<option value="available">Fresh!</option>
				<option value="unavailable">Sold Out!</option>
			 </select>
			<textarea placeholder="Fish Des"></textarea>
		    <input type="text" placeholder="Fish Image"/>
			<button type="submit">+ Add Item</button>
			
			</form>
		)
	}
}

export default AdsdFishForm;