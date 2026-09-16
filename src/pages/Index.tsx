import IESHeader from "../components/IESHeader";
import IESFooter from "../components/IESFooter";
import HeroAccueil from "../components/sections/HeroAccueil";
import MarqueeTrilingual from "../components/sections/MarqueeTrilingual";
import IdentiteValeurs from "../components/sections/IdentiteValeurs";
import CyclesScolaires from "../components/sections/CyclesScolaires";
import ApprochePedagogique from "../components/sections/ApprochePedagogique";
import TrilingualismeFort from "../components/sections/TrilingualismeFort";
import ActivitesParascolaires from "../components/sections/ActivitesParascolaires";
import SuiviParents from "../components/sections/SuiviParents";
import EvenementsAgenda from "../components/sections/EvenementsAgenda";
import ContactInscriptions from "../components/sections/ContactInscriptions";
import GalerieLocaux from "../components/sections/GalerieLocaux";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <IESHeader />
      <main>
        <HeroAccueil />
        <MarqueeTrilingual />
        <IdentiteValeurs />
        <CyclesScolaires />
        <ApprochePedagogique />
        <TrilingualismeFort />
        <ActivitesParascolaires />
        <SuiviParents />
        <GalerieLocaux />
        <EvenementsAgenda />
        <ContactInscriptions />
      </main>
      <IESFooter />
    </div>
  );
}