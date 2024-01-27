import anime from "animejs";

type MoveCardAnimation = (
	direction: "left" | "right",
	distance?: number,
	cardsAnimationState?: number[],
) => void;

export const moveCardsAnimation: MoveCardAnimation = (
	direction,
	distance = 500,
	cardsAnimationState = [],
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
					direction === "right"
						? cardsAnimationState[i] + distance
						: cardsAnimationState[i] - distance;
				cardsAnimationState[i] = nextTranslation;
				return nextTranslation;
			}
		},
		duration: 1000,
		scale: function (el: HTMLElement, i: number, length: number) {
			const isFirstAnimation = cardsAnimationState.length === 0;
			// if(isFirstAnimation) return
			const closestElementIndex = cardsAnimationState.findIndex(
				(val) => val === 0,
			);
			const distanceFromCenter = Math.abs(closestElementIndex - i);
			// Always show the closest in front of the rest
			el.style.zIndex = String(length - distanceFromCenter);
			const scaleDownWhenFurtherFromCenter =
				1 - distanceFromCenter / length;
			return scaleDownWhenFurtherFromCenter;
		},
		delay: anime.stagger(50),
		easing: "spring",
	});
};
