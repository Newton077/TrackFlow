import { useEffect } from "react";
import { Outlet } from "react-router-dom";


function CustomLayout() {
  useEffect(() => {
    document.body.classList.add('cont-background');
  })

  return (<div>
    <h3>Demo page</h3>
    <Outlet />
  </div>);
}

export { CustomLayout };
