/**
 * @param {Element} component
 */
export function toggleActiveClass(component) {
	const { children } = component;
	const activeClass = "active";

	for (let element of children) {
		element.addEventListener("click", (e) => {
			if (e.target == null) {
				console.error("Event Target is missing!");
				return;
			}

			[...children].forEach((el) => {
				el.classList.remove(activeClass);
			});

			e.target.parentElement.classList.add(activeClass);

			e.preventDefault();
		});
	}
}
