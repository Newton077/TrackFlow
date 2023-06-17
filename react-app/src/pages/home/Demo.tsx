import { useEffect } from "react";

function Demo() {
  return (<div>
    <h4>Demo page</h4>
  </div>);
}

function SupplyChain() {
  useEffect(() => {
    document.body.classList.add('redbody');
  })
  return (<div>
    <h3>DemoChildren page</h3>
  </div>);
}

export { Demo, SupplyChain };
