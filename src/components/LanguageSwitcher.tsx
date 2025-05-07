
import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { GlobeIcon, Loader2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useNavigate } from 'react-router-dom';

const LanguageSwitcher = () => {
  const {
    language,
    isLoading
  } = useLanguage();
  
  const navigate = useNavigate();
  
  const languages: {
    code: Language;
    name: string;
    flag: string;
  }[] = [
    {
      code: 'en',
      name: 'English',
      flag: '🇬🇧'
    }, 
    {
      code: 'sw',
      name: 'Kiswahili',
      flag: '🇹🇿'
    }, 
    {
      code: 'fr',
      name: 'Français',
      flag: '🇫🇷'
    }
  ];
  
  const handleLanguageChange = (langCode: Language) => {
    navigate(`/${langCode}`);
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full" 
          aria-label="Change Language"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <GlobeIcon className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(lang => (
          <DropdownMenuItem 
            key={lang.code} 
            onClick={() => handleLanguageChange(lang.code)} 
            className={language === lang.code ? "bg-accent font-medium" : ""}
          >
            <span className="mr-2">{lang.flag}</span> {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
