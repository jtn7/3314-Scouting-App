export function longpress(node, threshold = 500) {
	const handle_touchstart = () => {
		let start = Date.now();
		
		const timeout = setTimeout(() => {
			node.dispatchEvent(new CustomEvent('longpress'));
		}, threshold);
		
		const cancel = () => {
			clearTimeout(timeout);
			node.removeEventListener('touchend', cancel);
			node.removeEventListener('touchmove', cancel);
		};
		
		node.addEventListener('touchend', cancel);
		node.addEventListener('touchmove', cancel);
	}
	
	node.addEventListener('touchstart', handle_touchstart);
	
	return {
		destroy() {
			node.removeEventListener('touchstart', handle_touchstart);
		}
	};
}