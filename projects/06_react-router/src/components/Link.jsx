import { BUTTONS, EVENTS } from "../constants";

function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === BUTTONS.primary;
    const isManageableEvent = !target || target === "_self";
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      e.preventDefault();
      navigate(to);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
