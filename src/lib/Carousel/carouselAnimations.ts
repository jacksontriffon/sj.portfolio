import anime from "animejs";

type MoveCardAnimation = (
	direction: "left" | "right",
	closestElementIndex: number,
	cardsAnimationState?: number[],
	distance?: number,
) => void;

export const moveCardsAnimation: MoveCardAnimation = (
	direction,
	closestElementIndex,
	cardsAnimationState = [],
	distance = 600,
) => {
	anime({
		targets: ".card",
		translateX: function (_el: HTMLElement, i: number, _length: number) {
			const isFirstAnimation = cardsAnimationState.length < i + 1;
			if (isFirstAnimation) {
				const firstTranslation =
					direction === "right" ? i * distance : -i * distance;
				cardsAnimationState[i] = firstTranslation;
				return firstTranslation;
			} else {
				// Already animated
				const nextTranslation =
					direction === "left"
						? cardsAnimationState[i] + distance
						: cardsAnimationState[i] - distance;
				cardsAnimationState[i] = nextTranslation;
				return nextTranslation;
			}
		},
		duration: 1000,
		scale: function (el: HTMLElement, i: number, length: number) {
			const distanceFromCenter = Math.abs(closestElementIndex - i);
			// Always show the closest in front of the rest
			el.style.zIndex = String(length - distanceFromCenter);
			const scaleDownWhenFurtherFromCenter =
				1 - distanceFromCenter / length;
			return scaleDownWhenFurtherFromCenter;
		},
		easing: "spring",
	});
};

export const initAnimation = () => {
	anime({
		targets: ".card",
		easing: "spring",
		autoplay: true,
		translateX: function (_el: HTMLElement, i: number, _length: number) {
			const distance = 600;
			return i * distance;
		},
		duration: 0,
		scale: function (el: HTMLElement, i: number, length: number) {
			const distanceFromCenter = i;
			// Always show the closest in front of the rest
			el.style.zIndex = String(length - distanceFromCenter);
			const scaleDownWhenFurtherFromCenter =
				1 - distanceFromCenter / length;
			return scaleDownWhenFurtherFromCenter;
		},
	});
};
