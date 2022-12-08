export function getData1(){
	let data=[];
		data.push({
			name: 'Contingency %', amount1: '25%', amount2: '20%', amount3: '20%', editable: false, highlightData: false,
		});
		data.push({
			name: 'Demo %', amount1: '', amount2: '', amount3: '', highlightData: false, hasDoubleBorder: true,
		});
		data.push({
			name: '', amount1: '', amount2: '', amount3: '',
		});
		data.push({
			name: 'Base Amt', amount1: '$ 10,000', amount2: '$ 20,000', amount3: '$ 25,000', highlightData: true
		});
		data.push({
			name: 'COLA Pass Amt ', amount1: '', amount2: '', amount3: '', highlightData: false,
		});
		data.push({
			name: 'Contingency Amt', amount1: '', amount2: '', amount3: '', highlightData: false,
		});
		data.push({
			name: 'Adjusted Amt', amount1: '', amount2: '', amount3: '', highlightAndDoubleBorder: true,
		});
		data.push({
			name: 'Disc Amt', amount1: '', amount2: '', amount3: '', highlightData: false,
		});
		data.push({
			name: 'Quoted Amt', amount1: '', amount2: '', amount3: '', highlightData: true,
		});
		data.push({
			name: 'Total Base Cost', amount1: '', amount2: '', amount3: '', highlightData: true,
		});
		data.push({
			name: 'COLA Cost Adj', amount1: '', amount2: '', amount3: '', highlightData: false,
		});
		data.push({
			name: 'Margin %', amount1: '', amount2: '  ', amount3: '', highlightAndDoubleBorder: true,
		});
		return data;
	}