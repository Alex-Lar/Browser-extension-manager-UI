export async function populateParentElement(
	filepath,
	getParent,
	renderFn
) {
	const response = await fetch(filepath);
	if (!response.ok)
		throw new Error(`Fetch error: cannot fetch json data '${filepath}'`);

	const data = await response.json();
	const parent = getParent();

	if (!data)
		throw new Error(`Populate error: missing data in file at '${filepath}'`);
	if (!parent) throw new Error("Error: missing parent element");

	renderFn(parent, data);
}
