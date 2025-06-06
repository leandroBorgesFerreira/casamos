
import React from 'react';
import { Bed, Hotel, MapPin } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from 'react-i18next';

const Accommodation = () => {
  const { t } = useTranslation();

  return (
    <section id="accommodation" className="wedding-section bg-wedding-cream">
      <div className="wedding-container">
        <h2 className="fancy-heading text-4xl md:text-5xl mb-10">Accommodation</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md border border-wedding-sage/20">
            <div className="flex items-start gap-4 mb-6">
              <Hotel className="text-wedding-gold shrink-0 mt-1" size={24} />
              <p className="text-lg text-wedding-charcoal/80">
                {t('reserve','We have reserved Chateau de Vallery for three days and two nights: Sunday October 5th & Monday 6th October and Tuesday 7th.')}
                
              </p>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <Bed className="text-wedding-gold shrink-0 mt-1" size={24} />
              <p className="text-lg text-wedding-charcoal/80">
                {t('explain_rooms','Since all of the wedding events will be held at the chateau, we\'ll be reserving rooms for you.')}                
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="text-wedding-gold shrink-0 mt-1" size={24} />
              <p className="text-lg text-wedding-charcoal/80">
                {t('explain_hotels','For those who like to stay more time, we will organize local Bed & Breakfasts and hotel options for you. Most are walking distance or a very short drive! If you are eager to book now, please refer to the recommendations below and let us know what your plan is.')}
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-serif text-center mb-8">{t('local_accommodations', 'Local Accommodations')}</h3>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="bg-white mb-4 rounded-lg border border-wedding-sage/20 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xl font-serif">{t('bandb_walk_section', 'Bed & Breakfasts within walking distance<')}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-serif text-wedding-charcoal font-medium mb-2">Margottiere</h4>
                      <p className="text-wedding-charcoal/70 italic mb-2">{t('margottiere_section1', '10 minute walk from Chateau de Vallery; 300 meters or 0.2 miles')}</p>
                      <ul className="list-disc pl-5 mb-2 text-wedding-charcoal/80">
                        <li>{t('margottiere_rooms1', '4 double rooms, including breakfast')}</li>
                        <li>{t('margottiere_rooms2', '2 triple rooms, including breakfast')}</li>
                      </ul>
                      <p className="text-wedding-charcoal/80"><strong>Contact:</strong> La Margottière, 89150 VALLERY (France) +33 3 86 97 57 97</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-serif text-wedding-charcoal font-medium mb-2">Colette et Didier</h4>
                      <p className="text-wedding-charcoal/70 italic mb-2">{t('collete_subtitle', '(5 minute walk from Chateau de Vallery – same owner as Margottiere; 150 meters or 0.1 miles)')}</p>
                      <ul className="list-disc pl-5 mb-2 text-wedding-charcoal/80">
                        <li>{t('collete_rooms1', '5 double rooms, including breakfast')}</li>
                      </ul>
                      <p className="text-wedding-charcoal/80"><strong>Contact:</strong> Colette: 18 Grande Rue, Vallery, 89150 +33 3 86 97 57 97</p>
                      <p className="text-wedding-charcoal/80">{t('collete_info', 'Please go to Margottiere to collect your keys')}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-serif text-wedding-charcoal font-medium mb-2">Chez Krystyna</h4>
                      <ul className="list-disc pl-5 mb-2 text-wedding-charcoal/80">
                        <li>{t('chez_rooms1', '5 double rooms')}</li>
                        <li>{t('chez_rooms2', '1 double twin bed room')}</li>
                      </ul>
                      <p className="text-wedding-charcoal/80"><strong>Contact:</strong> 1 place du Chateau, Vallery, 89150</p>
                      <p className="text-wedding-charcoal/80">Tel: +33 3 86 97 76 44</p>
                      <p className="text-wedding-charcoal/80">Mobile: +33 6 80 26 75 55</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-serif text-wedding-charcoal font-medium mb-2">Pequelette</h4>
                      <ul className="list-disc pl-5 mb-2 text-wedding-charcoal/80">
                        <li>{t('pequelette_rooms1', '1 double room, including breakfast')}</li>
                        <li>{t('pequelette_rooms2', '1 double twin bed room, including breakfast')}</li>
                      </ul>
                      <p className="text-wedding-charcoal/80"><strong>Contact:</strong> 1 place des Conde, Vallery</p>
                      <p className="text-wedding-charcoal/80">roseline.chabolle@orange.fr</p>
                      <p className="text-wedding-charcoal/80">Tel: +33 386975814</p>
                      <p className="text-wedding-charcoal/80">Mobile: +33 613010005</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-serif text-wedding-charcoal font-medium mb-2">Chez Marie-Reine</h4>
                      <ul className="list-disc pl-5 mb-2 text-wedding-charcoal/80">
                        <li>{t('chez_marie_rooms1', '4 double rooms')}</li>
                        <li>{t('extra_breakfast', 'Breakfast extra')}</li>                        
                      </ul>
                      <p className="text-wedding-charcoal/80"><strong>Contact:</strong> Marie-Reine 26 rue Pasteur, Vallery, 89150</p>
                      <p className="text-wedding-charcoal/80">+33 386975674</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-lg border border-wedding-sage/20 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xl font-serif">{t('bandb_5_min_drive', 'Bed & Breakfasts within a 5 minute drive')}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-serif text-wedding-charcoal font-medium mb-2">La Renauderie</h4>
                      <p className="text-wedding-charcoal/70 italic mb-2">{t('renauderie_explain', '(5 minute drive from Chateau; 3k or 2 miles)')}</p>
                      <ul className="list-disc pl-5 mb-2 text-wedding-charcoal/80">
                        <li>{t('renauderie_rooms', '3 double rooms, including breakfast')}</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-serif text-wedding-charcoal font-medium mb-2">Clos Melusine</h4>
                      <p className="text-wedding-charcoal/70 italic mb-2">{t('melusine_explain', '(5 minute drive from chateau; 4k or 2.5 miles)')}</p>
                      <ul className="list-disc pl-5 mb-2 text-wedding-charcoal/80">
                      <li>{t('melusine_rooms', '4 double or single rooms, including breakfast')}</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-8 text-center">
              <p className="text-wedding-charcoal/70 italic">
                Please let us know your accommodation plans after booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
