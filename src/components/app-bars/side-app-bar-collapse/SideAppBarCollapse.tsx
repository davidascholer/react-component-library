/*In same folder, there is a version for SideAppbarCollapseRedux*/
import { useState, useLayoutEffect, useEffect } from "react";
import TopAppBar from "./TopAppBar";
import AppDrawer from "./AppDrawer";

const orientation: "vertical" | "horizontal" = "vertical";

export default function SideAppBarCollapse() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ratioOver3to2 = size.height / size.width >= 1.5;
  const [appDrawerOpen, setAppDrawerOpen] = useState<boolean>(false);
  const toggleAppDrawer = (dir: boolean | null) =>
    dir == null
      ? setAppDrawerOpen((prevValue) => !prevValue)
      : setAppDrawerOpen(dir);

  // Set up and destroy a listener for orientation change
  useLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    console.debug("ratioOver3to2", ratioOver3to2);
    console.debug("orientation", orientation);
  }, [ratioOver3to2]);

  return (
    <>
      <TopAppBar toggleAppDrawer={toggleAppDrawer} />
      {orientation === "vertical" ? (
        <AppDrawer
          appDrawerOpen={appDrawerOpen}
          toggleAppDrawer={toggleAppDrawer}
        />
      ) : (
        <AppDrawer
          appDrawerOpen={appDrawerOpen}
          toggleAppDrawer={toggleAppDrawer}
        />
      )}
    </>
  );
}
