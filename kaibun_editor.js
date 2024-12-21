"use strict";

window.addEventListener("DOMContentLoaded", () => {
	const inputArea = document.getElementById("inputArea");
	const includeLastCheck = document.getElementById("includeLastCheck");
	const resultArea = document.getElementById("resultArea");

	const segment = (() => {
		try {
			const segmenter = new Intl.Segmenter();
			return (str) => Array.from(segmenter.segment(str)).map((s) => s.segment);
		} catch {
			return Array.from;
		}
	})();

	const updateResult = () => {
		const inputStr = inputArea.value;
		const inputArray = segment(inputStr);
		const inputArrayReverse = inputArray.concat().reverse();
		if (!includeLastCheck.checked) inputArray.pop();
		resultArea.textContent = inputArray.join("") + inputArrayReverse.join("");
	};
	inputArea.addEventListener("input", updateResult);
	includeLastCheck.addEventListener("change", updateResult);
	updateResult();
});
