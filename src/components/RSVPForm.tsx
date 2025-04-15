
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from "react-i18next";

const RSVPForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "yes",
    guests: "0",
    dietaryRestrictions: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, attendance: value }));
  };

  const [state, handleSubmit] = useForm("mzzewdby");
  
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   // In a real application, you would send this data to a server
  //   console.log("Form submitted:", formData);
    
  //   // Show success message
  //   toast({
  //     title: "RSVP Received!",
  //     description: "Thank you for your response. We look forward to celebrating with you!",
  //     duration: 5000,
  //   });
    
  //   // Reset form
  //   setFormData({
  //     name: "",
  //     email: "",
  //     attendance: "yes",
  //     guests: "0",
  //     dietaryRestrictions: "",
  //     message: ""
  //   });
  // };

  if (state.succeeded) {
    return <div className="h-96 flex items-center justify-center">
      <p className="text-2xl">Thanks for your answer!</p>
    </div>    
  }
  
  return (
    <section id="rsvp">
      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-xl mx-auto">
        <div className="space-y-6">
          <div className="space-y-4">
            <Label htmlFor="name">{t('your_name', 'Your Name')}</Label>
            <Input
              id="name"
              name="name"
              placeholder={t('enter_full_name', "Enter your full name")}
              value={formData.name}
              onChange={handleChange}
              required
              className="border-wedding-sage/60 focus:border-wedding-sage focus:ring-wedding-sage"
            />
          </div>
          
          <div className="space-y-4">
            <Label htmlFor="email">{t('email_address', 'Email Address')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('fill_email', "Enter your email")}
              value={formData.email}
              onChange={handleChange}
              required
              className="border-wedding-sage/60 focus:border-wedding-sage focus:ring-wedding-sage"
            />
          </div>
          
          <div className="space-y-4">
            <Label>{t('confirmation', "Will you be attending?")}</Label>
            <RadioGroup value={formData.attendance} onValueChange={handleRadioChange} className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="attending-yes" />
                <Label htmlFor="attending-yes" className="font-normal">{t('yes_confirmation', "Yes, I'll be there")}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="attending-no" />
                <Label htmlFor="attending-no" className="font-normal">{t('no_confirmation', "Unfortunately, I can't make it")}</Label>
              </div>
            </RadioGroup>
          </div>
          
          {formData.attendance === "yes" && (
            <>
              <div className="space-y-4">
                <Label htmlFor="guests">{t('number_guests', "Number of Guests (including yourself)")}</Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={handleChange}
                  className="border-wedding-sage/60 focus:border-wedding-sage focus:ring-wedding-sage"
                />
              </div>
              
              <div className="space-y-4">
                <Label htmlFor="dietaryRestrictions">{t('food_restriction', "Dietary Restrictions")}</Label>
                <Textarea
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  placeholder={t('food_restriction_explanation', "Please let us know of any dietary restrictions or allergies")}
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  className="border-wedding-sage/60 focus:border-wedding-sage focus:ring-wedding-sage"
                />
              </div>
            </>
          )}
          
          <div className="space-y-4">
            <Label htmlFor="message">{t('message_to_couple', "Message to the Couple (Optional)")}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t('message_to_couple_explanation', "Share your well wishes or any message for us")}
              value={formData.message}
              onChange={handleChange}
              className="border-wedding-sage/60 focus:border-wedding-sage focus:ring-wedding-sage"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-wedding-sage hover:bg-wedding-sage/80 text-wedding-charcoal"
            disabled={state.submitting}
          >
            {t('send_form', "Submit RSVP")}
            
          </Button>
        </div>
      </form>
    </section>
  );
};

export default RSVPForm;
