import IESHeader from '../src/components/IESHeader'
import IESFooter from '../src/components/IESFooter'
import HeroAccueil from '../src/components/sections/HeroAccueil'
import MarqueeTrilingual from '../src/components/sections/MarqueeTrilingual'
import IdentiteValeurs from '../src/components/sections/IdentiteValeurs'
import CyclesScolaires from '../src/components/sections/CyclesScolaires'
import ApprochePedagogique from '../src/components/sections/ApprochePedagogique'
import TrilingualismeFort from '../src/components/sections/TrilingualismeFort'
import ActivitesParascolaires from '../src/components/sections/ActivitesParascolaires'
import SuiviParents from '../src/components/sections/SuiviParents'
import GalerieLocaux from '../src/components/sections/GalerieLocaux'
import EvenementsAgenda from '../src/components/sections/EvenementsAgenda'
import ContactInscriptions from '../src/components/sections/ContactInscriptions'

export default function Page() {
  return (
    <>
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
    </>
  )
}
