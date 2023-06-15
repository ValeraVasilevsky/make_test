import { SECTION } from "@/constants/Sections";
import { Grid } from "@/sections/Grid";
import { PartingWord } from "@/sections/PartingWord";
import { Typography } from "@/sections/Typography";
import { Ui } from "@/sections/UI";
import { Dialog } from "@components/Dialog";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Menu } from "@components/Menu";
import { Sidebar } from "@components/Sidebar";
import { useCallback, useState } from "react";
import "./App.scss";

function App() {
  const [currentSectionId, setCurrentSectionId] = useState("");
  const getCurrentSectionId = useCallback(
    () => currentSectionId,
    [currentSectionId]
  );
  const [isVisibleDialog, setIsVisibleDialog] = useState(false);

  const navigateTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      setCurrentSectionId(sectionId);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleIntersect = (sectionId: string) => {
    setCurrentSectionId(sectionId);
  };

  return (
    <div className="app">
      <div className="app__header">
        <Header openDialog={() => setIsVisibleDialog(true)} />
      </div>
      <div className="app__sidebar">
        <Sidebar
          currentLinkId={getCurrentSectionId()}
          navigateTo={navigateTo}
        />
      </div>
      <div className="app__content">
        <PartingWord id={SECTION.PARTING_WORD} intersect={handleIntersect} />
        <Grid id={SECTION.GRID} intersect={handleIntersect} />
        <Typography id={SECTION.TYPOGRAPHY} intersect={handleIntersect} />
        <Ui id={SECTION.UI} intersect={handleIntersect} />
      </div>
      <div className="app__footer">
        <Footer />
      </div>

      <Dialog
        isVisible={isVisibleDialog}
        close={() => setIsVisibleDialog(false)}
      >
        <Menu />
      </Dialog>
    </div>
  );
}

export default App;
