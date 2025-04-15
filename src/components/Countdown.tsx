
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Countdown = () => {
  const { t } = useTranslation();

  // Wedding date: October 6, 2025
  const weddingDate = new Date('October 6, 2025 16:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const counterItems = [
    { label: t('days', 'Days'), value: timeLeft.days },
    { label: t('hours', 'Hours'), value: timeLeft.hours },
    { label: t('minutes', 'Minutes'), value: timeLeft.minutes },
    { label: t('second', 'Seconds'), value: timeLeft.seconds }
  ];
  
  return (
    <section className="wedding-section bg-wedding-sage/20 py-16">
      <div className="wedding-container">
        <h2 className="fancy-heading text-4xl mb-12">{t('count_down', 'Countdown to Our Big Day')}</h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {counterItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-4 md:p-6 rounded-lg shadow-md w-[140px] animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="text-3xl md:text-5xl font-serif text-wedding-charcoal mb-2">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-wedding-charcoal/70 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
