import { Github, Linkedin, Mail } from 'lucide-react';

export const EMAIL = 'azimetkeremersoy@gmail.com';

interface Profile {
  title: string;
  url: string;
  icon?: React.ReactElement;
}

export const PROFILES = {
  github: { title: 'GitHub', url: 'https://github.com/keremeersoy', icon: <Github size={16} /> },
  linkedin: { title: 'LinkedIn', url: 'https://www.linkedin.com/in/azimetkeremersoy', icon: <Linkedin size={16} /> },
  medium: { title: 'Medium', url: 'https://medium.com/@azimetkeremersoy' },
  mail: { title: 'Mail', url: `mailto:${EMAIL}`, icon: <Mail size={16} /> },
} satisfies Record<string, Profile>;
