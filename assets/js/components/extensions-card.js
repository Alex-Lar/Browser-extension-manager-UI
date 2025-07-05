function createCardComponent({ logo, name, description, isActive }) {
	const card = document.createElement("article");
	card.classList.add("extensions__card");

	card.innerHTML = `
						<section class="extensions__card-content">
							<img src="${logo}" />
							<div class="extensions__text-group">
								<h2>${name}</h2>
								<p>${description}</p>
							</div>
						</section>
						<div class="extensions__card-control">
							<button>Remove</button>
							<div class="custom-checkbox">
								<input 
                  type="checkbox" 
                  name="${name}" 
                  id="${name}" 
                  ${isActive ? "checked" : ""}/>
								<label for="${name}"></label>
							</div>
						</div>`;

	return card;
}

/**
 * @param {Element} container
 * @param {Array<{ logo: string, name: string, description: string, isActive: boolean }>} cardData
 */
export function renderCards(container, cardData) {
	cardData
		.map((data) => createCardComponent(data))
		.forEach((card) => container.appendChild(card));
}
