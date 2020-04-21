export default (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_ITEMS':
			//console.log("Reducer for fetch items");
			//console.log(action);
			return Object.assign({}, state, {
				items: action.items,
				timeout: action.timeout
			});
		case 'TIMEOUT':
			//console.log("Timeout while fetching items");
			//console.log(action);
			return Object.assign({}, state, {
				items: action.items,
				timeout: action.timeout
			});
		default:
			return state
		}
	}	