import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../common/Button';

export const GitHubButton = ({ url, label = "GitHub Repository" }) => {
  if (!url) return null;

  return (
    <Button
      variant="outline"
      size="sm"
      icon={FaGithub}
      onClick={() => window.open(url, '_blank')}
    >
      {label}
    </Button>
  );
};

export default GitHubButton;
