import IESHeader from '@/components/IESHeader'
import IESFooter from '@/components/IESFooter'
import RevealObserver from '@/components/RevealObserver'
import HeroAccueil from '@/components/sections/HeroAccueil'
import MarqueeTrilingual from '@/components/sections/MarqueeTrilingual'
import IdentiteValeurs from '@/components/sections/IdentiteValeurs'
import CyclesScolaires from '@/components/sections/CyclesScolaires'
import ApprochePedagogique from '@/components/sections/ApprochePedagogique'
import TrilingualismeFort from '@/components/sections/TrilingualismeFort'
import ActivitesParascolaires from '@/components/sections/ActivitesParascolaires'
import SuiviParents from '@/components/sections/SuiviParents'
import GalerieLocaux from '@/components/sections/GalerieLocaux'
import EvenementsAgenda from '@/components/sections/EvenementsAgenda'
import ContactInscriptions from '@/components/sections/ContactInscriptions'

export default function Page() {
  return (
    <>
      <RevealObserver />
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
