import React from 'react';
import { ButtonLayout, LinkLayout } from './styles';

export const Link = ({ children = null, ...props }) => (
  <LinkLayout {...props}>{children}</LinkLayout>
);

export const Button = ({ children = null, ...props }) => (
  <ButtonLayout {...props}>{children}</ButtonLayout>
);
