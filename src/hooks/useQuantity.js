import { useState } from 'react';

export function useQuantity(defaultQty) {
	const [value, setValue] = useState(defaultQty || 1);

	function onChange(e) {
		if (!(+e.target.value >= 1)) {
			setValue(1);
			return;
    }
    setValue(+e.target.value);
	}

	return {
		value,
		setValue,
		onChange,
	};
}
