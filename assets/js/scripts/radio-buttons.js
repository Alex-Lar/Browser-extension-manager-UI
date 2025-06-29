/**
 * @param {Element} component
 */
export function toggleActiveClass(component) {
	const { children } = component;
	const activeClass = "active";

	for (let element of children) {
		element.addEventListener("click", (event) => {
			if (event.target == null) {
				console.error("Event Target is missing!");
				return;
			}

			[...children].forEach((el) => {
				const radioBtn = el.querySelector('input[type="radio"]');

				radioBtn.removeAttribute("checked");
				el.classList.remove(activeClass);
				el.setAttribute("aria-checked", "false");
			});
			const parent = event.target.parentElement;

			const radioBtn = parent.querySelector('input[type="radio"]');

			radioBtn.setAttribute("checked", "key");
			event.target.parentElement.classList.add(activeClass);
			event.target.parentElement.setAttribute("aria-checked", "true");

			event.preventDefault();
		});
	}
}
