import { useState } from 'react'

const useModel = () => {
	const [isShowing, setIsShowing] = useState(false);

	function toggle() {
		setIsShowing(!isShowing)
	}

	return {
		isShowing,
		toggle,
	}
}

export default useModel