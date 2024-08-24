export const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = - window.innerHeight * 0.15;
    window.scrollTo({top: yCoordinate + yOffset, behavior: 'smooth'});
}